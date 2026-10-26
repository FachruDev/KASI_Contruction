/**
 * Copy the site ships with. Globals use these as field defaults, and the data layer falls back to
 * them so a fresh database still renders a complete site before anyone opens the admin.
 */
export const SITE_DEFAULTS = {
  companyName: "KASI",
  legalName: "Kaum Aspal Solusi Indonesia",
  footerTagline: "Solusi pengaspalan yang rapi, kuat, dan dapat diandalkan.",
  copyright: "© 2026 KASI. All rights reserved.",
  metaTitle: "KASI | Jasa Pengaspalan Profesional Jabodetabek",
  metaDescription:
    "KASI (Kaum Aspal Solusi Indonesia) menyediakan jasa pengaspalan profesional untuk jalan lingkungan, perumahan, area komersial, dan industri di Jabodetabek.",
  whatsappPhone: "6282123927180",
  whatsappMessage: "Halo, saya ingin konsultasi terkait jasa pengaspalan. Mohon informasinya.",
  email: "customerservice@kasi.com",
  address: "Jl. H Appandi kp. Kaum Pandak RT 002/01, Kabupaten Bogor, Jawa Barat No. rumah 49, 16913",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115450.87145564539!2d106.815021!3d-6.5244088!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa49178e0b914f503%3A0x7c84bd8b82250d61!2sJasa%20Pengaspalan%20Bogor!5e1!3m2!1sid!2sid!4v1787557793233!5m2!1sid!2sid",
  businessHours: [
    { label: "Senin - Jumat", open: "07:00", close: "19:00", closed: false },
    { label: "Sabtu", open: "08:00", close: "19:00", closed: false },
    { label: "Minggu", open: "", close: "", closed: true },
  ],
};

export const HOME_DEFAULTS = {
  hero: {
    eyebrow: "Kaum Aspal Solusi Indonesia",
    title: "Jasa Pengaspalan Profesional *Jabodetabek*",
    subtitle:
      "Solusi pengaspalan untuk jalan lingkungan, perumahan, hingga kebutuhan industri. Pengerjaan yang rapi, material berkualitas, dan proses kerja yang dapat dipercaya.",
    ctaLabel: "Konsultasi Gratis",
  },
  stats: [
    { value: "10+", label: "Tahun Pengalaman" },
    { value: "1k+", label: "Klien Puas" },
    { value: "100%", label: "Garansi Kualitas" },
  ],
  about: {
    eyebrow: "Tentang KASI",
    note: "Kaum Aspal Solusi Indonesia — kontraktor pengaspalan untuk Jabodetabek.",
    statement:
      "Pengaspalan yang baik bukan sekadar permukaan yang terlihat rapi. Kami memastikan setiap jalan yang kami kerjakan kuat, nyaman dilalui, dan bertahan bertahun-tahun, dari jalan perumahan, area parkir, kawasan usaha, hingga kebutuhan industri di Jabodetabek.",
    caption: "Lapangan, bukan presentasi — setiap foto adalah proyek kami.",
  },
  services: { eyebrow: "Layanan", heading: "Setiap jalan punya *kebutuhan* sendiri." },
  highlights: {
    eyebrow: "Kenapa KASI",
    heading: "Dikerjakan dengan *standar* yang bisa Anda cek.",
    description: "Dari survei lokasi sampai pemadatan terakhir, setiap tahap kami kerjakan terencana, transparan, dan rapi.",
    imageCaption: "Alat pemadat, tenaga terlatih, dan material yang disesuaikan tiap proyek.",
    items: [
      { icon: "engineering" as const, title: "Dikerjakan Tenaga Ahli", description: "Tim berpengalaman menangani pekerjaan pengaspalan dengan proses yang terencana dan hasil yang rapi." },
      { icon: "layers" as const, title: "Material Berkualitas", description: "Pemilihan material yang tepat menjadi kunci jalan yang kuat dan tahan lama, disesuaikan dengan kebutuhan setiap proyek." },
      { icon: "request_quote" as const, title: "Penawaran Jelas", description: "Estimasi biaya yang transparan berdasarkan kebutuhan dan kondisi lokasi, tanpa biaya tersembunyi." },
    ],
  },
  portfolio: { eyebrow: "Portfolio", heading: "Hasil kerja yang *bicara* sendiri." },
  cta: {
    title: "Siap mulai proyek *pengaspalan* Anda?",
    subtitle: "Ceritakan kebutuhan pengaspalan Anda. Tim KASI siap membantu memberikan konsultasi yang sesuai dengan kebutuhan proyek Anda.",
    buttonLabel: "Konsultasi via WhatsApp",
  },
};

export const PAGE_DEFAULTS = {
  services: {
    eyebrow: "Layanan",
    title: "Pengaspalan untuk *setiap* kebutuhan.",
    description: "Solusi pengaspalan untuk jalan perumahan, area parkir, kawasan usaha, hingga industri. Material berkualitas, hasil rapi, kuat, dan tahan lama.",
    priceNote: "Harga dapat berbeda tergantung luas area, ketebalan aspal, jenis pekerjaan, dan kondisi lokasi.",
    processEyebrow: "Cara kami bekerja",
    processHeading: "Empat tahap, *tanpa* kejutan.",
    processSteps: [
      { title: "Survei lokasi", description: "Tim kami meninjau kondisi permukaan, drainase, dan akses alat berat langsung di lokasi." },
      { title: "Penawaran jelas", description: "Anda menerima rincian pekerjaan, volume, dan biaya sebelum proyek dimulai." },
      { title: "Pengerjaan", description: "Persiapan dasar, penghamparan, dan pemadatan dikerjakan sesuai jadwal yang disepakati." },
      { title: "Serah terima", description: "Hasil diperiksa bersama dan lokasi dirapikan sebelum diserahkan kepada Anda." },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Jalan yang sudah *kami* bangun.",
    description: "Setiap proyek dikerjakan dengan memperhatikan kondisi lokasi, kebutuhan penggunaan, dan kualitas hasil akhir.",
  },
  testimonials: {
    eyebrow: "Testimoni",
    title: "Kata mereka yang *sudah* merasakan.",
    description: "Kepercayaan pelanggan adalah bagian penting dari pekerjaan kami. Ini pengalaman mereka setelah menggunakan layanan KASI di Jabodetabek.",
  },
  articles: {
    eyebrow: "Artikel",
    title: "Catatan dari *lapangan.*",
    description: "Panduan, tips perawatan, dan wawasan seputar pengaspalan, dari pemilihan material sampai menjaga jalan tetap awet.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Pertanyaan yang *sering* muncul.",
    description: "Jawaban seputar layanan, harga, proses pengerjaan, dan area layanan KASI. Jika masih ada yang ingin ditanyakan, tim kami siap membantu.",
    supportTitle: "Masih ada pertanyaan?",
    supportText: "Konsultasikan kebutuhan pengaspalan Anda langsung dengan tim KASI.",
  },
  contact: {
    eyebrow: "Kontak",
    title: "Mari mulai dari *percakapan.*",
    description: "Rencana pengaspalan untuk jalan, area parkir, perumahan, atau kawasan usaha? Ceritakan kebutuhan Anda dan dapatkan penawaran yang sesuai untuk Jabodetabek.",
  },
  cta: {
    title: "Punya proyek pengaspalan? *Mari diskusikan.*",
    subtitle: "Ceritakan kebutuhan dan kondisi lokasi Anda. Tim KASI siap memberi rekomendasi dan estimasi yang jelas untuk proyek Anda di Jabodetabek.",
    buttonLabel: "Konsultasi via WhatsApp",
  },
};
