import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { ASPHALT_DRAINAGE_ARTICLE } from "@/data/articles";

export function ArticleDetailHeader() {
  return (
    <>
      <Link
        className="group mb-8 inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-on-primary-fixed-variant"
        href="/articles"
      >
        <MaterialIcon className="transition-transform group-hover:-translate-x-1">arrow_back</MaterialIcon>
        Back to Articles
      </Link>

      <header className="mb-12">
        <div className="mb-4 flex items-center gap-3 text-sm font-bold tracking-wider text-tertiary uppercase">
          <span>{ASPHALT_DRAINAGE_ARTICLE.category}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-tertiary-fixed-dim" />
          <span>{ASPHALT_DRAINAGE_ARTICLE.date}</span>
        </div>
        <h1 className="mb-8 font-headline text-4xl leading-tight font-bold text-on-surface md:text-5xl lg:text-6xl">
          {ASPHALT_DRAINAGE_ARTICLE.title}
        </h1>
        <figure className="group relative h-[400px] w-full overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(46,50,48,0.06)] md:h-[500px]">
          <img
            alt={ASPHALT_DRAINAGE_ARTICLE.imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={ASPHALT_DRAINAGE_ARTICLE.image}
          />
          <div className="pointer-events-none absolute inset-0 bg-tertiary-fixed/10 mix-blend-overlay" />
        </figure>
      </header>
    </>
  );
}
