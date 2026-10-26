import type { BusinessHour } from "@/lib/types";

export function hoursLabel(hour: BusinessHour) {
  if (hour.closed) return "Tutup";
  return [hour.open, hour.close].filter(Boolean).join(" — ");
}
