import Link from "next/link";

export function ServiceCta() {
  return (
    <section className="mx-auto max-w-4xl rounded-xl bg-surface-container-low p-12 text-center shadow-xs">
      <h2 className="mb-4 font-headline text-3xl text-primary">
        Ready to Start Your Paving Project?
      </h2>
      <p className="mx-auto mb-8 max-w-2xl text-on-surface-variant">
        Contact our team of experts today for a comprehensive evaluation of your site and a
        detailed, transparent pricing estimate.
      </p>
      <Link
        className="inline-block rounded-[12px] bg-primary px-8 py-4 font-label text-lg font-bold text-on-primary shadow-xs transition-opacity hover:opacity-80"
        href="/contact"
      >
        Get a Price Estimate
      </Link>
    </section>
  );
}
