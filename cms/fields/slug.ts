import type { TextField } from "payload";

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** URL slug that fills itself from another field when left empty, and is always normalised. */
export function slugField(source = "title"): TextField {
  return {
    name: "slug",
    label: "Slug URL",
    type: "text",
    index: true,
    unique: true,
    admin: {
      position: "sidebar",
      description: "Bagian alamat halaman, misalnya pengaspalan-jalan. Kosongkan untuk dibuat otomatis dari judul.",
    },
    hooks: {
      beforeValidate: [({ value, data }) => slugify(typeof value === "string" && value.trim() ? value : String(data?.[source] ?? ""))],
    },
  };
}
