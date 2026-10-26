import type { CollectionConfig } from "payload";
import { anyone, loggedIn, publishedOrLoggedIn } from "@/cms/access";
import { revalidateHooks } from "@/cms/hooks/revalidate";

export const FaqCategories: CollectionConfig = {
  slug: "faq-categories",
  labels: { singular: "Kategori FAQ", plural: "Kategori FAQ" },
  orderable: true,
  admin: { group: "FAQ", useAsTitle: "title" },
  access: { read: anyone, create: loggedIn, update: loggedIn, delete: loggedIn },
  hooks: revalidateHooks,
  fields: [{ name: "title", label: "Nama kategori", type: "text", required: true }],
};

export const Faqs: CollectionConfig = {
  slug: "faqs",
  labels: { singular: "Pertanyaan", plural: "Pertanyaan" },
  orderable: true,
  versions: { drafts: true },
  admin: { group: "FAQ", useAsTitle: "question", defaultColumns: ["question", "category", "_status"] },
  access: { read: publishedOrLoggedIn, create: loggedIn, update: loggedIn, delete: loggedIn },
  hooks: revalidateHooks,
  fields: [
    { name: "question", label: "Pertanyaan", type: "text", required: true },
    { name: "answer", label: "Jawaban", type: "textarea", required: true },
    { name: "category", label: "Kategori", type: "relationship", relationTo: "faq-categories", required: true, admin: { position: "sidebar" } },
  ],
};
