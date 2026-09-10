"use client";

import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { useSiteConfig } from "@/components/cms/SiteConfigProvider";

interface WhatsAppFabProps {
  href?: string;
}

export function WhatsAppFab({ href }: WhatsAppFabProps) {
  const site = useSiteConfig();
  const resolvedHref = href ?? createWhatsAppUrl({ phone: site.whatsappPhone, message: site.whatsappMessage });
  const isExternalLink = resolvedHref.startsWith("http");

  return (
    <div className="fixed right-8 bottom-8 z-50 flex items-center justify-center">
      <Link
        aria-label="Quick Contact - Chat with our experts"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary shadow-lg transition-all duration-100 hover:scale-110 hover:shadow-xl focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-primary-fixed"
        href={resolvedHref}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
        target={isExternalLink ? "_blank" : undefined}
      >
        <MaterialIcon className="text-3xl">chat</MaterialIcon>
        <div className="soft-shadow pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-lg bg-surface-container-high px-4 py-2 font-body text-on-surface opacity-0 transition-opacity group-hover:opacity-100">
          <p className="font-bold">WhatsApp Inquiry</p>
          <p className="text-xs text-on-surface-variant">Chat with our experts</p>
        </div>
      </Link>
    </div>
  );
}
