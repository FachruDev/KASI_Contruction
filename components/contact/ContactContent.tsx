import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import type { SiteConfig } from "@/lib/cms";

export function ContactContent({ site }: { site: SiteConfig }) {
  return (
    <main className="mx-auto w-full max-w-7xl grow px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="mb-4 text-balance font-headline text-5xl font-bold text-on-background">
          Konsultasikan Kebutuhan
          <br/>Pengaspalan Anda
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-on-surface-variant">
          Punya rencana pengaspalan untuk jalan, area parkir, perumahan, atau kawasan usaha? Ceritakan kebutuhan proyek Anda kepada KASI dan dapatkan informasi serta penawaran yang sesuai untuk wilayah Jabodetabek.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
        <ContactForm />
        <ContactInfo site={site} />
      </div>
    </main>
  );
}
