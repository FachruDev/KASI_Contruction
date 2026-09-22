import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import type { CmsPortfolio } from "@/lib/cms";

function DetailItem({ icon, label, value }: { icon: string; label: string; value?: string }) {
  if (!value) return null;
  return <div className="flex items-start gap-3"><MaterialIcon className="mt-0.5 text-primary">{icon}</MaterialIcon><div><dt className="text-xs font-bold tracking-wider text-on-surface-variant uppercase">{label}</dt><dd className="font-semibold text-on-surface">{value}</dd></div></div>;
}

export function PortfolioDetail({ portfolio }: { portfolio: CmsPortfolio }) {
  const gallery = portfolio.gallery.filter((image) => image !== portfolio.coverImage);
  return (
    <>
      <Link className="group mb-8 inline-flex items-center gap-2 font-bold text-primary transition-colors hover:text-primary-fixed-dim" href="/portfolio"><MaterialIcon className="transition-transform group-hover:-translate-x-1">arrow_back</MaterialIcon>Kembali ke Portfolio</Link>
      <header className="mb-12">
        <span className="mb-4 inline-block rounded-full bg-primary-container/40 px-3 py-1 text-sm font-bold text-primary">{portfolio.category.title}</span>
        <h1 className="mb-4 font-headline text-4xl leading-tight font-bold text-on-surface md:text-5xl lg:text-6xl">{portfolio.title}</h1>
        {portfolio.subtitle ? <p className="max-w-3xl text-xl leading-relaxed text-on-surface-variant">{portfolio.subtitle}</p> : null}
      </header>

      <figure className="mb-12 overflow-hidden rounded-2xl bg-surface-container-low shadow-[0_12px_32px_rgba(10,10,10,0.10)]"><img alt={portfolio.coverImageAlt} className="h-[280px] w-full object-cover md:h-[540px]" src={portfolio.coverImage} /></figure>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px]">
        <article className="cms-rich-content text-lg leading-loose text-on-surface-variant" dangerouslySetInnerHTML={{ __html: portfolio.description || `<p>${portfolio.subtitle}</p>` }} />
        <aside className="h-fit rounded-2xl bg-surface-container-low p-6"><h2 className="mb-6 font-headline text-xl font-bold text-on-surface">Detail Proyek</h2><dl className="space-y-5"><DetailItem icon="location_on" label="Lokasi" value={portfolio.location} /><DetailItem icon="square_foot" label="Luas area" value={portfolio.area ? `${portfolio.area.toLocaleString("id-ID")} m²` : undefined} /><DetailItem icon="calendar_month" label="Tahun pengerjaan" value={portfolio.year ? String(portfolio.year) : undefined} /></dl></aside>
      </div>

      {portfolio.beforeImage && portfolio.afterImage ? <section className="mt-16"><h2 className="mb-6 font-headline text-3xl font-bold text-on-surface">Sebelum &amp; Sesudah</h2><div className="grid gap-6 md:grid-cols-2"><figure><figcaption className="mb-3 font-bold text-on-surface-variant">Sebelum</figcaption><img alt={`Kondisi sebelum proyek ${portfolio.title}`} className="h-72 w-full rounded-xl object-cover" src={portfolio.beforeImage} /></figure><figure><figcaption className="mb-3 font-bold text-on-surface-variant">Sesudah</figcaption><img alt={`Hasil proyek ${portfolio.title}`} className="h-72 w-full rounded-xl object-cover" src={portfolio.afterImage} /></figure></div></section> : null}

      {gallery.length ? <section className="mt-16"><h2 className="mb-6 font-headline text-3xl font-bold text-on-surface">Galeri Proyek</h2><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{gallery.map((image, index) => <img key={image} alt={`Galeri ${portfolio.title} ${index + 1}`} className="h-64 w-full rounded-xl object-cover" src={image} />)}</div></section> : null}
    </>
  );
}
