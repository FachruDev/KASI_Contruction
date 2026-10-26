import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/LegalContent";
import { TERMS_SECTIONS } from "@/data/legal";
import { getLegalPage } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan",
  description: "Syarat dan ketentuan penggunaan website serta layanan pengaspalan KASI.",
};

export default async function TermsOfServicePage() {
  const page = await getLegalPage("terms-of-service");
  return <LegalContent eyebrow="Legal" fallbackSections={TERMS_SECTIONS} fallbackTitle="Syarat & *ketentuan.*" page={page} />;
}
