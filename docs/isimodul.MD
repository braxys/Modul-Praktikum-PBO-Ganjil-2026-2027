# Konteks Lengkap Isi Modul untuk Pengisian Website
### Praktikum Pemrograman Berorientasi Objek — Teknik Informatika ITERA

## Catatan untuk Agent (baca dulu sebelum mulai)

File aslinya berupa PDF, dan environment Antigravity tidak bisa menerima upload PDF langsung. Karena itu, **seluruh isi modul di bawah ini sudah saya transkrip manual dari PDF ke teks/markdown** — anggap ini sebagai sumber kebenaran (source of truth) pengganti PDF aslinya. Kamu tidak perlu (dan tidak bisa) membaca file PDF lain; cukup gunakan isi di dokumen ini apa adanya untuk mengisi konten tiap halaman `/pertemuan/[n]` di website.

Instruksi pengisian:
1. Untuk setiap pertemuan, masukkan **seluruh bagian** (Tujuan Praktikum, Dasar Teori, Alat dan Bahan, Langkah Praktikum lengkap dengan kode, Hasil Praktikum, Tugas Praktikum, Kriteria Penilaian, Format Pengumpulan) ke dalam struktur konten yang sudah kita sepakati sebelumnya (file markdown/MDX per pertemuan).
2. Pertahankan urutan dan penomoran langkah persis seperti di bawah ini.
3. Blok kode harus tetap sebagai code block dengan bahasa yang sesuai (`html`, `javascript`, `python`, `ini`, `bash`, dll) supaya syntax highlighting bekerja.
4. Bagian bertanda **[LATIHAN MANDIRI]** adalah instruksi tambahan dari saya (bukan bagian asli modul) — ini WAJIB disisipkan di titik yang ditandai, sebagai section terpisah dengan gaya visual berbeda dari konten asli (lihat instruksi lengkap soal styling-nya di file `instruksi-tambah-handson-modul.md` yang sudah saya kirim sebelumnya). Selain bagian ini, semua yang lain adalah konten asli modul dan harus dimasukkan apa adanya, tanpa dikurangi.
5. Format pengumpulan/deadline di tiap modul kadang ada yang tanggalnya sudah lewat (karena diambil dari modul tahun lalu) — masukkan apa adanya dulu, nanti saya update tanggalnya belakangan secara manual, jangan diubah/ditebak sendiri oleh agent.

---
---

# PERTEMUAN 1 — PENGENALAN JAVA DAN DASAR PEMROGRAMAN

## 1.1 Pendahuluan

Pemrograman merupakan salah satu keterampilan dasar yang harus dimiliki oleh mahasiswa Informatika. Kemampuan menulis program tidak hanya berguna untuk membuat aplikasi, tetapi juga melatih cara berpikir logis dan sistematis dalam menyelesaikan masalah.

Pada mata kuliah **Pemrograman Berorientasi Objek (PBO)**, bahasa pemrograman yang digunakan adalah **Java**. Java dipilih karena memiliki struktur yang jelas, sintaks yang relatif mudah dipahami, serta mendukung konsep pemrograman berorientasi objek secara lengkap.

Sebelum mempelajari konsep objek yang lebih kompleks, mahasiswa perlu memahami terlebih dahulu dasar pemrograman Java. Dasar tersebut meliputi penggunaan tipe data, variabel, operator, struktur kontrol program, serta pengenalan array.

## 1.2 Tujuan Pembelajaran

Setelah menyelesaikan praktikum pada bab ini, mahasiswa diharapkan mampu memahami dasar pemrograman Java dan menyiapkan lingkungan pengembangan program.

Secara lebih rinci mahasiswa diharapkan mampu:

1. Menjelaskan pengertian bahasa pemrograman Java
2. Menginstal Java Development Kit (JDK)
3. Menginstal dan menggunakan NetBeans
4. Menulis dan menjalankan program Java sederhana
5. Memahami konsep tipe data, variabel, dan konstanta
6. Menggunakan operator dalam Java
7. Menggunakan struktur kondisional dan perulangan
8. Menggunakan array untuk menyimpan data

## 1.3 Pengenalan Bahasa Pemrograman Java

Java merupakan bahasa pemrograman yang dikembangkan oleh **Sun Microsystems** pada tahun 1995. Bahasa ini dirancang agar program dapat berjalan pada berbagai sistem operasi tanpa perlu ditulis ulang.

Java memiliki prinsip terkenal yaitu:

### Write Once, Run Anywhere

Prinsip ini berarti program Java cukup ditulis satu kali dan dapat dijalankan di berbagai sistem operasi seperti Windows, Linux, dan macOS selama tersedia **Java Virtual Machine (JVM)**.

Java banyak digunakan untuk berbagai jenis aplikasi. Contohnya aplikasi desktop, aplikasi web, aplikasi enterprise, dan aplikasi Android.

## 1.4 Karakteristik Bahasa Java

Java memiliki beberapa karakteristik penting yang membuatnya banyak digunakan dalam dunia pendidikan dan industri.

### 1. Berorientasi Objek

Java dirancang berdasarkan paradigma **Object Oriented Programming (OOP)**. Program dibangun menggunakan class dan object yang saling berinteraksi.

### 2. Platform Independent

Program Java tidak bergantung pada sistem operasi tertentu. Program Java dikompilasi menjadi **bytecode** yang dijalankan oleh **Java Virtual Machine**.

### 3. Robust

Java memiliki sistem pengecekan kesalahan yang kuat. Hal ini membantu mengurangi kesalahan program selama proses pengembangan.

### 4. Secure

Java memiliki sistem keamanan yang baik karena program berjalan dalam lingkungan virtual machine.

## 1.5 Instalasi Java Development Kit (JDK)

Sebelum membuat program Java, mahasiswa harus menginstal **Java Development Kit (JDK)**. JDK berisi compiler Java serta berbagai alat yang digunakan untuk mengembangkan aplikasi Java.

### 1.5.1 Langkah Instalasi JDK

1. Buka website: `https://www.oracle.com/asean/java/technologies/downloads/`
2. Download **JDK 21 atau JDK 25**
3. Pilih sistem operasi **sesuai dengan Sistem Operasi yang digunakan**
4. Jalankan file installer
5. Klik **Next** sampai proses instalasi selesai

Setelah instalasi selesai, lakukan pengecekan dengan membuka **Command Prompt** atau **Terminal** dan mengetik:

```bash
java -version
```

Jika versi Java muncul, berarti instalasi berhasil.

## 1.6 Instalasi Apache NetBeans

NetBeans adalah **IDE (Integrated Development Environment)** yang digunakan untuk menulis, mengedit, dan menjalankan program Java.

### Langkah Instalasi NetBeans

1. Buka website: `https://netbeans.apache.org`
2. Download versi terbaru NetBeans
3. Jalankan installer
4. Ikuti proses instalasi sampai selesai
5. Jalankan NetBeans setelah instalasi selesai

## 1.7 Membuat Program Java Pertama

Langkah membuat program Java pertama menggunakan NetBeans:

1. Klik **File**
2. Pilih **New Project**
3. Pilih **Java Application**
4. Klik **Next**
5. Masukkan nama project : **`HelloITERA`**
6. Klik **Finish**

**Contoh program Java pertama:**

```java
public class HelloITERA {
    public static void main(String[] args) {
        System.out.println("Halo ITERA");
        System.out.println("Selamat datang di Praktikum PBO");
        System.out.println("Program Studi Informatika");
    }
}
```

**Output program:**

```text
Halo ITERA
Selamat datang di Praktikum PBO
Program Studi Informatika
```

## 1.8 Tipe Data, Variabel, dan Konstanta

Dalam pemrograman, data yang akan diproses harus disimpan terlebih dahulu dalam **variabel**. Variabel memiliki tipe data tertentu yang menentukan jenis nilai yang dapat disimpan.

### 1. Tipe Data Dasar

|**Tipe Data**|**Keterangan**|
|---|---|
|int|bilangan bulat|
|double|bilangan desimal|
|char|satu karakter|
|boolean|true atau false|
|String|teks|

**Contoh program:**

```java
public class TipeDataContoh {
    public static void main(String[] args) {
        int jumlahMahasiswa = 40;
        double ipk = 3.75;
        char grade = 'A';
        boolean lulus = true;
        String kampus = "ITERA";
        System.out.println("Jumlah Mahasiswa : " + jumlahMahasiswa);
        System.out.println("IPK : " + ipk);
        System.out.println("Grade : " + grade);
        System.out.println("Status Lulus : " + lulus);
        System.out.println("Kampus : " + kampus);
    }
}
```

### 2. Variabel

Variabel digunakan untuk menyimpan nilai data.

**Contoh:**

```java
String nama = "Budi";
int nim = 123140001;
```

**Program contoh:**

```java
public class BiodataMahasiswa {
    public static void main(String[] args) {
        String nama = "Andi";
        int nim = 123140001;
        String prodi = "Informatika";
        String kampus = "ITERA";
        System.out.println("Nama : " + nama);
        System.out.println("NIM : " + nim);
        System.out.println("Prodi : " + prodi);
        System.out.println("Kampus : " + kampus);
    }
}
```

### 3. Konstanta

Konstanta adalah variabel yang nilainya tidak dapat diubah. Konstanta ditulis menggunakan kata kunci **final**.

**Contoh:**

```java
public class KonstantaContoh {
    public static void main(String[] args) {
        final String NAMA_KAMPUS = "ITERA";
        System.out.println("Nama Kampus : " + NAMA_KAMPUS);
    }
}
```

## 1.9 Operator dalam Java

Operator adalah simbol yang digunakan untuk melakukan operasi terhadap variabel atau nilai dalam program. Operator memungkinkan program melakukan perhitungan, perbandingan, pengambilan keputusan, dan manipulasi data. Dalam Java, operator yang umum digunakan meliputi operator **aritmatika, penugasan, perbandingan, logika, increment dan decrement, serta ternary**.

### 1.9.1 Operator Aritmatika

Operator aritmatika digunakan untuk melakukan operasi matematika dasar.

|**Operator**|**Fungsi**|
|---|---|
|+|Penjumlahan|
|-|Pengurangan|
|\*|Perkalian|
|/|Pembagian|
|%|Sisa bagi (modulus)|

**Contoh program:**

```java
public class OperatorAritmatika {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        System.out.println("Nilai a = " + a);
        System.out.println("Nilai b = " + b);
        System.out.println("Penjumlahan : " + (a + b));
        System.out.println("Pengurangan : " + (a - b));
        System.out.println("Perkalian : " + (a * b));
        System.out.println("Pembagian : " + (a / b));
        System.out.println("Sisa Bagi : " + (a % b));
    }
}
```

**Output:**

```text
Nilai a = 10
Nilai b = 3
Penjumlahan : 13
Pengurangan : 7
Perkalian : 30
Pembagian : 3
Sisa Bagi : 1
```

### 1.9.2 Operator Penugasan (Assignment Operator)

Operator penugasan digunakan untuk memberikan nilai pada suatu variabel.

|**Operator**|**Fungsi**|
|---|---|
|=|memberi nilai|
|+=|menambahkan nilai|
|-=|mengurangi nilai|
|\*=|mengalikan nilai|
|/=|membagi nilai|
|%=|modulus nilai|

**Contoh program:**

```java
public class OperatorAssignment {
    public static void main(String[] args) {
        int nilai = 10;
        nilai += 5;
        System.out.println("Nilai sekarang : " + nilai);
    }
}
```

**Output:**

```text
Nilai sekarang : 15
```

### 1.9.3 Operator Perbandingan (Relational Operator)

Operator perbandingan digunakan untuk membandingkan dua nilai. Hasil dari operator ini berupa nilai **true** atau **false**.

|**Operator**|**Fungsi**|
|---|---|
|==|sama dengan|
|!=|tidak sama dengan|
|>|lebih besar|
|<|lebih kecil|
|>=|lebih besar atau sama|
|<=|lebih kecil atau sama|

**Contoh program:**

```java
public class OperatorPerbandingan {
    public static void main(String[] args) {
        int nilai = 80;
        System.out.println("Nilai >= 75 : " + (nilai >= 75));
        System.out.println("Nilai == 80 : " + (nilai == 80));
        System.out.println("Nilai < 60 : " + (nilai < 60));
    }
}
```

**Output:**

```text
Nilai >= 75 : true
Nilai == 80 : true
Nilai < 60 : false
```

### 1.9.4 Operator Logika

Operator logika digunakan untuk menggabungkan beberapa kondisi dalam sebuah pernyataan.

|**Operator**|**Fungsi**|
|---|---|
|&&|AND|
|\|\||OR|
|!|NOT|

**Contoh program:**

```java
public class OperatorLogika {
    public static void main(String[] args) {
        int nilai = 85;
        boolean hadir = true;
        if(nilai >= 75 && hadir){
            System.out.println("Mahasiswa lulus praktikum PBO");
        }
    }
}
```

### 1.9.5 Operator Increment dan Decrement

Operator ini digunakan untuk menambah atau mengurangi nilai variabel sebanyak satu.

|**Operator**|**Fungsi**|
|---|---|
|++|menambah nilai 1|
|--|mengurangi nilai 1|

**Contoh program:**

```java
public class OperatorIncrement {
    public static void main(String[] args) {
        int i = 1;
        i++;
        System.out.println("Nilai i sekarang : " + i);
    }
}
```

**Output:**

```text
Nilai i sekarang : 2
```

### 1.9.6 Operator Ternary

Operator ternary merupakan bentuk singkat dari pernyataan **if-else**. Operator ini sering digunakan untuk membuat keputusan sederhana dalam satu baris kode.

**Struktur operator ternary:**

```text
kondisi ? nilaiJikaTrue : nilaiJikaFalse
```

**Contoh program:**

```java
public class OperatorTernary {
    public static void main(String[] args) {
        int nilai = 70;
        String hasil = (nilai >= 75) ? "Lulus" : "Tidak Lulus";
        System.out.println("Hasil : " + hasil);
    }
}
```

**Output:**

```text
Hasil : Tidak Lulus
```

### 1.9.7 Ringkasan Operator Java

Berikut ringkasan operator yang sering digunakan dalam pemrograman Java.

|**Jenis Operator**|**Operator**|
|---|---|
|Aritmatika|+ - \* / %|
|Assignment|= += -= \*= /= %=|
|Perbandingan|== != > < >= <=|
|Logika|&& \|\| !|
|Increment/Decrement|++ --|
|Ternary|? :|

Operator merupakan komponen penting dalam pemrograman karena hampir semua proses dalam program melibatkan operasi terhadap data. Oleh karena itu, pemahaman mengenai operator akan sangat membantu mahasiswa dalam menulis program yang lebih kompleks pada materi selanjutnya.

## 1.10 Pernyataan Kondisional

Pernyataan kondisional digunakan untuk menentukan tindakan yang akan dilakukan oleh program berdasarkan suatu kondisi tertentu. Dengan menggunakan kondisi, program dapat mengambil keputusan yang berbeda sesuai dengan nilai yang diperiksa.

Dalam Java, pernyataan kondisional yang umum digunakan adalah **if**, **if-else**, dan **if-else if**.

### 1.10.1 if

Pernyataan **if** digunakan untuk menjalankan perintah apabila kondisi bernilai benar (*true*).

**Contoh:**

```java
public class ContohIf {
    public static void main(String[] args) {
        int nilai = 80;
        if (nilai >= 75) {
            System.out.println("Mahasiswa lulus praktikum PBO");
        }
    }
}
```

### 1.10.2 If-Else

Pernyataan **if-else** digunakan untuk memilih satu dari dua kemungkinan kondisi.

**Contoh:**

```java
public class ContohIfElse {
    public static void main(String[] args) {
        int nilai = 60;
        if (nilai >= 75) {
            System.out.println("Lulus");
        } else {
            System.out.println("Tidak Lulus");
        }
    }
}
```

### 1.10.3 If-Else If

Pernyataan **if-else if** digunakan ketika terdapat lebih dari dua kondisi yang ingin diperiksa.

**Contoh:**

```java
public class NilaiMahasiswa {
    public static void main(String[] args) {
        int nilai = 85;
        if (nilai >= 85) {
            System.out.println("Grade A");
        } else if (nilai >= 75) {
            System.out.println("Grade B");
        } else {
            System.out.println("Grade C");
        }
    }
}
```

Pernyataan kondisional sangat penting dalam pemrograman karena memungkinkan program merespons berbagai kondisi yang berbeda. Dengan menggunakan struktur ini, program dapat membuat keputusan secara otomatis berdasarkan data yang diberikan.

## 1.11 Pengenalan Array

Array adalah struktur data yang digunakan untuk menyimpan beberapa nilai dalam satu variabel dengan tipe data yang sama. Dengan array, kita tidak perlu membuat banyak variabel terpisah untuk menyimpan data yang sejenis, seperti nilai mahasiswa atau daftar nama.

Dalam Java, setiap elemen array memiliki indeks yang dimulai dari **0**. Artinya, elemen pertama berada pada indeks 0, elemen kedua pada indeks 1, dan seterusnya.

### 1.11.1 Deklarasi Array

Array dapat dideklarasikan dengan cara berikut:

```java
tipeData[] namaArray;
```

**Contoh:**

```java
int[] nilai;
```

Array tersebut dapat diisi dengan nilai seperti berikut:

```java
int[] nilai = {80, 85, 90, 75, 88};
```

### 1.11.2 Mengakses Elemen Array

Setiap elemen array dapat diakses menggunakan indeks.

**Contoh program:**

```java
public class ContohArray {
    public static void main(String[] args) {
        int[] nilai = {80, 85, 90, 75, 88};
        System.out.println("Nilai pertama : " + nilai[0]);
        System.out.println("Nilai kedua : " + nilai[1]);
        System.out.println("Nilai ketiga : " + nilai[2]);
    }
}
```

**Output:**

```text
Nilai pertama : 80
Nilai kedua : 85
Nilai ketiga : 90
```

### 1.11.3 Array dengan Perulangan

Array sering digunakan bersama perulangan untuk menampilkan semua elemen secara otomatis.

**Contoh program:**

```java
public class ArrayPerulangan {
    public static void main(String[] args) {
        String[] mahasiswa = {
            "Andi",
            "Budi",
            "Citra",
            "Dewi",
            "Rafi"
        };
        for (int i = 0; i < mahasiswa.length; i++) {
            System.out.println("Mahasiswa ke-" + (i+1) + " : " +
                    mahasiswa[i]);
        }
    }
}
```

**Output:**

```text
Mahasiswa ke-1 : Andi
Mahasiswa ke-2 : Budi
Mahasiswa ke-3 : Citra
Mahasiswa ke-4 : Dewi
Mahasiswa ke-5 : Rafi
```

Dengan menggunakan array, pengelolaan data dalam program menjadi lebih terstruktur dan efisien. Struktur data ini sering digunakan dalam berbagai aplikasi, seperti menyimpan nilai mahasiswa, daftar mata kuliah, atau data lainnya yang memiliki tipe yang sama.

## 1.12 Tugas Percobaan

### Percobaan 1

Buat program Java yang menampilkan biodata mahasiswa ITERA.

### Percobaan 2

Buat program Java yang menghitung dua bilangan menggunakan operator aritmatika.

### Percobaan 3

Buat program yang menentukan apakah mahasiswa lulus atau tidak berdasarkan nilai.

```text
nilai >= 75  → Lulus
nilai < 75   → Tidak Lulus
```

### Percobaan 4

Buat array berisi **5 nama mahasiswa Informatika ITERA** lalu tampilkan menggunakan perulangan.

## 1.13 Pertanyaan Diskusi

1. Apa yang dimaksud dengan Java Virtual Machine?
2. Mengapa Java disebut platform independent?
3. Jelaskan fungsi variabel dalam program.
4. Apa perbedaan array dan variabel biasa?

