import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  FileText,
  ShieldAlert,
  Clock,
  CheckCircle2,
  AlertTriangle,
  GraduationCap,
  ArrowRight,
  BookOpen,
  Users,
  Award,
} from 'lucide-react';

export const metadata = {
  title: 'Silabus & Aturan Praktikum | Praktikum PBO ITERA',
  description:
    'Silabus lengkap 8 pertemuan, tata tertib laboratorium, format standar penulisan laporan praktikum, dan panduan lingkungan praktikum PBO ITERA.',
};

export default function TentangPage() {
  const silabusItems = [
    {
      minggu: 1,
      modul: 'Pertemuan 1',
      topik: 'Pengenalan Java dan Dasar Pemrograman',
      fokus: 'Instalasi JDK, NetBeans, sintaks dasar Java, variabel, tipe data, operator, perulangan, dan array.',
      link: '/pertemuan/1',
    },
    {
      minggu: 2,
      modul: 'Pertemuan 2',
      topik: 'Konsep Dasar Pemrograman Berorientasi Objek',
      fokus: 'Paradigma OOP, pemodelan class, object, atribut, method, constructor, dan keyword this.',
      link: '/pertemuan/2',
    },
    {
      minggu: 3,
      modul: 'Pertemuan 3',
      topik: 'Enkapsulasi dan Access Modifier',
      fokus: 'Prinsip data hiding, access modifier (private, protected, public), getter & setter, serta validasi data.',
      link: '/pertemuan/3',
    },
    {
      minggu: 4,
      modul: 'Pertemuan 4',
      topik: 'Inheritance (Pewarisan)',
      fokus: 'Pewarisan hierarki class, keyword extends, keyword super, method overriding, dan reusability.',
      link: '/pertemuan/4',
    },
    {
      minggu: 5,
      modul: 'Pertemuan 5',
      topik: 'Polymorphism (Polimorfisme)',
      fokus: 'Polimorfisme statis (overloading), polimorfisme dinamis (overriding), dynamic binding, dan upcasting.',
      link: '/pertemuan/5',
    },
    {
      minggu: 6,
      modul: 'Pertemuan 6',
      topik: 'Abstract Class dan Interface',
      fokus: 'Perancangan abstraksi program, abstract method, abstract class, dan multiple interface implementation.',
      link: '/pertemuan/6',
    },
    {
      minggu: 7,
      modul: 'Pertemuan 7',
      topik: 'Relasi Antar Object: Association, Aggregation, & Composition',
      fokus: 'Pemodelan hubungan objek dalam OOP, diagram relasi kelas, has-a lemah vs has-a kuat, dan implementasi kode.',
      link: '/pertemuan/7',
    },
    {
      minggu: 8,
      modul: 'Pertemuan 8',
      topik: 'Error Handling dan Java I/O',
      fokus: 'Mekanisme penanganan eksepsi (try, catch, finally, throw, throws) serta operasi baca-tulis file (Scanner, FileWriter).',
      link: '/pertemuan/8',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F8FC]">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="w-full px-6 sm:px-8 lg:px-12 2xl:px-20 space-y-10">
          {/* Header Title */}
          <div className="border-b border-[#CBD7E3] pb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#CBD7E3] bg-[#F0F7FD] px-3 py-1 text-xs font-bold text-[#1F70C1] mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Pedoman Akademik Laboratorium</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#0D223A] font-sans sm:text-4xl">
              Silabus, Tata Tertib & Format Laporan
            </h1>
            <p className="mt-2 text-sm text-slate-600 max-w-4xl leading-relaxed">
              Panduan resmi pelaksanaan Praktikum Pemrograman Berorientasi Objek (PBO) Program Studi
              Teknik Informatika, Institut Teknologi Sumatera (ITERA) Semester Ganjil Tahun Akademik 2026/2027.
            </p>
          </div>

          {/* Section 1: Silabus Pembelajaran */}
          <section id="silabus" className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#1F70C1]" />
              <h2 className="text-xl font-bold tracking-tight text-[#0D223A]">
                1. Rencana Pembelajaran Praktikum (Silabus)
              </h2>
            </div>
            <p className="text-xs text-slate-600">
              Praktikum dilaksanakan secara luring di Laboratorium Komputer ITERA selama 8 sesi pertemuan
              terstruktur (masing-masing 150 menit per sesi).
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#E1EAF2] bg-white shadow-xs">
              <table className="min-w-full divide-y divide-[#E1EAF2] text-xs">
                <thead className="bg-[#F0F7FD] font-bold uppercase tracking-wider text-[#133863] text-[11px]">
                  <tr>
                    <th className="px-4 py-3.5 text-left w-20">Sesi</th>
                    <th className="px-4 py-3.5 text-left w-56">Topik Pembelajaran</th>
                    <th className="px-4 py-3.5 text-left">Fokus Materi & Keterampilan</th>
                    <th className="px-4 py-3.5 text-center w-28">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0F7FD]">
                  {silabusItems.map((item) => (
                    <tr key={item.minggu} className="hover:bg-[#F8FBFE] transition-colors">
                      <td className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-[#133863] text-white font-bold text-xs">
                          {item.minggu}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 font-bold text-[#0D223A]">
                        {item.topik}
                      </td>
                      <td className="px-4 py-3.5 text-slate-600 leading-relaxed">
                        {item.fokus}
                      </td>
                      <td className="px-4 py-3.5 text-center whitespace-nowrap">
                        <Link
                          href={item.link}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1F70C1] hover:text-[#133863]"
                        >
                          <span>Buka</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Format Standar Laporan */}
          <section id="laporan" className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#1F70C1]" />
              <h2 className="text-xl font-bold tracking-tight text-[#0D223A]">
                2. Format Standar Laporan Praktikum
              </h2>
            </div>
            <p className="text-xs text-slate-600">
              Setiap mahasiswa wajib menyusun laporan praktikum mandiri setelah sesi laboratorium selesai
              dengan sistematika penulisan sebagai berikut:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl border border-[#E1EAF2] bg-white p-6 shadow-xs space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0D223A] border-b border-[#E1EAF2] pb-2">
                  Struktur Sistematika Laporan
                </h3>
                <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-700 leading-relaxed">
                  <li>
                    <strong>Halaman Cover:</strong> Memuat Judul Praktikum, Nama Lengkap, NIM,
                    Program Studi Informatika, Mata Kuliah, Dosen Pengampu, dan Kelas Praktikum.
                  </li>
                  <li>
                    <strong>Tujuan Praktikum:</strong> Diambil langsung dari sub-bab tujuan modul.
                  </li>
                  <li>
                    <strong>Alat dan Bahan:</strong> Perangkat keras & lunak (JDK, NetBeans, OS).
                  </li>
                  <li>
                    <strong>Langkah Percobaan:</strong> Narasi pengerjaan langkah praktikum.
                  </li>
                  <li>
                    <strong>Source Code:</strong> Potongan kode program Java yang telah ditulis dan berhasil dikompilasi.
                  </li>
                  <li>
                    <strong>Hasil Output Program:</strong> Tangkapan layar (screenshot) running program di terminal NetBeans.
                  </li>
                  <li>
                    <strong>Analisis Program:</strong> Penjelasan mendalam mengenai cara kerja kode, logika perulangan/class/method, dan temuan praktikan.
                  </li>
                  <li>
                    <strong>Kesimpulan:</strong> Ringkasan hasil praktikum sesuai dengan tujuan pembelajaran.
                  </li>
                </ol>
              </div>

              <div className="rounded-xl border border-[#E1EAF2] bg-white p-6 shadow-xs space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0D223A] border-b border-[#E1EAF2] pb-2">
                  Ketentuan Berkas & Pengumpulan
                </h3>
                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Format file wajib berupa <strong>PDF</strong>. Dokumen selain format PDF tidak akan dinilai.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Format penamaan file: <br />
                      <code className="mt-1 inline-block rounded bg-[#EBF3FA] border border-[#D5E5F5] px-2 py-0.5 font-mono text-[11px] font-bold text-[#133863]">
                        NIM_NamaLengkap_Modul[n].pdf
                      </code>
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Pengumpulan dilakukan melalui <strong>Google Classroom (GCR)</strong> praktikum
                      sebelum batas waktu (deadline) yang telah ditentukan oleh asisten.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#C59938] shrink-0 mt-0.5" />
                    <span>
                      Keterlambatan pengumpulan laporan dikenakan pemotongan nilai sebesar 20% per hari keterlambatan.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3: Tata Tertib Laboratorium */}
          <section id="aturan" className="space-y-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-[#C59938]" />
              <h2 className="text-xl font-bold tracking-tight text-[#0D223A]">
                3. Tata Tertib Praktikum & Ketentuan Etika
              </h2>
            </div>

            <div className="rounded-xl border border-[#E8D9B5] bg-[#FEFBF3] p-5 text-xs text-slate-800 space-y-3">
              <div className="font-bold text-[#8A6314] text-sm flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#C59938]" />
                <span>Peringatan Integritas Akademik & Anti-Plagiarisme</span>
              </div>
              <p className="leading-relaxed">
                Segala bentuk kecurangan akademik (copy-paste kode teman tanpa memahami, mengubah nama variabel semata,
                atau meminta orang lain mengerjakan tugas/laporan) adalah pelanggaran berat etika mahasiswa Teknik Informatika ITERA.
                Setiap laporan yang terindikasi plagiat akan langsung diberikan <strong>nilai 0 (nol)</strong> untuk seluruh pihak yang terlibat.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="rounded-xl border border-[#E1EAF2] bg-white p-5 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0D223A] mb-2">
                  <Clock className="w-4 h-4 text-[#1F70C1]" />
                  <span>Kehadiran & Waktu</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Praktikan wajib hadir 10 menit sebelum praktikum dimulai. Batas toleransi keterlambatan
                  maksimal 15 menit. Keterlambatan lebih dari 15 menit tidak diperkenankan mengikuti praktikum pada sesi tersebut.
                </p>
              </div>

              <div className="rounded-xl border border-[#E1EAF2] bg-white p-5 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#0D223A] mb-2">
                  <Users className="w-4 h-4 text-[#1F70C1]" />
                  <span>Etika & Pakaian</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Praktikan wajib berpakaian rapi dan sopan (kemeja berkerah, celana/rok kain panjang bukan robek,
                  serta sepatu tertutup). Dilarang membawa makanan dan minuman ke dalam ruang lab komputer.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Tim Dosen & Asisten */}
          <section id="kontak" className="space-y-4 border-t border-[#E1EAF2] pt-8">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#1F70C1]" />
              <h2 className="text-xl font-bold tracking-tight text-[#0D223A]">
                4. Pengelola Praktikum & Tim Asisten
              </h2>
            </div>
            <p className="text-xs text-slate-600">
              Jika terdapat kendala instalasi software, materi modul, atau pertanyaan terkait praktikum,
              silakan hubungi tim asisten laboratorium:
            </p>

            <div className="rounded-xl border border-[#E1EAF2] bg-white p-5 shadow-xs text-xs text-slate-700 space-y-2">
              <p>
                <strong>Program Studi:</strong> Teknik Informatika — Institut Teknologi Sumatera (ITERA)
              </p>
              <p>
                <strong>Platform Komunikasi:</strong> Google Classroom & Grup Resmi Praktikum PBO
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
