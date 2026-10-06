'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpen, FileText, Home, X, Lock } from 'lucide-react';
import type { ModuleMeta, ModuleHeading } from '@/lib/modules';
import { useModuleLock } from './ModuleLockProvider';
import { PasskeyModal } from './ModuleLock';

interface SidebarProps {
  modules: ModuleMeta[];
  currentHeadings?: ModuleHeading[];
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export default function Sidebar({
  modules,
  currentHeadings = [],
  isMobileOpen = false,
  onCloseMobile,
}: SidebarProps) {
  const pathname = usePathname();
  const { isModuleLocked, isReady } = useModuleLock();
  // Track modul mana yang sedang menunggu unlock (per-modul)
  const [pendingModule, setPendingModule] = useState<{ id: number; title: string } | null>(null);

  // Find active module
  const currentSlugMatch = pathname.match(/\/pertemuan\/(\d+)/);
  const activeSlug = currentSlugMatch ? currentSlugMatch[1] : null;

  const sidebarContent = (
    <div className="flex flex-col h-full bg-white border-r border-[#E1EAF2]">
      {/* Top Header on Mobile */}
      <div className="flex items-center justify-between p-4 border-b border-[#E1EAF2] lg:hidden">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#1F70C1]" />
          <span className="font-bold text-sm text-[#0D223A]">Daftar Modul Praktikum</span>
        </div>
        <button
          onClick={onCloseMobile}
          className="p-1.5 rounded-md text-slate-500 hover:bg-slate-100"
          aria-label="Tutup"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Navigation List */}
      <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6">
        {/* Quick Links */}
        <div>
          <div className="px-3 mb-2 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            Panduan Umum
          </div>
          <div className="space-y-1">
            <Link
              href="/"
              onClick={onCloseMobile}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${pathname === '/'
                  ? 'bg-[#F0F7FD] text-[#1F70C1] font-bold border border-[#D5E5F5]'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
              <Home className="w-4 h-4 text-slate-400" />
              <span>Beranda Praktikum</span>
            </Link>
            <Link
              href="/tentang"
              onClick={onCloseMobile}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${pathname === '/tentang'
                  ? 'bg-[#F0F7FD] text-[#1F70C1] font-bold border border-[#D5E5F5]'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>Silabus & Aturan Praktikum</span>
            </Link>
          </div>
        </div>

        {/* Modules Section */}
        <div>
          <div className="flex items-center justify-between px-3 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Modul Pembelajaran
            </span>
            <span className="text-[10px] font-bold text-[#1F70C1] bg-[#F0F7FD] px-1.5 py-0.5 rounded">
              {modules.length} Pertemuan
            </span>
          </div>

          <div className="space-y-1">
            {modules.map((mod) => {
              const isActive = activeSlug === String(mod.id);
              const locked = isReady && isModuleLocked(mod.id, mod.minggu);

              const itemContent = (
                <>
                  <span
                    className={`inline-flex items-center justify-center w-5 h-5 rounded text-[11px] font-bold shrink-0 mt-0.5 ${isActive
                        ? 'bg-[#4D9EE8] text-white'
                        : locked
                          ? 'bg-slate-200 text-slate-400'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-[#E1EAF2] group-hover:text-[#1F70C1]'
                      }`}
                  >
                    {mod.id}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] uppercase font-bold tracking-wider ${isActive ? 'text-blue-200' : locked ? 'text-slate-400' : 'text-slate-600'}`}>
                        Minggu {mod.minggu}
                      </span>
                      {locked && <Lock className="w-3 h-3 text-slate-400 shrink-0" />}
                    </div>
                    <p className={`line-clamp-2 leading-snug mt-0.5 ${isActive ? 'text-white' : locked ? 'text-slate-400' : 'text-slate-800'}`}>
                      {mod.title}
                    </p>
                  </div>
                </>
              );

              return (
                <div key={mod.id} className="space-y-1">
                  {locked ? (
                    <button
                      onClick={() => setPendingModule({ id: mod.id, title: `Pertemuan ${mod.id}: ${mod.title}` })}
                      className="group w-full relative flex items-start gap-2.5 px-3 py-2.5 rounded-lg text-xs cursor-pointer select-none overflow-hidden border border-slate-100 bg-slate-50 hover:border-[#A0BBDA] transition-all"
                      title="Klik untuk memasukkan passkey"
                    >
                      {/* Konten item (blur sedikit) */}
                      <div className="flex items-start gap-2.5 w-full opacity-60">
                        {itemContent}
                      </div>
                      {/* Overlay kunci saat hover */}
                      <div className="absolute inset-0 flex items-center justify-center gap-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: 'linear-gradient(135deg, rgba(13,34,58,0.88) 0%, rgba(31,112,193,0.82) 100%)',
                        }}
                      >
                        <Lock className="w-3.5 h-3.5 text-white" />
                        <span className="text-white font-bold text-[11px]">Masukkan Passkey</span>
                      </div>
                    </button>
                  ) : (
                    <Link
                      href={`/pertemuan/${mod.id}`}
                      onClick={onCloseMobile}
                      className={`group flex items-start gap-2.5 px-3 py-2.5 rounded-lg text-xs transition-all ${isActive
                          ? 'bg-[#133863] text-white font-semibold shadow-xs ring-1 ring-[#1F70C1]'
                          : 'text-slate-700 hover:bg-[#F0F7FD] hover:text-[#133863]'
                        }`}
                    >
                      {itemContent}
                    </Link>
                  )}

                  {/* If active, show sub-headings */}
                  {isActive && currentHeadings.length > 0 && (
                    <div className="ml-5 pl-3 border-l-2 border-[#1F70C1] space-y-1 py-1 my-1">
                      {currentHeadings
                        .filter((h) => h.level === 2)
                        .slice(0, 10)
                        .map((heading) => (
                          <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            onClick={onCloseMobile}
                            className="block text-[11px] py-1 text-slate-600 hover:text-[#1F70C1] truncate transition-colors"
                          >
                            {heading.text}
                          </a>
                        ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="p-4 border-t border-[#E1EAF2] bg-[#F4F8FC]">
        <div className="text-[11px] text-slate-500 leading-relaxed">
          <p className="font-bold text-[#133863]">Teknik Informatika ITERA</p>
          <p>Lab Pemrograman & Rekayasa Perangkat Lunak</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-60 xl:w-64 shrink-0 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
        {sidebarContent}
      </aside>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs"
            onClick={onCloseMobile}
          />
          <div className="relative w-80 max-w-[85vw] h-full shadow-2xl z-10">
            {sidebarContent}
          </div>
        </div>
      )}

      {/* Passkey Modal — per modul */}
      {pendingModule && (
        <PasskeyModal
          moduleId={pendingModule.id}
          moduleTitle={pendingModule.title}
          onClose={() => setPendingModule(null)}
        />
      )}
    </>
  );
}
