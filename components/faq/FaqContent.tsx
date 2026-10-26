import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { Button } from "@/components/ui/Button";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { Reveal } from "@/components/motion/Reveal";
import type { FaqSection } from "@/data/faq";

export function FaqContent({ sections }: { sections: FaqSection[] }) {
  return (
    <section className="mx-auto grid max-w-[88rem] grid-cols-1 gap-16 px-4 pb-28 md:grid-cols-12 md:px-10 md:pb-40">
      <div className="space-y-20 md:col-span-7">
        {sections.map((section, index) => (
          <Reveal key={section.title}>
            <div className="mb-6 flex items-baseline gap-4">
              <span className="font-mono text-[11px] tracking-[0.22em] text-signal-deep">0{index + 1}</span>
              <h2 className="font-mono text-[11px] tracking-[0.22em] text-ink/50 uppercase">{section.title}</h2>
            </div>
            <FaqAccordion items={section.items} />
          </Reveal>
        ))}
      </div>

      <aside className="md:col-span-4 md:col-start-9">
        <div className="space-y-5 md:sticky md:top-28">
          <Reveal delay={0.1}>
            <div className="rounded-[2rem] bg-ink/[0.035] p-1.5 hairline">
              <ParallaxImage alt="Jalan perumahan yang baru diaspal" className="aspect-[4/3] rounded-[calc(2rem-0.375rem)]" sizes="(min-width: 768px) 30vw, 100vw" src="/assets/images/faq/faq1.jpeg" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-[2rem] bg-bone/[0.04] p-1.5 hairline">
              <div className="rounded-[calc(2rem-0.375rem)] bg-ink p-8 text-bone shadow-[inset_0_1px_1px_rgba(242,238,231,0.08)]">
                <h3 className="text-2xl font-medium tracking-[-0.035em]">Masih ada pertanyaan?</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-bone/60">Konsultasikan kebutuhan pengaspalan Anda langsung dengan tim KASI.</p>
                <Button className="mt-8" href="/contact">
                  Hubungi kami
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </aside>
    </section>
  );
}
