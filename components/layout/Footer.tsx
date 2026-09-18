"use client";

import Link from "next/link";
import { FOOTER_LEGAL_ITEMS, FOOTER_NAV_ITEMS } from "@/data/navigation";
import { useSiteConfig } from "@/components/cms/SiteConfigProvider";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

function FooterLinkList({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div className="flex flex-col space-y-3 font-body">
      <h4 className="mb-2 font-headline font-semibold text-primary">{title}</h4>
      {items.map((item) => (
        <Link
          key={item.href}
          className="group inline-flex items-center gap-1.5 w-fit text-slate-200 transition-colors hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface"
          href={item.href}
        >
          <span>{item.label}</span>
          <MaterialIcon className="text-base opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
            arrow_forward
          </MaterialIcon>
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  const site = useSiteConfig();
  return (
    <footer className="mt-auto w-full rounded-t-xl bg-footer-background">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-16 md:grid-cols-4">
        <div className="space-y-4">
          <span className="font-headline text-xl font-semibold text-primary">{site.companyName}</span>
          <p className="mt-4 font-body text-sm text-slate-200">
            {site.footerSubtitle}
          </p>
        </div>

        <FooterLinkList items={FOOTER_LEGAL_ITEMS} title="Legal" />
        <FooterLinkList items={FOOTER_NAV_ITEMS} title="Navigation" />

        <div className="border-t border-outline-variant/30 pt-8 text-center font-body text-sm text-primary md:col-span-4 md:text-left">
          {site.copyright}
        </div>
      </div>
    </footer>
  );
}