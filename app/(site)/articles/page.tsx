import type { Metadata } from "next";
import { ArticlesGrid } from "@/components/articles/ArticlesGrid";
import { FeaturedArticle } from "@/components/articles/FeaturedArticle";
import { PageHero } from "@/components/layout/PageHero";
import { getArticles, getPageContent } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Artikel Pengaspalan",
  description:
    "Artikel dan insight KASI seputar pengaspalan, aspal hotmix, perawatan jalan, drainase, dan kualitas pekerjaan aspal.",
};

export default async function ArticlesPage() {
  const [articles, pages] = await Promise.all([getArticles(), getPageContent()]);
  const page = pages.articles;
  return (
    <>
      <PageHero description={page.description} eyebrow={page.eyebrow} title={page.title} />
      {articles.featured ? (
        <>
          <FeaturedArticle article={articles.featured} />
          <ArticlesGrid articles={articles.articles} />
        </>
      ) : (
        <p className="mx-auto max-w-[88rem] px-4 pb-40 text-ink/50 md:px-10">Belum ada artikel yang dipublikasikan.</p>
      )}
    </>
  );
}
