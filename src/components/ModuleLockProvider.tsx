'use client';

import React, { createContext, useContext, useCallback, useEffect, useSyncExternalStore } from 'react';

interface ModuleAccessSnapshot {
  isReady: boolean;
  unlockedUntilWeek: number;
  unlockedIds: number[];
  error: string | null;
}

interface ModuleAccessSettings {
  unlockedUntilWeek: number;
  unlockedModuleIds: number[];
}

const initialSnapshot: ModuleAccessSnapshot = {
  isReady: false,
  unlockedUntilWeek: 0,
  unlockedIds: [],
  error: null,
};
let snapshot = initialSnapshot;
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return snapshot;
}

function updateSnapshot(next: ModuleAccessSnapshot) {
  snapshot = next;
  listeners.forEach((listener) => listener());
}

interface ModuleLockContextValue extends ModuleAccessSnapshot {
  isModuleLocked: (moduleId: number, minggu: number) => boolean;
  unlock: (adminPasskey: string, moduleId: number) => Promise<void>;
  saveSettings: (adminPasskey: string, settings: ModuleAccessSettings) => Promise<void>;
  refreshAccess: () => Promise<void>;
}

const ModuleLockContext = createContext<ModuleLockContextValue | null>(null);

export function ModuleLockProvider({ children }: { children: React.ReactNode }) {
  const access = useSyncExternalStore(
    subscribe,
    getSnapshot,
    () => initialSnapshot,
  );

  const refreshAccess = useCallback(async () => {
    try {
      const response = await fetch('/api/module-access', { cache: 'no-store' });
      const result: unknown = await response.json();
      if (!response.ok) {
        const message =
          typeof result === 'object' && result !== null && 'error' in result
            ? String(result.error)
            : 'Tidak dapat memuat status akses modul.';
        throw new Error(message);
      }

      if (
        typeof result !== 'object' ||
        result === null ||
        !('unlockedUntilWeek' in result) ||
        !('unlockedModuleIds' in result) ||
        typeof result.unlockedUntilWeek !== 'number' ||
        !Array.isArray(result.unlockedModuleIds) ||
        !result.unlockedModuleIds.every((id) => typeof id === 'number')
      ) {
        throw new Error('Format status akses dari server tidak valid.');
      }

      updateSnapshot({
        isReady: true,
        unlockedUntilWeek: result.unlockedUntilWeek,
        unlockedIds: result.unlockedModuleIds,
        error: null,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Terjadi kesalahan saat memuat akses modul.';
      updateSnapshot({ ...snapshot, isReady: true, error: message });
    }
  }, []);

  useEffect(() => {
    void refreshAccess();
    const intervalId = window.setInterval(() => void refreshAccess(), 15000);
    window.addEventListener('focus', refreshAccess);
    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener('focus', refreshAccess);
    };
  }, [refreshAccess]);

  const saveSettings = useCallback(
    async (adminPasskey: string, settings: ModuleAccessSettings) => {
      const response = await fetch('/api/module-access', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adminPasskey, ...settings }),
      });
      const result: unknown = await response.json();
      if (!response.ok) {
        const message =
          typeof result === 'object' && result !== null && 'error' in result
            ? String(result.error)
            : 'Gagal menyimpan status akses modul.';
        throw new Error(message);
      }

      await refreshAccess();
      if (snapshot.error) {
        throw new Error(snapshot.error);
      }
    },
    [refreshAccess],
  );

  const unlock = useCallback(
    async (adminPasskey: string, moduleId: number) => {
      const unlockedModuleIds = snapshot.unlockedIds.includes(moduleId)
        ? snapshot.unlockedIds
        : [...snapshot.unlockedIds, moduleId];
      await saveSettings(adminPasskey, {
        unlockedUntilWeek: snapshot.unlockedUntilWeek,
        unlockedModuleIds,
      });
    },
    [saveSettings],
  );

  const isModuleLocked = useCallback(
    (moduleId: number, minggu: number): boolean => {
      if (minggu <= access.unlockedUntilWeek) return false;
      return !access.unlockedIds.includes(moduleId);
    },
    [access.unlockedIds, access.unlockedUntilWeek],
  );

  return (
    <ModuleLockContext.Provider
      value={{ ...access, isModuleLocked, unlock, saveSettings, refreshAccess }}
    >
      {children}
    </ModuleLockContext.Provider>
  );
}

export function useModuleLock() {
  const ctx = useContext(ModuleLockContext);
  if (!ctx) throw new Error('useModuleLock must be used inside ModuleLockProvider');
  return ctx;
}
