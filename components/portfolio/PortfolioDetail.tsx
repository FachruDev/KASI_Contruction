import { CalendarBlankIcon, MapPinIcon, RulerIcon } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";
import { CoverHero } from "@/components/layout/CoverHero";
import { BeforeAfter } from "@/components/portfolio/BeforeAfter";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { RichText } from "@/components/ui/RichText";
import type { ProjectDetail } from "@/lib/types";

function Fact({ icon, label, value }: { icon: ReactNode; label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-4 border-t border-ink/10 py-5 first:border-t-0 first:pt-0">
      <span className="mt-0.5 text-signal-deep">{icon}</span>
      <div>
        <dt className="font-mono text-[10px] tracking-[0.2em] text-ink/40 uppercase">{label}</dt>
        <dd className="mt-1 text-lg font-medium tracking-[-0.02em]">{value}</dd>
      </div>
    </div>
  );
}

export function PortfolioDetail({ portfolio }: { portfolio: ProjectDetail }) {
  const gallery = portfolio.gallery.filter((image) => image.src !== portfolio.image.src);

  return (
    <>
      <CoverHero back={{ href: "/portfolio", label: "Kembali ke portfolio" }} eyebrow={portfolio.category.title} image={portfolio.image} title={portfolio.title}>
        <Reveal className="mt-8 max-w-2xl" delay={0.5} y={20}>
          <p className="text-lg leading-relaxed text-bone/70">{portfolio.summary}</p>
        </Reveal>
      </CoverHero>

      <section className="mx-auto grid max-w-[88rem] grid-cols-1 gap-14 px-4 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <Reveal className="md:col-span-7">
          {portfolio.body ? <RichText data={portfolio.body} /> : <p className="rich-content">{portfolio.summary}</p>}
        </Reveal>
        <aside className="md:col-span-4 md:col-start-9">
          <div className="md:sticky md:top-28">
            <Reveal delay={0.15}>
              <div className="rounded-[2rem] bg-ink/[0.035] p-1.5 hairline">
                <div className="rounded-[calc(2rem-0.375rem)] bg-bone p-7 ambient-shadow">
                  <p className="mb-6 font-mono text-[10px] tracking-[0.22em] text-ink/45 uppercase">Detail proyek</p>
                  <dl>
                    <Fact icon={<MapPinIcon size={20} weight="light" />} label="Lokasi" value={portfolio.location} />
                    <Fact icon={<RulerIcon size={20} weight="light" />} label="Luas area" value={portfolio.area} />
                    <Fact icon={<CalendarBlankIcon size={20} weight="light" />} label="Tahun pengerjaan" value={portfolio.year} />
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>
        </aside>
      </section>

      {portfolio.before && portfolio.after ? (
        <section className="mx-auto max-w-[88rem] px-4 pb-24 md:px-10 md:pb-36">
          <Reveal className="mb-10" y={20}>
            <Eyebrow>Sebelum &amp; sesudah</Eyebrow>
          </Reveal>
          <Reveal>
            <BeforeAfter after={portfolio.after} before={portfolio.before} title={portfolio.title} />
          </Reveal>
        </section>
      ) : null}

      {gallery.length ? (
        <section className="mx-auto max-w-[88rem] px-4 pb-28 md:px-10 md:pb-40">
          <Reveal className="mb-10" y={20}>
            <Eyebrow>Galeri proyek</Eyebrow>
          </Reveal>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
            {gallery.map((image, index) => (
              <Reveal className={index % 3 === 0 ? "md:col-span-12" : "md:col-span-6"} delay={(index % 3) * 0.08} key={image.src}>
                <div className="rounded-[2rem] bg-ink/[0.035] p-1.5 hairline">
                  <ParallaxImage
                    alt={image.alt}
                    className={`rounded-[calc(2rem-0.375rem)] bg-bone-deep ${index % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}
                    sizes={index % 3 === 0 ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
                    position={image.position}
                    speed={0.08}
                    src={image.src}
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
