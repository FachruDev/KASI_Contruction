import type { CollectionConfig } from "payload";
import { adminOnly, loggedIn } from "@/cms/access";
import { notifyInquiry } from "@/cms/hooks/notifyInquiry";
import { REQUIREMENT_OPTIONS } from "@/cms/options";

/** Leads from the contact form. Nobody can create these over the API; the site's server action writes them. */
export const Inquiries: CollectionConfig = {
  slug: "inquiries",
  labels: { singular: "Permintaan Konsultasi", plural: "Permintaan Konsultasi" },
  defaultSort: "-createdAt",
  admin: {
    group: "Prospek",
    useAsTitle: "name",
    defaultColumns: ["name", "phone", "requirement", "status", "createdAt"],
    listSearchableFields: ["name", "phone", "location"],
  },
  access: { read: loggedIn, create: () => false, update: loggedIn, delete: adminOnly },
  hooks: { afterChange: [notifyInquiry] },
  fields: [
    {
      type: "row",
      fields: [
        { name: "name", label: "Nama", type: "text", required: true, admin: { width: "50%", readOnly: true } },
        { name: "phone", label: "WhatsApp", type: "text", required: true, admin: { width: "50%", readOnly: true } },
      ],
    },
    { name: "location", label: "Lokasi pekerjaan", type: "text", required: true, admin: { readOnly: true } },
    {
      type: "row",
      fields: [
        { name: "requirement", label: "Kebutuhan", type: "select", required: true, options: [...REQUIREMENT_OPTIONS], admin: { width: "50%", readOnly: true } },
        { name: "areaM2", label: "Perkiraan luas (m²)", type: "number", admin: { width: "50%", readOnly: true } },
      ],
    },
    { name: "detail", label: "Detail proyek", type: "textarea", admin: { readOnly: true } },
    {
      name: "status",
      label: "Status",
      type: "select",
      required: true,
      defaultValue: "new",
      admin: { position: "sidebar" },
      options: [
        { label: "Baru", value: "new" },
        { label: "Sudah dihubungi", value: "contacted" },
        { label: "Penawaran dikirim", value: "quoted" },
        { label: "Deal", value: "won" },
        { label: "Batal", value: "lost" },
        { label: "Spam", value: "spam" },
      ],
    },
    { name: "notes", label: "Catatan internal", type: "textarea", admin: { position: "sidebar" } },
    { name: "sourceUrl", label: "Dikirim dari", type: "text", admin: { position: "sidebar", readOnly: true } },
  ],
};
