import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceCard } from "@/components/services/ServiceCard";
import { getPageContent, getServices, getSiteConfig } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Jasa Pengaspalan & Aspal Hotmix Jabodetabek",
  description:
    "Layanan pengaspalan KASI untuk jalan lingkungan, perumahan, area komersial, industri, perbaikan permukaan, dan aspal hotmix di Jabodetabek.",
};

export default async function ServicesPage() {
  const [services, site, pages] = await Promise.all([getServices(), getSiteConfig(), getPageContent()]);
  const page = pages.services;
  return (
    <>
      <PageHero
        aside={page.priceNote ? <p className="max-w-md border-l border-signal pl-4 text-[13px] leading-relaxed text-ink/50">{page.priceNote}</p> : null}
        description={page.description}
        eyebrow={page.eyebrow}
        title={page.title}
      />
      <div className="mx-auto max-w-[88rem] px-4 pb-16 md:px-10 md:pb-28">
        {services.length ? (
          services.map((service, index) => <ServiceCard index={index} key={service.slug || service.title} service={service} />)
        ) : (
          <p className="border-t border-ink/10 py-16 text-ink/50">Daftar layanan sedang diperbarui. Hubungi kami untuk informasi terbaru.</p>
        )}
      </div>
      <ProcessSteps eyebrow={page.processEyebrow} heading={page.processHeading} steps={page.processSteps} />
      <CtaBand cta={pages.cta} site={site} />
    </>
  );
}
