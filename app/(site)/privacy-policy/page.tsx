import type { Metadata } from "next";
import { LegalContent } from "@/components/legal/LegalContent";
import { PRIVACY_SECTIONS } from "@/data/legal";
import { getLegalPage } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Kebijakan privasi KASI terkait penggunaan data dan informasi pengunjung website.",
};

export default async function PrivacyPolicyPage() {
  const page = await getLegalPage("privacy-policy");
  return <LegalContent eyebrow="Legal" fallbackSections={PRIVACY_SECTIONS} fallbackTitle="Kebijakan *privasi.*" page={page} />;
}
