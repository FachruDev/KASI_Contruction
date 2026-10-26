import type { Field } from "payload";

export const ACCENT_HINT = "Apit kata dengan bintang untuk huruf miring aksen, misalnya: Setiap jalan punya *kebutuhan* sendiri.";

/** Eyebrow label + headline (+ optional intro) that introduces a section. */
export function sectionHeading(defaults: { eyebrow: string; heading?: string; title?: string; description?: string }, withDescription = false): Field[] {
  const headingName = defaults.title !== undefined ? "title" : "heading";
  return [
    { name: "eyebrow", label: "Label kecil", type: "text", defaultValue: defaults.eyebrow },
    {
      name: headingName,
      label: "Judul",
      type: "text",
      defaultValue: defaults.title ?? defaults.heading,
      admin: { description: ACCENT_HINT },
    },
    ...(withDescription ? [{ name: "description", label: "Deskripsi", type: "textarea", defaultValue: defaults.description } as Field] : []),
  ];
}
