import { CheckIcon } from "@phosphor-icons/react/ssr";
import type { ServiceItem } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";

/** One editorial row per service; rows alternate image side on desktop. */
export function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <article className="grid grid-cols-1 gap-10 border-t border-ink/10 py-16 md:grid-cols-12 md:gap-12 md:py-28">
      <Reveal className={`md:col-span-7 ${flipped ? "md:order-2" : ""}`}>
        <div className="rounded-[2rem] bg-ink/[0.035] p-1.5 hairline">
          <ParallaxImage
            alt={service.imageAlt}
            className="aspect-[4/3] rounded-[calc(2rem-0.375rem)] bg-bone-deep"
            sizes="(min-width: 768px) 58vw, 100vw"
            src={service.image}
          />
        </div>
      </Reveal>

      <Reveal className={`flex flex-col md:col-span-5 ${flipped ? "md:order-1" : ""}`} delay={0.15}>
        <span className="font-mono text-[11px] tracking-[0.22em] text-ink/40">0{index + 1} / Layanan</span>
        <h2 className="mt-5 text-[clamp(2rem,3.6vw,3.25rem)] leading-[0.98] font-medium tracking-[-0.05em]">{service.title}</h2>
        <p className="mt-5 text-lg leading-relaxed text-ink/60">{service.description}</p>

        {service.benefits.length ? (
          <ul className="mt-8 space-y-3">
            {service.benefits.map((benefit) => (
              <li className="flex items-start gap-3 text-[15px] text-ink/80" key={benefit}>
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-signal/15 text-signal-deep">
                  <CheckIcon size={12} weight="bold" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        ) : null}

        {service.idealFor ? (
          <p className="mt-8 rounded-2xl bg-ink/[0.035] px-5 py-4 text-[14px] leading-relaxed text-ink/65 hairline">
            <span className="mb-1 block font-mono text-[10px] tracking-[0.2em] text-ink/40 uppercase">Cocok untuk</span>
            {service.idealFor}
          </p>
        ) : null}

        <div className="mt-auto flex flex-wrap items-end justify-between gap-6 pt-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.2em] text-ink/40 uppercase">Mulai dari</p>
            <p className="mt-1 text-4xl font-medium tracking-[-0.05em]">
              {service.price}
              <span className="text-base text-ink/45">/m²</span>
            </p>
          </div>
          <Button href="/contact" variant="ink">
            Diskusikan proyek
          </Button>
        </div>
      </Reveal>
    </article>
  );
}