## 1.14 Tugas Laporan Praktikum

Mahasiswa diminta membuat laporan praktikum dengan format berikut.

### 1. Cover

Berisi:

- Judul praktikum
- Nama
- NIM
- Program Studi
- Mata Kuliah
- Dosen Pengampu
- Kelas

### 2. Tujuan Praktikum

### 3. Alat dan Bahan

### 4. Langkah Percobaan

- Lakukan percobaan pada sub bab 1.12

### 5. Source Code

Lampirkan setiap source code yang dibuat

### 6. Hasil Output Program

Tampilkan setiap outputnya.

### 7. Analisis Program

- Berikan penjelasan untuk setiap percobaan

### 8. Kesimpulan

Laporan dikumpulkan dalam bentuk **PDF** melalui GCR yang disediakan asisten praktikum.

# PERTEMUAN 2 — KONSEP DASAR PEMROGRAMAN BERORIENTASI OBJEK

## 2.1 Pendahuluan

Pada Pertemuan 1, mahasiswa telah mempelajari dasar-dasar Java, seperti tipe data, variabel, operator, struktur kondisional, perulangan, dan array. Dasar tersebut sangat penting karena menjadi bekal awal sebelum masuk ke inti mata kuliah Pemrograman Berorientasi Objek.

Pada Pertemuan 2 ini, pembahasan mulai masuk ke cara berpikir **berorientasi objek**. Jika pada pemrograman dasar kita lebih banyak fokus pada langkah-langkah program, maka pada pemrograman berorientasi objek kita mulai melihat program sebagai kumpulan objek yang saling berinteraksi untuk menyelesaikan suatu masalah.

Dengan memahami konsep ini, mahasiswa tidak hanya belajar menulis kode yang berjalan, tetapi juga belajar membangun program yang lebih rapi, terstruktur, dan mudah dikembangkan. Karena itu, Pertemuan 2 menjadi jembatan penting antara dasar Java dan materi inti PBO pada bab-bab berikutnya.

## 2.2 Tujuan Pembelajaran

Setelah menyelesaikan praktikum pada bab ini, mahasiswa diharapkan mampu memahami konsep dasar pemrograman berorientasi objek dan mengimplementasikannya dalam program Java sederhana.

Secara lebih rinci, mahasiswa diharapkan mampu:

1. Menjelaskan pengertian pemrograman berorientasi objek.
2. Menjelaskan karakteristik dasar OOP.
3. Memahami konsep class dan object.
4. Memahami atribut, method, field, dan constructor.
5. Menggunakan modifier sederhana pada class, atribut, dan method.
6. Menggunakan keyword `this` pada program Java.
7. Membuat program berbasis objek dengan contoh yang dekat dengan lingkungan ITERA.

## 2.3 Pengenalan Pemrograman Berorientasi Objek

Pemrograman berorientasi objek atau **Object Oriented Programming (OOP)** adalah pendekatan pemrograman yang memodelkan program sebagai kumpulan objek. Setiap objek memiliki data dan perilaku, lalu objek-objek tersebut dapat saling berinteraksi untuk menjalankan fungsi program.

Dalam pendekatan ini, kita tidak hanya memikirkan “langkah apa yang harus dikerjakan program”, tetapi juga memikirkan “objek apa saja yang ada di dalam sistem”. Misalnya, jika kita ingin membuat sistem akademik sederhana di ITERA, maka kita bisa memikirkan objek seperti **Mahasiswa**, **Dosen**, **MataKuliah**, dan **Kelas**.

Pendekatan ini membuat program lebih mudah dipahami karena strukturnya lebih dekat dengan dunia nyata. Kita terbiasa mengenal entitas seperti mahasiswa, dosen, ruang kelas, atau laboratorium, sehingga konsep class dan object biasanya terasa lebih masuk akal dibanding hanya melihat program sebagai kumpulan instruksi.

## 2.4 Karakteristik Dasar OOP

Pemrograman berorientasi objek memiliki beberapa karakteristik utama. Pada tahap awal, mahasiswa belum perlu menghafal semuanya secara terlalu teknis, tetapi perlu memahami gambaran besarnya terlebih dahulu.

### 2.4.1 Abstraksi

Abstraksi adalah proses mengambil hal-hal yang penting dari suatu objek dan mengabaikan detail yang belum diperlukan. Dengan abstraksi, kita fokus pada ciri dan perilaku utama dari suatu objek.

Sebagai contoh, jika kita membuat class `Mahasiswa`, maka kita cukup mengambil atribut penting seperti `nama`, `nim`, dan `prodi`. Kita tidak perlu langsung memasukkan semua hal tentang mahasiswa, misalnya nomor sepatu, warna tas, atau tempat duduk favorit di kelas, karena itu tidak relevan untuk sistem yang sedang dibuat.

### 2.4.2 Enkapsulasi

Enkapsulasi adalah konsep membungkus data dan method ke dalam satu kesatuan, yaitu class. Konsep ini juga berkaitan dengan pembatasan akses terhadap data agar tidak bisa diubah sembarangan dari luar.

Sebagai contoh, data nilai mahasiswa sebaiknya tidak diubah langsung oleh sembarang bagian program. Data tersebut lebih aman jika diakses melalui method tertentu, seperti `setNilai()` atau `getNilai()`, sehingga class dapat mengatur bagaimana data digunakan.

### 2.4.3 Pewarisan (Inheritance)

Pewarisan adalah konsep di mana sebuah class dapat mewarisi atribut dan method dari class lain. Dengan cara ini, kita tidak perlu menulis ulang kode yang sebenarnya sudah dimiliki oleh class induk.

Misalnya, kita bisa memiliki class `CivitasAkademika` yang berisi atribut umum seperti `nama` dan `id`. Lalu dari class tersebut dapat diturunkan class `Mahasiswa` dan `Dosen`, karena keduanya sama-sama bagian dari civitas akademika.

### 2.4.4 Polymorphism

Polymorphism berarti satu bentuk dapat memiliki banyak perilaku. Dalam Java, konsep ini sering terlihat pada method dengan nama yang sama tetapi memiliki perilaku berbeda sesuai konteks.

Sebagai contoh sederhana, method `tampilkanInfo()` pada class `Mahasiswa` dan `Dosen` bisa memiliki isi yang berbeda. Nama method-nya sama, tetapi hasil yang ditampilkan bisa menyesuaikan jenis objeknya.

### 2.4.5 Reusability

Reusability berarti kode yang sudah dibuat dapat digunakan kembali. Ini adalah salah satu keuntungan besar dari OOP, karena programmer tidak perlu selalu memulai dari nol ketika membuat program baru.

Misalnya, class `Mahasiswa` yang dibuat untuk latihan praktikum bisa dikembangkan lagi untuk tugas besar, mini project, atau sistem akademik yang lebih lengkap. Dengan demikian, kode yang sudah ditulis tidak terbuang percuma.

### 2.4.6 Message atau Komunikasi Antarobjek

Dalam OOP, objek tidak bekerja sendirian. Objek saling berinteraksi melalui pemanggilan method, dan interaksi ini dapat dipahami sebagai pengiriman pesan dari satu objek ke objek lain.

Contohnya, objek `Mahasiswa` dapat memanggil method pada objek `MataKuliah` untuk melihat nama mata kuliah yang diambil. Jadi, program bukan hanya kumpulan data, tetapi juga kumpulan objek yang saling bekerja sama.

## 2.5 Class

Class adalah cetak biru atau rancangan untuk membuat objek. Di dalam class, kita mendefinisikan data apa saja yang dimiliki objek dan perilaku apa saja yang bisa dilakukan objek tersebut.

Jika dianalogikan dengan dunia nyata, class seperti rancangan umum, sedangkan object adalah bentuk nyatanya. Misalnya, class `Mahasiswa` adalah rancangan umum, sedangkan `andi`, `budi`, dan `siti` adalah object yang dibuat dari class tersebut.

Bentuk umum penulisan class di Java adalah sebagai berikut:

```java
class NamaClass {
    // atribut
    // method
}
```

**Contoh class sederhana:**

```java
class Mahasiswa {
    String nama;
    String nim;
    String prodi;
}
```

Pada contoh di atas, class Mahasiswa memiliki tiga atribut, yaitu `nama`, `nim`, dan `prodi`. Class ini belum memiliki method, tetapi sudah cukup untuk menunjukkan bahwa sebuah class dapat digunakan untuk menyimpan data yang berkaitan dengan suatu objek.

## 2.6 Object

Object adalah hasil instansiasi dari class. Jika class adalah cetak biru, maka object adalah hasil nyata yang dibuat berdasarkan cetak biru tersebut.

Sebagai contoh, dari class `Mahasiswa`, kita bisa membuat banyak object. Setiap object akan memiliki nilai atribut yang berbeda, meskipun semuanya berasal dari class yang sama.

**Contoh program:**

```java
class Mahasiswa {
    String nama;
    String nim;
    String prodi;
}
public class MainMahasiswa {
    public static void main(String[] args) {
        Mahasiswa mhs1 = new Mahasiswa();
        mhs1.nama = "Andi Saputra";
        mhs1.nim = "123140001";
        mhs1.prodi = "Informatika";
        System.out.println("Nama  : " + mhs1.nama);
        System.out.println("NIM   : " + mhs1.nim);
        System.out.println("Prodi : " + mhs1.prodi);
    }
}
```

**Output:**

```text
Nama  : Andi Saputra
NIM   : 123140001
Prodi : Informatika
```

Contoh di atas menunjukkan bahwa object `mhs1` dibuat dari class `Mahasiswa`. Setelah object dibuat, atribut-atributnya dapat diisi, lalu nilainya dapat ditampilkan ke layar.

## 2.7 Atribut dan Method

Dalam OOP, objek biasanya memiliki dua hal utama, yaitu **atribut** dan **method**. Atribut menyimpan data, sedangkan method mendefinisikan perilaku atau aksi yang bisa dilakukan objek.

Pada class `Mahasiswa`, atribut dapat berupa `nama`, `nim`, dan `prodi`. Sementara itu, method dapat berupa `tampilkanData()`, yang bertugas menampilkan isi atribut ke layar.

**Contoh program:**

```java
class Mahasiswa {
    String nama;
    String nim;
    String prodi;
    void tampilkanData() {
        System.out.println("Nama  : " + nama);
        System.out.println("NIM   : " + nim);
        System.out.println("Prodi : " + prodi);
    }
}
public class DemoMahasiswa {
    public static void main(String[] args) {
        Mahasiswa mhs1 = new Mahasiswa();
        mhs1.nama = "Citra Lestari";
        mhs1.nim = "123140002";
        mhs1.prodi = "Informatika";
        mhs1.tampilkanData();
    }
}
```

**Output:**

```text
Nama  : Citra Lestari
NIM   : 123140002
Prodi : Informatika
```

Dengan menambahkan method, class menjadi lebih terstruktur. Kita tidak perlu menulis `System.out.println()` berulang-ulang di `main`, karena tugas tersebut sudah dibungkus di dalam method `tampilkanData()`.

## 2.8 Field

Field adalah variabel yang menjadi anggota dari sebuah class. Dengan kata lain, field adalah atribut yang disimpan di dalam class untuk merepresentasikan data dari objek.

Pada praktik dasar, mahasiswa cukup memahami bahwa field adalah data milik class. Field dapat berupa data yang nilainya berbeda untuk setiap object, atau data yang nilainya sama untuk semua object jika menggunakan `static`.

**Contoh field biasa:**

```java
class Mahasiswa {
    String nama;
    String nim;
}
```

Pada contoh di atas, `nama` dan `nim` adalah field. Jika dibuat dua object berbeda, maka masing-masing object akan memiliki nilai `nama` dan `nim` sendiri.

**Contoh program:**

```java
class Laboratorium {
    String namaLab;
    int kapasitas;
}
public class DemoField {
    public static void main(String[] args) {
        Laboratorium lab1 = new Laboratorium();
        lab1.namaLab = "Lab Pemrograman";
        lab1.kapasitas = 40;
        System.out.println("Nama Lab  : " + lab1.namaLab);
        System.out.println("Kapasitas : " + lab1.kapasitas);
    }
}
```

## 2.9 Method

Method adalah sekumpulan instruksi yang diletakkan di dalam class untuk melakukan tugas tertentu. Dengan method, program menjadi lebih rapi karena suatu pekerjaan dapat dibungkus dalam satu bagian yang dapat dipanggil berulang kali.

Dalam Java, method bisa dibuat tanpa parameter, dengan parameter, dan bisa juga mengembalikan nilai. Pada tahap awal, mahasiswa perlu memahami ketiganya secara bertahap.

### 2.9.1 Method tanpa Parameter

Method tanpa parameter tidak membutuhkan nilai masukan saat dipanggil. Method seperti ini cocok untuk menampilkan informasi atau menjalankan tugas yang sudah tetap.

**Contoh:**

```java
public class ContohMethod1 {
    static void sapa() {
        System.out.println("Halo mahasiswa Informatika ITERA");
        System.out.println("Selamat belajar PBO");
    }
    public static void main(String[] args) {
        sapa();
    }
}
```

### 2.9.2 Method dengan Parameter

Method dengan parameter menerima masukan saat dipanggil. Dengan cara ini, method menjadi lebih fleksibel karena dapat digunakan untuk banyak data yang berbeda.

**Contoh:**

```java
public class ContohMethod2 {
    static void tampilNama(String nama) {
        System.out.println("Halo, " + nama);
    }
    public static void main(String[] args) {
        tampilNama("Rafi");
        tampilNama("Dewi");
    }
}
```

**Output:**

```text
Halo, Rafi
Halo, Dewi
```

### 2.9.3 Method dengan Nilai Kembalian

Method juga bisa mengembalikan nilai menggunakan `return`. Method seperti ini biasanya digunakan untuk perhitungan atau pengolahan data.

**Contoh:**

```java
public class ContohMethod3 {
    static int hitungJumlah(int a, int b) {
        return a + b;
    }
    public static void main(String[] args) {
        int hasil = hitungJumlah(10, 15);
        System.out.println("Hasil penjumlahan = " + hasil);
    }
}
```

Method sangat penting dalam OOP karena hampir semua perilaku objek didefinisikan melalui method. Semakin baik mahasiswa memahami method, semakin mudah juga memahami class dan object.

## 2.10 Java Modifier

Modifier adalah kata kunci yang digunakan untuk mengatur hak akses atau sifat dari class, atribut, dan method. Pada tahap awal, modifier yang paling penting untuk dipahami adalah `public`, `private`, dan `protected`, ditambah `static` dan `final` secara sederhana.

### 2.10.1 Public

Jika suatu class, atribut, atau method diberi modifier `public`, maka ia dapat diakses dari bagian program lain yang sesuai. Modifier ini biasanya digunakan pada method yang memang ingin dipakai dari luar class.

### 2.10.2 Private

Jika suatu atribut diberi modifier `private`, maka atribut tersebut tidak bisa diakses langsung dari luar class. Ini berguna untuk menjaga data agar lebih aman dan lebih terkontrol.

### 2.10.3 Protected

Modifier `protected` memberi akses yang lebih terbatas dibanding `public`, tetapi lebih longgar dibanding `private`. Pada tahap awal, mahasiswa cukup mengenal dulu bahwa `protected` sering dipakai ketika nanti masuk ke inheritance.

### 2.10.4 Static

Modifier `static` berarti anggota tersebut milik class, bukan milik object tertentu. Pada program awal, mahasiswa paling sering melihat `static` pada `main`.

### 2.10.5 Final

Modifier `final` berarti nilainya tidak bisa diubah lagi. Ini sering dipakai untuk konstanta.

**Contoh program sederhana:**

```java
class Kampus {
    public String namaKampus = "ITERA";
    private String lokasi = "Lampung Selatan";
    public void tampilkanInfo() {
        System.out.println("Nama Kampus : " + namaKampus);
        System.out.println("Lokasi      : " + lokasi);
    }
}
public class DemoModifier {
    public static void main(String[] args) {
        Kampus k = new Kampus();
        k.tampilkanInfo();
    }
}
```

Pada contoh di atas, `lokasi` dibuat `private`, sehingga lebih aman disimpan di dalam class. Data tersebut tetap bisa ditampilkan melalui method `tampilkanInfo()`.

## 2.11 Keyword this

Keyword `this` digunakan untuk merujuk pada object yang sedang aktif. Biasanya `this` dipakai ketika nama parameter sama dengan nama atribut, sehingga Java dapat membedakan mana atribut milik object dan mana parameter dari method atau constructor.

**Contoh program:**

```java
class Mahasiswa {
    String nama;
    String nim;
    void isiData(String nama, String nim) {
        this.nama = nama;
        this.nim = nim;
    }
    void tampilkanData() {
        System.out.println("Nama : " + nama);
        System.out.println("NIM  : " + nim);
    }
}
public class DemoThis {
    public static void main(String[] args) {
        Mahasiswa m1 = new Mahasiswa();
        m1.isiData("Budi Pratama", "123140003");
        m1.tampilkanData();
    }
}
```

**Output:**

```text
Nama : Budi Pratama
NIM  : 123140003
```

Jika `this` tidak digunakan pada kondisi seperti ini, Java akan lebih sulit membedakan atribut dan parameter yang memiliki nama sama. Karena itu, `this` sangat membantu agar kode tetap jelas dan mudah dibaca.

## 2.12 Constructor

Constructor adalah method khusus yang digunakan untuk menginisialisasi object saat object dibuat. Nama constructor harus sama dengan nama class, dan constructor tidak memiliki tipe data kembalian, bahkan `void` sekalipun.

Constructor sangat berguna karena object bisa langsung memiliki nilai awal saat dibuat. Dengan begitu, programmer tidak perlu selalu mengisi atribut satu per satu setelah object diciptakan.

**Contoh constructor sederhana:**

```java
class Mahasiswa {
    String nama;
    String nim;
    String prodi;
    Mahasiswa(String nama, String nim, String prodi) {
        this.nama = nama;
        this.nim = nim;
        this.prodi = prodi;
    }
    void tampilkanData() {
        System.out.println("Nama  : " + nama);
        System.out.println("NIM   : " + nim);
        System.out.println("Prodi : " + prodi);
    }
}
public class DemoConstructor {
    public static void main(String[] args) {
        Mahasiswa m1 = new Mahasiswa("Salsa Putri", "123140004",
                "Informatika");
        m1.tampilkanData();
    }
}
```

**Output:**

```text
Nama  : Salsa Putri
NIM   : 123140004
Prodi : Informatika
```

### 2.12.1 Constructor Default

Jika programmer tidak membuat constructor sendiri, Java dapat menyediakan constructor default. Constructor ini tidak memiliki parameter dan digunakan untuk membuat object dengan nilai atribut yang masih default.

**Contoh:**

```java
class Buku {
    String judul;
    String penulis;
}
public class DemoConstructorDefault {
    public static void main(String[] args) {
        Buku b1 = new Buku();
        b1.judul = "Pemrograman Java Dasar";
        b1.penulis = "Tim Praktikum";
        System.out.println("Judul   : " + b1.judul);
        System.out.println("Penulis : " + b1.penulis);
    }
}
```

### 2.12.2 Constructor Overloading

Satu class bisa memiliki lebih dari satu constructor, asalkan parameternya berbeda. Hal ini disebut constructor overloading.

**Contoh:**

```java
class MataKuliah {
    String namaMk;
    int sks;
    MataKuliah() {
        namaMk = "Pemrograman Berorientasi Objek";
        sks = 3;
    }
    MataKuliah(String namaMk, int sks) {
        this.namaMk = namaMk;
        this.sks = sks;
    }
    void tampilkanData() {
        System.out.println("Mata Kuliah : " + namaMk);
        System.out.println("SKS         : " + sks);
    }
}
public class DemoOverloadingConstructor {
    public static void main(String[] args) {
        MataKuliah mk1 = new MataKuliah();
        MataKuliah mk2 = new MataKuliah("Struktur Data", 3);
        mk1.tampilkanData();
        System.out.println();
        mk2.tampilkanData();
    }
}
```

