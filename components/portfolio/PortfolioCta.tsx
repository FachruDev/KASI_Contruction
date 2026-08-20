import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function PortfolioCta() {
  return (
    <section className="bg-surface-container-high px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 font-headline text-3xl font-bold text-on-background md:text-4xl">
          Ready to start your next project?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl font-body text-lg text-on-surface-variant">
          Whether it&apos;s a small driveway repair or a large-scale commercial paving job, our
          team is ready to bring quality and durability to your surfaces. Let&apos;s discuss your
          needs.
        </p>
        <Link
          className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-lg font-bold text-on-primary shadow-[0_4px_20px_rgba(46,50,48,0.06)] transition-all duration-200 hover:-translate-y-1 hover:opacity-90"
          href="/contact"
        >
          Get a Quote
          <MaterialIcon className="ml-2">arrow_forward</MaterialIcon>
        </Link>
      </div>
    </section>
  );
}
