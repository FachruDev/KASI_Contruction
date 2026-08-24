const DEFAULT_WHATSAPP_PHONE = "6282123927180";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Halo, saya ingin konsultasi terkait jasa pengaspalan. Mohon informasinya.";

interface WhatsAppUrlOptions {
  message?: string;
  phone?: string;
}

export function createWhatsAppUrl({
  message = DEFAULT_WHATSAPP_MESSAGE,
  phone = DEFAULT_WHATSAPP_PHONE,
}: WhatsAppUrlOptions = {}) {
  const normalizedPhone = phone.replace(/\D/g, "").replace(/^0/, "62");
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${normalizedPhone}?text=${encodedMessage}`;
}