## 2.13 Contoh Program Lengkap

Berikut contoh program yang menggabungkan class, object, method, constructor, dan `this` dalam satu program sederhana bertema data mahasiswa ITERA.

```java
class Mahasiswa {
    String nama;
    String nim;
    String prodi;
    int semester;
    Mahasiswa(String nama, String nim, String prodi, int semester) {
        this.nama = nama;
        this.nim = nim;
        this.prodi = prodi;
        this.semester = semester;
    }
    void tampilkanData() {
        System.out.println("Nama     : " + nama);
        System.out.println("NIM      : " + nim);
        System.out.println("Prodi    : " + prodi);
        System.out.println("Semester : " + semester);
    }
    void sapa() {
        System.out.println("Halo, saya " + nama + " dari Prodi " + prodi
                + ".");
    }
}
public class DemoMahasiswaITERA {
    public static void main(String[] args) {
        Mahasiswa m1 = new Mahasiswa("Andi Saputra", "123140001",
                "Informatika", 2);
        Mahasiswa m2 = new Mahasiswa("Dewi Lestari", "123140002",
                "Informatika", 2);
        m1.tampilkanData();
        m1.sapa();
        System.out.println();
        m2.tampilkanData();
        m2.sapa();
    }
}
```

Contoh ini sangat baik untuk latihan praktikum karena mahasiswa dapat langsung melihat bentuk nyata OOP. Dalam satu program saja, mereka bisa melihat bagaimana object dibuat, bagaimana constructor mengisi data, dan bagaimana method dipanggil untuk menampilkan perilaku objek.

## 2.14 Tugas Percobaan

### 2.14.1 Percobaan 1

Buatlah class `Mahasiswa` yang memiliki atribut:

- `nama`
- `nim`
- `prodi`

Lalu buat satu object dari class tersebut dan tampilkan seluruh datanya ke layar.

### 2.14.2 Percobaan 2

Modifikasi class `Mahasiswa` dengan menambahkan method `tampilkanData()`. Gunakan method tersebut untuk menampilkan data object yang telah dibuat.

### 2.14.3 Percobaan 3

Buatlah class `Dosen` yang memiliki atribut:

- `nama`
- `nidn`
- `prodi`

Tambahkan method `tampilkanData()` lalu buat dua object dosen yang berbeda.

### 2.14.4 Percobaan 4

Buatlah class `MataKuliah` yang memiliki:

- atribut `namaMk`
- atribut `sks`
- constructor untuk mengisi data
- method `tampilkanData()`

Lalu buat dua object mata kuliah dengan data yang berbeda dan tampilkan hasilnya.

### 2.14.5 Percobaan 5

Buatlah program sederhana bertema **Data Mahasiswa ITERA** yang memiliki ketentuan berikut:

1. Gunakan class `Mahasiswa`
2. Gunakan constructor untuk mengisi data
3. Gunakan method `tampilkanData()`
4. Buat minimal 3 object mahasiswa
5. Tampilkan seluruh data mahasiswa ke layar

## 2.15 Pertanyaan Diskusi

1. Apa yang dimaksud dengan pemrograman berorientasi objek?
2. Apa perbedaan antara class dan object?
3. Apa fungsi atribut dan method dalam sebuah class?
4. Mengapa constructor memudahkan pembuatan object?
5. Apa kegunaan keyword `this` dalam Java?
6. Apa perbedaan antara field dan variabel lokal?
7. Mengapa modifier `private` sering digunakan untuk atribut?
8. Mengapa pendekatan OOP dianggap lebih terstruktur dibanding pendekatan prosedural?

## 2.16 Tugas Laporan Praktikum

Mahasiswa diminta membuat laporan praktikum dengan format berikut. Format ini dibuat konsisten dengan pola pelaporan pada Pertemuan 1 agar alur praktikum tetap seragam.

### 1. Cover

Berisi:

- Judul praktikum
- Nama
- NIM
- Program Studi
- Mata Kuliah
- Dosen Pengampu
- Kelas

### 2. Tujuan Praktikum

Tuliskan tujuan praktikum Pertemuan 2 sesuai dengan materi yang dikerjakan.

### 3. Alat dan Bahan

Tuliskan perangkat yang digunakan, misalnya:

- Laptop atau PC
- JDK
- NetBeans
- Modul praktikum

### 4. Langkah Percobaan

Lakukan percobaan pada subbab **2.14 Tugas Percobaan**. Tuliskan langkah kerja setiap percobaan secara runtut, mulai dari membuat class, menulis kode, menjalankan program, hingga melihat output.

### 5. Source Code

Lampirkan setiap source code yang dibuat pada masing-masing percobaan. Source code harus rapi dan diberi nama file yang sesuai.

### 6. Hasil Output Program

Tampilkan hasil output dari setiap percobaan. Jika perlu, sertakan tangkapan layar hasil running program.

### 7. Analisis Program

Berikan penjelasan untuk setiap percobaan. Analisis minimal memuat:

- class yang dibuat
- atribut yang digunakan
- method yang digunakan
- object yang diinstansiasi
- hasil yang diperoleh dari program

### 8. Kesimpulan

Tuliskan kesimpulan singkat mengenai apa yang dipelajari pada praktikum Pertemuan 2. Kesimpulan sebaiknya menegaskan pemahaman mahasiswa tentang class, object, method, constructor, dan `this`.

Laporan dikumpulkan dalam bentuk **PDF** melalui GCR yang disediakan asisten praktikum.

## 2.17 Penutup

Pada Pertemuan 2 ini, mahasiswa mulai masuk ke inti dari pemrograman berorientasi objek. Materi seperti class, object, atribut, method, field, modifier, `this`, dan constructor merupakan pondasi yang sangat penting untuk bab-bab berikutnya.

Jika pondasi ini benar-benar dipahami, maka materi seperti encapsulation, inheritance, dan polymorphism pada pertemuan selanjutnya akan terasa jauh lebih mudah. Karena itu, mahasiswa sebaiknya tidak hanya membaca contoh, tetapi juga benar-benar mengetik ulang, menjalankan program, dan mencoba memodifikasi sendiri setiap percobaan yang ada.

# PERTEMUAN 3 — ENKAPSULASI DAN ACCESS MODIFIER

## 3.1 Pendahuluan

Pada Pertemuan 2, mahasiswa telah mempelajari konsep dasar pemrograman berorientasi objek, seperti class, object, atribut, method, constructor, dan penggunaan keyword `this`. Pada tahap tersebut, mahasiswa sudah mampu membuat program berbasis objek yang sederhana.

Namun, jika diperhatikan, pada contoh sebelumnya atribut dalam class masih bisa diakses langsung dari luar. Hal ini sebenarnya kurang baik jika program semakin besar, karena data bisa berubah tanpa kontrol dan berpotensi menimbulkan kesalahan.

Pada Pertemuan 3 ini, mahasiswa akan mempelajari bagaimana cara **melindungi data dalam object** agar tidak bisa diakses sembarangan. Konsep ini dikenal dengan istilah **enkapsulasi (encapsulation)**. Selain itu, mahasiswa juga akan belajar tentang **access modifier**, serta penggunaan **getter dan setter** untuk mengatur akses terhadap data.

## 3.2 Tujuan Pembelajaran

Setelah menyelesaikan praktikum pada bab ini, mahasiswa diharapkan mampu memahami dan menerapkan konsep enkapsulasi dalam program Java.

Secara lebih rinci, mahasiswa diharapkan mampu:

1. Menjelaskan pengertian enkapsulasi.
2. Menjelaskan fungsi access modifier dalam Java.
3. Membedakan `public`, `private`, dan `protected`.
4. Menggunakan getter dan setter.
5. Membuat program Java yang menerapkan enkapsulasi.
6. Melakukan validasi sederhana menggunakan setter.

## 3.3 Pengertian Enkapsulasi

Enkapsulasi adalah konsep dalam OOP yang digunakan untuk **membungkus data (atribut) dan method dalam satu class**, serta mengatur akses terhadap data tersebut.

Dengan enkapsulasi, data tidak bisa diubah secara sembarangan dari luar class. Akses terhadap data dilakukan melalui method tertentu, sehingga lebih aman dan terkontrol.

Sebagai contoh sederhana, bayangkan data nilai mahasiswa. Nilai tersebut tidak seharusnya bisa diubah langsung oleh siapa saja, tetapi harus melalui prosedur tertentu. Dalam program, hal ini dilakukan dengan cara membuat atribut menjadi `private`, lalu menyediakan method untuk mengaksesnya.

## 3.4 Mengapa Enkapsulasi Penting

Enkapsulasi memiliki beberapa manfaat penting dalam pemrograman.

Pertama, **melindungi data** agar tidak diubah secara sembarangan. Kedua, membuat program menjadi lebih rapi dan terstruktur karena akses data diatur melalui method. Ketiga, memudahkan pengembangan program karena perubahan pada data dapat dikontrol dari satu tempat.

Dengan menggunakan enkapsulasi, program juga menjadi lebih aman dan mudah dipelihara. Hal ini sangat penting terutama ketika program semakin besar dan kompleks.

## 3.5 Access Modifier dalam Java

Access modifier adalah kata kunci yang digunakan untuk mengatur **hak akses** terhadap class, atribut, dan method.

Beberapa access modifier yang umum digunakan adalah:

|**Modifier**|**Keterangan**|
|---|---|
|public|dapat diakses dari mana saja|
|private|hanya dapat diakses dalam class yang sama|
|protected|dapat diakses dalam package yang sama atau subclass|
|default|tanpa modifier, hanya dalam package yang sama|

Pada tahap awal, mahasiswa cukup fokus pada `public` dan `private`.

## 3.6 Modifier private

Modifier `private` digunakan untuk membuat atribut **tidak bisa diakses langsung dari luar class**.

**Contoh tanpa enkapsulasi:**

```java
class Mahasiswa {
    String nama;
    int nim;
}
```

Pada contoh di atas, atribut `nama` dan `nim` bisa diakses dan diubah langsung dari luar class, misalnya `m1.nim = -5;`. Data bisa menjadi tidak valid karena tidak ada yang mengontrolnya.

**Contoh dengan enkapsulasi (menggunakan `private`):**

```java
class Mahasiswa {
    private String nama;
    private int nim;
}
```

Jika atribut `private` diakses langsung dari luar class, Java akan menampilkan error:

```java
public class DemoPrivate {
    public static void main(String[] args) {
        Mahasiswa m1 = new Mahasiswa();
        m1.nama = "Andi";   // ERROR: nama has private access in Mahasiswa
    }
}
```

Sekarang atribut tidak bisa diakses langsung. Untuk mengaksesnya, diperlukan method khusus.

## 3.7 Getter dan Setter

Getter dan setter adalah method yang digunakan untuk **mengambil dan mengubah nilai atribut**.

- **Getter**

Getter digunakan untuk mengambil nilai atribut.

```java
public String getNama() {
    return nama;
}
```

- **Setter**

Setter digunakan untuk mengubah nilai atribut.

```java
public void setNama(String nama) {
    this.nama = nama;
}
```

**Contoh Program Lengkap**

```java
class Mahasiswa {
    private String nama;
    private String nim;
    public void setNama(String nama) {
        this.nama = nama;
    }
    public void setNim(String nim) {
        this.nim = nim;
    }
    public String getNama() {
        return nama;
    }
    public String getNim() {
        return nim;
    }
    public void tampilkanData() {
        System.out.println("Nama : " + nama);
        System.out.println("NIM  : " + nim);
    }
}
public class DemoMahasiswa {
    public static void main(String[] args) {
        Mahasiswa m1 = new Mahasiswa();
        m1.setNama("Andi Saputra");
        m1.setNim("123140001");
        m1.tampilkanData();
    }
}
```

## 3.8 Validasi dengan Setter

Salah satu kelebihan setter adalah bisa digunakan untuk **validasi data**.

**Contoh:**

```java
class Mahasiswa {
    private int semester;
    public void setSemester(int semester) {
        if (semester > 0) {
            this.semester = semester;
        } else {
            System.out.println("Semester tidak valid");
        }
    }
    public int getSemester() {
        return semester;
    }
}
```

Dengan cara ini, data yang tidak valid dapat dicegah sejak awal.

## 3.9 Contoh Studi Kasus

Program sederhana data mahasiswa ITERA:

```java
class Mahasiswa {
    private String nama;
    private String nim;
    private int semester;
    public void setNama(String nama) {
        this.nama = nama;
    }
    public void setNim(String nim) {
        this.nim = nim;
    }
    public void setSemester(int semester) {
        if (semester > 0) {
            this.semester = semester;
        }
    }
    public void tampilkanData() {
        System.out.println("Nama     : " + nama);
        System.out.println("NIM      : " + nim);
        System.out.println("Semester : " + semester);
    }
}
public class DemoITERA {
    public static void main(String[] args) {
        Mahasiswa m1 = new Mahasiswa();
        m1.setNama("Dewi Lestari");
        m1.setNim("123140002");
        m1.setSemester(2);
        m1.tampilkanData();
    }
}
```

## 3.10 Kesalahan Umum

Beberapa kesalahan yang sering terjadi:

- Semua atribut dibuat `public`
- Tidak menggunakan getter/setter
- Salah penulisan method getter/setter
- Lupa menggunakan `this`
- Setter tidak mengubah nilai atribut

## 3.11 Tugas Percobaan

### Percobaan 1

Buat class `Mahasiswa` dengan atribut `nama`, `nim`, dan `prodi` (private), lalu buat getter dan setter.

### Percobaan 2

Buat program untuk menampilkan data mahasiswa menggunakan method.

### Percobaan 3

Tambahkan atribut `semester` dan buat validasi agar tidak boleh kurang dari 1.

### Percobaan 4

Buat class `MataKuliah` dengan atribut private dan method getter setter.

### Percobaan 5

Buat program lengkap data mahasiswa ITERA minimal 3 object.

## 3.12 Pertanyaan Diskusi

1. Apa itu enkapsulasi?
2. Mengapa atribut sebaiknya dibuat private?
3. Apa fungsi getter dan setter?
4. Apa keuntungan enkapsulasi dalam program?
5. Bagaimana setter bisa digunakan untuk validasi?

## 3.13 Tugas Laporan Praktikum

Format laporan sama seperti Pertemuan sebelumnya:

1. Cover
2. Tujuan Praktikum
3. Alat dan Bahan
4. Langkah Percobaan
5. Source Code
6. Output Program
7. Analisis
8. Kesimpulan

Laporan dikumpulkan dalam bentuk PDF.

## 3.14 Penutup

Pada Pertemuan 3 ini mahasiswa telah mempelajari konsep enkapsulasi yang merupakan salah satu dasar penting dalam OOP. Dengan memahami enkapsulasi, mahasiswa dapat membuat program yang lebih aman, rapi, dan terstruktur.

Pemahaman ini akan menjadi bekal penting untuk mempelajari materi selanjutnya seperti **inheritance dan polymorphism** pada bab berikutnya.

# PERTEMUAN 4 — INHERITANCE (PEWARISAN)

## 4.1 Pendahuluan

Pada Pertemuan 3, mahasiswa telah mempelajari konsep **enkapsulasi**, yaitu bagaimana melindungi data dalam class menggunakan access modifier serta mengaksesnya melalui getter dan setter. Dengan konsep tersebut, program menjadi lebih aman dan terstruktur.

Pada Pertemuan 4 ini, mahasiswa akan mempelajari konsep **inheritance (pewarisan)**. Konsep ini memungkinkan sebuah class untuk mewarisi atribut dan method dari class lain. Dengan inheritance, kita tidak perlu menulis ulang kode yang sama, sehingga program menjadi lebih efisien dan mudah dikembangkan.

Inheritance merupakan salah satu pilar utama dalam pemrograman berorientasi objek. Pemahaman yang baik pada bab ini akan sangat membantu mahasiswa dalam memahami konsep lanjutan seperti polymorphism pada bab berikutnya.

## 4.2 Tujuan Pembelajaran

Setelah menyelesaikan praktikum pada bab ini, mahasiswa diharapkan mampu memahami dan mengimplementasikan konsep inheritance dalam Java.

Secara lebih rinci, mahasiswa diharapkan mampu:

1. Menjelaskan konsep inheritance dalam OOP
2. Memahami hubungan superclass dan subclass
3. Menggunakan keyword `extends`
4. Mengakses atribut dan method dari class induk
5. Menggunakan keyword `super`
6. Menerapkan inheritance dalam studi kasus sederhana
7. Memahami manfaat penggunaan inheritance

## 4.3 Pengertian Inheritance

Inheritance atau pewarisan adalah konsep di mana sebuah class dapat **mewarisi atribut dan method dari class lain**.

Class yang diwarisi disebut:

- **Superclass (parent class / class induk)**

Class yang mewarisi disebut:

- **Subclass (child class / class turunan)**

Dengan inheritance, subclass dapat menggunakan kembali kode dari superclass tanpa harus menulis ulang. Hal ini membuat program menjadi lebih ringkas dan terstruktur.

## 4.4 Analogi Sederhana Inheritance

Agar konsep inheritance lebih mudah dipahami, perhatikan contoh pada dunia hewan. Misalnya, kita memiliki sebuah class **Hewan** yang berisi data dan perilaku umum yang dimiliki banyak hewan.

Semua hewan pada contoh ini memiliki atribut umum seperti:

- nama
- umur

Semua hewan juga memiliki method umum seperti:

- `makan()`
- `tidur()`

Namun, beberapa hewan memiliki ciri atau perilaku tambahan yang berbeda.

**Kucing memiliki tambahan:**

- ras
- `mengeong()`
- `berburu()`

**Anjing memiliki tambahan:**

- jenisGolongan
- `menggonggong()`
- `bermain()`

Dalam hal ini:

- **Hewan** → superclass (kelas induk)
- **Kucing** dan **Anjing** → subclass (kelas anak)

Artinya, class **Kucing** dan **Anjing** mewarisi atribut dan method umum dari class **Hewan**, lalu menambahkan atribut dan method yang menjadi ciri khusus masing-masing.

Inheritance juga bisa terjadi secara bertingkat. Misalnya, dari class **Anjing** dapat dibuat lagi class **GoldenRetriever**.

**GoldenRetriever memiliki tambahan:**

- `berenang()`
- `mengambil()`

Dalam hal ini:

- **Anjing** → superclass bagi `GoldenRetriever`
- **GoldenRetriever** → subclass dari `Anjing`

Karena `GoldenRetriever` adalah turunan dari `Anjing`, maka class ini mewarisi semua yang dimiliki `Anjing`. Selain itu, karena `Anjing` juga merupakan turunan dari `Hewan`, maka `GoldenRetriever` secara tidak langsung juga mewarisi atribut dan method dari `Hewan`.

Untuk mempermudah memahami hubungan antara class induk dan class turunan, perhatikan ilustrasi berikut.

<!-- GAMBAR 4.1: ganti dengan gambar asli dari PDF (simpan di public/images/pbo/gambar-4-1.png) -->

**Gambar 4.1 Konsep Inheritance (Pewarisan) dalam Pemrograman Java**

Gambar ini menunjukkan bahwa class **Hewan** menjadi class induk yang memiliki atribut dan method umum. Class **Kucing** dan **Anjing** menjadi class turunan yang mewarisi bagian umum tersebut, lalu menambahkan bagian khusus masing-masing. Sementara itu, class **GoldenRetriever** merupakan turunan dari **Anjing**, sehingga contoh ini juga menunjukkan **pewarisan bertingkat** (*multilevel inheritance* ).

