// Bundled fallbacks shown only while the CMS `legal_pages` records are unavailable.
export type LegalSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
  emphasizedParagraph?: string;
};

export const TERMS_SECTIONS: readonly LegalSection[] = [
  {
    id: "persetujuan",
    title: "Persetujuan atas ketentuan",
    paragraphs: [
      "Dengan menggunakan layanan KASI, meminta penawaran, atau mengakses website ini, Anda menyetujui syarat dan ketentuan berikut. Jika Anda tidak menyetujui sebagian dari ketentuan ini, mohon untuk tidak menggunakan layanan maupun website kami.",
      "Kami dapat memperbarui ketentuan ini sewaktu-waktu. Perubahan berlaku sejak dipublikasikan di website ini, dan penggunaan layanan setelahnya berarti Anda menerima perubahan tersebut.",
    ],
  },
  {
    id: "layanan",
    title: "Deskripsi layanan",
    paragraphs: [
      "KASI menyediakan jasa pengaspalan dan pekerjaan pendukungnya. Rincian proyek, jadwal, dan spesifikasi material menyesuaikan kondisi lokasi, cuaca, dan ketersediaan material.",
      "Penawaran yang kami berikan merupakan estimasi berdasarkan survei awal. Biaya akhir dapat berubah apabila ditemukan kondisi struktur atau tanah yang tidak terduga. Setiap perubahan signifikan akan dikomunikasikan dan harus disetujui secara tertulis sebelum pekerjaan dilanjutkan.",
    ],
  },
  {
    id: "tanggung-jawab",
    title: "Tanggung jawab pelanggan",
    paragraphs: ["Sebagai pelanggan KASI, Anda bertanggung jawab untuk:"],
    bullets: [
      "Menyediakan akses lokasi yang memadai bagi tim dan alat berat kami.",
      "Mengurus izin yang diperlukan dari lingkungan atau pengelola kawasan apabila pekerjaan berdampak pada area bersama.",
      "Menginformasikan utilitas bawah tanah atau potensi bahaya yang diketahui sebelum pekerjaan dimulai.",
      "Melakukan pembayaran tepat waktu sesuai jadwal yang tercantum dalam kesepakatan.",
    ],
  },
  {
    id: "batasan",
    title: "Batasan tanggung jawab",
    paragraphs: [
      "Sejauh diizinkan oleh hukum yang berlaku, KASI tidak bertanggung jawab atas kerugian tidak langsung yang timbul dari:",
    ],
    bullets: [
      "Ketidakmampuan mengakses atau menggunakan layanan.",
      "Tindakan atau konten pihak ketiga yang berkaitan dengan layanan.",
      "Kondisi tanah, penurunan permukaan, atau ketidakstabilan geologis yang tidak dapat dideteksi secara wajar sebelum proyek dimulai.",
    ],
    emphasizedParagraph: "Total tanggung jawab KASI tidak melebihi nilai yang Anda bayarkan untuk layanan yang dipersengketakan.",
  },
  {
    id: "hukum",
    title: "Hukum yang berlaku",
    paragraphs: [
      "Ketentuan ini diatur dan ditafsirkan berdasarkan hukum Republik Indonesia.",
      "Apabila salah satu ketentuan dinyatakan tidak berlaku, ketentuan lainnya tetap berlaku sepenuhnya. Ketentuan ini merupakan keseluruhan kesepakatan antara Anda dan KASI terkait penggunaan layanan.",
    ],
  },
];

export const PRIVACY_SECTIONS: readonly LegalSection[] = [
  {
    id: "pengumpulan",
    title: "Informasi yang kami kumpulkan",
    paragraphs: ["Kami mengumpulkan informasi yang Anda berikan secara sukarela saat meminta penawaran atau menghubungi kami, antara lain:"],
    bullets: ["Data kontak seperti nama, nomor WhatsApp, dan alamat lokasi pekerjaan.", "Rincian kebutuhan dan kondisi lokasi proyek.", "Riwayat komunikasi dengan tim kami."],
  },
  {
    id: "penggunaan",
    title: "Penggunaan data",
    paragraphs: ["Data Anda kami gunakan untuk:"],
    bullets: [
      "Menyusun estimasi dan menjadwalkan survei lokasi.",
      "Memberikan dukungan dan informasi perkembangan pekerjaan.",
      "Menyampaikan informasi administratif terkait layanan.",
      "Meningkatkan kualitas website melalui analitik anonim.",
    ],
  },
  {
    id: "cookie",
    title: "Cookie",
    paragraphs: ["Website ini dapat menggunakan cookie untuk memahami cara pengunjung berinteraksi dengan halaman kami. Anda dapat menonaktifkan cookie melalui pengaturan browser."],
  },
  {
    id: "berbagi",
    title: "Berbagi dengan pihak ketiga",
    paragraphs: [
      "Kami hanya membagikan data dengan persetujuan Anda, untuk memenuhi kewajiban hukum, atau kepada mitra tepercaya yang membantu kami menjalankan layanan.",
    ],
    emphasizedParagraph: "Kami tidak menjual data pribadi Anda kepada pihak mana pun.",
  },
  {
    id: "kontak",
    title: "Hubungi kami",
    paragraphs: ["Jika Anda memiliki pertanyaan tentang kebijakan ini, silakan hubungi kami melalui email atau WhatsApp yang tercantum di halaman kontak."],
  },
];
