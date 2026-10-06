'use client';

import React from 'react';
import { useModuleLock } from './ModuleLockProvider';
import { LockedModulePage } from './ModuleLock';

interface ModuleAccessGateProps {
  moduleId: number;
  minggu: number;
  moduleTitle: string;
  children: React.ReactNode;
}

export default function ModuleAccessGate({
  moduleId,
  minggu,
  moduleTitle,
  children,
}: ModuleAccessGateProps) {
  const { isModuleLocked, isReady, error, refreshAccess } = useModuleLock();

  if (!isReady) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-sm text-slate-500" aria-busy="true">
        Memuat status akses modul...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 px-4 text-center">
        <p role="alert" className="max-w-lg text-sm font-medium text-amber-800">
          Status akses modul gagal dimuat: {error}
        </p>
        <button
          type="button"
          onClick={() => void refreshAccess()}
          className="rounded-lg bg-[#1F70C1] px-4 py-2 text-xs font-bold text-white hover:bg-[#165696]"
        >
          Coba Lagi
        </button>
      </div>
    );
  }

  if (isModuleLocked(moduleId, minggu)) {
    return <LockedModulePage moduleTitle={moduleTitle} moduleId={moduleId} />;
  }

  return <>{children}</>;
}
