"use server";

import config from "@payload-config";
import { headers } from "next/headers";
import { getPayload } from "payload";
import { REQUIREMENT_OPTIONS } from "@/cms/options";

export type InquiryInput = {
  name: string;
  phone: string;
  location: string;
  requirement: string;
  area: number;
  detail: string;
  /** Honeypot: real visitors never see or fill this field. */
  website: string;
};

export type InquiryResult = { ok: true } | { ok: false; message: string };

const REQUIREMENTS = new Set<string>(REQUIREMENT_OPTIONS.map((option) => option.value));
const RESUBMIT_WINDOW_MS = 2 * 60 * 1000;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function submitInquiry(input: InquiryInput): Promise<InquiryResult> {
  // Pretend success to bots so they do not retry with a different payload.
  if (clean(input.website, 200)) return { ok: true };

  const name = clean(input.name, 160);
  const phone = clean(input.phone, 30);
  const location = clean(input.location, 300);
  const requirement = clean(input.requirement, 40);
  const detail = clean(input.detail, 3000);
  const area = typeof input.area === "number" && Number.isFinite(input.area) && input.area >= 0 ? Math.min(input.area, 10_000_000) : 0;

  if (!name || !/^[+\d][\d\s-]{6,}$/.test(phone) || !location || !REQUIREMENTS.has(requirement)) {
    return { ok: false, message: "Mohon lengkapi data wajib dengan benar." };
  }

  try {
    const payload = await getPayload({ config });
    // One inquiry per number every couple of minutes keeps double-clicks and scripted floods out of the inbox.
    const recent = await payload.count({
      collection: "inquiries",
      where: { and: [{ phone: { equals: phone } }, { createdAt: { greater_than: new Date(Date.now() - RESUBMIT_WINDOW_MS).toISOString() } }] },
    });
    if (recent.totalDocs > 0) return { ok: true };

    await payload.create({
      collection: "inquiries",
      overrideAccess: true,
      data: {
        name,
        phone,
        location,
        requirement: requirement as (typeof REQUIREMENT_OPTIONS)[number]["value"],
        areaM2: area || undefined,
        detail,
        status: "new",
        sourceUrl: (await headers()).get("referer") ?? "",
      },
    });
    return { ok: true };
  } catch (error) {
    console.error("Failed to store inquiry:", error);
    return { ok: false, message: "Formulir belum dapat diproses. Silakan hubungi kami via WhatsApp." };
  }
}
