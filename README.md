# Modul Praktikum Pemrograman Berorientasi Objek (PBO)
**Teknik Informatika — Institut Teknologi Sumatera (ITERA)**  
Semester Ganjil 2026/2027

---

## 📚 Daftar Modul

| No | Judul |
|----|-------|
| 1 | Pengenalan Pemrograman Berorientasi Objek & Java |
| 2 | Class, Object, dan Constructor |
| 3 | Enkapsulasi & Access Modifier |
| 4 | Pewarisan (Inheritance) |
| 5 | Polimorfisme |
| 6 | Abstract Class & Interface |
| 7 | Exception Handling |
| 8 | Collections & Generics |

---

## 🛠 Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Markdown Renderer:** `marked` + `highlight.js`
- **Icons:** Lucide React
- **Font:** Inter + JetBrains Mono (Google Fonts)

---

## 🚀 Cara Menjalankan

### Prasyarat
- Node.js >= 18
- npm >= 9

### Langkah

```bash
# 1. Clone repo
git clone https://github.com/<username>/modul-praktikum-pbo-2026-2027-ganjil.git
cd modul-praktikum-pbo-2026-2027-ganjil

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Status Akses Modul Global (Supabase)

Status buka/tutup modul disimpan di Supabase agar perubahan pengelola berlaku untuk semua pengunjung.

1. Buat project Supabase.
2. Buka **SQL Editor**, jalankan isi [`supabase/schema.sql`](./supabase/schema.sql) satu kali. Modul tidak terbuka otomatis (`unlocked_until_week = 0`).
   - Jika tabel sudah dibuat sebelumnya dengan nilai awal minggu 3, jalankan [`supabase/set-no-auto-unlock.sql`](./supabase/set-no-auto-unlock.sql) satu kali. Ini mengubah batas minggu otomatis ke 0 dan mempertahankan daftar modul yang dibuka satu per satu.
3. Buat file `.env.local` di root project, lalu isi variabel berikut:
   ```text
   SUPABASE_URL=https://<project-ref>.supabase.co
   SUPABASE_SERVICE_ROLE_KEY=<service-role-key>
   MODULE_ADMIN_KEY=<random-admin-secret>
   ```
   - `SUPABASE_URL` dari **Project Settings → API → Project URL**.
   - `SUPABASE_SERVICE_ROLE_KEY` dari **Project Settings → API Keys**. Ini rahasia server; jangan pernah gunakan awalan `NEXT_PUBLIC_`.
   - `MODULE_ADMIN_KEY` dengan secret acak panjang yang hanya diketahui pengelola.
4. Restart `npm run dev` jika server lokal sedang berjalan.
5. Untuk website live, masukkan nilai environment yang sama di **Vercel → Project Settings → Environment Variables**, lalu deploy ulang.

Setelah konfigurasi selesai, tombol **Atur Akses Global** tersedia di halaman **Silabus & Aturan Praktikum**. Pengelola dapat mengatur minggu yang terbuka otomatis atau memilih modul tertentu, lalu menyimpan perubahan dengan passkey admin. Pengunjung lain mengambil status baru secara otomatis paling lambat sekitar 15 detik kemudian.

### Build Production

```bash
npm run build
npm start
```

---

## 👥 Tim Asisten Praktikum

Laboratorium Teknik Informatika
**Institut Teknologi Sumatera (ITERA)**
Jl. Terusan Ryacudu, Way Hui, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung 35365