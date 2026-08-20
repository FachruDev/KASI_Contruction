import { PORTFOLIO_FILTERS } from "@/data/portfolio";

export function PortfolioHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 text-center md:px-12">
      <h1 className="mb-6 font-headline text-4xl font-bold text-on-background md:text-5xl lg:text-6xl">
        Our Craft in Focus
      </h1>
      <p className="mx-auto mb-12 max-w-3xl font-body text-lg text-on-surface-variant md:text-xl">
        Explore our gallery of completed projects. From serene residential driveways to robust
        commercial parking structures, we build foundations designed to last, blending structural
        integrity with natural aesthetics.
      </p>

      <div className="mb-16 flex flex-wrap justify-center gap-3">
        {PORTFOLIO_FILTERS.map((filter, index) => (
          <button
            key={filter}
            className={
              index === 0
                ? "rounded-full bg-primary px-5 py-2 text-sm font-semibold text-on-primary shadow-[0_4px_20px_rgba(46,50,48,0.06)] transition-transform hover:scale-105"
                : "rounded-full border border-outline-variant/30 bg-surface-container-high px-5 py-2 text-sm font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-highest"
            }
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>
    </section>
  );
}
