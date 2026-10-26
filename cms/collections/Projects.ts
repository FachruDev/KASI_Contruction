import type { CollectionConfig } from "payload";
import { anyone, loggedIn, publishedOrLoggedIn } from "@/cms/access";
import { slugField } from "@/cms/fields/slug";
import { revalidateHooks } from "@/cms/hooks/revalidate";

export const ProjectCategories: CollectionConfig = {
  slug: "project-categories",
  labels: { singular: "Kategori Portfolio", plural: "Kategori Portfolio" },
  orderable: true,
  admin: { group: "Portfolio", useAsTitle: "title" },
  access: { read: anyone, create: loggedIn, update: loggedIn, delete: loggedIn },
  hooks: revalidateHooks,
  fields: [{ name: "title", label: "Nama kategori", type: "text", required: true }, slugField()],
};

export const Projects: CollectionConfig = {
  slug: "projects",
  labels: { singular: "Proyek", plural: "Portfolio" },
  orderable: true,
  versions: { drafts: true },
  admin: {
    group: "Portfolio",
    useAsTitle: "title",
    defaultColumns: ["title", "category", "featured", "_status"],
    description: "Proyek teratas tampil di beranda. Seret baris untuk mengubah urutan.",
  },
  access: { read: publishedOrLoggedIn, create: loggedIn, update: loggedIn, delete: loggedIn },
  hooks: revalidateHooks,
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Konten",
          fields: [
            { name: "title", label: "Nama proyek", type: "text", required: true },
            { name: "summary", label: "Ringkasan", type: "textarea", required: true, admin: { description: "Tampil di kartu portfolio dan di bawah judul halaman proyek." } },
            { name: "body", label: "Cerita proyek", type: "richText" },
          ],
        },
        {
          label: "Foto",
          fields: [
            { name: "cover", label: "Foto sampul", type: "upload", relationTo: "media", required: true },
            { name: "gallery", label: "Galeri", type: "upload", relationTo: "media", hasMany: true, maxRows: 24 },
            {
              name: "beforeAfter",
              label: "Sebelum & sesudah",
              type: "group",
              admin: { description: "Isi keduanya untuk menampilkan slider perbandingan." },
              fields: [
                {
                  type: "row",
                  fields: [
                    { name: "before", label: "Sebelum", type: "upload", relationTo: "media", admin: { width: "50%" } },
                    { name: "after", label: "Sesudah", type: "upload", relationTo: "media", admin: { width: "50%" } },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Detail",
          fields: [
            { name: "location", label: "Lokasi", type: "text" },
            {
              type: "row",
              fields: [
                { name: "areaM2", label: "Luas area (m²)", type: "number", min: 0, admin: { width: "50%" } },
                { name: "year", label: "Tahun pengerjaan", type: "number", min: 2000, max: 2100, admin: { width: "50%" } },
              ],
            },
          ],
        },
      ],
    },
    slugField(),
    { name: "category", label: "Kategori", type: "relationship", relationTo: "project-categories", required: true, admin: { position: "sidebar" } },
    { name: "featured", label: "Tampilkan di beranda", type: "checkbox", admin: { position: "sidebar" } },
  ],
};
