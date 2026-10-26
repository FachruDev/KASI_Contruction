import type { CollectionAfterChangeHook } from "payload";
import { REQUIREMENT_OPTIONS } from "@/cms/options";
import type { Inquiry } from "@/payload-types";

/** Emails the sales inbox when the contact form creates a lead. Silently skipped until both env vars are set. */
export const notifyInquiry: CollectionAfterChangeHook<Inquiry> = async ({ doc, operation, req }) => {
  const recipient = process.env.INQUIRY_NOTIFY_EMAIL;
  if (operation !== "create" || !recipient || !process.env.SMTP_HOST) return doc;

  const requirement = REQUIREMENT_OPTIONS.find((option) => option.value === doc.requirement)?.label ?? doc.requirement;
  const adminUrl = `${process.env.NEXT_PUBLIC_SITE_URL ?? ""}/admin/collections/inquiries/${doc.id}`;
  const lines = [
    `Nama: ${doc.name}`,
    `WhatsApp: ${doc.phone}`,
    `Lokasi: ${doc.location}`,
    `Kebutuhan: ${requirement}`,
    doc.areaM2 ? `Perkiraan luas: ${doc.areaM2} m²` : null,
    doc.detail ? `\nDetail:\n${doc.detail}` : null,
    `\nBuka di admin: ${adminUrl}`,
  ].filter(Boolean);

  try {
    await req.payload.sendEmail({ to: recipient, subject: `Permintaan konsultasi baru — ${doc.name}`, text: lines.join("\n") });
  } catch (error) {
    // A mail outage must never lose the lead itself; it is already saved.
    req.payload.logger.error({ err: error, msg: "Failed to send inquiry notification" });
  }
  return doc;
};
