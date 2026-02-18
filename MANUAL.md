# Dokumentasi & Panduan Deployment Portfolio Minimalis

File ini berisi penjelasan teknis mengenai struktur kode aplikasi, panduan untuk mengubah konten (teks, gambar, data), serta langkah-langkah untuk menjalankan dan men-deploy aplikasi ini.

---

## 1. Persiapan Awal (Wajib)

Karena aplikasi ini menggunakan teknologi modern (**React + TypeScript + Vite**), browser tidak bisa menjalankannya secara langsung. Anda membutuhkan **Node.js**.

1.  Download dan Install **Node.js** (versi LTS) dari: [nodejs.org](https://nodejs.org/)
2.  Buka terminal (Command Prompt / PowerShell) di folder project ini.
3.  Install semua kebutuhan aplikasi dengan mengetik perintah:
    ```bash
    npm install
    ```
    *(Tunggu hingga proses selesai dan muncul folder `node_modules`)*

---

## 2. Cara Menjalankan di Windows (Localhost)

Setelah proses instalasi di atas selesai, ikuti langkah ini setiap kali ingin membuka website:

1.  Buka terminal di folder project.
2.  Ketik perintah:
    ```bash
    npm run dev
    ```
3.  Akan muncul tulisan seperti `Local: http://localhost:5173/`.
4.  Buka link tersebut di browser (Chrome/Edge).
5.  Website Anda sudah tampil! Setiap kali Anda mengubah kode, website akan otomatis ter-refresh.

---

## 3. Penjelasan Struktur Kode

Aplikasi ini dibangun menggunakan **React** (Library UI), **Tailwind CSS** (Styling), dan **Framer Motion** (Animasi).

### Core Files
*   **`index.html`**: File kerangka utama.
*   **`index.tsx`**: Pintu masuk aplikasi React.
*   **`App.tsx`**: Mengatur **Routing** (navigasi halaman).
*   **`constants.tsx`** (PENTING): **Database** sederhana aplikasi ini. Ubah teks, project, dan pengalaman di file ini.
*   **`package.json`**: Daftar pustaka/library yang digunakan (React, Vite, dll).
*   **`vite.config.js`**: Konfigurasi alat build (Vite).

### Components (`components/`)
*   **`Navbar.tsx`**: Menu navigasi atas.
*   **`Hero.tsx`**: Bagian intro & foto profil.
*   **`TechStack.tsx`**: Daftar keahlian (marquee).
*   **`Experience.tsx`**: Timeline pengalaman kerja.
*   **`Projects.tsx`**: Grid daftar project.
*   **`Articles.tsx`**: Daftar artikel.
*   **`Contact.tsx`**: Footer dan kontak.

---

## 4. Panduan Mengubah Konten (Kustomisasi)

### A. Mengubah Data (Pengalaman, Project, Artikel)
Edit file **`constants.tsx`**.
*   `EXPERIENCES`: Ubah data pengalaman kerja.
*   `PROJECTS`: Ubah data portfolio project.
*   `ARTICLES`: Ubah konten blog/artikel.

### B. Mengubah Foto Profil
Edit file **`components/Hero.tsx`**.
*   Cari tag `<img src="...">`. Ganti URL-nya dengan foto Anda.

### C. Mengubah Background Kotak-kotak (Grid)
Edit file **`components/Hero.tsx`**.
*   Ubah opacity pada `rgba(0, 0, 0, 0.07)` untuk mengatur ketebalan garis.

---

## 5. Cara Build untuk Deployment (VPS/Hosting)

Jika ingin mengupload ke internet (Production), Anda harus membuat versi "Build" agar file menjadi ringan dan bisa dibaca browser tanpa Node.js.

1.  Di terminal, ketik:
    ```bash
    npm run build
    ```
2.  Akan muncul folder baru bernama **`dist`**.
3.  Isi folder **`dist`** inilah yang Anda upload ke hosting atau VPS (Nginx/Apache).

### Konfigurasi Nginx (Untuk VPS)
Pastikan Nginx mengarah ke folder `dist` dan mengatur fallback routing:

```nginx
server {
    listen 80;
    server_name domain-anda.com;
    root /var/www/portfolio/dist; # Arahkan ke folder dist
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
