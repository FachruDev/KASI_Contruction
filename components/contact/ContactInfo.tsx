import { ArrowUpRightIcon, ClockIcon, EnvelopeSimpleIcon, MapPinIcon, WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";
import { hoursLabel } from "@/lib/format";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import type { SiteConfig } from "@/lib/types";

function Row({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <li className="flex gap-5 border-t border-ink/10 py-6">
      <span className="mt-0.5 text-signal-deep">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] tracking-[0.22em] text-ink/40 uppercase">{label}</p>
        <div className="mt-2 text-[17px] leading-relaxed">{children}</div>
      </div>
    </li>
  );
}

export function ContactInfo({ site }: { site: SiteConfig }) {
  const phone = site.whatsappPhone.replace(/\D/g, "").replace(/^0/, "62");

  return (
    <div className="space-y-10">
      <ul>
        <Row icon={<WhatsappLogoIcon size={22} weight="light" />} label="WhatsApp / telepon">
          <a className="group inline-flex items-center gap-2 transition-colors hover:text-signal-deep" href={createWhatsAppUrl(site.whatsappPhone, site.whatsappMessage)} rel="noopener noreferrer" target="_blank">
            +{phone}
            <ArrowUpRightIcon className="transition-transform duration-500 ease-fluid group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={15} weight="light" />
          </a>
          <p className="text-[14px] text-ink/45">Respon cepat di jam kerja.</p>
        </Row>
        <Row icon={<EnvelopeSimpleIcon size={22} weight="light" />} label="Email">
          <a className="break-all transition-colors hover:text-signal-deep" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </Row>
        <Row icon={<MapPinIcon size={22} weight="light" />} label="Kantor">
          <p className="text-ink/75">{site.address}</p>
        </Row>
        <Row icon={<ClockIcon size={22} weight="light" />} label="Jam kerja">
          <ul className="space-y-1 text-[15px]">
            {site.businessHours.map((hour) => (
              <li className={`flex justify-between gap-6 ${hour.closed ? "text-ink/35" : "text-ink/75"}`} key={hour.label}>
                <span>{hour.label}</span>
                <span className="font-mono text-[13px]">{hoursLabel(hour)}</span>
              </li>
            ))}
          </ul>
        </Row>
      </ul>

      <div className="rounded-[2rem] bg-ink/[0.035] p-1.5 hairline">
        <iframe
          className="block h-72 w-full rounded-[calc(2rem-0.375rem)] grayscale-[0.6] contrast-[1.05]"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          src={site.mapsEmbedUrl}
          title={`Lokasi ${site.companyName}`}
        />
      </div>
    </div>
  );
}
