import { ArticleShare } from "@/components/articles/ArticleShare";
import { CoverHero } from "@/components/layout/CoverHero";
import { Reveal } from "@/components/motion/Reveal";
import { RichText } from "@/components/ui/RichText";
import { formatDate } from "@/lib/cms";
import type { ArticleDetail } from "@/lib/types";

export function CmsArticleDetail({ article }: { article: ArticleDetail }) {
  const date = formatDate(article.publishedAt);

  return (
    <>
      <CoverHero back={{ href: "/articles", label: "Kembali ke artikel" }} eyebrow={date ? `${article.category} · ${date}` : article.category} image={article.image} title={article.title}>
        <Reveal className="mt-8 max-w-2xl" delay={0.5} y={20}>
          <p className="text-lg leading-relaxed text-bone/70">{article.excerpt}</p>
        </Reveal>
      </CoverHero>

      <article className="mx-auto max-w-[44rem] px-4 py-24 md:py-32">
        <Reveal>
          <RichText data={article.content} />
        </Reveal>
        <div className="mt-20">
          <ArticleShare title={article.title} />
        </div>
      </article>
    </>
  );
}
