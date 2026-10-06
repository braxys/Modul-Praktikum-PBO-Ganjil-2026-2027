'use client';

import React, { useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import { Lock, Eye, EyeOff, ShieldCheck, X } from 'lucide-react';
import { useModuleLock } from './ModuleLockProvider';

const subscribeToNothing = () => () => {};

// ─── Passkey Modal ────────────────────────────────────────────────────────────
// Modal ini hanya membuka SATU modul spesifik yang diklik.

interface PasskeyModalProps {
  moduleId: number;
  moduleTitle: string;
  onClose: () => void;
}

export function PasskeyModal({ moduleId, moduleTitle, onClose }: PasskeyModalProps) {
  const { unlock } = useModuleLock();
  const isMounted = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );
  const [passkey, setPasskey] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(false);
    setErrorMessage('');
    setIsSubmitting(true);
    try {
      await unlock(passkey, moduleId);
      setSuccess(true);
      setTimeout(() => onClose(), 700);
    } catch (submitError) {
      setError(true);
      setErrorMessage(
        submitError instanceof Error ? submitError.message : 'Gagal membuka modul.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white shadow-2xl border border-[#E1EAF2] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0D223A] to-[#133863] p-5 text-white">
          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 p-1 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/15 rounded-xl shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#A6D2FA]" />
            </div>
            <div className="min-w-0">
              <h2 className="text-sm font-extrabold leading-snug">Buka Modul untuk Semua</h2>
              <p className="text-[11px] text-blue-200 mt-0.5 truncate">
                {moduleTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          {success ? (
            <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3 text-sm font-semibold">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span>Berhasil! Modul dibuka untuk semua pengunjung.</span>
            </div>
          ) : (
            <>
              <div>
                <label className="block text-xs font-bold text-[#0D223A] mb-1.5">
                  Passkey admin
                </label>
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={passkey}
                    onChange={(e) => {
                      setPasskey(e.target.value);
                      setError(false);
                    }}
                    placeholder="Masukkan passkey admin..."
                    className={`w-full rounded-lg border px-3 py-2.5 pr-10 text-sm font-mono outline-none transition-all ${
                      error
                        ? 'border-red-400 bg-red-50 focus:ring-2 focus:ring-red-200'
                        : 'border-[#CBD7E3] focus:border-[#1F70C1] focus:ring-2 focus:ring-[#D5E5F5]'
                    }`}
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    tabIndex={-1}
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {error && (
                  <p className="mt-1.5 text-xs text-red-600 font-medium">
                    {errorMessage}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={!passkey.trim() || isSubmitting}
                className="w-full rounded-lg bg-[#1F70C1] hover:bg-[#165696] disabled:bg-slate-200 disabled:text-slate-400 text-white font-bold text-sm py-2.5 transition-all"
              >
                {isSubmitting ? 'Menyimpan...' : 'Buka untuk Semua Pengunjung'}
              </button>
            </>
          )}
        </form>
      </div>
    </div>,
    document.body,
  );
}

// ─── Locked Module Overlay (di dalam card) ───────────────────────────────────
// Overlay semi-transparan di atas card modul terkunci.
// Saat showModal=true, overlay disembunyikan agar modal tampak bersih.

interface LockedModuleOverlayProps {
  moduleId: number;
  moduleName: string;
}

export function LockedModuleOverlay({ moduleId, moduleName }: LockedModuleOverlayProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Overlay — disembunyikan saat modal terbuka agar tidak double-stack */}
      {!showModal && (
        <div
          className="absolute inset-0 z-10 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer select-none"
          style={{
            background:
              'linear-gradient(135deg, rgba(13,34,58,0.82) 0%, rgba(31,112,193,0.75) 100%)',
            backdropFilter: 'blur(2px)',
          }}
          onClick={() => setShowModal(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && setShowModal(true)}
          aria-label={`Buka kunci ${moduleName}`}
        >
          <div className="p-3 rounded-full bg-white/20 border border-white/30">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <div className="text-center px-4">
            <p className="text-white font-bold text-sm">Modul Terkunci</p>
            <p className="text-blue-200 text-xs mt-1">Klik untuk memasukkan passkey</p>
          </div>
        </div>
      )}

      {/* Passkey Modal */}
      {showModal && (
        <PasskeyModal
          moduleId={moduleId}
          moduleTitle={moduleName}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

// ─── Locked Module Page (halaman penuh jika akses URL langsung) ───────────────

interface LockedModulePageProps {
  moduleTitle: string;
  moduleId: number;
}

export function LockedModulePage({ moduleTitle, moduleId }: LockedModulePageProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="p-5 rounded-2xl bg-[#F0F7FD] border border-[#CBD7E3] inline-flex mb-6">
          <Lock className="w-12 h-12 text-[#1F70C1]" />
        </div>
        <h2 className="text-2xl font-extrabold text-[#0D223A] mb-2">
          Modul {moduleId} Belum Tersedia
        </h2>
        <p className="text-slate-500 text-sm max-w-md mb-2">
          <span className="font-semibold text-[#133863]">{moduleTitle}</span> masih terkunci.
          Modul ini akan dibuka sesuai jadwal pertemuan praktikum.
        </p>
        <p className="text-slate-400 text-xs mb-6">
          Jika Anda memiliki passkey, gunakan tombol di bawah untuk membuka akses.
        </p>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-[#1F70C1] hover:bg-[#165696] text-white font-bold text-sm px-6 py-3 transition-all shadow-md"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Masukkan Passkey</span>
        </button>
      </div>

      {showModal && (
        <PasskeyModal
          moduleId={moduleId}
          moduleTitle={moduleTitle}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}
