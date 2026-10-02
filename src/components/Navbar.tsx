'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BookOpen, Search, Menu, X, FileText } from 'lucide-react';
import SearchModal from './SearchModal';

interface NavbarProps {
  onToggleMobileSidebar?: () => void;
}

export default function Navbar({ onToggleMobileSidebar }: NavbarProps) {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Global Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#E1EAF2] bg-white/95 backdrop-blur-md">
        <div className="w-full flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 2xl:px-12">
          {/* Left: Official Brand Logo & Identity */}
          <div className="flex items-center gap-3">
            {onToggleMobileSidebar && (
              <button
                type="button"
                onClick={onToggleMobileSidebar}
                className="inline-flex lg:hidden items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                aria-label="Buka Navigasi Modul"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}

            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-md p-0.5 bg-white border border-[#E1EAF2] shadow-2xs group-hover:border-[#1F70C1] transition-colors">
                <Image
                  src="/logo-if-itera.png"
                  alt="Logo Teknik Informatika ITERA"
                  fill
                  sizes="44px"
                  className="object-contain p-0.5"
                  priority
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wide text-[#1F70C1]">
                    Teknik Informatika ITERA
                  </span>
                  <span className="rounded bg-[#FEFBF3] border border-[#E8D9B5] px-1.5 py-0.2 text-[9px] font-bold text-[#8A6314]">
                    2026/2027 Ganjil
                  </span>
                </div>
                <span className="text-sm font-bold text-[#0D223A] leading-tight">
                  Praktikum Pemrograman Berorientasi Objek
                </span>
              </div>
            </Link>
          </div>

          {/* Center: Search Trigger Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex w-full items-center justify-between rounded-lg border border-[#E1EAF2] bg-[#F4F8FC] px-4 py-2 text-xs text-slate-600 hover:border-[#1F70C1] hover:bg-white transition-all shadow-2xs"
            >
              <span className="flex items-center gap-2">
                <Search className="h-4 w-4 text-[#1F70C1]" />
                <span>Cari modul, materi, sintaks Java, latihan...</span>
              </span>
              <kbd className="inline-flex items-center gap-0.5 rounded border border-[#CBD7E3] bg-white px-2 py-0.5 text-[10px] font-bold text-slate-500 font-mono">
                <span>⌘</span>K
              </kbd>
            </button>
          </div>

          {/* Right Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-md text-xs font-bold transition-colors ${
                pathname === '/'
                  ? 'text-[#1F70C1] bg-[#F0F7FD]'
                  : 'text-slate-600 hover:text-[#133863] hover:bg-slate-50'
              }`}
            >
              Beranda
            </Link>
            <Link
              href="/pertemuan/1"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-bold transition-colors ${
                pathname.startsWith('/pertemuan')
                  ? 'text-[#1F70C1] bg-[#F0F7FD]'
                  : 'text-slate-600 hover:text-[#133863] hover:bg-slate-50'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-[#1F70C1]" />
              <span>Daftar Modul</span>
            </Link>
            <Link
              href="/tentang"
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-bold transition-colors ${
                pathname === '/tentang'
                  ? 'text-[#1F70C1] bg-[#F0F7FD]'
                  : 'text-slate-600 hover:text-[#133863] hover:bg-slate-50'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-slate-500" />
              <span>Silabus & Aturan</span>
            </Link>

            <div className="h-4 w-px bg-slate-200 mx-2" />

            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 md:hidden"
              aria-label="Cari"
            >
              <Search className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile hamburger menu */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md"
              aria-label="Cari"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-4 space-y-1">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Beranda
            </Link>
            <Link
              href="/pertemuan/1"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Modul Praktikum (Pertemuan 1 - 8)
            </Link>
            <Link
              href="/tentang"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Silabus & Aturan Praktikum
            </Link>
          </div>
        )}
      </header>

      {/* Global Search Dialog Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
