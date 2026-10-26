import type { GlobalConfig } from "payload";
import { anyone, loggedIn } from "@/cms/access";
import { HOME_DEFAULTS } from "@/cms/defaults";
import { ACCENT_HINT, sectionHeading } from "@/cms/fields/headline";
import { iconField } from "@/cms/fields/icon";
import { revalidateGlobal } from "@/cms/hooks/revalidate";

export const HomePage: GlobalConfig = {
  slug: "home-page",
  label: "Beranda",
  admin: { group: "Halaman" },
  access: { read: anyone, update: loggedIn },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "hero",
          label: "Hero",
          fields: [
            { name: "eyebrow", label: "Label kecil", type: "text", defaultValue: HOME_DEFAULTS.hero.eyebrow },
            { name: "title", label: "Judul utama", type: "text", required: true, defaultValue: HOME_DEFAULTS.hero.title, admin: { description: ACCENT_HINT } },
            { name: "subtitle", label: "Subjudul", type: "textarea", defaultValue: HOME_DEFAULTS.hero.subtitle },
            { name: "image", label: "Foto latar", type: "upload", relationTo: "media" },
            {
              type: "row",
              fields: [
                { name: "ctaLabel", label: "Teks tombol utama", type: "text", defaultValue: HOME_DEFAULTS.hero.ctaLabel, admin: { width: "50%" } },
                { name: "whatsappMessage", label: "Pesan WhatsApp", type: "text", admin: { width: "50%", description: "Kosongkan untuk memakai pesan default." } },
              ],
            },
          ],
        },
        {
          label: "Angka",
          fields: [
            {
              name: "stats",
              label: "Statistik",
              type: "array",
              maxRows: 4,
              defaultValue: HOME_DEFAULTS.stats,
              admin: { description: "Angka pertama juga tampil di pojok hero. Gunakan format seperti 10+, 1k+, atau 100%." },
              fields: [
                {
                  type: "row",
                  fields: [
                    { name: "value", label: "Angka", type: "text", required: true, admin: { width: "35%" } },
                    { name: "label", label: "Keterangan", type: "text", required: true, admin: { width: "65%" } },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "about",
          label: "Tentang",
          fields: [
            { name: "eyebrow", label: "Label kecil", type: "text", defaultValue: HOME_DEFAULTS.about.eyebrow },
            { name: "note", label: "Catatan samping", type: "textarea", defaultValue: HOME_DEFAULTS.about.note },
            { name: "statement", label: "Pernyataan", type: "textarea", required: true, defaultValue: HOME_DEFAULTS.about.statement, admin: { description: "Teks besar yang menyala kata demi kata saat di-scroll." } },
            {
              type: "row",
              fields: [
                { name: "primaryImage", label: "Foto besar", type: "upload", relationTo: "media", admin: { width: "50%" } },
                { name: "secondaryImage", label: "Foto kecil", type: "upload", relationTo: "media", admin: { width: "50%" } },
              ],
            },
            { name: "caption", label: "Keterangan foto", type: "text", defaultValue: HOME_DEFAULTS.about.caption },
          ],
        },
        {
          name: "services",
          label: "Layanan",
          description: "Kartu layanan diambil otomatis dari menu Layanan.",
          fields: sectionHeading(HOME_DEFAULTS.services),
        },
        {
          name: "highlights",
          label: "Keunggulan",
          fields: [
            ...sectionHeading(HOME_DEFAULTS.highlights, true),
            { name: "image", label: "Foto", type: "upload", relationTo: "media" },
            { name: "imageCaption", label: "Teks di atas foto", type: "text", defaultValue: HOME_DEFAULTS.highlights.imageCaption },
            {
              name: "items",
              label: "Poin keunggulan",
              type: "array",
              maxRows: 6,
              defaultValue: HOME_DEFAULTS.highlights.items,
              fields: [iconField, { name: "title", label: "Judul", type: "text", required: true }, { name: "description", label: "Deskripsi", type: "textarea", required: true }],
            },
          ],
        },
        {
          name: "portfolio",
          label: "Portfolio",
          description: "Proyek yang ditandai \"Tampilkan di beranda\" muncul di sini.",
          fields: sectionHeading(HOME_DEFAULTS.portfolio),
        },
        {
          name: "cta",
          label: "Ajakan",
          fields: [
            { name: "title", label: "Judul", type: "text", defaultValue: HOME_DEFAULTS.cta.title, admin: { description: ACCENT_HINT } },
            { name: "subtitle", label: "Teks", type: "textarea", defaultValue: HOME_DEFAULTS.cta.subtitle },
            {
              type: "row",
              fields: [
                { name: "buttonLabel", label: "Teks tombol", type: "text", defaultValue: HOME_DEFAULTS.cta.buttonLabel, admin: { width: "50%" } },
                { name: "whatsappMessage", label: "Pesan WhatsApp", type: "text", admin: { width: "50%" } },
              ],
            },
            { name: "image", label: "Foto latar", type: "upload", relationTo: "media" },
          ],
        },
      ],
    },
  ],
};
