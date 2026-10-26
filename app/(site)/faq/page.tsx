import type { Metadata } from "next";
import { FaqContent } from "@/components/faq/FaqContent";
import { PageHero } from "@/components/layout/PageHero";
import { getFaqSections, getPageContent } from "@/lib/cms";

export const metadata: Metadata = {
  title: "FAQ Jasa Pengaspalan",
  description:
    "Pertanyaan umum seputar jasa pengaspalan KASI, proses pekerjaan, konsultasi, dan layanan pengaspalan di Jabodetabek.",
};

export default async function FaqPage() {
  const [sections, pages] = await Promise.all([getFaqSections(), getPageContent()]);
  const page = pages.faq;
  return (
    <>
      <PageHero description={page.description} eyebrow={page.eyebrow} title={page.title} />
      <FaqContent sections={sections} support={{ title: page.supportTitle, text: page.supportText }} />
    </>
  );
}
