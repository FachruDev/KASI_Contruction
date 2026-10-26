import type { CollectionConfig } from "payload";
import { adminOnly, adminOnlyField, loggedIn } from "@/cms/access";

export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Pengguna", plural: "Pengguna" },
  auth: true,
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "email", "role"],
    group: "Sistem",
  },
  access: {
    read: loggedIn,
    create: adminOnly,
    delete: adminOnly,
    update: ({ req, id }) => req.user?.role === "admin" || req.user?.id === id,
  },
  hooks: {
    beforeChange: [
      // Whoever registers first owns the site, so they must be able to invite everyone else.
      async ({ data, operation, req }) => {
        if (operation !== "create") return data;
        const { totalDocs } = await req.payload.count({ collection: "users", req });
        return totalDocs === 0 ? { ...data, role: "admin" } : data;
      },
    ],
  },
  fields: [
    { name: "name", label: "Nama", type: "text", required: true },
    {
      name: "role",
      label: "Peran",
      type: "select",
      required: true,
      defaultValue: "editor",
      saveToJWT: true,
      access: { create: adminOnlyField, update: adminOnlyField },
      options: [
        { label: "Admin — kelola semua termasuk pengguna", value: "admin" },
        { label: "Editor — kelola konten", value: "editor" },
      ],
    },
  ],
};
