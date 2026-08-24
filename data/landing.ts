export const LANDING_IMAGES = {
  hero: "/assets/images/landing/landing1.jpeg",
  future: "/assets/images/landing/landing2.jpeg",
} as const;

export const LANDING_STATS = [
  { value: "10+", label: "Tahun Pengalaman" },
  { value: "1k+", label: "Klien Puas" },
  { value: "100%", label: "Garansi Kualitas" },
] as const;

export const LANDING_HIGHLIGHTS = {
  expertCrews: {
    icon: "engineering",
    title: "Dikerjakan Tenaga Ahli",
    description:
      "Tim berpengalaman siap menangani pekerjaan pengaspalan dengan proses yang terencana dan hasil yang rapi.",
  },
  qualityMaterials: {
    icon: "layers",
    title: "Material Berkualitas",
    description:
      "Pemilihan material yang tepat menjadi kunci jalan yang kuat dan tahan lama. Kami menyesuaikannya dengan kebutuhan setiap proyek.",
  },
  transparentPricing: {
    icon: "request_quote",
    title: "Penawaran Jelas",
    description: "Dapatkan estimasi biaya yang transparan berdasarkan kebutuhan dan kondisi lokasi, tanpa biaya tersembunyi.",
  },
} as const;