Dari ilustrasi tersebut dapat dilihat bahwa kita tidak perlu menulis ulang atribut dan method yang sama pada setiap class. Cukup definisikan bagian yang umum pada class induk, lalu tambahkan bagian yang khusus pada class turunannya.

## 4.5 Syntax Inheritance dalam Java

Setelah memahami konsep inheritance melalui analogi pada subbab sebelumnya, sekarang kita akan melihat bagaimana konsep tersebut ditulis dalam bentuk program Java.

Dalam Java, inheritance digunakan dengan keyword: **`extends`**

Keyword `extends` digunakan untuk menyatakan bahwa sebuah class merupakan turunan dari class lain.

### 4.5.1 Bentuk Umum Inheritance

Bentuk dasar penulisan inheritance dalam Java adalah sebagai berikut:

```java
class NamaSubclass extends NamaSuperclass {
    // atribut dan method tambahan
}
```

Artinya, `NamaSubclass` akan mewarisi semua atribut dan method dari `NamaSuperclass`.

### 4.5.2 Contoh Sederhana

Perhatikan contoh berikut:

```java
class Hewan {
    String nama;
}
```

Kemudian kita membuat class turunan:

```java
class Kucing extends Hewan {
    String ras;
}
```

Pada contoh ini, class `Kucing` secara otomatis memiliki atribut `nama` dari class `Hewan`, walaupun atribut tersebut tidak ditulis ulang di dalam class `Kucing` serta menambahkan atribut baru yaitu `ras`.

## 4.6 Contoh Program Dasar Inheritance

Setelah memahami analogi inheritance melalui class **Hewan**, **Kucing**, dan **Anjing**, sekarang kita masuk ke bentuk programnya di Java. Pada contoh pertama ini, kita mulai dari bentuk yang paling sederhana terlebih dahulu agar mahasiswa memahami hubungan antara class induk dan class turunan.

Class **Hewan** akan menjadi superclass. Class ini berisi atribut umum seperti `nama` dan `umur`, serta method umum seperti `makan()` dan `tidur()`.

### Superclass Hewan

```java
class Hewan {
    String nama;
    int umur;
    void makan() {
        System.out.println(nama + " sedang makan.");
    }
    void tidur() {
        System.out.println(nama + " sedang tidur.");
    }
}
```

Pada class `Hewan`, kita mendefinisikan hal-hal yang umum dimiliki banyak hewan. Jadi, jika nanti ada class `Kucing` atau `Anjing`, kita tidak perlu menulis ulang atribut `nama`, `umur`, method `makan()`, dan `tidur()`.

**subclass Kucing**

```java
class Kucing extends Hewan {
    String ras;
    void mengeong() {
        System.out.println(nama + " sedang mengeong.");
    }
    void berburu() {
        System.out.println(nama + " sedang berburu tikus.");
    }
}
```

Pada contoh ini, class `Kucing` mewarisi semua yang ada di class `Hewan`. Jadi, object `Kucing` otomatis memiliki atribut `nama` dan `umur`, serta method `makan()` dan `tidur()`, walaupun keduanya tidak ditulis ulang di dalam class `Kucing`.

### Program Utama

```java
public class DemoInheritanceHewan {
    public static void main(String[] args) {
        Kucing k1 = new Kucing();
        k1.nama = "Milo";
        k1.umur = 2;
        k1.ras = "Persia";
        System.out.println("Nama Kucing : " + k1.nama);
        System.out.println("Umur        : " + k1.umur + " tahun");
        System.out.println("Ras         : " + k1.ras);
        k1.makan();
        k1.tidur();
        k1.mengeong();
        k1.berburu();
    }
}
```

**Output:**

```text
Nama Kucing : Milo
Umur        : 2 tahun
Ras         : Persia
Milo sedang makan.
Milo sedang tidur.
Milo sedang mengeong.
Milo sedang berburu tikus.
```

Dari contoh ini, terlihat bahwa object `k1` dari class `Kucing` dapat menggunakan method milik class `Hewan`. Inilah inti inheritance, yaitu subclass dapat langsung menggunakan atribut dan method yang diwarisi dari superclass.

## 4.7 Memahami Alur Pewarisan

Pada tahap ini, mahasiswa perlu benar-benar memahami alurnya. Saat kita menulis `class Kucing extends Hewan`, artinya class `Kucing` adalah turunan dari class `Hewan`.

Akibatnya, semua anggota dari class `Hewan` yang dapat diwariskan akan menjadi milik class `Kucing`. Jadi, object `Kucing` tidak hanya memiliki ciri khas kucing, tetapi juga membawa semua sifat umum yang sudah didefinisikan pada `Hewan`.

Alurnya dapat dipahami seperti ini:

- `Hewan` menyimpan hal-hal umum
- `Kucing` mewarisi hal-hal umum dari `Hewan`
- `Kucing` menambahkan hal-hal khusus miliknya sendiri

Dengan cara ini, program menjadi lebih rapi. Kita tidak perlu menulis method `makan()` dan `tidur()` berulang kali untuk `Kucing`, `Anjing`, atau class hewan lain.

## 4.8 Menambahkan Subclass Lain: Anjing

Agar konsep inheritance semakin jelas, sekarang kita tambahkan subclass lain, yaitu `Anjing`. Class ini juga mewarisi atribut dan method dari `Hewan`, tetapi memiliki atribut dan method khusus yang berbeda dengan `Kucing`.

### 4.8.1 Class Anjing

```java
class Anjing extends Hewan {
    String jenisGolongan;
    void menggonggong() {
        System.out.println(nama + " sedang menggonggong.");
    }
    void bermain() {
        System.out.println(nama + " sedang bermain bola.");
    }
}
```

### 4.8.2 Program Utama

```java
public class DemoInheritanceAnjing {
    public static void main(String[] args) {
        Anjing a1 = new Anjing();
        a1.nama = "Buddy";
        a1.umur = 3;
        a1.jenisGolongan = "Anjing Penjaga";
        System.out.println("Nama Anjing      : " + a1.nama);
        System.out.println("Umur             : " + a1.umur + " tahun");
        System.out.println("Jenis Golongan   : " + a1.jenisGolongan);
        a1.makan();
        a1.tidur();
        a1.menggonggong();
        a1.bermain();
    }
}
```

**Output:**

```text
Nama Anjing      : Buddy
Umur             : 3 tahun
Jenis Golongan   : Anjing Penjaga
Buddy sedang makan.
Buddy sedang tidur.
Buddy sedang menggonggong.
Buddy sedang bermain bola.
```

Dari contoh ini, mahasiswa bisa membandingkan dua subclass berbeda yang berasal dari superclass yang sama. Walaupun `Kucing` dan `Anjing` sama-sama berasal dari `Hewan`, keduanya tetap bisa memiliki karakteristik yang berbeda.

## 4.9 Keyword Super

Setelah memahami bahwa subclass mewarisi anggota dari superclass, langkah berikutnya adalah mengenal keyword `super`. Keyword `super` digunakan untuk mengakses anggota milik superclass dari dalam subclass.

Keyword ini sangat berguna, terutama ketika kita ingin memanggil constructor superclass atau mengakses method superclass secara eksplisit. Pada tahap awal, mahasiswa cukup memahami dua penggunaan penting, yaitu untuk constructor dan method.

### 4.9.1 Super untuk Memanggil Constructor Superclass

Perhatikan contoh berikut.

```java
class Hewan {
    String nama;
    int umur;
    Hewan(String nama, int umur) {
        this.nama = nama;
        this.umur = umur;
    }
}
```

Pada class `Hewan`, kita membuat constructor yang langsung mengisi `nama` dan `umur`. Sekarang, jika kita membuat class `Kucing`, kita bisa menggunakan `super()` untuk memanggil constructor tersebut.

```java
class Kucing extends Hewan {
    String ras;
    Kucing(String nama, int umur, String ras) {
        super(nama, umur);
        this.ras = ras;
    }
    void tampilData() {
        System.out.println("Nama : " + nama);
        System.out.println("Umur : " + umur + " tahun");
        System.out.println("Ras  : " + ras);
    }
}
public class DemoSuperConstructor {
    public static void main(String[] args) {
        Kucing k1 = new Kucing("Milo", 2, "Persia");
        k1.tampilData();
    }
}
```

**Output:**

```text
Nama : Milo
Umur : 2 tahun
Ras  : Persia
```

Pada contoh ini, `super(nama, umur);` berarti class `Kucing` memanggil constructor milik class `Hewan`. Jadi, pengisian atribut umum tidak perlu ditulis ulang.

## 4.10 Super untuk Memanggil Method Superclass

Selain constructor, `super` juga bisa digunakan untuk memanggil method dari superclass.

```java
class Hewan {
    void info() {
        System.out.println("Ini adalah hewan.");
    }
}
class Anjing extends Hewan {
    void info() {
        super.info();
        System.out.println("Anjing adalah turunan dari class Hewan.");
    }
}
public class DemoSuperMethod {
    public static void main(String[] args) {
        Anjing a1 = new Anjing();
        a1.info();
    }
}
```

**Output:**

```text
Ini adalah hewan.
Anjing adalah turunan dari class Hewan.
```

## 4.11 Inheritance Bertingkat (Multilevel Inheritance)

Pada ilustrasi sebelumnya, class **GoldenRetriever** merupakan turunan dari class **Anjing**. Ini adalah contoh **inheritance bertingkat**, yaitu ketika sebuah subclass diturunkan lagi menjadi subclass baru.

Alurnya menjadi seperti ini:

- `Hewan` → class induk paling umum
- `Anjing` → turunan dari `Hewan`
- `GoldenRetriever` → turunan dari `Anjing`

Artinya, `GoldenRetriever` mewarisi:

- atribut dan method dari `Anjing`
- atribut dan method dari `Hewan` secara tidak langsung

## 4.12 Contoh Program

```java
class Hewan {
    String nama;
    int umur;
    void makan() {
        System.out.println(nama + " sedang makan.");
    }
}
class Anjing extends Hewan {
    void menggonggong() {
        System.out.println(nama + " sedang menggonggong.");
    }
}
class GoldenRetriever extends Anjing {
    void berenang() {
        System.out.println(nama + " suka berenang.");
    }
    void mengambil() {
        System.out.println(nama + " sedang mengambil bola.");
    }
}
public class DemoMultilevelInheritance {
    public static void main(String[] args) {
        GoldenRetriever g1 = new GoldenRetriever();
        g1.nama = "Max";
        g1.umur = 4;
        System.out.println("Nama : " + g1.nama);
        System.out.println("Umur : " + g1.umur + " tahun");
        g1.makan();
        g1.menggonggong();
        g1.berenang();
        g1.mengambil();
    }
}
```

**Output:**

```text
Nama : Max
Umur : 4 tahun
Max sedang makan.
Max sedang menggonggong.
Max suka berenang.
Max sedang mengambil bola.
```

Contoh ini sangat penting karena menunjukkan bahwa inheritance bisa membentuk hierarki yang bertingkat. Mahasiswa perlu memahami bahwa semakin ke bawah, class biasanya menjadi semakin spesifik.

## 4.13 Keuntungan Inheritance

Inheritance memiliki beberapa keuntungan yang sangat penting dalam pemrograman berorientasi objek.

### 1. Mengurangi Duplikasi Kode

Jika semua hewan punya method `makan()` dan `tidur()`, maka cukup tulis sekali di class `Hewan`. Kita tidak perlu menyalin method yang sama ke class `Kucing`, `Anjing`, dan `GoldenRetriever`.

### 2. Membuat Program Lebih Rapi

Dengan inheritance, bagian yang umum diletakkan di superclass, sedangkan bagian khusus diletakkan di subclass. Akibatnya, struktur class menjadi lebih jelas dan lebih mudah dipahami.

### 3. Memudahkan Pengembangan Program

Jika suatu saat kita ingin menambahkan method `bernapas()` untuk semua hewan, kita cukup menambahkannya di class `Hewan`. Semua subclass akan otomatis mendapat method tersebut.

### 4. Mendukung Reusability

Kode yang sudah ditulis pada superclass dapat digunakan kembali oleh subclass. Inilah salah satu kekuatan utama OOP, yaitu memanfaatkan kembali kode yang sudah ada.

## 4.14 Hal-Hal yang Perlu Diperhatikan

Walaupun inheritance sangat berguna, penggunaannya tetap harus tepat. Tidak semua hubungan antar class harus dibuat menggunakan inheritance.

Inheritance cocok dipakai jika hubungan antar class benar-benar menunjukkan hubungan **“adalah”** atau **“is-a”**. Misalnya:

- Kucing adalah hewan
- Anjing adalah hewan
- GoldenRetriever adalah anjing

Sebaliknya, kalau hubungannya hanya “memiliki” atau “has-a”, maka biasanya lebih cocok menggunakan relasi lain seperti agregasi atau komposisi, yang akan dibahas di bab lain.

## 4.15 Kesalahan Umum pada Inheritance

Pada saat belajar inheritance, ada beberapa kesalahan yang sering dilakukan mahasiswa.

### 1. Salah Memahami Hubungan Class

Mahasiswa kadang membuat inheritance hanya karena ingin “menghubungkan” dua class. Padahal inheritance hanya tepat jika memang ada hubungan “adalah”.

### 2. Menulis Ulang Atribut dan Method yang Sudah Diwarisi

Jika `Kucing` sudah mewarisi `nama` dan `umur` dari `Hewan`, maka atribut itu tidak perlu ditulis ulang di class `Kucing`, kecuali memang ada alasan khusus.

### 3. Lupa Menggunakan extends

Tanpa keyword `extends`, Java tidak akan menganggap class tersebut sebagai subclass.

### 4. Tidak Memahami Fungsi super

Mahasiswa kadang memakai `super` hanya menyalin contoh tanpa paham kegunaannya. Padahal `super` dipakai untuk mengakses constructor atau method dari superclass.

### 5. Mencampur Contoh yang Tidak Konsisten

Saat belajar inheritance, akan lebih mudah jika contoh dibuat dalam satu tema yang sama. Karena itu, pada Pertemuan 4 ini semua contoh dibuat tetap dalam konteks hewan agar alurnya tidak membingungkan.

## 4.16 Tugas Percobaan

### Percobaan 1

Buatlah class `Hewan` yang memiliki atribut:

- `nama`
- `umur`

Tambahkan method:

- `makan()`
- `tidur()`

### Percobaan 2

Buatlah class `Kucing` yang merupakan turunan dari `Hewan`. Tambahkan:

- atribut `ras`
- method `mengeong()`
- method `berburu()`

Lalu buat satu object `Kucing` dan tampilkan semua data serta method yang dimilikinya.

### Percobaan 3

Buatlah class `Anjing` yang merupakan turunan dari `Hewan`. Tambahkan:

- atribut `jenisGolongan`
- method `menggonggong()`
- method `bermain()`

Lalu buat satu object `Anjing` dan tampilkan semua data serta method yang dimilikinya.

### Percobaan 4

Ubah class `Hewan`, `Kucing`, dan `Anjing` agar menggunakan constructor. Gunakan keyword `super` pada subclass.

### Percobaan 5

Buatlah class `GoldenRetriever` sebagai turunan dari `Anjing`. Tambahkan:

- method `berenang()`
- method `mengambil()`

Lalu buat satu object `GoldenRetriever` dan tunjukkan bahwa object tersebut dapat menggunakan:

- method dari `Hewan`
- method dari `Anjing`
- method miliknya sendiri

## 4.17 Pertanyaan Diskusi

1. Apa yang dimaksud dengan inheritance dalam OOP?
2. Apa perbedaan superclass dan subclass?
3. Mengapa inheritance dapat mengurangi duplikasi kode?
4. Apa fungsi keyword `extends`?
5. Apa fungsi keyword `super`?
6. Mengapa `GoldenRetriever` dapat menggunakan method milik `Hewan`?
7. Apa yang dimaksud dengan multilevel inheritance?
8. Kapan inheritance sebaiknya digunakan?

## 4.18 Tugas Laporan Praktikum

Setelah menyelesaikan seluruh percobaan, mahasiswa diminta membuat laporan praktikum. Format laporan tetap dibuat konsisten dengan Pertemuan sebelumnya agar mahasiswa terbiasa dengan pola kerja yang rapi.

**Struktur laporan:**

1. Cover
2. Tujuan praktikum
3. Alat dan bahan
4. Langkah percobaan
5. Source code
6. Hasil output program
7. Analisis program
8. Kesimpulan

**Ketentuan isi analisis:**

Pada bagian analisis, mahasiswa harus menjelaskan:

- class mana yang menjadi superclass
- class mana yang menjadi subclass
- atribut dan method apa saja yang diwariskan
- penggunaan `extends`
- penggunaan `super`
- perbedaan antara inheritance biasa dan inheritance bertingkat

Laporan dikumpulkan dalam bentuk **PDF** sesuai ketentuan dosen atau asisten praktikum.

## 4.19 Penutup

Pada Pertemuan 4 ini, mahasiswa telah mempelajari inheritance sebagai salah satu konsep paling fundamental dalam pemrograman berorientasi objek. Melalui inheritance, mahasiswa belajar bahwa sebuah class dapat mewarisi atribut dan method dari class lain, sehingga program menjadi lebih ringkas, rapi, dan mudah dikembangkan.

Jika konsep ini benar-benar dipahami, maka mahasiswa akan lebih siap mempelajari **polymorphism** pada bab berikutnya. Sebab, polymorphism sangat erat kaitannya dengan inheritance dan biasanya jauh lebih mudah dipahami jika pondasi pewarisan class sudah kuat.

# PERTEMUAN 5 — POLYMORPHISM (POLIMORFISME)

## 5.1 Pendahuluan

Pada Pertemuan 4, mahasiswa telah mempelajari konsep **inheritance**, yaitu bagaimana sebuah class dapat mewarisi atribut dan method dari class lain. Dengan inheritance, kita dapat membuat struktur program yang lebih rapi dan mengurangi duplikasi kode.

Pada Pertemuan 5 ini, mahasiswa akan mempelajari konsep **polymorphism**. Konsep ini memungkinkan sebuah method memiliki banyak bentuk atau perilaku yang berbeda, tergantung pada objek yang menggunakannya.

Polymorphism merupakan salah satu konsep penting dalam pemrograman berorientasi objek. Dengan memahami polymorphism, mahasiswa dapat membuat program yang lebih fleksibel dan mudah dikembangkan.

## 5.2 Tujuan Pembelajaran

Setelah menyelesaikan praktikum pada bab ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep polymorphism dalam OOP
2. Memahami perbedaan method overloading dan method overriding
3. Mengimplementasikan method overriding pada subclass
4. Menggunakan polymorphism dalam program Java
5. Memahami manfaat polymorphism dalam pengembangan program

## 5.3 Pengertian Polymorphism

Polymorphism berasal dari kata:

- **poly** = banyak
- **morph** = bentuk

Sehingga polymorphism berarti **banyak bentuk**.

Dalam OOP, polymorphism adalah kemampuan sebuah method untuk memiliki perilaku yang berbeda tergantung pada objek yang menggunakannya.

Sebagai contoh, kita memiliki method `suara()` pada class `Hewan`. Ketika method ini dipanggil oleh object `Kucing`, maka hasilnya adalah “mengeong”. Ketika dipanggil oleh object `Anjing`, hasilnya menjadi “menggonggong”.

Walaupun nama method sama, hasilnya bisa berbeda. Inilah yang disebut polymorphism.

## 5.4 Jenis Polymorphism

Dalam Java, polymorphism dibagi menjadi dua jenis utama:

1. Method Overloading
2. Method Overriding

## 5.5 Method Overloading

Method overloading adalah kondisi di mana **beberapa method memiliki nama yang sama, tetapi parameter berbeda**.

Overloading biasanya digunakan dalam satu class.

