import { MaterialIcon } from "@/components/ui/MaterialIcon";
import type { SiteConfig } from "@/lib/cms";

export function ContactInfo({ site }: { site: SiteConfig }) {
  return (
    <div className="flex flex-col gap-10">
      <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-8">
        <h3 className="mb-6 font-headline text-2xl font-semibold text-on-background">Informasi Kontak Kami</h3>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-primary-container p-3 text-on-primary-container">
              <MaterialIcon filled>chat</MaterialIcon>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold text-on-surface-variant">WhatsApp / Telepon</p>
              <p className="text-lg text-on-background">{site.whatsappPhone}</p>
              <p className="mt-1 text-sm text-outline">Respon cepat, hubungi no kami</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-secondary-container p-3 text-on-secondary-container">
              <MaterialIcon filled>mail</MaterialIcon>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold text-on-surface-variant">Email</p>
              <p className="text-lg text-on-background">{site.email}</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-tertiary-container p-3 text-on-tertiary-container">
              <MaterialIcon filled>business</MaterialIcon>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold text-on-surface-variant">Lokasi</p>
              <p className="text-lg text-on-background">
                {site.address}</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-surface-variant p-3 text-on-surface-variant">
              <MaterialIcon filled>schedule</MaterialIcon>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold text-on-surface-variant">Jam Kerja</p>
              {site.businessHours.map((hour) => (
                <p className={hour.openTime === "Tutup" ? "text-outline" : "text-on-background"} key={hour.dayLabel}>
                  {hour.dayLabel}: {hour.openTime}{hour.closeTime ? ` - ${hour.closeTime}` : ""}
                </p>
              ))}
            </div>
          </li>
        </ul>
      </div>

      <div className="relative h-64 overflow-hidden rounded-xl bg-surface-container shadow-xs">
        <iframe src={site.mapsEmbedUrl} title="Lokasi KASI" width="600" height="450" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </div>
  );
}
