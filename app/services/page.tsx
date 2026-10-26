import type { Metadata } from "next";
import { CtaBand } from "@/components/layout/CtaBand";
import { PageHero } from "@/components/layout/PageHero";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { ServiceCard } from "@/components/services/ServiceCard";
import { getServices, getSiteConfig } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Jasa Pengaspalan & Aspal Hotmix Jabodetabek",
  description:
    "Layanan pengaspalan KASI untuk jalan lingkungan, perumahan, area komersial, industri, perbaikan permukaan, dan aspal hotmix di Jabodetabek.",
};

export default async function ServicesPage() {
  const [services, site] = await Promise.all([getServices(), getSiteConfig()]);
  return (
    <>
      <PageHero
        aside={
          <p className="max-w-md border-l border-signal pl-4 text-[13px] leading-relaxed text-ink/50">
            Harga dapat berbeda tergantung luas area, ketebalan aspal, jenis pekerjaan, dan kondisi lokasi.
          </p>
        }
        description="Solusi pengaspalan untuk jalan perumahan, area parkir, kawasan usaha, hingga industri. Material berkualitas, hasil rapi, kuat, dan tahan lama."
        eyebrow="Layanan"
        title="Pengaspalan untuk *setiap* kebutuhan."
      />
      <div className="mx-auto max-w-[88rem] px-4 pb-16 md:px-10 md:pb-28">
        {services.map((service, index) => (
          <ServiceCard index={index} key={service.title} service={service} />
        ))}
      </div>
      <ProcessSteps />
      <CtaBand image="/assets/images/services/services2.jpeg" site={site} />
    </>
  );
}