**Contoh:**

```java
class Hitung {
    int tambah(int a, int b) {
        return a + b;
    }
    int tambah(int a, int b, int c) {
        return a + b + c;
    }
}
```

Program Utama

```java
public class DemoOverloading {
    public static void main(String[] args) {
        Hitung h = new Hitung();
        System.out.println(h.tambah(5, 3));
        System.out.println(h.tambah(5, 3, 2));
    }
}
```

**Output:**

```text
8
10
```

Pada contoh ini, method `tambah()` memiliki dua bentuk berbeda tergantung jumlah parameter.

## 5.6 Method Overriding

Method overriding adalah kondisi di mana subclass **mengubah atau mengganti method dari superclass**.

Overriding terjadi pada inheritance.

### 5.6.1 Contoh Dasar Overriding

```java
class Hewan {
    void suara() {
        System.out.println("Hewan bersuara");
    }
}
```

**Subclass:**

```java
class Kucing extends Hewan {
    void suara() {
        System.out.println("Kucing mengeong");
    }
}
class Anjing extends Hewan {
    void suara() {
        System.out.println("Anjing menggonggong");
    }
}
```

**Program utama:**

```java
public class DemoOverriding {
    public static void main(String[] args) {
        Hewan h1 = new Kucing();
        Hewan h2 = new Anjing();
        h1.suara();
        h2.suara();
    }
}
```

**Output:**

```text
Kucing mengeong
Anjing menggonggong
```

Walaupun variabel bertipe `Hewan`, method yang dipanggil menyesuaikan objeknya. Inilah contoh polymorphism.

## 5.7 Polymorphism dengan Referensi Superclass

Salah satu kekuatan polymorphism adalah kita bisa menggunakan satu tipe referensi untuk banyak objek.

```java
Hewan h;
```

Variabel `h` bisa digunakan untuk:

- object `Kucing`
- object `Anjing`

**Contoh:**

```java
Hewan h;
h = new Kucing();
h.suara();
h = new Anjing();
h.suara();
```

Ini membuat program lebih fleksibel.

## 5.8 Contoh Studi Kasus Lengkap

```java
class Hewan {
    String nama;
    Hewan(String nama) {
        this.nama = nama;
    }
    void suara() {
        System.out.println("Hewan bersuara");
    }
}
class Kucing extends Hewan {
    Kucing(String nama) {
        super(nama);
    }
    void suara() {
        System.out.println(nama + " mengeong");
    }
}
class Anjing extends Hewan {
    Anjing(String nama) {
        super(nama);
    }
    void suara() {
        System.out.println(nama + " menggonggong");
    }
}
public class DemoPolymorphism {
    public static void main(String[] args) {
        Hewan[] daftarHewan = {
            new Kucing("Milo"),
            new Anjing("Buddy")
        };
        for (Hewan h : daftarHewan) {
            h.suara();
        }
    }
}
```

**Output:**

```text
Milo mengeong
Buddy menggonggong
```

## 5.9 Perbedaan Overloading dan Overriding

|**Overloading**|**Overriding**|
|---|---|
|Dalam satu class|Melibatkan inheritance|
|Parameter berbeda|Nama dan parameter sama|
|Tidak perlu extends|Harus menggunakan extends|
|Compile-time|Runtime|

## 5.10 Keuntungan Polymorphism

- Program lebih fleksibel
- Kode lebih rapi dan mudah dikembangkan
- Mendukung reuse code
- Mempermudah penambahan fitur baru

## 5.11 Kesalahan Umum

- Salah membedakan overloading dan overriding
- Parameter overriding tidak sama
- Tidak menggunakan inheritance
- Tidak memahami konsep referensi superclass

## 5.12 Tugas Percobaan

Pada bagian ini, mahasiswa diminta untuk mengimplementasikan konsep **polymorphism** secara lebih mendalam melalui studi kasus yang lebih kompleks dan terstruktur.

### Percobaan 1: Implementasi Overriding Dasar

Buat class **Hewan** dengan method:

```java
void suara()
```

Kemudian buat subclass:

- `Kucing`
- `Anjing`
- `Burung`

Setiap subclass harus **override** method `suara()` dengan perilaku yang berbeda.

**Output contoh:**

- Kucing → mengeong
- Anjing → menggonggong
- Burung → berkicau

### Percobaan 2: Polymorphism dengan Array Object

Buat program yang menyimpan beberapa object dalam sebuah array:

- 2 object `Kucing`
- 2 object `Anjing`
- 1 object `Burung`

Gunakan **array bertipe superclass ( `Hewan`)**, lalu tampilkan suara semua hewan menggunakan perulangan.

### Percobaan 3: Overriding + Method Tambahan

Tambahkan method baru pada setiap subclass:

- Kucing → `berburu()`
- Anjing → `bermain()`
- Burung → `terbang()`

**Kemudian:**

1. Panggil method `suara()` secara polymorphism
2. Panggil method khusus masing-masing object

### Percobaan 4: Method Overloading

Buat class `OperasiMatematika` dengan method:

- `tambah(int a, int b)`
- `tambah(int a, int b, int c)`
- `tambah(double a, double b)`

Tampilkan hasil dari masing-masing method.

### Percobaan 5: Studi Kasus Mini (Wajib)

Buat program **Sistem Data Hewan** dengan ketentuan:

**Class yang harus dibuat:**

- `Hewan` (superclass)
- `Kucing`, `Anjing`, `Burung` (subclass)

**Fitur wajib:**

1. Gunakan constructor pada setiap class
2. Gunakan method overriding `suara()`
3. Simpan object dalam array
4. Gunakan perulangan untuk menampilkan data
5. Gunakan minimal 5 object

**Output minimal:**

- Nama hewan
- Jenis hewan
- Suara hewan

**Contoh output:**

```text
Nama: Milo | Jenis: Kucing | Suara: Mengeong
Nama: Buddy | Jenis: Anjing | Suara: Menggonggong
Nama: Rio | Jenis: Burung | Suara: Berkicau
```

## 5.13 Tugas Laporan Praktikum

Setelah menyelesaikan seluruh percobaan pada Pertemuan 5, mahasiswa diminta untuk membuat laporan praktikum. Format laporan dibuat konsisten dengan Pertemuan sebelumnya agar mahasiswa terbiasa dengan pola kerja yang sistematis dan rapi.

**Struktur laporan:**

1. Cover
2. Tujuan praktikum
3. Alat dan bahan
4. Langkah percobaan
5. Source code
6. Hasil output program
7. Analisis program
8. Kesimpulan

**Ketentuan isi analisis:**

Pada bagian analisis, mahasiswa harus menjelaskan secara rinci implementasi konsep polymorphism pada program yang dibuat. Penjelasan minimal mencakup:

- perbedaan antara **method overloading** dan **method overriding**
- class mana yang menggunakan **overloading**
- class mana yang menggunakan **overriding**
- bagaimana inheritance digunakan untuk mendukung polymorphism
- bagaimana method yang sama dapat menghasilkan output yang berbeda
- penggunaan **referensi superclass** dalam polymorphism
- alur pemanggilan method saat program dijalankan
- perbedaan hasil output dari masing-masing object

Mahasiswa juga diharapkan dapat menjelaskan hubungan antara:

- superclass dan subclass
- method yang diwariskan dan method yang di-override
- serta peran polymorphism dalam membuat program lebih fleksibel

## 5.14 Penutup

Pada Pertemuan 5 ini, mahasiswa telah mempelajari konsep polymorphism yang memungkinkan method memiliki banyak bentuk. Konsep ini melengkapi inheritance dan menjadikan program lebih fleksibel.

Dengan memahami polymorphism, mahasiswa siap untuk mempelajari konsep lanjutan seperti relasi antar class atau interface pada bab berikutnya.

# PERTEMUAN 6 — ABSTRACT CLASS DAN INTERFACE

## 6.1 Pendahuluan

Pada Pertemuan sebelumnya, mahasiswa telah mempelajari konsep **polymorphism**, yaitu kemampuan sebuah method untuk memiliki perilaku berbeda sesuai object yang menggunakannya. Konsep tersebut sangat penting karena membuat program lebih fleksibel dan mudah dikembangkan.

Pada Pertemuan 6 ini, mahasiswa akan mempelajari dua konsep penting lain dalam OOP, yaitu **abstract class** dan **interface**. Keduanya digunakan untuk membuat rancangan class yang lebih terstruktur, terutama ketika beberapa class memiliki pola perilaku yang sama, tetapi cara menjalankannya berbeda.

Abstract class dan interface sering digunakan ketika programmer ingin membuat aturan dasar bagi class lain. Dengan konsep ini, program tidak hanya berjalan, tetapi juga memiliki desain yang lebih rapi dan mudah diperluas.

## 6.2 Tujuan Pembelajaran

Setelah menyelesaikan praktikum pada bab ini, mahasiswa diharapkan mampu:

1. Menjelaskan konsep abstract class.
2. Menjelaskan konsep interface.
3. Membedakan abstract class dan interface.
4. Mengimplementasikan abstract class dalam Java.
5. Mengimplementasikan interface dalam Java.
6. Membuat program sederhana yang menggunakan abstract class dan interface.

## 6.3 Pengertian Abstract Class

**Abstract class** adalah class yang tidak dapat dibuat object secara langsung. Class ini digunakan sebagai class dasar atau template untuk class lain.

Abstract class biasanya berisi method yang masih bersifat umum. Sebagian method bisa sudah memiliki isi, sedangkan method lainnya belum memiliki isi dan harus diimplementasikan oleh subclass.

**Contoh sederhana:**

```java
abstract class Hewan {
    abstract void suara();
    void makan() {
        System.out.println("Hewan sedang makan");
    }
}
```

Pada contoh tersebut, class `Hewan` adalah abstract class. Method `suara()` belum memiliki isi, sehingga subclass wajib mengisi sendiri method tersebut.

## 6.4 Ilustrasi Abstract Class

<!-- GAMBAR 6.1: ganti dengan gambar asli dari PDF (simpan di public/images/pbo/gambar-6-1.png) -->

**Gambar 6.1 Diagram Konsep Abstract Class dalam OOP**

Gambar ini menunjukkan bahwa abstract class **Hewan** berfungsi sebagai template bagi class turunannya. Class **Hewan** memiliki method abstract `suara()` yang belum memiliki implementasi, sehingga tidak dapat diinstansiasi langsung sebagai object. Class **Kucing** dan **Anjing** sebagai subclass harus mengimplementasikan method `suara()` sesuai perilaku masing-masing.

Dari gambar tersebut dapat dipahami bahwa abstract class berisi rancangan umum. Object konkret dibuat dari subclass, bukan dari abstract class langsung.

## 6.5 Ciri-Ciri Abstract Class

Abstract class memiliki beberapa ciri penting yang perlu dipahami.

1. Menggunakan keyword `abstract`.
2. Tidak bisa dibuat object secara langsung.
3. Dapat memiliki method abstract.
4. Dapat memiliki method biasa.
5. Dapat memiliki atribut dan constructor.
6. Subclass wajib mengimplementasikan method abstract, kecuali subclass tersebut juga abstract.

**Contoh class yang tidak boleh diinstansiasi:**

```java
Hewan h = new Hewan(); // ERROR
```

Kode tersebut error karena `Hewan` adalah abstract class. Object harus dibuat dari subclass seperti `Kucing` atau `Anjing`.

## 6.6 Contoh Abstract Class dalam Java

Pada contoh berikut, class `Hewan` dibuat sebagai abstract class. Class `Kucing` dan `Anjing` menjadi subclass yang mengimplementasikan method `suara()`.

```java
abstract class Hewan {
    String nama;
    Hewan(String nama) {
        this.nama = nama;
    }
    abstract void suara();
    void makan() {
        System.out.println(nama + " sedang makan.");
    }
}
class Kucing extends Hewan {
    Kucing(String nama) {
        super(nama);
    }
    @Override
    void suara() {
        System.out.println(nama + " mengeong: Meow!");
    }
}
class Anjing extends Hewan {
    Anjing(String nama) {
        super(nama);
    }
    @Override
    void suara() {
        System.out.println(nama + " menggonggong: Woof!");
    }
}
public class DemoAbstractClass {
    public static void main(String[] args) {
        Kucing k = new Kucing("Milo");
        Anjing a = new Anjing("Buddy");
        k.makan();
        k.suara();
        a.makan();
        a.suara();
    }
}
```

**Output:**

```text
Milo sedang makan.
Milo mengeong: Meow!
Buddy sedang makan.
Buddy menggonggong: Woof!
```

Pada program tersebut, method `makan()` sudah tersedia di abstract class `Hewan`, sehingga dapat langsung digunakan oleh `Kucing` dan `Anjing`. Namun, method `suara()` harus dibuat ulang oleh masing-masing subclass karena method tersebut bersifat abstract.

## 6.7 Pengertian Interface

**Interface** adalah bentuk rancangan yang berisi daftar method yang harus dimiliki oleh class yang menggunakannya. Jika abstract class dapat dianggap sebagai template, maka interface dapat dianggap sebagai kontrak.

Interface hanya menentukan **apa yang harus dilakukan**, tetapi class yang mengimplementasikan interface menentukan **bagaimana cara melakukannya**.

**Contoh sederhana:**

```java
interface Terbang {
    void terbang();
}
```

Interface `Terbang` menyatakan bahwa setiap class yang mengimplementasikan interface ini harus memiliki method `terbang()`. Cara terbangnya bisa berbeda-beda sesuai class yang mengimplementasikannya.

## 6.8 Ilustrasi Interface

<!-- GAMBAR 6.2: ganti dengan gambar asli dari PDF (simpan di public/images/pbo/gambar-6-2.png) -->

**Gambar 6.2 Diagram Konsep Interface dalam OOP**

Gambar ini menunjukkan bahwa interface **Terbang** menetapkan method `terbang()` sebagai kemampuan yang harus dimiliki oleh class yang mengimplementasikannya. Class **Burung** dan **Pesawat** sama-sama mengimplementasikan interface tersebut, tetapi cara menjalankan method `terbang()` berbeda. Burung terbang dengan mengepakkan sayap, sedangkan pesawat terbang menggunakan mesin dan sayap tetap.

Dari gambar tersebut dapat dipahami bahwa interface berperan sebagai kontrak. Class yang menggunakan interface wajib menyediakan implementasi dari method yang ditentukan.

## 6.9 Ciri-Ciri Interface

Interface memiliki beberapa ciri utama.

1. Menggunakan keyword `interface`.
2. Diimplementasikan menggunakan keyword `implements`.
3. Tidak dapat dibuat object secara langsung.
4. Method dalam interface harus diimplementasikan oleh class yang menggunakannya.
5. Satu class dapat mengimplementasikan lebih dari satu interface.
6. Interface cocok digunakan untuk mendefinisikan kemampuan atau perilaku tertentu.

**Contoh implementasi interface:**

```java
class Burung implements Terbang {
    public void terbang() {
        System.out.println("Burung terbang dengan mengepakkan sayap.");
    }
}
```

Pada contoh tersebut, class `Burung` wajib memiliki method `terbang()` karena class tersebut mengimplementasikan interface `Terbang`.

## 6.10 Contoh Interface dalam Java

Berikut contoh sederhana penggunaan interface `Terbang`.

```java
interface Terbang {
    void terbang();
}
class Burung implements Terbang {
    @Override
    public void terbang() {
        System.out.println("Burung terbang dengan mengepakkan sayap.");
    }
}
class Pesawat implements Terbang {
    @Override
    public void terbang() {
        System.out.println("Pesawat terbang menggunakan mesin jet.");
    }
}
public class DemoInterface {
    public static void main(String[] args) {
        Burung b = new Burung();
        Pesawat p = new Pesawat();
        b.terbang();
        p.terbang();
    }
}
```

**Output:**

```text
Burung terbang dengan mengepakkan sayap.
Pesawat terbang menggunakan mesin jet.
```

Pada contoh tersebut, `Burung` dan `Pesawat` sama-sama memiliki method `terbang()`. Namun, implementasinya berbeda karena cara burung dan pesawat terbang memang berbeda.

## 6.11 Perbedaan Abstract Class dan Interface

Abstract class dan interface sama-sama dapat digunakan untuk membuat rancangan program yang lebih rapi. Namun, keduanya memiliki perbedaan penting.

|**Aspek**|**Abstract Class**|**Interface**|
|---|---|---|
|Keyword|`abstract class`|`interface`|
|Cara menggunakan|`extends`|`implements`|
|Object langsung|Tidak bisa|Tidak bisa|
|Method biasa|Bisa memiliki method biasa|Umumnya berisi method yang harus diimplementasikan|
|Atribut|Bisa memiliki atribut biasa|Biasanya digunakan untuk konstanta|
|Constructor|Bisa memiliki constructor|Tidak memiliki constructor|
|Jumlah yang bisa digunakan|Satu class hanya bisa extends satu class|Satu class bisa implements banyak interface|

Secara sederhana, gunakan abstract class jika beberapa class masih memiliki hubungan “adalah” atau **is-a**. Gunakan interface jika ingin menambahkan kemampuan tertentu yang bisa dimiliki oleh class yang berbeda jenis.

## 6.12 Kombinasi Abstract Class dan Interface

Dalam Java, sebuah class dapat mewarisi abstract class dan sekaligus mengimplementasikan interface. Ini sering digunakan ketika sebuah object memiliki identitas utama sekaligus kemampuan tambahan.

Misalnya, `Burung` adalah `Hewan`, maka dapat mewarisi abstract class `Hewan`. Namun, `Burung` juga memiliki kemampuan `Terbang`, maka dapat mengimplementasikan interface `Terbang`.

**Contoh:**

```java
abstract class Hewan {
    String nama;
    Hewan(String nama) {
        this.nama = nama;
    }
    abstract void suara();
    void makan() {
        System.out.println(nama + " sedang makan.");
    }
}
interface Terbang {
    void terbang();
}
class Burung extends Hewan implements Terbang {
    Burung(String nama) {
        super(nama);
    }
    @Override
    void suara() {
        System.out.println(nama + " berkicau: Cuit... cuit...");
    }
    @Override
    public void terbang() {
        System.out.println(nama + " terbang dengan mengepakkan sayap.");
    }
}
public class DemoAbstractInterface {
    public static void main(String[] args) {
        Burung b = new Burung("Rio");
        b.makan();
        b.suara();
        b.terbang();
    }
}
```

**Output:**

```text
Rio sedang makan.
Rio berkicau: Cuit... cuit...
Rio terbang dengan mengepakkan sayap.
```

Pada contoh tersebut, class `Burung` mewarisi abstract class `Hewan` dan mengimplementasikan interface `Terbang`. Dengan demikian, `Burung` wajib mengisi method `suara()` dari abstract class dan method `terbang()` dari interface.

## 6.13 Studi Kasus Praktikum: Data Hewan dan Kemampuan Terbang

Pada studi kasus ini, mahasiswa akan membuat program yang menggabungkan abstract class dan interface. Program dibuat dengan tema hewan agar mudah dipahami.

Ketentuannya:

- `Hewan` sebagai abstract class.
- `Terbang` sebagai interface.
- `Kucing` dan `Anjing` hanya mewarisi `Hewan`.
- `Burung` mewarisi `Hewan` dan mengimplementasikan `Terbang`.

### Source Code

