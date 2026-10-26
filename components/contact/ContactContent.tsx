import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import type { PageHeader, SiteConfig } from "@/lib/types";

export function ContactContent({ site, header }: { site: SiteConfig; header: PageHeader }) {
  return (
    <>
      <PageHero description={header.description} eyebrow={header.eyebrow} title={header.title} />
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
