import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllModules } from '@/lib/modules';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModuleGrid from '@/components/ModuleGrid';
import {
  BookOpen,
  ArrowRight,
  Terminal,
  Code2,
  CheckCircle2,
  FileCheck,
  Clock,
  Laptop,
  GraduationCap,
  Shield,
  Layers,
} from 'lucide-react';

export default function HomePage() {
  const modules = getAllModules();

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F8FC]">
      <Navbar />

      <main className="flex-1">
        {/* Academic Hero Header (Full width on desktop, matching official Teknik Informatika ITERA colors) */}
        <section className="bg-gradient-to-b from-[#0D223A] via-[#133863] to-[#164377] text-white border-b border-[#0D223A] relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          <div className="w-full px-6 sm:px-8 lg:px-12 2xl:px-20 py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              {/* Left Column: Info & Action */}
              <div className="max-w-4xl space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-[#0D223A]/70 px-3 py-1 text-xs font-semibold text-blue-200">
                  <span className="h-2 w-2 rounded-full bg-[#4D9EE8] animate-pulse" />
                  <span>Program Studi Teknik Informatika &bull; Semester Ganjil 2026/2027</span>
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white font-sans">
                  Praktikum Pemrograman Berorientasi Objek
                </h1>

                <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-3xl">
                  Dokumentasi dan modul pembelajaran resmi praktikum PBO bagi mahasiswa Teknik Informatika,
                  Institut Teknologi Sumatera (ITERA). Mempelajari arsitektur dan paradigma OOP dengan Java 21 LTS
                  secara mendalam, mulai dari perancangan class & object, enkapsulasi, pewarisan, polimorfisme,
                  hingga Exception Handling dan Java File I/O.
                </p>

                {/* Action Buttons */}
                <div className="pt-3 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/pertemuan/1"
                    className="inline-flex items-center gap-2 rounded-md bg-[#1F70C1] hover:bg-[#165696] text-white px-5 py-2.5 text-xs font-bold transition-all shadow-md hover:shadow-lg"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Buka Modul 1 (Pertemuan Pertama)</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href="/tentang"
                    className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 text-xs font-semibold transition-all backdrop-blur-xs"
                  >
                    <FileCheck className="w-4 h-4 text-[#A6D2FA]" />
                    <span>Silabus & Aturan Praktikum</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Official Emblem Display */}
              <div className="hidden lg:flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shrink-0 shadow-xl">
                <div className="relative h-28 w-28 rounded-xl overflow-hidden bg-white p-2 shadow-inner">
                  <Image
                    src="/logo-if-itera.png"
                    alt="Logo Teknik Informatika ITERA"
                    fill
                    sizes="112px"
                    className="object-contain p-1.5"
                    priority
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-white">
                    Teknik Informatika
                  </div>
                  <div className="text-[11px] text-blue-200">
                    Institut Teknologi Sumatera
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Specs Ribbon (Full Width) */}
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:grid-cols-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/10 text-[#A6D2FA]">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">{modules.length} Pertemuan</div>
                  <div className="text-xs text-blue-200">Modul Praktikum Lengkap</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/10 text-[#A6D2FA]">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Java 21 LTS</div>
                  <div className="text-xs text-blue-200">Bahasa Pemrograman Inti</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/10 text-[#A6D2FA]">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Apache NetBeans</div>
                  <div className="text-xs text-blue-200">Lingkungan Pengembangan (IDE)</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-white/10 text-[#A6D2FA]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">150 Menit</div>
                  <div className="text-xs text-blue-200">Durasi Sesi Laboratorium</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body (Full width on desktop) */}
        <div className="w-full px-6 sm:px-8 lg:px-12 2xl:px-20 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8-9 Cols: Modules Directory */}
            <div className="lg:col-span-8 2xl:col-span-9 space-y-6">
              <div className="flex items-center justify-between border-b border-[#CBD7E3] pb-3">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-[#0D223A]">
                    Daftar Modul Pertemuan
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Materi dan langkah praktikum semester ganjil (Pertemuan 1 s.d. 8)
                  </p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded bg-[#F0F7FD] border border-[#CBD7E3] text-[#1F70C1]">
                  Total: {modules.length} Modul
                </span>
              </div>

              {/* Module Cards Grid (Wide 2-col on 2xl desktop) */}
              <ModuleGrid modules={modules} />
            </div>

            {/* Right 3-4 Cols: Quick Reference & Guidelines */}
            <div className="lg:col-span-4 2xl:col-span-3 space-y-6">
              {/* Card 1: Setup Lingkungan Praktikum */}
              <div className="rounded-xl border border-[#E1EAF2] bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-2 border-b border-[#E1EAF2] pb-3 mb-3">
                  <Terminal className="w-4 h-4 text-[#1F70C1]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0D223A]">
                    Standar Lingkungan Lab
                  </h3>
                </div>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div>
                    <div className="font-semibold text-[#0D223A]">1. Java Development Kit (JDK)</div>
                    <p className="mt-0.5 text-slate-500">
                      Gunakan JDK 21 LTS atau JDK 25. Verifikasi via terminal:
                    </p>
                    <pre className="mt-1.5 p-2.5 rounded border border-[#9BC5E8] bg-[#EAF3FC] text-[#0D223A] font-mono text-[11px]">
                      java -version
                    </pre>
                  </div>

                  <div>
                    <div className="font-semibold text-[#0D223A]">2. IDE NetBeans / Lainnya</div>
                    <p className="mt-0.5 text-slate-500">
                      Apache NetBeans 19+ (Standar Lab ITERA), IntelliJ IDEA, atau VS Code.
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E1EAF2]">
                    <Link
                      href="/pertemuan/1#15-instalasi-java-development-kit-jdk"
                      className="text-xs font-bold text-[#1F70C1] hover:underline flex items-center gap-1"
                    >
                      <span>Lihat panduan instalasi lengkap</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Card 2: Ketentuan Praktikum */}
              <div className="rounded-xl border border-[#E1EAF2] bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-2 border-b border-[#E1EAF2] pb-3 mb-3">
                  <Shield className="w-4 h-4 text-[#C59938]" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0D223A]">
                    Ketentuan Laboratorium
                  </h3>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Toleransi keterlambatan maksimal 15 menit sebelum pintu lab ditutup.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Pakaian sopan rapi berkemeja berkerah dan bersepatu tertutup.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Dilarang keras plagiarisme pada tugas praktikum (nilai 0 otomatis bagi semua pihak terkait).
                    </span>
                  </li>
                </ul>

                <div className="mt-4 pt-3 border-t border-[#E1EAF2]">
                  <Link
                    href="/tentang#aturan"
                    className="text-xs font-bold text-[#1F70C1] hover:underline flex items-center gap-1"
                  >
                    <span>Baca tata tertib & silabus lengkap</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Card 3: Format Laporan */}
              <div className="rounded-xl border border-[#E1EAF2] bg-white p-5 shadow-2xs">
                <div className="flex items-center gap-2 border-b border-[#E1EAF2] pb-3 mb-3">
                  <FileCheck className="w-4 h-4 text-emerald-600" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#0D223A]">
                    Format Standar Laporan
                  </h3>
                </div>

                <ol className="list-decimal pl-4 space-y-1 text-xs text-slate-600">
                  <li>Cover resmi ITERA (Judul, Nama, NIM, Kelas)</li>
                  <li>Tujuan Praktikum</li>
                  <li>Alat dan Bahan</li>
                  <li>Langkah Percobaan</li>
                  <li>Source Code program Java</li>
                  <li>Hasil Output (screenshot terminal)</li>
                  <li>Analisis Program & Logika</li>
                  <li>Kesimpulan</li>
                </ol>

                <p className="mt-3 text-[11px] text-slate-600 italic">
                  Format file: <code>NIM_Nama_Modul[n].pdf</code> diunggah ke Google Classroom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