```java
abstract class Hewan {
    String nama;
    int umur;
    Hewan(String nama, int umur) {
        this.nama = nama;
        this.umur = umur;
    }
    abstract void suara();
    void tampilInfo() {
        System.out.println("Nama : " + nama);
        System.out.println("Umur : " + umur + " tahun");
    }
}
interface Terbang {
    void terbang();
}
class Kucing extends Hewan {
    String ras;
    Kucing(String nama, int umur, String ras) {
        super(nama, umur);
        this.ras = ras;
    }
    @Override
    void suara() {
        System.out.println(nama + " mengeong: Meow!");
    }
    @Override
    void tampilInfo() {
        super.tampilInfo();
        System.out.println("Jenis: Kucing");
        System.out.println("Ras  : " + ras);
    }
}
class Anjing extends Hewan {
    String jenis;
    Anjing(String nama, int umur, String jenis) {
        super(nama, umur);
        this.jenis = jenis;
    }
    @Override
    void suara() {
        System.out.println(nama + " menggonggong: Woof!");
    }
    @Override
    void tampilInfo() {
        super.tampilInfo();
        System.out.println("Jenis: Anjing");
        System.out.println("Tipe : " + jenis);
    }
}
class Burung extends Hewan implements Terbang {
    String warna;
    Burung(String nama, int umur, String warna) {
        super(nama, umur);
        this.warna = warna;
    }
    @Override
    void suara() {
        System.out.println(nama + " berkicau: Cuit... cuit...");
    }
    @Override
    public void terbang() {
        System.out.println(nama + " terbang dengan mengepakkan sayap.");
    }
    @Override
    void tampilInfo() {
        super.tampilInfo();
        System.out.println("Jenis: Burung");
        System.out.println("Warna: " + warna);
    }
}
public class SistemHewan {
    public static void main(String[] args) {
        Hewan[] daftarHewan = {
            new Kucing("Milo", 2, "Persia"),
            new Anjing("Buddy", 3, "Golden Retriever"),
            new Burung("Rio", 1, "Hijau")
        };
        for (Hewan h : daftarHewan) {
            h.tampilInfo();
            h.suara();
            if (h instanceof Terbang) {
                Terbang t = (Terbang) h;
                t.terbang();
            }
            System.out.println("--------------------");
        }
    }
}
```

### Output

```text
Nama : Milo
Umur : 2 tahun
Jenis: Kucing
Ras  : Persia
Milo mengeong: Meow!
--------------------
Nama : Buddy
Umur : 3 tahun
Jenis: Anjing
Tipe : Golden Retriever
Buddy menggonggong: Woof!
--------------------
Nama : Rio
Umur : 1 tahun
Jenis: Burung
Warna: Hijau
Rio berkicau: Cuit... cuit...
Rio terbang dengan mengepakkan sayap.
--------------------
```

Pada studi kasus ini, array `daftarHewan` bertipe `Hewan`, sehingga dapat menyimpan object dari class `Kucing`, `Anjing`, dan `Burung`. Method `suara()` dijalankan sesuai implementasi masing-masing subclass.

Bagian `instanceof Terbang` digunakan untuk memeriksa apakah object memiliki kemampuan `Terbang`. Jika iya, maka object tersebut dapat dipanggil method `terbang()`.

## 6.14 Kesalahan Umum

Saat mempelajari abstract class dan interface, mahasiswa sering melakukan beberapa kesalahan. Kesalahan ini biasanya terjadi karena belum terbiasa membedakan class biasa, abstract class, dan interface.

Beberapa kesalahan umum adalah:

1. **Membuat object langsung dari abstract class**
   Contoh `new Hewan()` akan error jika `Hewan` adalah abstract class.
2. **Tidak mengimplementasikan method abstract**
   Subclass wajib mengisi method abstract, kecuali subclass tersebut juga dibuat abstract.
3. **Salah menggunakan `extends` dan `implements`**
   Abstract class digunakan dengan `extends`, sedangkan interface digunakan dengan `implements`.
4. **Lupa menulis `public` pada method interface**
   Method dari interface yang diimplementasikan pada class sebaiknya ditulis `public`.
5. **Mengira interface sama dengan class biasa**
   Interface lebih tepat dipahami sebagai kontrak perilaku, bukan sebagai object konkret.

## 6.15 Tugas Percobaan

### Percobaan 1: Abstract Class

Buat abstract class `Hewan` dengan ketentuan berikut:

1. Memiliki atribut `nama`.
2. Memiliki constructor untuk mengisi `nama`.
3. Memiliki method abstract `suara()`.
4. Memiliki method biasa `makan()`.

Kemudian buat class `Kucing` dan `Anjing` yang mewarisi class `Hewan`. Setiap subclass harus mengimplementasikan method `suara()`.

### Percobaan 2: Interface

Buat interface `Terbang` dengan method:

```java
void terbang();
```

Kemudian buat class `Burung` dan `Pesawat` yang mengimplementasikan interface tersebut. Setiap class harus memiliki cara berbeda dalam menjalankan method `terbang()`.

### Percobaan 3: Kombinasi Abstract Class dan Interface

Buat program dengan ketentuan berikut:

1. Abstract class `Hewan`.
2. Interface `Terbang`.
3. Class `Burung` mewarisi `Hewan` dan mengimplementasikan `Terbang`.
4. Class `Kucing` hanya mewarisi `Hewan`.
5. Tampilkan output dari method `suara()` dan `terbang()` jika object memiliki kemampuan terbang.

### Percobaan 4: Studi Kasus Mini

Buat program **Sistem Data Hewan** dengan ketentuan berikut:

1. Memiliki abstract class `Hewan`.
2. Memiliki interface `Terbang`.
3. Memiliki minimal 3 subclass, misalnya `Kucing`, `Anjing`, dan `Burung`.
4. Setiap subclass mengimplementasikan method `suara()`.
5. Minimal satu subclass mengimplementasikan interface `Terbang`.
6. Gunakan array object untuk menyimpan minimal 5 object.
7. Tampilkan data, suara, dan kemampuan terbang jika ada.

## 6.16 Pertanyaan Diskusi

Jawablah pertanyaan berikut sebagai bagian dari pemahaman konsep.

1. Apa yang dimaksud dengan abstract class?
2. Mengapa abstract class tidak bisa dibuat object secara langsung?
3. Apa fungsi method abstract?
4. Apa yang dimaksud dengan interface?
5. Apa perbedaan `extends` dan `implements`?
6. Apa perbedaan abstract class dan interface?
7. Kapan sebaiknya menggunakan abstract class?
8. Kapan sebaiknya menggunakan interface?

## 6.17 Tugas Laporan Praktikum

Setelah menyelesaikan seluruh percobaan pada Pertemuan 6, mahasiswa diminta membuat laporan praktikum. Format laporan dibuat konsisten dengan Pertemuan sebelumnya agar mahasiswa terbiasa dengan pola kerja yang sistematis dan rapi.

**Struktur laporan:**

1. Cover
2. Tujuan praktikum
3. Alat dan bahan
4. Langkah percobaan
5. Source code
6. Hasil output program
7. Analisis program
8. Kesimpulan

**Ketentuan isi analisis:**

Pada bagian analisis, mahasiswa diminta menjelaskan penerapan abstract class dan interface pada program yang dibuat. Penjelasan minimal mencakup:

- class mana yang menjadi abstract class
- method mana yang bersifat abstract
- class mana yang menjadi subclass
- interface apa yang digunakan
- class mana yang mengimplementasikan interface
- perbedaan penggunaan `extends` dan `implements`
- perbedaan perilaku setiap subclass

Mahasiswa juga perlu menjelaskan mengapa abstract class atau interface digunakan dalam program tersebut. Penjelasan tidak perlu terlalu panjang, tetapi harus menunjukkan bahwa mahasiswa memahami konsep dasarnya.

Laporan dikumpulkan dalam bentuk **PDF** sesuai ketentuan dosen atau asisten praktikum.

## 6.18 Penutup

Pada Pertemuan 6 ini, mahasiswa telah mempelajari abstract class dan interface sebagai konsep lanjutan dalam pemrograman berorientasi objek. Abstract class digunakan sebagai rancangan dasar yang masih dapat memiliki atribut, constructor, method biasa, dan method abstract.

Interface digunakan sebagai kontrak perilaku yang harus diimplementasikan oleh class tertentu. Dengan memahami abstract class dan interface, mahasiswa dapat membuat program yang lebih fleksibel, rapi, dan mudah dikembangkan.

Konsep ini sangat penting sebelum masuk ke materi relasi antar object pada bab berikutnya. Relasi antar object akan membantu mahasiswa memahami bagaimana beberapa class dapat saling bekerja sama dalam satu sistem.

# PERTEMUAN 7 — RELASI ANTAR OBJECT: ASSOCIATION, AGGREGATION, DAN COMPOSITION

## 7.1 Pendahuluan

Pada bab sebelumnya, mahasiswa telah mempelajari **abstract class** dan **interface**. Materi tersebut membantu mahasiswa memahami bagaimana membuat rancangan program yang lebih fleksibel dan terstruktur.

Pada Pertemuan 7 ini, mahasiswa akan mempelajari **relasi antar object**. Dalam program yang lebih besar, object biasanya tidak berdiri sendiri. Object saling terhubung dan bekerja sama untuk menyelesaikan suatu proses.

Sebagai contoh, dalam sistem akademik, object `Mahasiswa` dapat berhubungan dengan object `MataKuliah`. Object `Dosen` dapat berhubungan dengan object `KelasPraktikum`. Object `Gedung` dapat memiliki beberapa object `RuangKelas`.

Relasi antar object penting dipahami karena OOP tidak hanya membahas cara membuat class, tetapi juga bagaimana class saling berhubungan. Dengan memahami relasi ini, mahasiswa dapat membuat desain program yang lebih dekat dengan sistem nyata.

## 7.2 Tujuan Pembelajaran

Setelah menyelesaikan praktikum pada bab ini, mahasiswa diharapkan mampu:

1. Menjelaskan pengertian relasi antar object.
2. Membedakan association, aggregation, dan composition.
3. Membuat relasi antar class dalam Java.
4. Menggunakan object sebagai atribut pada class lain.
5. Membuat program sederhana yang melibatkan beberapa class.
6. Menentukan jenis relasi yang tepat dalam sebuah studi kasus.

## 7.3 Pengertian Relasi Antar Object

Relasi antar object adalah hubungan antara dua atau lebih object dalam sebuah program. Hubungan ini terjadi karena satu object membutuhkan data atau fungsi dari object lain.

Dalam kehidupan nyata, banyak hal yang saling berhubungan. Mahasiswa berhubungan dengan mata kuliah, dosen berhubungan dengan kelas, dan gedung berhubungan dengan ruang kelas. Hubungan seperti ini dapat dimodelkan dalam program menggunakan relasi antar class.

Contoh relasi antar object:

- `Mahasiswa` mengambil `MataKuliah`
- `Dosen` mengajar `MataKuliah`
- `KelasPraktikum` memiliki daftar `Mahasiswa`
- `Gedung` memiliki beberapa `RuangKelas`

Relasi antar object biasanya digunakan untuk menggambarkan hubungan **uses-a** atau **has-a** Hubungan **uses-a** berarti suatu object menggunakan object lain, sedangkan **has-a** berarti suatu object memiliki object lain.

## 7.4 Association

Association adalah relasi umum antara dua class atau object. Pada relasi ini, satu object dapat mengenal, menggunakan, atau berhubungan dengan object lain, tetapi tidak memilikinya secara kuat.

Contoh association adalah hubungan antara `Mahasiswa` dan `MataKuliah`. Seorang mahasiswa dapat mengambil sebuah mata kuliah, tetapi mata kuliah tetap dapat ada tanpa mahasiswa tersebut. Begitu juga sebaliknya, mahasiswa tetap ada walaupun tidak sedang mengambil mata kuliah tertentu.

Dalam association, kedua object biasanya masih dapat berdiri sendiri. Relasinya hanya menunjukkan bahwa keduanya saling berhubungan dalam suatu proses.

**Contoh Association**

```java
class MataKuliah {
    String namaMataKuliah;
    MataKuliah(String namaMataKuliah) {
        this.namaMataKuliah = namaMataKuliah;
    }
    void tampilkanMataKuliah() {
        System.out.println("Mata Kuliah: " + namaMataKuliah);
    }
}
class Mahasiswa {
    String nama;
    Mahasiswa(String nama) {
        this.nama = nama;
    }
    void ambilMataKuliah(MataKuliah mk) {
        System.out.println(nama + " mengambil mata kuliah " +
                mk.namaMataKuliah);
    }
}
public class DemoAssociation {
    public static void main(String[] args) {
        Mahasiswa mhs = new Mahasiswa("Andi");
        MataKuliah mk = new MataKuliah("Pemrograman Berorientasi Objek");
        mhs.ambilMataKuliah(mk);
    }
}
```

**Output:**

```text
Andi mengambil mata kuliah Pemrograman Berorientasi Objek
```

Pada contoh tersebut, object `Mahasiswa` menggunakan object `MataKuliah` melalui parameter method `ambilMataKuliah()`. Hubungan ini termasuk association karena `Mahasiswa` dan `MataKuliah` tetap dapat berdiri sendiri.

<!-- GAMBAR 7.1: ganti dengan gambar asli dari PDF (simpan di public/images/pbo/gambar-7-1.png) -->

**Gambar 7.1** Ilustrasi Association antara Mahasiswa dan MataKuliah

Gambar ini menunjukkan hubungan association antara class **Mahasiswa** dan **MataKuliah**. Object mahasiswa dapat menggunakan object mata kuliah, tetapi keduanya tetap dapat berdiri sendiri tanpa ketergantungan kepemilikan yang kuat.

## 7.5 Aggregation

Aggregation adalah relasi yang menunjukkan hubungan **memiliki**, tetapi object yang dimiliki masih dapat berdiri sendiri. Relasi ini lebih kuat daripada association, tetapi tidak sekuat composition.

Contoh aggregation adalah hubungan antara `KelasPraktikum` dan `Mahasiswa`. Sebuah kelas praktikum dapat memiliki beberapa mahasiswa. Namun, jika kelas praktikum dihapus, object mahasiswa tetap dapat ada.

Dalam UML, aggregation biasanya digambarkan dengan simbol **diamond kosong** pada sisi class pemilik.

**Contoh Aggregation**

```java
class Mahasiswa {
    String nama;
    Mahasiswa(String nama) {
        this.nama = nama;
    }
    void tampilkanNama() {
        System.out.println("Mahasiswa: " + nama);
    }
}
class KelasPraktikum {
    String namaKelas;
    Mahasiswa[] daftarMahasiswa;
    KelasPraktikum(String namaKelas, Mahasiswa[] daftarMahasiswa) {
        this.namaKelas = namaKelas;
        this.daftarMahasiswa = daftarMahasiswa;
    }
    void tampilkanAnggotaKelas() {
        System.out.println("Kelas Praktikum: " + namaKelas);
        System.out.println("Daftar Mahasiswa:");
        for (Mahasiswa mhs : daftarMahasiswa) {
            mhs.tampilkanNama();
        }
    }
}
public class DemoAggregation {
    public static void main(String[] args) {
        Mahasiswa m1 = new Mahasiswa("Andi");
        Mahasiswa m2 = new Mahasiswa("Budi");
        Mahasiswa m3 = new Mahasiswa("Citra");
        Mahasiswa[] daftar = {m1, m2, m3};
        KelasPraktikum kelas = new KelasPraktikum("PBO IF-01", daftar);
        kelas.tampilkanAnggotaKelas();
    }
}
```

**Output:**

```text
Kelas Praktikum: PBO IF-01
Daftar Mahasiswa:
Mahasiswa: Andi
Mahasiswa: Budi
Mahasiswa: Citra
```

Pada contoh tersebut, object `Mahasiswa` dibuat terlebih dahulu di luar class `KelasPraktikum`. Setelah itu, object-object tersebut dimasukkan ke dalam object `KelasPraktikum`. Ini menunjukkan aggregation karena mahasiswa tetap dapat ada meskipun object kelas praktikum tidak digunakan lagi.

<!-- GAMBAR 7.2: ganti dengan gambar asli dari PDF (simpan di public/images/pbo/gambar-7-2.png) -->

**Gambar 7.2** Ilustrasi Aggregation antara KelasPraktikum dan Mahasiswa

Gambar ini menunjukkan hubungan aggregation, yaitu class **KelasPraktikum** memiliki beberapa object **Mahasiswa**. Namun, object **Mahasiswa** tetap dapat berdiri sendiri meskipun object **KelasPraktikum** tidak ada.

## 7.6 Composition

Composition adalah relasi kepemilikan yang kuat antara object utama dan object bagian. Pada relasi ini, object bagian sangat bergantung pada object utama.

Contoh composition adalah hubungan antara `Gedung` dan `RuangKelas`. Sebuah gedung memiliki ruang kelas. Dalam konteks program, ruang kelas dapat dianggap sebagai bagian dari gedung. Jika object gedung tidak dibuat, maka object ruang kelas sebagai bagian dari gedung juga tidak dibuat.

Dalam UML, composition biasanya digambarkan dengan simbol **diamond hitam** pada sisi class pemilik.

**Contoh Composition**

```java
class RuangKelas {
    String namaRuang;
    RuangKelas(String namaRuang) {
        this.namaRuang = namaRuang;
    }
    void tampilkanRuang() {
        System.out.println("Ruang Kelas: " + namaRuang);
    }
}
class Gedung {
    String namaGedung;
    RuangKelas ruang1;
    RuangKelas ruang2;
    Gedung(String namaGedung) {
        this.namaGedung = namaGedung;
        // Object RuangKelas dibuat di dalam class Gedung
        ruang1 = new RuangKelas("Ruang 101");
        ruang2 = new RuangKelas("Ruang 102");
    }
    void tampilkanDataGedung() {
        System.out.println("Gedung: " + namaGedung);
        ruang1.tampilkanRuang();
        ruang2.tampilkanRuang();
    }
}
public class DemoComposition {
    public static void main(String[] args) {
        Gedung gedung = new Gedung("Gedung Laboratorium ITERA");
        gedung.tampilkanDataGedung();
    }
}
```

**Output:**

```text
Gedung: Gedung Laboratorium ITERA
Ruang Kelas: Ruang 101
Ruang Kelas: Ruang 102
```

Pada contoh tersebut, object `RuangKelas` dibuat di dalam constructor class `Gedung`. Hal ini menunjukkan composition karena object `RuangKelas` menjadi bagian kuat dari object `Gedung`.

<!-- GAMBAR 7.3: ganti dengan gambar asli dari PDF (simpan di public/images/pbo/gambar-7-3.png) -->

**Gambar 7.3** Ilustrasi Composition antara Gedung dan RuangKelas

Gambar ini menunjukkan hubungan composition, yaitu class **Gedung** memiliki object **RuangKelas** sebagai bagian yang kuat. Object **RuangKelas** dibuat dan dikelola oleh object **Gedung**, sehingga keberadaannya bergantung pada object **Gedung**.

## 7.7 Perbedaan Association, Aggregation, dan Composition

Association, aggregation, dan composition sama-sama menjelaskan hubungan antar object. Namun, ketiganya memiliki tingkat kekuatan hubungan yang berbeda.

|**Aspek**|**Association**|**Aggregation**|**Composition**|
|---|---|---|---|
|Makna hubungan|Menggunakan atau berhubungan|Memiliki secara lemah|Memiliki secara kuat|
|Ketergantungan object|Rendah|Sedang|Tinggi|
|Object bagian bisa berdiri sendiri|Ya|Ya|Tidak atau sangat bergantung|
|Contoh|Mahasiswa mengambil MataKuliah|Kelas memiliki Mahasiswa|Gedung memiliki RuangKelas|
|Simbol UML|Garis biasa|Diamond kosong|Diamond hitam|
|Istilah umum|uses-a|has-a lemah|has-a kuat|

Secara sederhana, association menunjukkan hubungan umum. Aggregation menunjukkan hubungan kepemilikan yang tidak terlalu kuat. Composition menunjukkan hubungan kepemilikan yang sangat kuat.

## 7.8 Implementasi Association dalam Java

