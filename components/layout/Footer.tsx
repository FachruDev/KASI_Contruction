import Link from "next/link";
import { ArrowUpRightIcon, WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import { FOOTER_LEGAL_ITEMS, FOOTER_NAV_ITEMS, type NavItem } from "@/data/navigation";
import { FooterReveal } from "@/components/layout/FooterReveal";
import { Button } from "@/components/ui/Button";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import type { SiteConfig } from "@/lib/cms";

function LinkColumn({ title, items }: { title: string; items: readonly NavItem[] }) {
  return (
    <div>
      <p className="mb-5 font-mono text-[10px] tracking-[0.22em] text-bone/40 uppercase">{title}</p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link className="group inline-flex items-center gap-1.5 text-[15px] text-bone/70 transition-colors duration-500 ease-fluid hover:text-bone" href={item.href}>
              {item.label}
              <ArrowUpRightIcon
                aria-hidden="true"
                className="-translate-x-1 opacity-0 transition-all duration-500 ease-fluid group-hover:translate-x-0 group-hover:opacity-100"
                size={13}
                weight="light"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer({ site }: { site: SiteConfig }) {
  const whatsAppUrl = createWhatsAppUrl(site.whatsappPhone, site.whatsappMessage);

  return (
    <footer className="text-bone">
      <FooterReveal>
        <div className="mx-auto max-w-[88rem] px-4 pt-28 pb-10 md:px-10 md:pt-40">
          <div className="flex flex-col gap-10 border-b border-bone/10 pb-16 md:flex-row md:items-end md:justify-between md:pb-24">
            <h2 className="max-w-4xl text-[clamp(2.75rem,6.5vw,6rem)] leading-[0.95] font-medium tracking-[-0.05em]">
              Mari bangun jalan yang <span className="serif-accent text-signal">bertahan</span> lama.
            </h2>
            <Button className="self-start md:self-auto" href={whatsAppUrl} icon={<WhatsappLogoIcon size={18} weight="light" />} variant="bone">
              Chat via WhatsApp
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-14 py-16 md:grid-cols-12 md:py-20">
            <div className="col-span-2 md:col-span-4">
              <p className="flex items-center gap-2 text-xl font-semibold tracking-[-0.03em]">
                <span aria-hidden="true" className="size-2 rounded-full bg-signal" />
                {site.companyName}
              </p>
              <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-bone/55">{site.footerSubtitle}</p>
            </div>
            <div className="md:col-span-2">
              <LinkColumn items={FOOTER_NAV_ITEMS} title="Navigasi" />
            </div>
            <div className="md:col-span-2">
              <LinkColumn items={FOOTER_LEGAL_ITEMS} title="Legal" />
            </div>
            <div className="col-span-2 space-y-5 text-[15px] text-bone/70 md:col-span-4">
              <p className="font-mono text-[10px] tracking-[0.22em] text-bone/40 uppercase">Kantor</p>
              <p className="max-w-sm leading-relaxed">{site.address}</p>
              <a className="block text-bone transition-colors hover:text-signal" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <ul className="space-y-1 text-bone/55">
                {site.businessHours.map((hour) => (
                  <li className="flex justify-between gap-6 border-b border-bone/[0.06] pb-1" key={hour.dayLabel}>
                    <span>{hour.dayLabel}</span>
                    <span className="font-mono text-[13px]">
                      {hour.openTime}
                      {hour.closeTime ? ` — ${hour.closeTime}` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p aria-hidden="true" className="pointer-events-none -mb-[0.18em] text-center text-[clamp(6rem,27vw,26rem)] leading-[0.8] font-semibold tracking-[-0.07em] text-transparent select-none bg-linear-to-b from-bone/15 to-bone/0 bg-clip-text">
            {site.companyName}
          </p>

          <div className="flex flex-col gap-3 border-t border-bone/10 pt-6 text-[13px] text-bone/40 md:flex-row md:justify-between">
            <p>{site.copyright}</p>
            <p>Jasa pengaspalan profesional · Jabodetabek</p>
          </div>
        </div>
      </FooterReveal>
    </footer>
  );
}
