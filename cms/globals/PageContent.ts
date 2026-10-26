import type { GlobalConfig } from "payload";
import { anyone, loggedIn } from "@/cms/access";
import { PAGE_DEFAULTS } from "@/cms/defaults";
import { ACCENT_HINT, sectionHeading } from "@/cms/fields/headline";
import { revalidateGlobal } from "@/cms/hooks/revalidate";

/** Headers and supporting copy for the inner pages, kept in one place so editors find them easily. */
export const PageContent: GlobalConfig = {
  slug: "page-content",
  label: "Halaman Lainnya",
  admin: { group: "Halaman" },
  access: { read: anyone, update: loggedIn },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "services",
          label: "Layanan",
          fields: [
            ...sectionHeading(PAGE_DEFAULTS.services, true),
            { name: "priceNote", label: "Catatan harga", type: "textarea", defaultValue: PAGE_DEFAULTS.services.priceNote },
            { name: "processEyebrow", label: "Label bagian proses", type: "text", defaultValue: PAGE_DEFAULTS.services.processEyebrow },
            { name: "processHeading", label: "Judul bagian proses", type: "text", defaultValue: PAGE_DEFAULTS.services.processHeading, admin: { description: ACCENT_HINT } },
            {
              name: "processSteps",
              label: "Tahapan",
              type: "array",
              maxRows: 6,
              defaultValue: PAGE_DEFAULTS.services.processSteps,
              fields: [
                { name: "title", label: "Judul", type: "text", required: true },
                { name: "description", label: "Deskripsi", type: "textarea", required: true },
              ],
            },
          ],
        },
        { name: "portfolio", label: "Portfolio", fields: sectionHeading(PAGE_DEFAULTS.portfolio, true) },
        { name: "testimonials", label: "Testimoni", fields: sectionHeading(PAGE_DEFAULTS.testimonials, true) },
        { name: "articles", label: "Artikel", fields: sectionHeading(PAGE_DEFAULTS.articles, true) },
        {
          name: "faq",
          label: "FAQ",
          fields: [
            ...sectionHeading(PAGE_DEFAULTS.faq, true),
            { name: "supportTitle", label: "Judul kotak bantuan", type: "text", defaultValue: PAGE_DEFAULTS.faq.supportTitle },
            { name: "supportText", label: "Teks kotak bantuan", type: "textarea", defaultValue: PAGE_DEFAULTS.faq.supportText },
          ],
        },
        { name: "contact", label: "Kontak", fields: sectionHeading(PAGE_DEFAULTS.contact, true) },
        {
          name: "cta",
          label: "Ajakan bawah halaman",
          description: "Bagian ajakan konsultasi di bawah halaman Layanan, Portfolio, Testimoni, dan detail.",
          fields: [
            { name: "title", label: "Judul", type: "text", defaultValue: PAGE_DEFAULTS.cta.title, admin: { description: ACCENT_HINT } },
            { name: "subtitle", label: "Teks", type: "textarea", defaultValue: PAGE_DEFAULTS.cta.subtitle },
            { name: "buttonLabel", label: "Teks tombol", type: "text", defaultValue: PAGE_DEFAULTS.cta.buttonLabel },
            { name: "image", label: "Foto latar", type: "upload", relationTo: "media" },
          ],
        },
      ],
    },
  ],
};
