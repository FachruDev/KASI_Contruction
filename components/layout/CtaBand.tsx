import { WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ParallaxImage } from "@/components/motion/ParallaxImage";
import { RevealHeading } from "@/components/motion/RevealHeading";
import { Reveal } from "@/components/motion/Reveal";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import type { SiteConfig } from "@/lib/cms";

type CtaBandProps = {
  site: SiteConfig;
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaMessage?: string;
  image?: string;
};

/** Full-bleed cinematic call to action with a drifting photograph behind it. */
export function CtaBand({
  site,
  title = "Punya proyek pengaspalan? *Mari diskusikan.*",
  subtitle = "Ceritakan kebutuhan dan kondisi lokasi Anda. Tim KASI siap memberi rekomendasi dan estimasi yang jelas untuk proyek Anda di Jabodetabek.",
  ctaLabel = "Konsultasi via WhatsApp",
  ctaMessage,
  image = "/assets/images/landing/landing2.jpeg",
}: CtaBandProps) {
  return (
    <section className="px-2 py-2 md:px-3 md:py-3">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-ink text-bone md:rounded-[2.5rem]">
        <ParallaxImage alt="" className="absolute inset-0 -z-10 opacity-45" sizes="100vw" speed={0.18} src={image} />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/70 to-ink/30" />
        <div className="mx-auto flex min-h-[80dvh] max-w-[88rem] flex-col justify-end px-6 py-16 md:px-12 md:py-24">
          <Reveal y={20}>
            <Eyebrow tone="dark">Konsultasi gratis</Eyebrow>
          </Reveal>
          <RevealHeading className="mt-8 max-w-5xl text-[clamp(2.75rem,7vw,7rem)] leading-[0.92] font-medium tracking-[-0.055em]" text={title} />
          <Reveal className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between" delay={0.2} y={24}>
            <p className="max-w-lg text-lg leading-relaxed text-bone/65">{subtitle}</p>
            <div className="flex flex-wrap gap-3">
              <Button href={createWhatsAppUrl(site.whatsappPhone, ctaMessage || site.whatsappMessage)} icon={<WhatsappLogoIcon size={18} weight="light" />}>
                {ctaLabel}
              </Button>
              <Button href="/contact" variant="ghost-dark">
                Isi formulir
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
