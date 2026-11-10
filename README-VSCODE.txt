MIR SOLUTION - WEBSITE
======================

Project ini adalah kode asli yang diekspor dari file Review Local HTML File.make.
Perbaikan yang diterapkan hanya pada kesalahan sintaks TypeScript di deklarasi
array `services` pada src/App.tsx (menambahkan pemisah properti yang hilang).
Konten, desain, teks, warna, navigasi, dan struktur halaman lainnya dipertahankan.

CARA MENJALANKAN DI VISUAL STUDIO CODE
--------------------------------------
1. Ekstrak folder MIR-SOLUTION-WEBSITE.
2. Buka Visual Studio Code.
3. Pilih File > Open Folder, lalu pilih folder MIR-SOLUTION-WEBSITE.
4. Pastikan Node.js versi 22 atau lebih baru sudah terpasang.
5. Buka Terminal > New Terminal.
6. Jalankan perintah:

   npm install

7. Setelah instalasi selesai, jalankan:

   npm run dev

8. Buka alamat lokal yang muncul di terminal (biasanya http://localhost:5173).

UNTUK MEMBUAT VERSI WEBSITE SIAP UPLOAD
---------------------------------------
Jalankan:

   npm run build

Hasil website akan dibuat di folder dist.

FILE UTAMA
----------
- index.html       : halaman HTML utama
- src/App.tsx      : komponen dan isi website
- src/index.css    : seluruh desain dan tampilan
- src/main.tsx     : titik awal React
- src/app/routes.tsx : pengaturan navigasi/halaman
- public/images/  : logo MIR Solution asli

Catatan: Jangan menghapus folder public/images karena berisi logo yang digunakan
oleh website.
