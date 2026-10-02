---
id: 1
slug: "1"
minggu: 1
title: "PENGENALAN JAVA DAN DASAR PEMROGRAMAN"
kategori: "Dasar Java"
durasi: "150 Menit"
deskripsi: "Instalasi JDK & NetBeans, sintaks dasar Java, tipe data, variabel, operator, struktur kontrol, dan array."
tujuan:
  - "Menjelaskan pengertian bahasa pemrograman Java"
  - "Menginstal Java Development Kit (JDK)"
  - "Menginstal dan menggunakan NetBeans"
  - "Menulis dan menjalankan program Java sederhana"
  - "Memahami konsep tipe data, variabel, dan konstanta"
  - "Menggunakan operator dalam Java"
  - "Menggunakan struktur kondisional dan perulangan"
  - "Menggunakan array untuk menyimpan data"
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
