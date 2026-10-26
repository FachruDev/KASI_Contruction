import type { CollectionConfig } from "payload";
import { anyone, loggedIn, publishedOrLoggedIn } from "@/cms/access";
import { slugField } from "@/cms/fields/slug";
import { revalidateHooks } from "@/cms/hooks/revalidate";

export const ArticleCategories: CollectionConfig = {
  slug: "article-categories",
  labels: { singular: "Kategori Artikel", plural: "Kategori Artikel" },
  orderable: true,
  admin: { group: "Artikel", useAsTitle: "title" },
  access: { read: anyone, create: loggedIn, update: loggedIn, delete: loggedIn },
  hooks: revalidateHooks,
  fields: [{ name: "title", label: "Nama kategori", type: "text", required: true }, slugField()],
};

export const Articles: CollectionConfig = {
  slug: "articles",
  labels: { singular: "Artikel", plural: "Artikel" },
  versions: { drafts: true },
  defaultSort: "-publishedAt",
  admin: { group: "Artikel", useAsTitle: "title", defaultColumns: ["title", "category", "publishedAt", "_status"] },
  access: { read: publishedOrLoggedIn, create: loggedIn, update: loggedIn, delete: loggedIn },
  hooks: revalidateHooks,
  fields: [
    { name: "title", label: "Judul", type: "text", required: true },
    { name: "excerpt", label: "Ringkasan", type: "textarea", required: true, admin: { description: "Satu-dua kalimat untuk kartu artikel dan deskripsi SEO." } },
    { name: "cover", label: "Foto sampul", type: "upload", relationTo: "media" },
    { name: "content", label: "Isi artikel", type: "richText", required: true },
    slugField(),
    { name: "category", label: "Kategori", type: "relationship", relationTo: "article-categories", admin: { position: "sidebar" } },
    {
      name: "publishedAt",
      label: "Tanggal terbit",
      type: "date",
      defaultValue: () => new Date().toISOString(),
      admin: { position: "sidebar", date: { pickerAppearance: "dayOnly", displayFormat: "d MMM yyyy" } },
    },
    { name: "featured", label: "Jadikan artikel utama", type: "checkbox", admin: { position: "sidebar" } },
  ],
};
