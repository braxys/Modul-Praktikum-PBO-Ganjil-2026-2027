'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ModuleMeta } from '@/lib/modules';
import { useModuleLock } from './ModuleLockProvider';
import { LockedModuleOverlay } from './ModuleLock';

interface ModuleGridProps {
  modules: ModuleMeta[];
}

export default function ModuleGrid({ modules }: ModuleGridProps) {
  const { isModuleLocked, isReady, error } = useModuleLock();

  return (
    <div>
      {error && (
        <p role="alert" className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-xs font-medium text-amber-800">
          Status akses global tidak tersedia: {error}
        </p>
      )}
      {!isReady && (
        <p role="status" className="mb-4 text-xs text-slate-500">
          Memuat status akses modul...
        </p>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {modules.map((mod) => {
          const locked = !isReady || isModuleLocked(mod.id, mod.minggu);

          return (
            <article
              key={mod.id}
              className={`group relative rounded-xl border bg-white p-5 flex flex-col justify-between transition-all ${
                locked
                  ? 'border-[#CBD7E3] opacity-90 overflow-hidden'
                  : 'border-[#E1EAF2] hover:border-[#1F70C1] hover:shadow-md'
              }`}
            >
              <div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold text-xs shadow-2xs ${
                      locked ? 'bg-slate-400 text-white' : 'bg-[#133863] text-white'
                    }`}
                  >
                    {mod.id}
                  </span>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Minggu {mod.minggu} &bull; {mod.durasi}
                    </span>
                    <div className="mt-0.5">
                      <span className="rounded bg-[#F0F7FD] border border-[#D5E5F5] px-2 py-0.5 text-[10px] font-bold text-[#1F70C1]">
                        {mod.kategori}
                      </span>
                      </div>
                  </div>
                </div>

                {!locked && (
                  <Link
                    href={`/pertemuan/${mod.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1F70C1] hover:text-[#133863] group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Buka</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>

              <h3
                className={`mt-3.5 text-base font-bold leading-snug transition-colors ${
                  locked ? 'text-slate-400' : 'text-[#0D223A] group-hover:text-[#1F70C1]'
                }`}
              >
                {locked ? (
                  <span>Pertemuan {mod.id}: {mod.title}</span>
                ) : (
                  <Link href={`/pertemuan/${mod.id}`}>
                    Pertemuan {mod.id}: {mod.title}
                  </Link>
                )}
              </h3>

              <p className={`mt-2 text-xs leading-relaxed ${locked ? 'text-slate-300' : 'text-slate-600'}`}>
                {mod.deskripsi}
              </p>
            </div>

            {/* Learning Outcomes Preview */}
            {mod.tujuan.length > 0 && (
              <div className="mt-4 pt-3 border-t border-[#F0F7FD]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Tujuan Pembelajaran:
                </div>
                <ul className="space-y-1 text-xs text-slate-600">
                  {mod.tujuan.slice(0, 3).map((t, idx) => (
                    <li key={idx} className={`flex items-start gap-1.5 ${locked ? 'opacity-30' : ''}`}>
                      <span className="text-[#1F70C1] font-bold shrink-0 mt-0.5">&bull;</span>
                      <span className="line-clamp-1">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Lock overlay — hanya muncul saat terkunci */}
            {locked && (
              <LockedModuleOverlay
                moduleId={mod.id}
                moduleName={`Pertemuan ${mod.id}: ${mod.title}`}
              />
            )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
