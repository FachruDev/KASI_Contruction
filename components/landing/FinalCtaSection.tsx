import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { createWhatsAppUrl, type HomeData, type SiteConfig } from "@/lib/cms";

export function FinalCtaSection({ cta, site }: { cta: HomeData["cta"]; site: SiteConfig }) {
  const whatsAppUrl = createWhatsAppUrl(site.whatsappPhone, cta.ctaMessage || site.whatsappMessage);

  return (
    <section className="px-8 py-24">
      <div className="soft-shadow mx-auto flex max-w-5xl flex-col items-center rounded-[3rem] bg-surface-container-highest p-12 text-center md:p-20">
        <h2 className="mb-6 font-headline text-3xl font-bold text-on-background md:text-5xl">{cta.title}</h2>
        <p className="mb-10 max-w-2xl font-body text-lg text-on-surface-variant">
          {cta.subtitle}
        </p>
        <Link
          className="flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-on-primary transition-transform duration-150 hover:scale-95 hover:opacity-80"
          href={whatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Konsultasikan Proyek Anda
          <MaterialIcon>arrow_forward</MaterialIcon>
        </Link>
      </div>
    </section>
  );
}
