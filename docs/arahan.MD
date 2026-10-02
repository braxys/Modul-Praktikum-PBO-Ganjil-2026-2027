# Instruksi Proyek: Website Modul Praktikum Pemrograman Berorientasi Objek
### Program Studi Teknik Informatika — Institut Teknologi Sumatera (ITERA)

Kamu bertugas membangun sebuah website statis yang berisi kumpulan modul pembelajaran untuk mata kuliah praktikum "Pemrograman Berorientasi Objek". Website ini akan digunakan oleh mahasiswa untuk membaca materi tiap pertemuan, jadi prioritas utama adalah **keterbacaan, kejelasan navigasi, dan kesan seperti dokumentasi/website akademik yang serius** — bukan landing page produk atau template AI generik.

---

## 1. Tujuan & Konteks

- Ini adalah situs referensi/dokumentasi untuk praktikum, bukan marketing page.
- Pengguna: mahasiswa Teknik Informatika yang membuka modul sebelum/selama praktikum, dosen/asisten yang mengelola konten.
- Konten modul (Pertemuan 1, 2, 3, dst.) akan saya kirimkan secara bertahap setelah struktur situs jadi. Jadi bangun dulu **kerangka + sistem kontennya**, baru nanti diisi.
- Setiap "Pertemuan" berisi: judul, tujuan pembelajaran, materi (teks, kode, gambar/diagram bila ada), langkah praktikum, dan mungkin tugas/soal latihan.

---

## 2. Prinsip Desain — WAJIB DIIKUTI (anti "AI slop")

Tolong hindari ciri khas visual yang membuat website terlihat "dibuat AI" secara instan. Yang **DILARANG**:

- ❌ Gradient ungu-ke-biru atau ungu-ke-pink sebagai background utama/hero section
- ❌ Glassmorphism berlebihan (blur + transparansi di mana-mana)
- ❌ Card dengan shadow tebal membungkus SEMUA elemen (judul, paragraf, tombol jadi card semua)
- ❌ Emoji berlebihan sebagai bullet point atau ikon section (🚀 ✨ 💡 di judul-judul)
- ❌ Font generik bawaan (system-ui polos) tanpa hierarki tipografi yang jelas
- ❌ Layout simetris "3 kolom fitur dengan ikon bulat" ala landing page SaaS
- ❌ Terlalu banyak whitespace kosong tanpa konten yang mengisi — bikin terlihat kosong/template

Yang **DIINGINKAN** — referensi gaya: dokumentasi teknis yang matang seperti MDN Web Docs, Read the Docs, GitBook, atau situs course universitas (mis. situs course MIT OCW, docs.python.org):

- ✅ Tipografi jadi fokus utama — pilih pasangan font serif/sans yang enak dibaca panjang (misal Inter/IBM Plex Sans untuk UI, atau font serif untuk body text materi bila ingin nuansa akademik)
- ✅ Palet warna terbatas (2–3 warna inti + netral), bisa pakai warna identitas kampus (biru tua/navy ITERA) sebagai aksen, bukan warna pelangi
- ✅ Sidebar navigasi kiri berisi daftar Pertemuan 1–14/16 (seperti struktur docs), dengan konten utama di kanan
- ✅ Blok kode dengan syntax highlighting yang rapi, line-numbering jika perlu
- ✅ Heading hierarki jelas (H1/H2/H3) dengan ukuran & spacing konsisten, bukan semua heading besar-besar
- ✅ Dark mode opsional tapi tidak wajib di awal — fokus dulu ke light mode yang bersih dan kontras cukup untuk baca lama
- ✅ Elemen interaktif (search modul, tombol "pertemuan selanjutnya/sebelumnya") fungsional, bukan dekoratif

Sebelum mulai coding tampilan, **buat dulu 1 halaman contoh (mis. landing/home) dan tunjukkan ke saya untuk saya approve arah desainnya**, baru lanjut ke halaman-halaman lain.

---

## 3. Struktur Situs

```
/                       → Landing/Home: judul mata kuliah, deskripsi singkat,
                          daftar semua pertemuan (grid/list ringkas), info dosen/asisten (opsional)
/pertemuan/1            → Detail modul pertemuan 1
/pertemuan/2            → dst.
...
/tentang (opsional)     → Silabus, aturan praktikum, kontak asisten
```

Tiap halaman `/pertemuan/[n]` punya struktur konten konsisten:

1. Judul pertemuan + nomor minggu + estimasi durasi
2. Tujuan pembelajaran (learning objectives) — bullet list singkat
3. Materi/teori (bisa multi-section dengan H2/H3)
4. Langkah praktikum (numbered steps, bisa disertai blok kode)
5. Tugas/latihan (jika ada)
6. Navigasi "← Pertemuan sebelumnya" / "Pertemuan selanjutnya →"

---

## 4. Tech Stack (usulan — silakan sesuaikan dengan kemampuan Antigravity, tapi jaga simpel)

- **Framework:** Next.js (App Router) atau Astro — pilih yang paling stabil untuk kamu generate. Astro cocok karena situs ini konten-heavy dan statis.
- **Styling:** Tailwind CSS, tapi dengan **custom design tokens** (warna, font, spacing didefinisikan sendiri di config, jangan pakai default Tailwind palette mentah-mentah supaya tidak terlihat generik)
- **Konten modul:** simpan sebagai file Markdown/MDX terpisah per pertemuan (mis. `content/pertemuan-01.md`) dengan frontmatter (judul, tujuan, dsb). Ini supaya saya bisa kirim isi modul dan kamu (atau saya sendiri nanti) tinggal isi filenya tanpa utak-atik komponen React.
- **Syntax highlighting:** gunakan library seperti Shiki atau rehype-pretty-code untuk blok kode.
- **Responsif:** wajib enak dibaca di laptop dan mobile (mahasiswa sering baca modul dari HP).

---

## 5. Langkah Kerja yang Saya Minta

1. Konfirmasi/usulkan tech stack final (boleh berbeda dari usulan di atas jika ada pertimbangan teknis, jelaskan alasannya).
2. Buat struktur folder project + setup awal (Tailwind config dengan design token custom: warna, font).
3. Buat komponen layout: Header, Sidebar navigasi pertemuan, Footer.
4. Buat 1 halaman contoh (Home) dengan data dummy dulu — tampilkan ke saya sebelum lanjut.
5. Setelah desain di-ACC, buat template halaman `/pertemuan/[n]` dengan 1 data dummy contoh (misalnya "Pertemuan 0 - Contoh").
6. Setelah kerangka jadi, saya akan kirim isi materi untuk **Pertemuan 1** — kamu tinggal masukkan ke dalam sistem konten yang sudah dibuat.
7. Ulangi untuk pertemuan-pertemuan berikutnya sesuai materi yang saya kirim.

**Jangan langsung generate seluruh 14-16 pertemuan dengan konten placeholder/isi karangan sendiri** — tunggu materi asli dari saya. Fokus dulu ke kerangka + desain + 1 contoh.

---

## 6. Pertanyaan untuk Saya (jika perlu diklarifikasi sebelum mulai)

Jika ada hal yang ambigu (misalnya jumlah total pertemuan, apakah perlu fitur login/autentikasi, apakah perlu fitur pencarian, apakah perlu logo/identitas ITERA resmi), tanyakan dulu ke saya sebelum berasumsi.

---

**Mulai dari langkah 1: usulkan/konfirmasi tech stack, lalu tunjukkan rencana struktur folder sebelum mulai coding.**
