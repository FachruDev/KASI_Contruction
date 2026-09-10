import Image from "next/image";
import Link from "next/link";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import type { FaqSection } from "@/data/faq";

const FAQ_IMAGE =
  "/assets/images/faq/faq1.jpeg";

export function FaqContent({ sections }: { sections: FaqSection[] }) {
  return (
    <main className="mx-auto w-full max-w-4xl grow px-6 py-16 md:py-24">
      <header className="mb-16 text-center">
        <h1 className="mb-4 font-headline text-4xl font-bold text-on-background md:text-5xl">
          Pertanyaan yang Sering Ditanyakan
        </h1>
        <p className="mx-auto max-w-2xl font-body text-lg text-on-surface-variant">
          Temukan jawaban seputar layanan pengaspalan, harga, proses pengerjaan, dan area layanan KASI. Jika masih ada yang ingin Anda tanyakan, tim kami siap membantu.
        </p>
      </header>

      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-12">
        <div className="space-y-12 md:col-span-8">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-6 border-b border-surface-container-highest pb-2 font-headline text-2xl font-semibold text-primary">
                {section.title}
              </h2>
              <FaqAccordion items={section.items} />
            </section>
          ))}
        </div>

        <aside className="space-y-6 md:col-span-4">
          <div className="relative aspect-4/3 overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(46,50,48,0.06)]">
            <Image
              alt="A beautifully paved, smooth asphalt driveway leading up to a welcoming, modern home bathed in warm afternoon sunlight."
              className="object-cover"
              fill
              sizes="(min-width: 768px) 266px, 100vw"
              src={FAQ_IMAGE}
              unoptimized
            />
          </div>

          <div className="rounded-xl bg-secondary-container p-8 text-center shadow-[0_4px_20px_rgba(46,50,48,0.06)]">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-surface-bright text-primary">
              <MaterialIcon className="text-3xl" filled>support_agent</MaterialIcon>
            </div>
            <h3 className="mb-2 font-headline text-xl font-bold text-on-secondary-container">
              Punya Pertanyaan?
            </h3>
            <p className="mb-6 font-body text-sm text-on-secondary-container/80">
              Konsultasikan kebutuhan pengaspalan Anda langsung dengan tim KASI.
            </p>
            <Link
              className="block w-full rounded-xl bg-primary px-6 py-3 font-label font-semibold text-on-primary transition-colors duration-200 hover:bg-primary-fixed hover:text-on-primary-fixed"
              href="/contact"
            >
              Hubungi Kami
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
