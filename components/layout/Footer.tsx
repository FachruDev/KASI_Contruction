"use client";

import Link from "next/link";
import { FOOTER_LEGAL_ITEMS, FOOTER_NAV_ITEMS } from "@/data/navigation";
import { useSiteConfig } from "@/components/cms/SiteConfigProvider";

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
  const site = useSiteConfig();
  return (
    <footer className="mt-auto w-full rounded-t-xl bg-surface-container-highest">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <span className="font-headline text-xl font-semibold text-on-surface">{site.companyName}</span>
          <p className="mt-4 font-body text-sm text-on-surface-variant">
            {site.footerSubtitle}
          </p>
        </div>

        <FooterLinkList items={FOOTER_LEGAL_ITEMS} title="Legal" />
        <FooterLinkList items={FOOTER_NAV_ITEMS} title="Navigation" />

        <div className="border-t border-outline-variant/30 pt-8 text-center font-body text-sm text-on-surface-variant md:col-span-4 md:text-left">
          {site.copyright}
        </div>
      </div>
    </footer>
  );
}
