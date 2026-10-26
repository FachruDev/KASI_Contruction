import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import type { ArticleSummary } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";

export function ArticleCard({ article }: { article: ArticleSummary }) {
  return (
    <Link className="group flex h-full flex-col" href={article.href}>
      <div className="rounded-[2rem] bg-ink/[0.035] p-1.5 hairline">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(2rem-0.375rem)] bg-ink">
          {article.image ? (
            <Image
              alt={article.image.alt}
              className="object-cover transition-transform duration-[1.4s] ease-fluid group-hover:scale-[1.05]"
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
              src={article.image.src}
              style={article.image.position ? { objectPosition: article.image.position } : undefined}
            />
          ) : (
            <div className="flex h-full items-center justify-center text-signal">
              <Icon name="road" size={56} />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col px-2 pt-6">
        <p className="font-mono text-[10px] tracking-[0.22em] text-ink/45 uppercase">{article.category}</p>
        <h3 className="mt-3 text-[1.6rem] leading-[1.1] font-medium tracking-[-0.04em] transition-colors duration-500 group-hover:text-signal-deep">{article.title}</h3>
        <p className="mt-3 line-clamp-3 text-[15px] leading-relaxed text-ink/55">{article.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[14px] font-medium">
          Baca artikel
          <ArrowUpRightIcon className="transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={15} weight="light" />
        </span>
      </div>
    </Link>
  );
}
