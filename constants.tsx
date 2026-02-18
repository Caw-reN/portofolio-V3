import { Experience, Project, Article, SocialLink, Skill } from './types';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: 'Junior Network Engineer',
    company: 'SMK Karya Guna 2 Bekasi',
    period: 'Agustus 2024 - Sekarang',
    description: 'Bertanggung jawab penuh dalam menjaga keamanan dan stabilitas jaringan sekolah, melakukan perbaikan cepat pada perangkat keras yang bermasalah, serta memastikan seluruh sistem berjalan lancar guna mendukung kelancaran operasional pendidikan',
  },
  {
    id: '2',
    role: 'Teknisi RT/RW Net',
    company: 'DigiitMedia',
    period: 'Maret 2024 - Juli 2024',
    description: 'Bertanggung jawab penuh atas instalasi jaringan kabel Fiber Optik mulai dari jalur utama hingga ke rumah klien, termasuk melakukan pemasangan serta konfigurasi perangkat ONT untuk memastikan distribusi sinyal Wi-Fi yang optimal.',
  },
  {
    id: '3',
    role: 'Intern Network Engineer',
    company: 'Core Connecting People ',
    period: 'Juli 2023 - September 2023',
    description: 'Memiliki pengalaman operasional di lingkungan ISP dengan pemahaman mendalam mengenai instalasi, pemeliharaan, serta implementasi teknologi jaringan Fiber Optik secara langsung di lapangan.',
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Dashboard',
    description: 'Dashboard analitik komprehensif untuk pelacakan penjualan real-time, manajemen inventaris, dan laporan performa toko.',
    fullDescription: 'E-Commerce Dashboard adalah solusi terpadu bagi pemilik bisnis online untuk memantau kesehatan bisnis mereka secara real-time. Platform ini mengumpulkan data dari berbagai saluran penjualan dan menyajikannya dalam bentuk visualisasi data yang mudah dipahami. Pengguna dapat melacak pertumbuhan revenue, produk terlaris, hingga performa kampanye marketing dalam satu layar.',
    goals: 'Tujuan utama proyek ini adalah mengurangi waktu yang dihabiskan pemilik bisnis untuk rekapitulasi data manual. Kami ingin menciptakan alat pengambilan keputusan berbasis data yang cepat, akurat, dan memiliki antarmuka yang intuitif bagi pengguna non-teknis.',
    tags: ['React', 'D3.js', 'Tailwind'],
    imageUrl: 'https://picsum.photos/600/400?random=1',
    gallery: [
      'https://picsum.photos/800/500?random=10',
      'https://picsum.photos/800/500?random=11',
      'https://picsum.photos/800/500?random=12'
    ],
    link: '#',
    repoLink: '#',
  },
  {
    id: '2',
    title: 'Aplikasi Manajemen Tugas',
    description: 'Aplikasi produktivitas dengan fitur kolaborasi tim, drag-and-drop kanban board, dan notifikasi real-time.',
    fullDescription: 'Aplikasi ini dirancang untuk tim remote yang membutuhkan kejelasan dalam alur kerja. Dilengkapi dengan fitur Kanban Board yang interaktif, pengguna dapat memindahkan status tugas hanya dengan drag-and-drop. Sistem notifikasi real-time memastikan tidak ada anggota tim yang tertinggal informasi penting.',
    goals: 'Menciptakan alternatif manajemen tugas yang lebih ringan dan cepat dibandingkan kompetitor besar, dengan fokus pada kecepatan interaksi UI dan kolaborasi real-time tanpa delay.',
    tags: ['TypeScript', 'Node.js', 'Socket.io'],
    imageUrl: 'https://picsum.photos/600/400?random=2',
    gallery: [
      'https://picsum.photos/800/500?random=20',
      'https://picsum.photos/800/500?random=21'
    ],
    link: '#',
    repoLink: '#',
  },
  {
    id: '3',
    title: 'Website Travel Booking',
    description: 'Platform pemesanan tiket pesawat dan hotel dengan integrasi payment gateway dan pencarian berbasis lokasi.',
    fullDescription: 'Platform travel booking modern yang memprioritaskan pengalaman pengguna mobile. Menggunakan algoritma pencarian cerdas untuk merekomendasikan destinasi wisata berdasarkan preferensi pengguna sebelumnya. Terintegrasi penuh dengan berbagai metode pembayaran lokal.',
    goals: 'Mempermudah proses perencanaan liburan dengan menyediakan one-stop solution untuk tiket dan akomodasi, serta memastikan proses checkout yang aman dan sangat cepat.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe'],
    imageUrl: 'https://picsum.photos/600/400?random=3',
    gallery: [
      'https://picsum.photos/800/500?random=30',
      'https://picsum.photos/800/500?random=31',
      'https://picsum.photos/800/500?random=32'
    ],
    link: '#',
    repoLink: '#',
  }
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Mengoptimalkan Performa React di 2024',
    excerpt: 'Panduan mendalam tentang teknik rendering, code splitting, dan penggunaan hook yang efisien untuk aplikasi skala besar.',
    date: '12 Jan 2024',
    readTime: '5 min baca',
    imageUrl: 'https://picsum.photos/800/400?random=100',
    tags: ['React', 'Performance', 'JavaScript'],
    author: 'Alex Wijaya',
    content: `
      <p>React terus berkembang, dan cara kita mengoptimalkan aplikasi juga harus beradaptasi. Di tahun 2024, fokus utama optimasi bukan lagi sekadar <code>shouldComponentUpdate</code> atau <code>React.memo</code>, melainkan pemahaman mendalam tentang bagaimana React menjadwalkan update dan memproses rendering.</p>
      
      <h3>1. Mengurangi Re-render yang Tidak Perlu</h3>
      <p>Salah satu penyebab utama lambatnya aplikasi React adalah re-render yang berlebihan. Menggunakan <em>Composition Pattern</em> seringkali lebih efektif daripada membungkus segalanya dengan <code>useMemo</code>.</p>
      
      <p>Contoh implementasi optimasi sederhana:</p>
      
      <pre data-filename="components/OptimizationExample.jsx"><code>// Sebelum: Child re-render setiap Parent berubah
const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
       <button onClick={() => setCount(count + 1)}>Count: {count}</button>
       <ExpensiveChild />
    </div>
  );
};

// Sesudah: Menggunakan Composition
const Parent = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
       <button onClick={() => setCount(count + 1)}>Count: {count}</button>
       {children}
    </div>
  );
};</code></pre>

      <p>Untuk mengecek bundle size, Anda bisa menggunakan command berikut:</p>
      
      <pre><code>npx source-map-explorer build/static/js/*.js</code></pre>
      
      <h3>2. Code Splitting dan Lazy Loading</h3>
      <p>Jangan kirimkan semua JavaScript sekaligus. Gunakan <code>React.lazy</code> dan <code>Suspense</code> untuk memecah bundle aplikasi Anda. Ini sangat krusial untuk <em>First Contentful Paint (FCP)</em> yang cepat.</p>
      
      <pre data-filename="App.js"><code>// Contoh penggunaan React.lazy
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}</code></pre>
      
      <blockquote>"Premature optimization is the root of all evil, but standard practices are not optimizations, they are hygiene."</blockquote>
      
      <h3>3. Server Components (RSC)</h3>
      <p>Jika Anda menggunakan Next.js, manfaatkan React Server Components. RSC memungkinkan kita merender komponen berat di server dan mengirimkan HTML ringan ke klien.</p>
      
      <p>Kesimpulannya, performa adalah fitur. Jangan anggap remeh pengalaman pengguna di perangkat dengan spesifikasi rendah.</p>
    `
  },
  {
    id: '2',
    title: 'Mengapa TypeScript Penting untuk Tim Besar',
    excerpt: 'Bagaimana static typing dapat mencegah bug sejak dini dan meningkatkan produktivitas developer dalam jangka panjang.',
    date: '28 Des 2023',
    readTime: '4 min baca',
    imageUrl: 'https://picsum.photos/800/400?random=101',
    tags: ['TypeScript', 'Teamwork', 'Productivity'],
    author: 'Alex Wijaya',
    content: `
      <p>JavaScript adalah bahasa yang fleksibel, tetapi fleksibilitas itu seringkali menjadi pedang bermata dua dalam skala besar. Di sinilah TypeScript masuk sebagai penyelamat.</p>
      
      <h3>Dokumentasi yang Hidup</h3>
      <p>Tipe data adalah bentuk dokumentasi terbaik. Saat Anda melihat fungsi berikut:</p>
      
      <pre data-filename="types/User.ts"><code>interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

function getUser(id: string): Promise<User> {
  // ... implementasi
}</code></pre>

      <p>Anda langsung tahu apa yang dibutuhkan dan apa yang dikembalikan tanpa perlu membaca implementasi detailnya. Cukup jalankan tsc untuk mengecek error:</p>

      <pre><code>npm run type-check</code></pre>
      
      <h3>Refactoring Tanpa Rasa Takut</h3>
      <p>Bayangkan harus mengubah struktur objek user di 100 file berbeda. Dengan JavaScript biasa, ini adalah mimpi buruk search-and-replace. Dengan TypeScript, compiler akan memberitahu Anda tepat di mana saja kode yang rusak akibat perubahan tersebut.</p>
    `
  },
  {
    id: '3',
    title: 'Minimalisme dalam Desain UI/UX',
    excerpt: 'Filosofi "less is more" dalam mendesain antarmuka pengguna yang fungsional namun tetap estetis.',
    date: '15 Nov 2023',
    readTime: '6 min baca',
    imageUrl: 'https://picsum.photos/800/400?random=102',
    tags: ['Design', 'UI/UX', 'Minimalism'],
    author: 'Alex Wijaya',
    content: `
      <p>Minimalisme bukan sekadar membuat segalanya menjadi putih dan kosong. Minimalisme adalah tentang <strong>kejelasan tujuan</strong>. Setiap elemen di layar harus memiliki alasan kuat untuk berada di sana.</p>
      
      <h3>Whitespace adalah Aset Aktif</h3>
      <p>Banyak klien menganggap ruang kosong (whitespace) sebagai ruang yang terbuang. Padahal, whitespace adalah alat untuk mengarahkan fokus pengguna dan memberikan "ruang bernapas" bagi mata.</p>
      
      <pre data-filename="styles/global.css"><code>/* Contoh CSS untuk whitespace yang baik */
.card {
  padding: 2rem; /* Ruang dalam yang lega */
  margin-bottom: 2rem; /* Pemisahan antar elemen */
  line-height: 1.6; /* Keterbacaan teks */
}</code></pre>
      
      <h3>Fungsionalitas di Atas Dekorasi</h3>
      <p>Gaya desain Brutalist atau Neo-Brutalist yang sedang tren (seperti website ini!) sebenarnya berakar pada kejujuran material dan fungsi. Kita tidak menyembunyikan struktur website, kita menonjolkannya.</p>
    `
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/Caw-reN', icon: Github },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/hibrizi-tsaqif-rizky-gunawan-2a9971377/', icon: Linkedin },
  { platform: 'Instagram', url: 'https://instagram.com/hateerge', icon: Instagram },
  { platform: 'Email', url: 'mailto:hibrizi@smkkg2.sch.id', icon: Mail },
];

export const SKILLS: Skill[] = [
  { name: 'Laravel', category: 'Framework' },
  { name: 'PHP', category: 'Language' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Tailwind CSS', category: 'Styling' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Figma', category: 'Design' },
  { name: 'Golang', category: 'Language' },
  { name: 'Git', category: 'Tools' },
  { name: 'PosgreSQL', category: 'Database' },
];