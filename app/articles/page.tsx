import type { Metadata } from "next";
import { ArticlesGrid } from "@/components/articles/ArticlesGrid";
import { FeaturedArticle } from "@/components/articles/FeaturedArticle";
import { PageHero } from "@/components/layout/PageHero";
import { getArticles } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Artikel Pengaspalan",
  description:
    "Artikel dan insight KASI seputar pengaspalan, aspal hotmix, perawatan jalan, drainase, dan kualitas pekerjaan aspal.",
};

export default async function ArticlesPage() {
  const articles = await getArticles();
  return (
    <>
      <PageHero
        description="Panduan, tips perawatan, dan wawasan seputar pengaspalan, dari pemilihan material sampai menjaga jalan tetap awet."
        eyebrow="Artikel"
        title="Catatan dari *lapangan.*"
      />
      <FeaturedArticle article={articles.featured} />
      <ArticlesGrid articles={articles.articles} />
    </>
  );
}
