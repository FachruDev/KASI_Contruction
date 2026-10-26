import Link from "next/link";
import type { ArticleCard } from "@/data/articles";
import { ButtonIsland } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";

export function FeaturedArticle({ article }: { article: ArticleCard }) {
  return (
    <Reveal className="mx-auto max-w-[88rem] px-4 pb-20 md:px-10 md:pb-28">
      <Link className="group block rounded-[2.25rem] bg-ink/[0.035] p-1.5 hairline" href={article.href}>
        <article className="relative isolate flex min-h-[70dvh] flex-col justify-end overflow-hidden rounded-[calc(2.25rem-0.375rem)] bg-ink p-7 text-bone md:p-12">
          {article.image ? <ParallaxImage alt={article.imageAlt ?? article.title} className="absolute inset-0 -z-10 transition-opacity duration-700 group-hover:opacity-90" sizes="100vw" speed={0.15} src={article.image} /> : null}
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/50 to-ink/10" />
          <Eyebrow tone="dark">Pilihan editor · {article.category}</Eyebrow>
          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-[clamp(2.25rem,5vw,4.75rem)] leading-[0.95] font-medium tracking-[-0.05em]">{article.title}</h2>
              <p className="mt-5 line-clamp-3 max-w-2xl text-lg leading-relaxed text-bone/65">{article.description}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-4 rounded-full bg-bone py-1.5 pr-1.5 pl-6 text-[15px] font-medium text-ink">
              Baca selengkapnya
              <ButtonIsland variant="bone" />
            </span>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}