Pada association, object biasanya digunakan sebagai parameter method atau atribut yang tidak menunjukkan kepemilikan kuat. Contohnya adalah mahasiswa mengambil mata kuliah.

```java
class MataKuliah {
    String kode;
    String nama;
    MataKuliah(String kode, String nama) {
        this.kode = kode;
        this.nama = nama;
    }
}
class Mahasiswa {
    String nama;
    String nim;
    Mahasiswa(String nama, String nim) {
        this.nama = nama;
        this.nim = nim;
    }
    void ambilMataKuliah(MataKuliah mk) {
        System.out.println("Nama Mahasiswa : " + nama);
        System.out.println("NIM : " + nim);
        System.out.println("Mengambil MK : " + mk.kode + " - " + mk.nama);
    }
}
public class PraktikAssociation {
    public static void main(String[] args) {
        Mahasiswa mhs = new Mahasiswa("Dewi", "123140001");
        MataKuliah mk = new MataKuliah("IF221", "Pemrograman Berorientasi Objek");
        mhs.ambilMataKuliah(mk);
    }
}
```

**Output:**

```text
Nama Mahasiswa : Dewi
NIM : 123140001
Mengambil MK : IF221 - Pemrograman Berorientasi Objek
```

Pada program tersebut, object `MataKuliah` dikirim ke method `ambilMataKuliah()`. Object `Mahasiswa` menggunakan object `MataKuliah`, tetapi tidak memilikinya secara kuat.

## 7.9 Implementasi Aggregation dalam Java

Pada aggregation, satu object memiliki kumpulan object lain, tetapi object yang dimiliki dibuat di luar class pemilik. Ini berarti object bagian masih bisa ada secara mandiri.

```java
class Mahasiswa {
    String nama;
    String nim;
    Mahasiswa(String nama, String nim) {
        this.nama = nama;
        this.nim = nim;
    }
    void tampilkanData() {
        System.out.println(nim + " - " + nama);
    }
}
class KelasPraktikum {
    String namaKelas;
    Mahasiswa[] mahasiswa;
    KelasPraktikum(String namaKelas, Mahasiswa[] mahasiswa) {
        this.namaKelas = namaKelas;
        this.mahasiswa = mahasiswa;
    }
    void tampilkanKelas() {
        System.out.println("Kelas Praktikum: " + namaKelas);
        System.out.println("Daftar Mahasiswa:");
        for (Mahasiswa m : mahasiswa) {
            m.tampilkanData();
        }
    }
}
public class PraktikAggregation {
    public static void main(String[] args) {
        Mahasiswa m1 = new Mahasiswa("Andi", "123140001");
        Mahasiswa m2 = new Mahasiswa("Budi", "123140002");
        Mahasiswa m3 = new Mahasiswa("Citra", "123140003");
        Mahasiswa[] daftarMahasiswa = {m1, m2, m3};
        KelasPraktikum kelas = new KelasPraktikum("PBO-A", daftarMahasiswa);
        kelas.tampilkanKelas();
    }
}
```

**Output:**

```text
Kelas Praktikum: PBO-A
Daftar Mahasiswa:
123140001 - Andi
123140002 - Budi
123140003 - Citra
```

Relasi ini termasuk aggregation karena object `Mahasiswa` dibuat terlebih dahulu, lalu dimasukkan ke object `KelasPraktikum`. Mahasiswa tetap dapat digunakan di tempat lain meskipun object kelas tidak digunakan.

## 7.10 Implementasi Composition dalam Java

Pada composition, object bagian dibuat di dalam object utama. Ini menunjukkan hubungan kepemilikan yang kuat.

```java
class JadwalPraktikum {
    String hari;
    String jam;
    JadwalPraktikum(String hari, String jam) {
        this.hari = hari;
        this.jam = jam;
    }
    void tampilkanJadwal() {
        System.out.println("Hari: " + hari);
        System.out.println("Jam : " + jam);
    }
}
class KelasPraktikum {
    String namaKelas;
    JadwalPraktikum jadwal;
    KelasPraktikum(String namaKelas) {
        this.namaKelas = namaKelas;
        // Object JadwalPraktikum dibuat di dalam KelasPraktikum
        jadwal = new JadwalPraktikum("Senin", "08.00 - 10.00");
    }
    void tampilkanInfoKelas() {
        System.out.println("Kelas Praktikum: " + namaKelas);
        jadwal.tampilkanJadwal();
    }
}
public class PraktikComposition {
    public static void main(String[] args) {
        KelasPraktikum kelas = new KelasPraktikum("PBO-B");
        kelas.tampilkanInfoKelas();
    }
}
```

**Output:**

```text
Kelas Praktikum: PBO-B
Hari: Senin
Jam : 08.00 - 10.00
```

Pada contoh tersebut, object `JadwalPraktikum` dibuat di dalam class `KelasPraktikum`. Artinya, jadwal menjadi bagian dari kelas praktikum dan dikelola langsung oleh class tersebut.

## 7.11 Studi Kasus Praktikum: Sistem Kelas Mahasiswa ITERA

Pada studi kasus ini, mahasiswa akan membuat program sederhana yang menggabungkan beberapa relasi antar object. Studi kasus menggunakan tema kelas praktikum agar dekat dengan kegiatan mahasiswa.

Program ini menggunakan:

- association antara `Mahasiswa` dan `MataKuliah`
- aggregation antara `KelasPraktikum` dan `Mahasiswa`
- composition antara `KelasPraktikum` dan `JadwalPraktikum`

### Source Code

```java
class Mahasiswa {
    String nama;
    String nim;
    Mahasiswa(String nama, String nim) {
        this.nama = nama;
        this.nim = nim;
    }
    void ambilMataKuliah(MataKuliah mk) {
        System.out.println(nama + " mengambil mata kuliah " + mk.nama);
    }
    void tampilkanData() {
        System.out.println(nim + " - " + nama);
    }
}
class MataKuliah {
    String kode;
    String nama;
    MataKuliah(String kode, String nama) {
        this.kode = kode;
        this.nama = nama;
    }
    void tampilkanMataKuliah() {
        System.out.println("Mata Kuliah: " + kode + " - " + nama);
    }
}
class JadwalPraktikum {
    String hari;
    String jam;
    JadwalPraktikum(String hari, String jam) {
        this.hari = hari;
        this.jam = jam;
    }
    void tampilkanJadwal() {
        System.out.println("Hari Praktikum : " + hari);
        System.out.println("Jam Praktikum : " + jam);
    }
}
class KelasPraktikum {
    String namaKelas;
    MataKuliah mataKuliah;
    Mahasiswa[] daftarMahasiswa;
    JadwalPraktikum jadwal;
    KelasPraktikum(String namaKelas, MataKuliah mataKuliah, Mahasiswa[] daftarMahasiswa) {
        this.namaKelas = namaKelas;
        this.mataKuliah = mataKuliah;
        this.daftarMahasiswa = daftarMahasiswa;
        // Composition: jadwal dibuat di dalam class KelasPraktikum
        this.jadwal = new JadwalPraktikum("Rabu", "13.00 - 15.00");
    }
    void tampilkanInfoKelas() {
        System.out.println("Nama Kelas: " + namaKelas);
        mataKuliah.tampilkanMataKuliah();
        jadwal.tampilkanJadwal();
        System.out.println("Daftar Mahasiswa:");
        for (Mahasiswa m : daftarMahasiswa) {
            m.tampilkanData();
        }
    }
}
public class SistemKelasITERA {
    public static void main(String[] args) {
        MataKuliah mk = new MataKuliah("IF221", "Pemrograman Berorientasi Objek");
        Mahasiswa m1 = new Mahasiswa("Andi", "123140001");
        Mahasiswa m2 = new Mahasiswa("Budi", "123140002");
        Mahasiswa m3 = new Mahasiswa("Citra", "123140003");
        m1.ambilMataKuliah(mk);
        m2.ambilMataKuliah(mk);
        m3.ambilMataKuliah(mk);
        System.out.println();
        Mahasiswa[] daftar = {m1, m2, m3};
        KelasPraktikum kelas = new KelasPraktikum("PBO IF-01", mk,
                daftar);
        kelas.tampilkanInfoKelas();
    }
}
```

### Output

```text
Andi mengambil mata kuliah Pemrograman Berorientasi Objek
Budi mengambil mata kuliah Pemrograman Berorientasi Objek
Citra mengambil mata kuliah Pemrograman Berorientasi Objek

Nama Kelas: PBO IF-01
Mata Kuliah: IF221 - Pemrograman Berorientasi Objek
Hari Praktikum : Rabu
Jam Praktikum : 13.00 - 15.00
Daftar Mahasiswa:
123140001 - Andi
123140002 - Budi
123140003 - Citra
```

Pada studi kasus tersebut, beberapa relasi muncul dalam satu program. Relasi `Mahasiswa` dan `MataKuliah` termasuk association karena mahasiswa menggunakan object mata kuliah. Relasi `KelasPraktikum` dan `Mahasiswa` termasuk aggregation karena mahasiswa dibuat di luar kelas, lalu dimasukkan ke dalam kelas praktikum. Relasi `KelasPraktikum` dan `JadwalPraktikum` termasuk composition karena jadwal dibuat di dalam class `KelasPraktikum`.

## 7.12 Kesalahan Umum dalam Relasi Antar Object

Saat mempelajari relasi antar object, mahasiswa sering mengalami kesulitan membedakan jenis relasi. Hal ini wajar karena association, aggregation, dan composition memang terlihat mirip pada awalnya.

Beberapa kesalahan umum yang sering terjadi adalah:

### 1. Semua relasi dianggap inheritance

Tidak semua hubungan antar class harus menggunakan inheritance. Jika hubungannya “memiliki” atau “menggunakan”, maka lebih tepat memakai relasi antar object.

### 2. Salah membedakan aggregation dan composition

Aggregation bersifat kepemilikan lemah, sedangkan composition bersifat kuat.

### 3. Object selalu dibuat di class utama tanpa alasan jelas

Dalam desain OOP, perlu dipikirkan object mana yang seharusnya membuat, menyimpan, atau menggunakan object lain.

### 4. Tidak memahami hubungan has-a dan uses-a

Hubungan has-a biasanya menunjukkan kepemilikan, sedangkan uses-a menunjukkan penggunaan.

### 5. Terlalu banyak class tetapi relasinya tidak jelas

Class yang banyak tidak selalu berarti desain program baik. Yang penting adalah hubungan antar class harus masuk akal.

## 7.13 Tugas Percobaan

### Percobaan 1: Association

Buat program yang menggambarkan hubungan antara `Mahasiswa` dan `MataKuliah`.

Ketentuan:

1. Buat class `Mahasiswa`.
2. Buat class `MataKuliah`.
3. Buat method `ambilMataKuliah()` pada class `Mahasiswa`.
4. Object `MataKuliah` digunakan sebagai parameter method.
5. Tampilkan nama mahasiswa dan mata kuliah yang diambil.

### Percobaan 2: Aggregation

Buat program yang menggambarkan hubungan antara `KelasPraktikum` dan `Mahasiswa`.

Ketentuan:

1. Buat class `Mahasiswa`.
2. Buat class `KelasPraktikum`.
3. Object `Mahasiswa` dibuat di luar class `KelasPraktikum`.
4. Class `KelasPraktikum` menyimpan array object `Mahasiswa`.
5. Tampilkan daftar mahasiswa dalam kelas praktikum.

### Percobaan 3: Composition

Buat program yang menggambarkan hubungan antara `Gedung` dan `RuangKelas`.

Ketentuan:

1. Buat class `RuangKelas`.
2. Buat class `Gedung`.
3. Object `RuangKelas` dibuat di dalam class `Gedung`.
4. Tampilkan nama gedung dan daftar ruang kelas.
5. Jelaskan mengapa relasi tersebut termasuk composition.

### Percobaan 4: Studi Kasus Mini

Buat program **Sistem Kelas Praktikum ITERA** dengan ketentuan berikut:

1. Memiliki class `Mahasiswa`.
2. Memiliki class `MataKuliah`.
3. Memiliki class `JadwalPraktikum`.
4. Memiliki class `KelasPraktikum`.
5. Gunakan association antara `Mahasiswa` dan `MataKuliah`.
6. Gunakan aggregation antara `KelasPraktikum` dan `Mahasiswa`.
7. Gunakan composition antara `KelasPraktikum` dan `JadwalPraktikum`.
8. Tampilkan informasi kelas praktikum secara lengkap.

### Pertanyaan Diskusi

Jawablah pertanyaan berikut sebagai bagian dari pemahaman konsep.

1. Apa yang dimaksud dengan relasi antar object?
2. Apa perbedaan association dan aggregation?
3. Apa perbedaan aggregation dan composition?
4. Mengapa tidak semua hubungan antar class harus menggunakan inheritance?
5. Apa arti hubungan **has-a** dalam OOP?
6. Apa arti hubungan **uses-a** dalam OOP?
7. Mengapa object pada aggregation masih dapat berdiri sendiri?
8. Mengapa composition disebut sebagai relasi kepemilikan yang kuat?

## 7.14 Tugas Laporan Praktikum

Setelah menyelesaikan seluruh percobaan pada Pertemuan 7, mahasiswa diminta membuat laporan praktikum. Format laporan dibuat konsisten dengan Pertemuan sebelumnya agar mahasiswa terbiasa dengan pola kerja yang sistematis dan rapi.

**Struktur laporan:**

1. Cover
2. Tujuan praktikum
3. Alat dan bahan
4. Langkah percobaan
5. Source code
6. Hasil output program
7. Analisis program
8. Kesimpulan

**Ketentuan isi analisis:**

Pada bagian analisis, mahasiswa diminta menjelaskan penerapan relasi antar object pada program yang dibuat. Penjelasan minimal mencakup:

- class apa saja yang dibuat
- relasi apa saja yang digunakan
- class mana yang menggunakan association
- class mana yang menggunakan aggregation
- class mana yang menggunakan composition
- perbedaan association, aggregation, dan composition dalam program
- alasan penggunaan relasi tersebut

Mahasiswa juga perlu menjelaskan bagaimana object saling bekerja sama dalam program. Penjelasan tidak perlu terlalu panjang, tetapi harus menunjukkan bahwa mahasiswa memahami hubungan antar class yang dibuat.

Laporan dikumpulkan dalam bentuk **PDF** sesuai ketentuan dosen atau asisten praktikum.

## 7.15 Penutup

Pada Pertemuan 7 ini, mahasiswa telah mempelajari relasi antar object dalam pemrograman berorientasi objek. Relasi tersebut meliputi association, aggregation, dan composition.

Association digunakan untuk hubungan umum antar object. Aggregation digunakan untuk hubungan kepemilikan yang lemah, sedangkan composition digunakan untuk hubungan kepemilikan yang kuat.

Dengan memahami relasi antar object, mahasiswa dapat membuat program yang lebih dekat dengan sistem nyata. Pemahaman ini juga penting sebagai bekal sebelum masuk ke Pertemuan 8, yaitu **Error Handling dan Java I/O**

# PERTEMUAN 8 — ERROR HANDLING DAN JAVA I/O

## 8.1 Pendahuluan

Pada bab sebelumnya, mahasiswa telah mempelajari relasi antar object, yaitu bagaimana beberapa object dapat saling berhubungan dalam sebuah program. Materi tersebut penting karena program yang baik tidak hanya terdiri dari satu class, tetapi terdiri dari beberapa class yang saling bekerja sama.

Pada Pertemuan 8 ini, mahasiswa akan mempelajari dua materi penting, yaitu **error handling** dan **Java I/O**. Error handling digunakan untuk menangani kesalahan program agar program tidak langsung berhenti, sedangkan Java I/O digunakan untuk membaca dan menulis data, misalnya dari keyboard atau file.

Dalam praktik pemrograman, program tidak selalu berjalan sesuai harapan. Pengguna bisa salah memasukkan input, file yang dibaca bisa tidak ditemukan, atau program bisa mengalami kesalahan saat melakukan operasi tertentu. Oleh karena itu, programmer perlu membuat program yang mampu menghadapi kondisi tersebut dengan baik.

## 8.2 Tujuan Pembelajaran

Setelah menyelesaikan praktikum pada bab ini, mahasiswa diharapkan mampu:

1. Menjelaskan pengertian error dan exception dalam Java.
2. Membedakan syntax error, runtime error, dan logical error.
3. Menggunakan blok `try-catch` untuk menangani exception.
4. Menggunakan blok `finally` dalam program.
5. Memahami penggunaan sederhana `throw` dan `throws`.
6. Membaca input dari pengguna menggunakan `Scanner`.
7. Menulis data ke file teks menggunakan Java I/O.
8. Membaca data dari file teks menggunakan Java I/O.
9. Membuat program sederhana yang menangani error dan menyimpan data ke file.

## 8.3 Pengertian Error dan Exception

Dalam pemrograman, **error** adalah kesalahan yang menyebabkan program tidak berjalan sesuai harapan. Kesalahan ini bisa muncul karena penulisan kode yang salah, input yang tidak sesuai, atau logika program yang keliru.

Dalam Java, kesalahan yang terjadi saat program sedang berjalan disebut **exception**. Exception dapat ditangani menggunakan mekanisme error handling agar program tidak langsung berhenti secara tiba-tiba.

Contoh kondisi yang dapat menyebabkan exception:

- pengguna memasukkan huruf saat program meminta angka
- program membagi angka dengan nol
- file yang ingin dibaca tidak ditemukan
- indeks array yang diakses melebihi batas
- data kosong tetapi tetap diproses oleh program

**Contoh exception sederhana:**

```java
public class ContohException {
    public static void main(String[] args) {
        int hasil = 10 / 0;
        System.out.println("Hasil: " + hasil);
    }
}
```

Program di atas akan error saat dijalankan karena pembagian dengan nol tidak diperbolehkan. Kesalahan tersebut disebut `ArithmeticException`.

## 8.4 Jenis-Jenis Kesalahan dalam Program

Secara sederhana, kesalahan dalam program dapat dibagi menjadi tiga jenis utama. Ketiga jenis kesalahan ini perlu dipahami agar mahasiswa dapat membedakan apakah kesalahan terjadi karena penulisan kode, proses eksekusi, atau logika program.

### 8.4.1 Syntax Error

Syntax error adalah kesalahan yang terjadi karena penulisan kode tidak sesuai aturan bahasa Java. Kesalahan ini biasanya langsung terdeteksi oleh NetBeans sebelum program dijalankan.

**Contoh syntax error:**

```java
public class ContohSyntaxError {
    public static void main(String[] args) {
        System.out.println("Halo ITERA")
    }
}
```

Kode di atas salah karena tidak ada tanda titik koma (`;`) setelah perintah `System.out.println()`. Kesalahan seperti ini harus diperbaiki terlebih dahulu sebelum program dapat dijalankan.

### 8.4.2 Runtime Error

Runtime error adalah kesalahan yang muncul saat program sedang dijalankan. Program mungkin berhasil dikompilasi, tetapi berhenti ketika menemukan kondisi tertentu yang tidak dapat diproses.

**Contoh runtime error:**

```java
public class ContohRuntimeError {
    public static void main(String[] args) {
        int angka = 10;
        int pembagi = 0;
        int hasil = angka / pembagi;
        System.out.println("Hasil: " + hasil);
    }
}
```

Program tersebut tidak memiliki kesalahan penulisan kode, tetapi akan error saat dijalankan. Hal ini terjadi karena program mencoba melakukan pembagian dengan nol.

### 8.4.3 Logical Error

Logical error adalah kesalahan logika dalam program. Program dapat berjalan tanpa error, tetapi hasil yang diberikan tidak sesuai dengan yang diharapkan.

**Contoh logical error:**

```java
public class ContohLogicalError {
    public static void main(String[] args) {
        int panjang = 10;
        int lebar = 5;
        int luas = panjang + lebar;
        System.out.println("Luas persegi panjang: " + luas);
    }
}
```

