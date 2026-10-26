export const DEFAULT_WHATSAPP_PHONE = "6282123927180";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Halo, saya ingin konsultasi terkait jasa pengaspalan. Mohon informasinya.";

export function createWhatsAppUrl(phone: string = DEFAULT_WHATSAPP_PHONE, message: string = DEFAULT_WHATSAPP_MESSAGE) {
  const normalizedPhone = phone.replace(/\D/g, "").replace(/^0/, "62");
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}
