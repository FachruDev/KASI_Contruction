import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { FEATURED_ARTICLE } from "@/data/articles";

export function FeaturedArticle() {
  return (
    <div className="mb-16">
      <div className="group flex flex-col overflow-hidden rounded-[2rem] bg-surface-container-low transition-all duration-300 hover:shadow-[0_4px_20px_rgba(46,50,48,0.06)] lg:flex-row">
        <div className="relative h-72 overflow-hidden lg:h-auto lg:w-2/3">
          <img
            alt={FEATURED_ARTICLE.imageAlt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            src={FEATURED_ARTICLE.image}
          />
        </div>
        <div className="flex flex-col justify-center p-8 md:p-12 lg:w-1/3">
          <span className="mb-4 inline-block self-start rounded-full bg-tertiary-container/30 px-3 py-1 font-label text-sm tracking-widest text-tertiary-fixed-dim uppercase">
            {FEATURED_ARTICLE.category}
          </span>
          <h2 className="mb-4 font-headline text-3xl font-bold text-on-surface transition-colors group-hover:text-primary md:text-4xl">
            {FEATURED_ARTICLE.title}
          </h2>
          <p className="mb-8 line-clamp-4 font-body text-lg leading-relaxed text-on-surface-variant">
            {FEATURED_ARTICLE.description}
          </p>
          <Link
            className="group/link inline-flex self-start items-center font-bold text-primary transition-colors hover:text-on-primary-fixed-variant"
            href={FEATURED_ARTICLE.href}
          >
            Read Full Article
            <MaterialIcon className="ml-2 transition-transform group-hover/link:translate-x-1">arrow_forward</MaterialIcon>
          </Link>
        </div>
      </div>
    </div>
  );
}
