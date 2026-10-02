import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#E1EAF2] bg-white text-slate-600 no-print mt-auto">
      <div className="w-full px-6 sm:px-8 lg:px-12 2xl:px-20 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Col 1: Campus Identity */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-white border border-[#E1EAF2] p-1 shadow-2xs">
                <Image
                  src="/logo-if-itera.png"
                  alt="Logo Teknik Informatika ITERA"
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <h3 className="text-sm font-extrabold text-[#0D223A] leading-tight">
                  Teknik Informatika &bull; Institut Teknologi Sumatera (ITERA)
                </h3>
                <p className="text-xs text-[#1F70C1] font-semibold mt-0.5">
                  Laboratorium Pemrograman & Rekayasa Perangkat Lunak
                </p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 max-w-xl">
              Situs modul dan dokumentasi resmi praktikum Pemrograman Berorientasi Objek (PBO)
              Semester Ganjil 2026/2027. Dirancang untuk menunjang pembelajaran mandiri dan terstruktur
              bagi mahasiswa Teknik Informatika ITERA.
            </p>
            <div className="flex items-start gap-2 text-xs text-slate-500">
              <MapPin className="h-4 w-4 text-[#1F70C1] shrink-0 mt-0.5" />
              <span>
                Jl. Terusan Ryacudu, Way Hui, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung 35365
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Modul */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D223A]">
              Modul Praktikum
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#1F70C1] transition-colors">
                  Beranda Praktikum
                </Link>
              </li>
              <li>
                <Link href="/pertemuan/1" className="hover:text-[#1F70C1] transition-colors">
                  Pertemuan 1: Dasar Java & NetBeans
                </Link>
              </li>
              <li>
                <Link href="/pertemuan/2" className="hover:text-[#1F70C1] transition-colors">
                  Pertemuan 2: Konsep OOP
                </Link>
              </li>
              <li>
                <Link href="/pertemuan/4" className="hover:text-[#1F70C1] transition-colors">
                  Pertemuan 4: Inheritance
                </Link>
              </li>
              <li>
                <Link href="/pertemuan/8" className="hover:text-[#1F70C1] transition-colors">
                  Pertemuan 8: Error Handling & I/O
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Rules & Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0D223A]">
              Tautan Akademik
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/tentang" className="hover:text-[#1F70C1] transition-colors">
                  Silabus & Aturan Praktikum
                </Link>
              </li>
              <li>
                <Link href="/tentang#laporan" className="hover:text-[#1F70C1] transition-colors">
                  Format Laporan & Penilaian
                </Link>
              </li>
              <li>
                <a
                  href="https://www.oracle.com/java/technologies/downloads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#1F70C1] transition-colors"
                >
                  <span>Unduh JDK 21 LTS (Oracle)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://netbeans.apache.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#1F70C1] transition-colors"
                >
                  <span>Unduh Apache NetBeans</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://if.itera.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#1F70C1] transition-colors"
                >
                  <span>Website Teknik Informatika ITERA</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#E1EAF2] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; 2026 Teknik Informatika &bull; Institut Teknologi Sumatera (ITERA). Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Praktikum PBO 2026/2027 Ganjil</span>
            <span>&bull;</span>
            <span className="inline-flex items-center gap-1 text-[#1F70C1] font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              Kurikulum Informatika ITERA 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