Program di atas dapat berjalan, tetapi hasilnya salah. Untuk menghitung luas persegi panjang seharusnya menggunakan perkalian, bukan penjumlahan.

## 8.5 Exception Handling dengan `try-catch`

Exception handling adalah mekanisme untuk menangani kesalahan saat program berjalan. Dengan menggunakan exception handling, program tidak langsung berhenti ketika terjadi kesalahan, tetapi dapat memberikan pesan yang lebih jelas kepada pengguna.

Dalam Java, struktur dasar exception handling menggunakan blok `try-catch`. Kode yang berpotensi menimbulkan error diletakkan di dalam blok `try`, sedangkan penanganan error diletakkan di dalam blok `catch`.

**Bentuk umum `try-catch`:**

```java
try {
    // kode yang berpotensi error
} catch (JenisException e) {
    // kode untuk menangani error
}
```

**Contoh program:**

```java
public class DemoTryCatch {
    public static void main(String[] args) {
        try {
            int angka = 10;
            int pembagi = 0;
            int hasil = angka / pembagi;
            System.out.println("Hasil: " + hasil);
        } catch (ArithmeticException e) {
            System.out.println("Terjadi kesalahan: tidak bisa membagi dengan nol.");
        }
        System.out.println("Program selesai dijalankan.");
    }
}
```

**Output:**

```text
Terjadi kesalahan: tidak bisa membagi dengan nol.

Program selesai dijalankan.
```

Pada contoh tersebut, program tidak langsung berhenti meskipun terjadi kesalahan pembagian dengan nol. Kesalahan ditangani oleh blok `catch`, kemudian program tetap melanjutkan perintah berikutnya.

## 8.6 Menangani Input yang Salah

Dalam praktikum, mahasiswa sering membuat program yang meminta input dari pengguna. Masalah dapat terjadi ketika program meminta angka, tetapi pengguna memasukkan huruf atau teks.

Untuk menangani kondisi tersebut, Java menyediakan exception `InputMismatchException`. Exception ini biasanya muncul ketika tipe input tidak sesuai dengan tipe data yang diminta.

**Contoh program tanpa error handling:**

```java
import java.util.Scanner;
public class InputTanpaHandling {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Masukkan nilai: ");
        int nilai = input.nextInt();
        System.out.println("Nilai Anda: " + nilai);
    }
}
```

Jika pengguna memasukkan teks seperti `delapan puluh`, program akan error. Agar lebih aman, program dapat diperbaiki seperti berikut.

```java
import java.util.Scanner;
import java.util.InputMismatchException;
public class InputDenganHandling {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        try {
            System.out.print("Masukkan nilai: ");
            int nilai = input.nextInt();
            System.out.println("Nilai Anda: " + nilai);
        } catch (InputMismatchException e) {
            System.out.println("Input salah. Nilai harus berupa angka.");
        }
        System.out.println("Program selesai.");
    }
}
```

**Output jika input salah:**

```text
Masukkan nilai: delapan puluh
Input salah. Nilai harus berupa angka.
Program selesai.
```

Dengan cara ini, program menjadi lebih ramah terhadap kesalahan pengguna. Program tidak langsung berhenti, tetapi memberikan pesan yang mudah dipahami.

## 8.7 Blok `finally`

Blok `finally` adalah bagian dari exception handling yang akan selalu dijalankan, baik terjadi exception maupun tidak. Blok ini biasanya digunakan untuk menutup file, menutup koneksi, atau menampilkan pesan akhir.

**Bentuk umum:**

```java
try {
    // kode yang berpotensi error
} catch (Exception e) {
    // penanganan error
} finally {
    // kode yang selalu dijalankan
}
```

**Contoh program:**

```java
public class DemoFinally {
    public static void main(String[] args) {
        try {
            int hasil = 10 / 2;
            System.out.println("Hasil: " + hasil);
        } catch (ArithmeticException e) {
            System.out.println("Terjadi kesalahan pembagian.");
        } finally {
            System.out.println("Blok finally tetap dijalankan.");
        }
        System.out.println("Program selesai.");
    }
}
```

**Output:**

```text
Hasil: 5
Blok finally tetap dijalankan.
Program selesai.
```

Jika pembaginya diubah menjadi nol, blok `finally` tetap dijalankan. Hal ini menunjukkan bahwa `finally` berguna untuk memastikan bagian tertentu dari program tetap berjalan.

## 8.8 Keyword `throw` dan `throws`

Selain menangani exception yang sudah terjadi, Java juga memungkinkan programmer untuk membuat exception secara manual. Dua keyword yang sering digunakan adalah `throw` dan `throws`.

Keyword `throw` digunakan untuk melempar exception secara manual. Biasanya ini digunakan ketika programmer ingin membuat aturan validasi tertentu.

**Contoh penggunaan `throw`:**

```java
public class DemoThrow {
    static void cekNilai(int nilai) {
        if (nilai < 0) {
            throw new IllegalArgumentException("Nilai tidak boleh negatif.");
        } else {
            System.out.println("Nilai valid: " + nilai);
        }
    }
    public static void main(String[] args) {
        cekNilai(80);
        cekNilai(-10);
    }
}
```

Pada program tersebut, jika nilai kurang dari nol, program akan melempar exception. Ini berguna untuk menjaga agar data yang masuk tetap sesuai aturan.

Keyword `throws` digunakan pada deklarasi method untuk memberi tahu bahwa method tersebut mungkin menghasilkan exception. Biasanya `throws` sering digunakan ketika bekerja dengan file.

**Contoh sederhana:**

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
public class DemoThrows {
    static void bacaFile() throws FileNotFoundException {
        File file = new File("data.txt");
        Scanner baca = new Scanner(file);
        while (baca.hasNextLine()) {
            System.out.println(baca.nextLine());
        }
        baca.close();
    }
    public static void main(String[] args) {
        try {
            bacaFile();
        } catch (FileNotFoundException e) {
            System.out.println("File tidak ditemukan.");
        }
    }
}
```

Pada contoh tersebut, method `bacaFile()` diberi `throws FileNotFoundException`. Artinya, method tersebut berpotensi menghasilkan error jika file tidak ditemukan.

## 8.9 Pengenalan Java I/O

Java I/O adalah fitur Java yang digunakan untuk proses **input** dan **output**. Input berarti data masuk ke program, sedangkan output berarti data keluar dari program.

Contoh input:

- data dari keyboard
- data dari file
- data dari database

Contoh output:

- teks yang tampil di layar
- data yang disimpan ke file
- data yang dikirim ke printer atau sistem lain

Pada bab ini, pembahasan difokuskan pada input dari keyboard dan file teks. Materi ini penting karena pada mini project, program biasanya perlu menyimpan data agar tidak hilang setelah program ditutup.

<!-- GAMBAR 8.1: ganti dengan gambar asli dari PDF (simpan di public/images/pbo/gambar-8-1.png) -->

**Gambar 8.1 Ilustrasi Konsep Java I/O**

Gambar ini menunjukkan alur input dan output dalam Java. Data dapat masuk ke program melalui keyboard atau file, kemudian hasilnya dapat ditampilkan ke layar atau disimpan kembali ke file.

## 8.10 Membaca Input dengan `Scanner`

Class `Scanner` digunakan untuk membaca input dari pengguna melalui keyboard. Class ini sudah sering digunakan pada program dasar Java, tetapi pada bab ini penggunaannya dikaitkan dengan error handling.

**Contoh membaca input:**

```java
import java.util.Scanner;
public class DemoScanner {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Masukkan nama: ");
        String nama = input.nextLine();
        System.out.print("Masukkan umur: ");
        int umur = input.nextInt();
        System.out.println("Nama: " + nama);
        System.out.println("Umur: " + umur);
    }
}
```

Beberapa method yang sering digunakan pada `Scanner`:

|**Method**|**Fungsi**|
|---|---|
|`nextLine()`|membaca teks satu baris|
|`next()`|membaca satu kata|
|`nextInt()`|membaca bilangan bulat|
|`nextDouble()`|membaca bilangan desimal|

Kesalahan umum saat memakai `Scanner` adalah mencampur `nextInt()` dan `nextLine()` tanpa membersihkan baris input. Jika setelah `nextInt()` ingin membaca teks dengan `nextLine()`, biasanya perlu menambahkan `input.nextLine()` untuk membuang enter yang tersisa.

**Contoh:**

```java
import java.util.Scanner;
public class ScannerNextLine {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Masukkan umur: ");
        int umur = input.nextInt();
        input.nextLine(); // membersihkan enter
        System.out.print("Masukkan nama lengkap: ");
        String nama = input.nextLine();
        System.out.println("Nama: " + nama);
        System.out.println("Umur: " + umur);
    }
}
```

## 8.11 Menulis Data ke File

Java dapat digunakan untuk menyimpan data ke dalam file teks. Salah satu cara sederhana adalah menggunakan `FileWriter` dan `PrintWriter`.

**Contoh program menulis data ke file:**

```java
import java.io.FileWriter;
import java.io.PrintWriter;
import java.io.IOException;
public class TulisFile {
    public static void main(String[] args) {
        try {
            FileWriter fileWriter = new FileWriter("mahasiswa.txt");
            PrintWriter printWriter = new PrintWriter(fileWriter);
            printWriter.println("Nama : Andi Saputra");
            printWriter.println("NIM : 123140001");
            printWriter.println("Prodi: Informatika");
            printWriter.close();
            System.out.println("Data berhasil ditulis ke file.");
        } catch (IOException e) {
            System.out.println("Terjadi kesalahan saat menulis file.");
        }
    }
}
```

Jika program berhasil dijalankan, maka file `mahasiswa.txt` akan dibuat di folder project. Isi file tersebut adalah data mahasiswa yang ditulis melalui program.

Jika ingin menambahkan data baru tanpa menghapus isi file lama, gunakan mode append dengan menambahkan `true` pada `FileWriter`.

```java
FileWriter fileWriter = new FileWriter("mahasiswa.txt", true);
```

Mode append berguna ketika program ingin menyimpan banyak data secara bertahap. Misalnya, setiap kali pengguna menginput data mahasiswa baru, data tersebut ditambahkan ke bagian akhir file.

## 8.12 Membaca Data dari File

Selain menulis file, Java juga dapat membaca isi file. Salah satu cara sederhana adalah menggunakan class `File` dan `Scanner`.

**Contoh program membaca file:**

```java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
public class BacaFile {
    public static void main(String[] args) {
        try {
            File file = new File("mahasiswa.txt");
            Scanner baca = new Scanner(file);
            while (baca.hasNextLine()) {
                String data = baca.nextLine();
                System.out.println(data);
            }
            baca.close();
        } catch (FileNotFoundException e) {
            System.out.println("File tidak ditemukan.");
        }
    }
}
```

Program tersebut akan membaca file `mahasiswa.txt` baris demi baris. Jika file tidak ditemukan, program tidak langsung berhenti, tetapi menampilkan pesan bahwa file tidak ditemukan.

## 8.13 Studi Kasus Praktikum: Data Mahasiswa dengan File

Pada studi kasus ini, mahasiswa akan membuat program sederhana untuk menyimpan data mahasiswa ke file dan membaca kembali isi file tersebut. Program juga menggunakan error handling agar lebih aman saat menerima input dan mengakses file.

```java
import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.io.IOException;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.InputMismatchException;
public class SistemDataMahasiswa {
    static void simpanData(String nama, String nim, String prodi) {
        try {
            FileWriter fileWriter = new FileWriter("data_mahasiswa.txt", true);
            PrintWriter printWriter = new PrintWriter(fileWriter);
            printWriter.println("Nama : " + nama);
            printWriter.println("NIM : " + nim);
            printWriter.println("Prodi: " + prodi);
            printWriter.println(" ---------------------- ");
            printWriter.close();
            System.out.println("Data mahasiswa berhasil disimpan.");
        } catch (IOException e) {
            System.out.println("Terjadi kesalahan saat menyimpan data.");
        }
    }
    static void bacaData() {
        try {
            File file = new File("data_mahasiswa.txt");
            Scanner baca = new Scanner(file);
            System.out.println("\nIsi File Data Mahasiswa:");
            while (baca.hasNextLine()) {
                System.out.println(baca.nextLine());
            }
            baca.close();
        } catch (FileNotFoundException e) {
            System.out.println("File data_mahasiswa.txt belum ditemukan.");
        }
    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        try {
            System.out.println("=== Program Data Mahasiswa ITERA ===");
            System.out.print("Masukkan nama : ");
            String nama = input.nextLine();
            System.out.print("Masukkan NIM : ");
            String nim = input.nextLine();
            System.out.print("Masukkan prodi : ");
            String prodi = input.nextLine();
            if (nama.isEmpty() || nim.isEmpty() || prodi.isEmpty()) {
                throw new IllegalArgumentException("Data tidak boleh kosong.");
            }
            simpanData(nama, nim, prodi);
            bacaData();
        } catch (IllegalArgumentException e) {
            System.out.println("Kesalahan input: " + e.getMessage());
        } finally {
            System.out.println("\nProgram selesai dijalankan.");
        }
    }
}
```

### 8.13.1 Contoh Output

```text
=== Program Data Mahasiswa ITERA ===
Masukkan nama : Andi Saputra
Masukkan NIM : 123140001
Masukkan prodi : Informatika
Data mahasiswa berhasil disimpan.

Isi File Data Mahasiswa:
Nama : Andi Saputra
NIM : 123140001
Prodi: Informatika
 ----------------------

Program selesai dijalankan.
```

Pada program tersebut, method `simpanData()` digunakan untuk menyimpan data ke file. Method `bacaData()` digunakan untuk membaca kembali isi file.

Program juga menggunakan `try-catch` untuk menangani kemungkinan kesalahan saat menulis dan membaca file. Selain itu, program menggunakan `throw` untuk menolak data kosong.

## 8.14 Alur Error Handling dan Java I/O

<!-- GAMBAR 8.2: ganti dengan gambar asli dari PDF (simpan di public/images/pbo/gambar-8-2.png) -->

**Gambar 8.2 Alur Error Handling dan Java I/O pada Program Data Mahasiswa**

Gambar ini menunjukkan alur program saat menerima input, memvalidasi data, menyimpan data ke file, membaca kembali isi file, serta menangani kesalahan menggunakan `try-catch-finally`.

## 8.15 Kesalahan Umum dalam Error Handling dan Java I/O

Saat belajar error handling dan Java I/O, mahasiswa sering melakukan beberapa kesalahan. Kesalahan ini wajar karena mahasiswa mulai berinteraksi dengan input pengguna dan file eksternal.

Beberapa kesalahan umum adalah:

### 1. Tidak menggunakan `try-catch` saat membaca file

Membaca file dapat menyebabkan error jika file tidak ditemukan, sehingga perlu ditangani.

### 2. Salah menulis nama file

Nama file harus sama dengan file yang akan dibaca atau ditulis, termasuk ekstensi seperti `.txt`.

### 3. Lupa menutup file

File sebaiknya ditutup setelah selesai digunakan agar data tersimpan dengan benar dan resource tidak terpakai terus.

### 4. Program berhenti karena input tidak sesuai tipe data

Jika program meminta angka, tetapi pengguna memasukkan teks, program dapat menghasilkan exception.

### 5. Menangkap exception terlalu umum tanpa memahami penyebabnya

Menangkap `Exception` memang mudah, tetapi mahasiswa tetap perlu memahami jenis kesalahan yang terjadi.

### 6. Tidak tahu lokasi file tersimpan

Pada NetBeans, file biasanya tersimpan di folder project. Mahasiswa perlu mengecek folder project untuk menemukan file hasil program.

## 8.16 Tugas Percobaan

### Percobaan 1: Try-Catch Dasar

Buat program pembagian dua angka dengan ketentuan berikut:

1. Program meminta input dua angka dari pengguna.
2. Program membagi angka pertama dengan angka kedua.
3. Gunakan `try-catch` untuk menangani pembagian dengan nol.
4. Tampilkan pesan error jika pembagi bernilai nol.
5. Tampilkan hasil pembagian jika tidak terjadi error.

### Percobaan 2: Validasi Input Nilai

Buat program input nilai mahasiswa dengan ketentuan berikut:

1. Program meminta input nilai mahasiswa.
2. Gunakan `try-catch` untuk menangani input yang bukan angka.
3. Jika nilai valid, tampilkan nilai tersebut.
4. Jika input salah, tampilkan pesan bahwa input harus berupa angka.
5. Tambahkan validasi bahwa nilai tidak boleh kurang dari 0 dan tidak boleh lebih dari 100.

### Percobaan 3: Menulis dan Membaca File

Buat program untuk menyimpan data mahasiswa ke file teks dengan ketentuan berikut:

1. Program meminta input nama, NIM, dan prodi.
2. Simpan data tersebut ke file `mahasiswa.txt`.
3. Setelah data disimpan, baca kembali isi file tersebut.
4. Gunakan `try-catch` untuk menangani kesalahan saat menulis atau membaca file.
5. Tampilkan pesan jika file tidak ditemukan atau gagal ditulis.

### Percobaan 4: Studi Kasus Mini

Buat program **Sistem Data Mahasiswa** dengan ketentuan berikut:

1. Program dapat menerima input data mahasiswa.
2. Data yang dimasukkan meliputi nama, NIM, prodi, dan semester.
3. Program harus menolak data kosong.
4. Program harus menolak semester yang kurang dari 1.
5. Data mahasiswa disimpan ke file `data_mahasiswa.txt`.
6. Program dapat membaca dan menampilkan kembali isi file.
7. Gunakan `try-catch`, `finally`, dan minimal satu penggunaan `throw`.

### Pertanyaan Diskusi

Jawablah pertanyaan berikut sebagai bagian dari pemahaman konsep.

1. Apa yang dimaksud dengan exception dalam Java?
2. Apa perbedaan syntax error, runtime error, dan logical error?
3. Apa fungsi blok `try` dalam error handling?
4. Apa fungsi blok `catch` dalam error handling?
5. Kapan blok `finally` dijalankan?
6. Apa perbedaan `throw` dan `throws`?
7. Mengapa membaca file perlu menggunakan error handling?
8. Apa manfaat menyimpan data program ke file?

## 8.17 Tugas Laporan Praktikum

Setelah menyelesaikan seluruh percobaan pada Pertemuan 8, mahasiswa diminta membuat laporan praktikum. Format laporan dibuat konsisten dengan Pertemuan sebelumnya agar mahasiswa terbiasa dengan pola kerja yang sistematis dan rapi.

**Struktur laporan:**

1. Cover
2. Tujuan praktikum
3. Alat dan bahan
4. Langkah percobaan
5. Source code
6. Hasil output program
7. Analisis program
8. Kesimpulan

**Ketentuan isi analisis:**

Pada bagian analisis, mahasiswa diminta menjelaskan penerapan error handling dan Java I/O pada program yang dibuat. Penjelasan minimal mencakup:

- jenis exception yang ditangani
- bagian program yang menggunakan `try-catch`
- fungsi blok `finally` pada program
- penggunaan `throw` atau `throws` jika ada
- cara program menulis data ke file
- cara program membaca data dari file
- kendala yang muncul saat menjalankan program

Mahasiswa juga perlu menjelaskan bagaimana program merespons input yang salah. Penjelasan tidak perlu terlalu panjang, tetapi harus menunjukkan bahwa mahasiswa memahami cara membuat program yang lebih aman.

Laporan dikumpulkan dalam bentuk **PDF** sesuai ketentuan dosen atau asisten praktikum.

## 8.18 Penutup

Pada Pertemuan 8 ini, mahasiswa telah mempelajari error handling dan Java I/O. Error handling membantu program menangani kesalahan agar tidak langsung berhenti, sedangkan Java I/O membantu program membaca dan menyimpan data.
