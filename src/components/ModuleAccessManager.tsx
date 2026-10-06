'use client';

import React, { useState } from 'react';
import { LockKeyhole, ShieldCheck, X } from 'lucide-react';
import type { ModuleMeta } from '@/lib/modules';
import { useModuleLock } from './ModuleLockProvider';

interface ModuleAccessManagerProps {
  modules: ModuleMeta[];
  onClose: () => void;
}

export default function ModuleAccessManager({
  modules,
  onClose,
}: ModuleAccessManagerProps) {
  const { unlockedUntilWeek, unlockedIds, saveSettings } = useModuleLock();
  const [moduleIds, setModuleIds] = useState(unlockedIds);
  const [adminPasskey, setAdminPasskey] = useState('');
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    setSaved(false);
    setIsSaving(true);
    try {
      await saveSettings(adminPasskey, {
        unlockedUntilWeek,
        unlockedModuleIds: moduleIds,
      });
      setAdminPasskey('');
      setSaved(true);
    } catch (saveError) {
      setError(
        saveError instanceof Error ? saveError.message : 'Gagal menyimpan pengaturan akses.',
      );
    } finally {
      setIsSaving(false);
    }
  }

  function toggleModule(moduleId: number) {
    setModuleIds((current) =>
      current.includes(moduleId)
        ? current.filter((id) => id !== moduleId)
        : [...current, moduleId],
    );
    setSaved(false);
  }

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Tutup pengelola akses"
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="module-access-title"
        className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-[#E1EAF2] bg-white shadow-2xl"
      >
        <header className="flex items-start justify-between gap-4 bg-gradient-to-r from-[#0D223A] to-[#133863] p-5 text-white">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/15 p-2.5">
              <LockKeyhole className="h-5 w-5 text-[#A6D2FA]" />
            </div>
            <div>
              <h2 id="module-access-title" className="text-sm font-extrabold">
                Pengelola Akses Modul
              </h2>
              <p className="mt-1 text-xs text-blue-200">
                Perubahan berlaku untuk semua pengunjung.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 hover:bg-white/20"
            aria-label="Tutup"
          >
            <X className="h-4 w-4" />
          </button>
        </header>

        <form onSubmit={handleSubmit} className="space-y-5 p-5">
          <fieldset>
            <legend className="mb-2 text-xs font-bold text-[#0D223A]">
              Buka/tutup modul tertentu
            </legend>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {modules.map((module) => (
                <label
                  key={module.id}
                  className="flex items-start gap-2 rounded-lg border border-[#E1EAF2] p-2.5 text-xs text-slate-700"
                >
                  <input
                    type="checkbox"
                    checked={moduleIds.includes(module.id)}
                    onChange={() => toggleModule(module.id)}
                    className="mt-0.5 accent-[#1F70C1]"
                  />
                  <span>
                    <span className="block font-bold text-[#133863]">
                      Pertemuan {module.id}
                    </span>
                    <span className="line-clamp-1">{module.title}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <label className="block">
            <span className="mb-1.5 block text-xs font-bold text-[#0D223A]">
              Passkey admin
            </span>
            <input
              type="password"
              value={adminPasskey}
              onChange={(event) => setAdminPasskey(event.target.value)}
              autoComplete="current-password"
              required
              className="w-full rounded-lg border border-[#CBD7E3] px-3 py-2.5 text-sm font-mono outline-none focus:border-[#1F70C1] focus:ring-2 focus:ring-[#D5E5F5]"
              placeholder="Masukkan passkey admin"
            />
          </label>

          {error && (
            <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs font-medium text-red-700">
              {error}
            </p>
          )}
          {saved && (
            <p role="status" className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              Status akses global berhasil diperbarui.
            </p>
          )}

          <button
            type="submit"
            disabled={!adminPasskey.trim() || isSaving}
            className="w-full rounded-lg bg-[#1F70C1] py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#165696] disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {isSaving ? 'Menyimpan...' : 'Simpan untuk Semua Pengunjung'}
          </button>
        </form>
      </section>
    </div>
  );
}
