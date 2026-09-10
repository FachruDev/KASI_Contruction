"use client";

import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { useSiteConfig } from "@/components/cms/SiteConfigProvider";

export function PrivacyHeader() {
  const site = useSiteConfig();
  return (
    <header className="sticky top-0 z-40 flex w-full items-center justify-center bg-surface-container-low px-8 py-6 shadow-[0_4px_20px_rgba(46,50,48,0.04)]">
      <Link
        href="/"
        className="flex cursor-pointer items-center gap-2 font-headline text-2xl font-bold text-primary transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        <MaterialIcon filled className="text-primary">landscape</MaterialIcon>
        {site.companyName}
      </Link>
    </header>
  );
}
