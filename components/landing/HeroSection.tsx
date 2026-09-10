import Image from "next/image";
import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { createWhatsAppUrl, type HomeData, type SiteConfig } from "@/lib/cms";

export function HeroSection({ hero, site }: { hero: HomeData["hero"]; site: SiteConfig }) {
  const whatsAppUrl = createWhatsAppUrl(site.whatsappPhone, hero.ctaMessage || site.whatsappMessage);

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-8 pt-12 pb-24">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="z-10 space-y-8 lg:col-span-5">
          <h1 className="font-headline text-5xl leading-tight font-bold tracking-tight text-on-background md:text-6xl">
            {hero.title}
          </h1>
          <p className="max-w-lg font-body text-xl text-on-surface-variant">
            {hero.subtitle}
          </p>
          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Link
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-center font-bold text-on-primary transition-opacity hover:opacity-80"
              href="/contact"
            >
              Hubungi Kami
              <MaterialIcon>arrow_forward</MaterialIcon>
            </Link>
            <Link
              className="flex items-center justify-center gap-2 rounded-xl border border-primary bg-surface-bright px-8 py-4 text-center font-bold text-primary transition-colors hover:bg-surface-container-low"
              href={whatsAppUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MaterialIcon>chat</MaterialIcon>
              Chat via WhatsApp
            </Link>
          </div>
        </div>

        <div className="soft-shadow relative h-125 w-full overflow-hidden rounded-4xl lg:col-span-7 lg:h-162.5">
          <Image
            alt={hero.imageAlt}
            className="object-cover"
            fill
            priority
            unoptimized
            sizes="(min-width: 1024px) 58vw, 100vw"
            src={hero.image}
          />
          <div className="soft-shadow absolute bottom-8 left-8 max-w-xs rounded-xl border border-surface-container-highest bg-surface-bright/95 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-tertiary/20 p-3 text-tertiary">
                <MaterialIcon filled>verified</MaterialIcon>
              </div>
              <div>
                <p className="font-headline text-2xl font-bold text-on-background">100+</p>
                <p className="font-body text-sm text-on-surface-variant">Proyek selesai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
