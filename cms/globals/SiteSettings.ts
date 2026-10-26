import type { GlobalConfig } from "payload";
import { anyone, loggedIn } from "@/cms/access";
import { SITE_DEFAULTS } from "@/cms/defaults";
import { revalidateGlobal } from "@/cms/hooks/revalidate";

export const SiteSettings: GlobalConfig = {
  slug: "site-settings",
  label: "Pengaturan Situs",
  admin: { group: "Pengaturan" },
  access: { read: anyone, update: loggedIn },
  hooks: { afterChange: [revalidateGlobal] },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Identitas",
          fields: [
            {
              type: "row",
              fields: [
                { name: "companyName", label: "Nama singkat", type: "text", required: true, defaultValue: SITE_DEFAULTS.companyName, admin: { width: "50%" } },
                { name: "legalName", label: "Nama lengkap perusahaan", type: "text", defaultValue: SITE_DEFAULTS.legalName, admin: { width: "50%" } },
              ],
            },
            { name: "footerTagline", label: "Tagline footer", type: "textarea", defaultValue: SITE_DEFAULTS.footerTagline },
            { name: "copyright", label: "Teks hak cipta", type: "text", defaultValue: SITE_DEFAULTS.copyright },
          ],
        },
        {
          label: "SEO",
          fields: [
            { name: "metaTitle", label: "Judul situs", type: "text", required: true, defaultValue: SITE_DEFAULTS.metaTitle },
            { name: "metaDescription", label: "Deskripsi situs", type: "textarea", required: true, defaultValue: SITE_DEFAULTS.metaDescription },
            {
              type: "row",
              fields: [
                { name: "ogImage", label: "Gambar saat dibagikan", type: "upload", relationTo: "media", admin: { width: "50%", description: "Ukuran ideal 1200 × 630." } },
                { name: "favicon", label: "Favicon", type: "upload", relationTo: "media", admin: { width: "50%" } },
              ],
            },
          ],
        },
        {
          label: "Kontak",
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "whatsappPhone",
                  label: "Nomor WhatsApp",
                  type: "text",
                  required: true,
                  defaultValue: SITE_DEFAULTS.whatsappPhone,
                  admin: { width: "50%", description: "Format internasional tanpa +, misalnya 6282123927180." },
                },
                { name: "email", label: "Email", type: "email", defaultValue: SITE_DEFAULTS.email, admin: { width: "50%" } },
              ],
            },
            { name: "whatsappMessage", label: "Pesan WhatsApp otomatis", type: "textarea", defaultValue: SITE_DEFAULTS.whatsappMessage },
            { name: "address", label: "Alamat kantor", type: "textarea", defaultValue: SITE_DEFAULTS.address },
            { name: "mapsEmbedUrl", label: "URL embed Google Maps", type: "text", defaultValue: SITE_DEFAULTS.mapsEmbedUrl, admin: { description: "Dari Google Maps: Bagikan → Sematkan peta → salin isi src." } },
            {
              name: "businessHours",
              label: "Jam kerja",
              type: "array",
              labels: { singular: "Hari", plural: "Jam kerja" },
              defaultValue: SITE_DEFAULTS.businessHours,
              fields: [
                {
                  type: "row",
                  fields: [
                    { name: "label", label: "Hari", type: "text", required: true, admin: { width: "40%" } },
                    { name: "open", label: "Buka", type: "text", admin: { width: "20%", placeholder: "07:00" } },
                    { name: "close", label: "Tutup", type: "text", admin: { width: "20%", placeholder: "19:00" } },
                    { name: "closed", label: "Libur", type: "checkbox", admin: { width: "20%" } },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
