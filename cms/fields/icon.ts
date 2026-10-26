import type { SelectField } from "payload";

/** Keys must stay in sync with the map in components/ui/Icon.tsx. */
export const ICON_OPTIONS = [
  { label: "Helm proyek", value: "engineering" },
  { label: "Lapisan material", value: "layers" },
  { label: "Penawaran / kuitansi", value: "request_quote" },
  { label: "Lencana terverifikasi", value: "verified" },
  { label: "Perisai", value: "shield" },
  { label: "Jam", value: "schedule" },
  { label: "Kecepatan", value: "speed" },
  { label: "Truk", value: "local_shipping" },
  { label: "Jabat tangan", value: "handshake" },
  { label: "Layanan pelanggan", value: "support_agent" },
  { label: "Bintang", value: "star" },
  { label: "Jalan", value: "road" },
  { label: "Rumah", value: "home" },
  { label: "Gedung", value: "apartment" },
  { label: "Pabrik", value: "factory" },
  { label: "Peralatan", value: "build" },
  { label: "Daun", value: "eco" },
];

export const iconField: SelectField = {
  name: "icon",
  label: "Ikon",
  type: "select",
  defaultValue: "verified",
  options: ICON_OPTIONS,
};
