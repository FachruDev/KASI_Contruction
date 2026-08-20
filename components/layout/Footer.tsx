import Link from "next/link";
import { FOOTER_LEGAL_ITEMS, FOOTER_NAV_ITEMS } from "@/data/navigation";

function FooterLinkList({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div className="flex flex-col space-y-3 font-body">
      <h4 className="mb-2 font-headline font-semibold text-on-surface">{title}</h4>
      {items.map((item) => (
        <Link
          key={item.href}
          className="inline-block w-fit text-on-surface-variant transition-colors hover:text-on-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto w-full rounded-t-xl bg-surface-container-highest">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <span className="font-headline text-xl font-semibold text-on-surface">Terra Paving</span>
          <p className="mt-4 font-body text-sm text-on-surface-variant">
            Grounded paving solutions for a durable future.
          </p>
        </div>

        <FooterLinkList items={FOOTER_LEGAL_ITEMS} title="Legal" />
        <FooterLinkList items={FOOTER_NAV_ITEMS} title="Navigation" />

        <div className="border-t border-outline-variant/30 pt-8 text-center font-body text-sm text-on-surface-variant md:col-span-4 md:text-left">
          © 2024 Terra Paving &amp; Asphalt Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
