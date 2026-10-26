import { ArticleShare } from "@/components/articles/ArticleShare";
import { CoverHero } from "@/components/layout/CoverHero";
import { Reveal } from "@/components/motion/Reveal";
import { formatDate, type CmsArticle } from "@/lib/cms";

export function CmsArticleDetail({ article }: { article: CmsArticle }) {
  const date = formatDate(article.publishedAt);

  return (
    <>
      <CoverHero
        back={{ href: "/articles", label: "Kembali ke artikel" }}
        eyebrow={date ? `${article.category} · ${date}` : article.category}
        image={article.image}
        imageAlt={article.imageAlt}
        title={article.title}
      >
        {article.excerpt ? (
          <Reveal className="mt-8 max-w-2xl" delay={0.5} y={20}>
            <p className="text-lg leading-relaxed text-bone/70">{article.excerpt}</p>
          </Reveal>
        ) : null}
      </CoverHero>

      <article className="mx-auto max-w-[44rem] px-4 py-24 md:py-32">
        <Reveal>
          <div className="rich-content" dangerouslySetInnerHTML={{ __html: article.content }} />
        </Reveal>
        <div className="mt-20">
          <ArticleShare title={article.title} />
        </div>
      </article>
    </>
  );
}
