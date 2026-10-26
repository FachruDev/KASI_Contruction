import { Bezel } from "@/components/ui/Bezel";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { RevealHeading } from "@/components/motion/RevealHeading";
import type { HomeData } from "@/lib/types";

export function HighlightsSection({ highlights }: { highlights: HomeData["highlights"] }) {
  return (
    <section className="mx-auto max-w-[88rem] px-4 py-28 md:px-10 md:py-44">
      <div className="mb-16 grid gap-8 md:mb-24 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Reveal y={20}>
            <Eyebrow>{highlights.eyebrow}</Eyebrow>
          </Reveal>
          <RevealHeading className="mt-6 text-[clamp(2.5rem,5.5vw,5.5rem)] leading-[0.92] font-medium tracking-[-0.055em]" text={highlights.heading} />
        </div>
        <Reveal className="md:col-span-4" delay={0.2} y={24}>
          <p className="max-w-sm text-lg leading-relaxed text-ink/60">
            {highlights.description}
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
        <Reveal className="md:col-span-7 md:row-span-3">
          <Bezel className="h-full" innerClassName="relative min-h-[28rem]">
            <ParallaxImage
              alt={highlights.image.alt}
              className="absolute inset-0"
              position={highlights.image.position}
              sizes="(min-width: 768px) 58vw, 100vw"
              speed={0.1}
              src={highlights.image.src}
            />
            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-bone md:p-10">
              <p className="font-mono text-[10px] tracking-[0.22em] text-bone/60 uppercase">Di lapangan</p>
              <p className="mt-3 max-w-md text-[clamp(1.5rem,2.4vw,2.25rem)] leading-[1.1] font-medium tracking-[-0.04em]">
                {highlights.imageCaption}
              </p>
            </div>
          </Bezel>
        </Reveal>

        {highlights.items.map((feature, index) => (
          <Reveal className="md:col-span-5" delay={0.1 + index * 0.1} key={feature.title}>
            <Bezel className="h-full" innerClassName="flex h-full flex-col gap-8 p-7 md:p-8">
              <div className="flex items-center justify-between">
                <span className="flex size-14 items-center justify-center rounded-full bg-ink text-signal">
                  <Icon name={feature.icon} size={26} />
                </span>
                <span className="font-mono text-[11px] tracking-[0.2em] text-ink/35">0{index + 1}</span>
              </div>
              <div>
                <h3 className="text-2xl font-medium tracking-[-0.035em]">{feature.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink/60">{feature.description}</p>
              </div>
            </Bezel>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
