import type { CollectionConfig } from "payload";
import { loggedIn, publishedOrLoggedIn } from "@/cms/access";
import { revalidateHooks } from "@/cms/hooks/revalidate";

export const Testimonials: CollectionConfig = {
  slug: "testimonials",
  labels: { singular: "Testimoni", plural: "Testimoni" },
  orderable: true,
  versions: { drafts: true },
  admin: {
    group: "Konten",
    useAsTitle: "name",
    defaultColumns: ["name", "service", "rating", "_status"],
    description: "Testimoni teratas ditampilkan besar di halaman Testimoni.",
  },
  access: { read: publishedOrLoggedIn, create: loggedIn, update: loggedIn, delete: loggedIn },
  hooks: revalidateHooks,
  fields: [
    {
      type: "row",
      fields: [
        { name: "name", label: "Nama", type: "text", required: true, admin: { width: "50%" } },
        { name: "role", label: "Jabatan / instansi", type: "text", admin: { width: "50%" } },
      ],
    },
    {
      type: "row",
      fields: [
        { name: "service", label: "Layanan yang dipakai", type: "text", admin: { width: "50%" } },
        { name: "rating", label: "Rating", type: "number", required: true, min: 1, max: 5, defaultValue: 5, admin: { width: "50%", step: 0.5 } },
      ],
    },
    { name: "quote", label: "Testimoni", type: "textarea", required: true },
    {
      type: "row",
      fields: [
        { name: "avatar", label: "Foto pelanggan", type: "upload", relationTo: "media", admin: { width: "50%" } },
        { name: "projectImage", label: "Foto proyek", type: "upload", relationTo: "media", admin: { width: "50%" } },
      ],
    },
  ],
};
