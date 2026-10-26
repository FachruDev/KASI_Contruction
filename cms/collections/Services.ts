import type { CollectionConfig } from "payload";
import { loggedIn, publishedOrLoggedIn } from "@/cms/access";
import { slugField } from "@/cms/fields/slug";
import { revalidateHooks } from "@/cms/hooks/revalidate";

export const Services: CollectionConfig = {
  slug: "services",
  labels: { singular: "Layanan", plural: "Layanan" },
  orderable: true,
  versions: { drafts: true },
  admin: {
    group: "Konten",
    useAsTitle: "title",
    defaultColumns: ["title", "price.amount", "featured", "_status"],
    description: "Urutkan dengan menyeret baris; urutan yang sama dipakai di beranda dan halaman Layanan.",
  },
  access: { read: publishedOrLoggedIn, create: loggedIn, update: loggedIn, delete: loggedIn },
  hooks: revalidateHooks,
  fields: [
    { name: "title", label: "Nama layanan", type: "text", required: true },
    slugField(),
    { name: "summary", label: "Deskripsi singkat", type: "textarea", required: true },
    { name: "image", label: "Foto", type: "upload", relationTo: "media", required: true },
    {
      name: "benefits",
      label: "Keunggulan",
      type: "array",
      labels: { singular: "Keunggulan", plural: "Keunggulan" },
      fields: [{ name: "text", label: "Keunggulan", type: "text", required: true }],
    },
    { name: "idealFor", label: "Cocok untuk", type: "textarea" },
    {
      name: "price",
      label: "Harga",
      type: "group",
      fields: [
        {
          type: "row",
          fields: [
            { name: "amount", label: "Mulai dari (Rp)", type: "number", min: 0, admin: { width: "50%" } },
            {
              name: "unit",
              label: "Satuan",
              type: "select",
              defaultValue: "m2",
              admin: { width: "50%" },
              options: [
                { label: "per m²", value: "m2" },
                { label: "per proyek", value: "project" },
                { label: "Sesuai penawaran (sembunyikan harga)", value: "quote" },
              ],
            },
          ],
        },
      ],
    },
    { name: "featured", label: "Tandai sebagai rekomendasi", type: "checkbox", admin: { position: "sidebar" } },
  ],
};
