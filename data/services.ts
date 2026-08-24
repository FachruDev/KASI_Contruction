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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQMP0Ii9f_lC3doDS0xbPUVNJC4MuCF9j3-XeiRIE1QXDdTfNYMStGPeWiVqoQKwR6LE8fcP9dMC2oKOyh6VIkuxBPn4A7lfg3pNDa8fcSJhsL5XLRjE8HL8YFuTDzZViCmv7XBXPpE0ZYkc8dtvf280_PQAz6wxmGZ--DmCjC2n00XKvmggwg1PoGsAa2OOOJoLA5DN9QjTXH_Zt1qWK3dTqqwn30byuULfF8Fck_BTowCkd1cOAt",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBj4C7LF3BGadNynvY8yz8xj_fE8zh9kmcWTn_CtAdLTmyCFZiFhGoMXxGKCS3oUa22VPpJci4my-fRbnXpc_96v2kWXb2Zn5kFYxtBpYrCWl2W1ZUWCvvqV9rDohWRjgDDiBUqSeSn5spO9qmwZKAkXzCVxg5ouhu5WohlpLnEmLv4jSvOSkfApCObPYcVHPGIUOfEZcm7NINBn7-3GCuYkwZdougnTMPbH1MtfBZD37mRtVILv8HQ",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGNAbFEFrobZ9PQpggaQWG5AR9uF7e-vxO_3_gSF4d7HM_Xv9DxjLcHrNwsHqQspEz-bRvp2MT2-TUUrwo3yWC7BKawrCkTrM3yzsqsWHKAp63PimfU56YqfNSeP50JB-OWCAyLaX0oy1BS9lPQ8D3a62-flxlX7Jbo0U8fCFNPi844E3YVp-rcuk6435oOIHiO0OPvMhOoCbQtAXFytdPlzY_BJave_VgfHWjE9VfkGH2HGAA0ohj",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-FcORvuTxlpfbimIsND7cimTj6e4yeph4MC0RgpQ2twfOtCOXdr5LggQiUKLG06p5T_S76Vxn5v4Jeha-f5KYVXD91qAh0lFDBIXh45bJg1LWgrmox1tYhZLpp9VhU_WjHnUoejQpw8ngENxUDJxSlbzTpr86-kMKvu_synMpN0dq3YpofIj4Zv8_ooku1f-UQf1PWXoLc3kFVSVBF3QH3_5NXVjaQn_QUTM-qKfI2TqzX0P5R6ID",
    imageAlt: "Pekerjaan pengaspalan metode penetrasi Lapen",
    benefits: ["Konstruksi kokoh", "Pilihan ekonomis untuk kebutuhan tertentu"],
    idealFor: "Jalan lingkungan, akses kawasan, dan jalan dengan lalu lintas ringan hingga sedang",
    price: "Rp110.000",
  },
] as const;
