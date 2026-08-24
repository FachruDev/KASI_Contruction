export type ServiceItem = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  benefits: readonly string[];
  idealFor: string;
  price: string;
};

export const SERVICES: readonly ServiceItem[] = [
  {
    title: "Basic - Pelapisan Hotmix",
    description:
      "Solusi pelapisan aspal hotmix untuk meningkatkan kualitas dan tampilan permukaan jalan yang sudah tersedia.",
    image:
      "/assets/images/services/services1.jpeg",
    imageAlt: "Pekerjaan pelapisan aspal hotmix",
    benefits: ["Praktis dan ekonomis", "Permukaan lebih rapi dan kuat"],
    idealFor: "Jalan lingkungan, area parkir, dan akses usaha",
    price: "Rp85.000",
  },
  {
    title: "Overlay - Pelapisan Ulang Aspal",
    description:
      "Pelapisan ulang pada permukaan aspal lama untuk mengembalikan kondisi jalan agar lebih rata, kuat, dan nyaman digunakan.",
    image:
      "/assets/images/services/services2.jpeg",
    imageAlt: "Pekerjaan pelapisan ulang aspal",
    benefits: ["Memperbaiki permukaan lama", "Lebih cepat dibanding pembangunan dari awal"],
    idealFor: "Jalan lama, area parkir, dan kawasan usaha",
    price: "Rp100.000",
  },
  {
    title: "Premium - Pengaspalan Jalan Baru",
    description:
      "Paket pengaspalan dari tahap persiapan tanah hingga finishing untuk membangun jalan baru dengan struktur yang lebih kuat dan tahan lama.",
    image:
      "/assets/images/services/services3.jpeg",
    imageAlt: "Pekerjaan pembangunan dan pengaspalan jalan baru",
    benefits: ["Struktur jalan lebih kuat", "Cocok untuk pembangunan dari awal"],
    idealFor: "Jalan baru, kawasan perumahan, akses proyek, dan area komersial",
    price: "Rp150.000",
  },
  {
    title: "Lapen - Pengaspalan Penetrasi",
    description:
      "Metode pengaspalan penetrasi dengan lapisan agregat dan aspal yang dipadatkan secara bertahap untuk menghasilkan permukaan jalan yang kokoh.",
    image:
      "/assets/images/services/services4.jpeg",
    imageAlt: "Pekerjaan pengaspalan metode penetrasi Lapen",
    benefits: ["Konstruksi kokoh", "Pilihan ekonomis untuk kebutuhan tertentu"],
    idealFor: "Jalan lingkungan, akses kawasan, dan jalan dengan lalu lintas ringan hingga sedang",
    price: "Rp110.000",
  },
] as const;
