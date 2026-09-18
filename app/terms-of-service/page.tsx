import type { Metadata } from "next";
import { LegalFooter } from "@/components/legal/LegalFooter";
import { TermsContent } from "@/components/legal/TermsContent";
import { Navbar } from "@/components/layout/Navbar";
import { getLegalPage } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan",
  description: "Syarat dan ketentuan penggunaan website serta layanan pengaspalan KASI.",
};

export default async function TermsOfServicePage() {
  const page = await getLegalPage("terms-of-service");
  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-on-surface">
      <Navbar />
      <TermsContent page={page} />
      <LegalFooter active="terms" />
    </div>
  );
}
