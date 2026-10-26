import type { CollectionConfig } from "payload";
import { adminOnly, loggedIn, publishedOrLoggedIn } from "@/cms/access";
import { revalidateHooks } from "@/cms/hooks/revalidate";

export const LegalPages: CollectionConfig = {
  slug: "legal-pages",
  labels: { singular: "Halaman Legal", plural: "Halaman Legal" },
  versions: { drafts: true },
  admin: { group: "Konten", useAsTitle: "title", defaultColumns: ["title", "page", "updatedAt", "_status"] },
  access: { read: publishedOrLoggedIn, create: adminOnly, update: loggedIn, delete: adminOnly },
  hooks: revalidateHooks,
  fields: [
    {
      name: "page",
      label: "Halaman",
      type: "select",
      required: true,
      unique: true,
      options: [
        { label: "Kebijakan Privasi (/privacy-policy)", value: "privacy-policy" },
        { label: "Syarat & Ketentuan (/terms-of-service)", value: "terms-of-service" },
      ],
      admin: { position: "sidebar" },
    },
    { name: "title", label: "Judul", type: "text", required: true },
    { name: "content", label: "Isi", type: "richText", required: true },
  ],
};
