
export function PortfolioHero({ filters }: { filters: readonly string[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 text-center md:px-12">
      <h1 className="mb-6 font-headline text-4xl font-bold text-on-background md:text-5xl lg:text-6xl">
        Hasil Pekerjaan Kami
      </h1>
      <p className="mx-auto mb-12 max-w-3xl font-body text-lg text-on-surface-variant md:text-xl">
        Lihat berbagai pekerjaan pengaspalan yang telah kami kerjakan. Setiap proyek dikerjakan dengan memperhatikan kondisi lokasi, kebutuhan penggunaan, dan kualitas hasil akhir.
      </p>

      <div className="mb-16 flex flex-wrap justify-center gap-3">
        {filters.map((filter, index) => (
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
