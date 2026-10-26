import type { CollectionConfig } from "payload";
import { anyone, loggedIn } from "@/cms/access";
import { revalidateHooks } from "@/cms/hooks/revalidate";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Media", plural: "Media" },
  admin: { group: "Konten", defaultColumns: ["filename", "alt", "updatedAt"] },
  access: { read: anyone, create: loggedIn, update: loggedIn, delete: loggedIn },
  hooks: revalidateHooks,
  upload: {
    mimeTypes: ["image/*"],
    focalPoint: true,
    // The site resizes on demand through next/image, so only cap oversized camera originals here.
    resizeOptions: { width: 2560, height: 2560, fit: "inside", withoutEnlargement: true },
    formatOptions: { format: "webp", options: { quality: 85 } },
  },
  fields: [
    {
      name: "alt",
      label: "Teks alternatif",
      type: "text",
      required: true,
      admin: { description: "Deskripsikan isi foto untuk pembaca layar dan SEO, misalnya: Alat pemadat menggilas aspal baru di jalan perumahan." },
    },
  ],
};
