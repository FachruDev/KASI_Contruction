import { Eyebrow } from "@/components/ui/Eyebrow";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import { ScrollText } from "@/components/motion/ScrollText";
import type { HomeData } from "@/lib/types";

export function IntroSection({ about }: { about: HomeData["about"] }) {
  return (
    <section className="mx-auto max-w-[88rem] px-4 py-28 md:px-10 md:pt-48 md:pb-32">
      <div className="grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-3" y={20}>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          {about.note ? <p className="mt-6 max-w-[16rem] font-mono text-[11px] leading-relaxed tracking-[0.08em] text-ink/45 uppercase">{about.note}</p> : null}
        </Reveal>
        <ScrollText className="text-[clamp(1.75rem,3.7vw,3.6rem)] leading-[1.12] font-medium tracking-[-0.04em] text-ink md:col-span-9" text={about.statement} />
      </div>

      <div className="relative mt-24 grid grid-cols-1 gap-6 md:mt-40 md:grid-cols-12 md:gap-0">
        <Reveal className="md:col-span-8">
          <div className="rounded-[2rem] bg-ink/[0.035] p-1.5 hairline">
            <ParallaxImage
              alt={about.primaryImage.alt}
              className="aspect-[4/3] rounded-[calc(2rem-0.375rem)] md:aspect-[16/10]"
              position={about.primaryImage.position}
              sizes="(min-width: 768px) 66vw, 100vw"
              src={about.primaryImage.src}
            />
          </div>
        </Reveal>
        <Reveal className="md:col-span-5 md:col-start-8 md:-mt-48 md:rotate-[2deg]" delay={0.15}>
          <div className="rounded-[2rem] bg-bone p-1.5 ambient-shadow hairline">
            <ParallaxImage
              alt={about.secondaryImage.alt}
              className="aspect-[4/5] rounded-[calc(2rem-0.375rem)]"
              position={about.secondaryImage.position}
              sizes="(min-width: 768px) 40vw, 100vw"
              speed={0.08}
              src={about.secondaryImage.src}
            />
          </div>
          {about.caption ? <p className="mt-5 max-w-xs font-mono text-[11px] tracking-[0.08em] text-ink/45 uppercase md:rotate-[-2deg]">{about.caption}</p> : null}
        </Reveal>
      </div>
    </section>
  );
}
