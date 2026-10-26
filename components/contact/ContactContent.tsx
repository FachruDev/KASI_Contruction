import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import type { SiteConfig } from "@/lib/cms";

export function ContactContent({ site }: { site: SiteConfig }) {
  return (
    <>
      <PageHero
        description="Rencana pengaspalan untuk jalan, area parkir, perumahan, atau kawasan usaha? Ceritakan kebutuhan Anda dan dapatkan penawaran yang sesuai untuk Jabodetabek."
        eyebrow="Kontak"
        title="Mari mulai dari *percakapan.*"
      />
      <section className="mx-auto grid max-w-[88rem] grid-cols-1 gap-14 px-4 pb-28 md:px-10 md:pb-40 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <ContactForm />
        </Reveal>
        <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.15}>
          <ContactInfo site={site} />
        </Reveal>
      </section>
    </>
  );
}
