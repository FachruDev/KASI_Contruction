import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArticleDetailHeader } from "@/components/articles/ArticleDetailHeader";
import { AsphaltDrainageContent } from "@/components/articles/AsphaltDrainageContent";
import { ArticleShare } from "@/components/articles/ArticleShare";
import { ArticleDetailCta } from "@/components/articles/ArticleDetailCta";
import { CmsArticleDetail } from "@/components/articles/CmsArticleDetail";
import { getArticleBySlug } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Pentingnya Drainase Aspal yang Tepat",
  description:
    "Pelajari mengapa drainase yang baik penting untuk daya tahan permukaan aspal dan kualitas hasil pengaspalan jangka panjang.",
};

export default async function AsphaltDrainageArticlePage() {
  const article = await getArticleBySlug("the-importance-of-proper-asphalt-drainage");
  return (
    <div className="flex min-h-screen flex-col font-body text-on-surface">
      <Navbar />
      <main className="mx-auto w-full max-w-4xl flex-grow px-6 pt-32 pb-24 selection:bg-primary-container selection:text-on-primary-container md:px-8">
        {article ? <CmsArticleDetail article={article} /> : <><ArticleDetailHeader /><AsphaltDrainageContent /><ArticleShare /><ArticleDetailCta /></>}
      </main>
      <Footer />
    </div>
  );
}
