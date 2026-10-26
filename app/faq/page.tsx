import type { Metadata } from "next";
import { FaqContent } from "@/components/faq/FaqContent";
import { PageHero } from "@/components/layout/PageHero";
import { getFaqSections } from "@/lib/cms";

export const metadata: Metadata = {
  title: "FAQ Jasa Pengaspalan",
  description:
    "Pertanyaan umum seputar jasa pengaspalan KASI, proses pekerjaan, konsultasi, dan layanan pengaspalan di Jabodetabek.",
};

export default async function FaqPage() {
  const sections = await getFaqSections();
  return (
    <>
      <PageHero
        description="Jawaban seputar layanan, harga, proses pengerjaan, dan area layanan KASI. Jika masih ada yang ingin ditanyakan, tim kami siap membantu."
        eyebrow="FAQ"
        title="Pertanyaan yang *sering* muncul."
      />
      <FaqContent sections={sections} />
    </>
  );
}
