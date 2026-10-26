/** Option lists shared by the CMS schema and client components; keep this file free of server imports. */
export const REQUIREMENT_OPTIONS = [
  { label: "Pengaspalan jalan", value: "road" },
  { label: "Pengaspalan perumahan", value: "housing" },
  { label: "Area parkir", value: "parking" },
  { label: "Kawasan usaha / komersial", value: "commercial" },
  { label: "Kawasan industri", value: "industrial" },
  { label: "Perbaikan aspal", value: "repair" },
  { label: "Lainnya", value: "other" },
] as const;
