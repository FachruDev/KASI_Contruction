import type { Metadata } from "next";
import { LegalFooter } from "@/components/legal/LegalFooter";
import { TermsContent } from "@/components/legal/TermsContent";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Terms of Service - Terra Paving",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-on-surface">
      <Navbar />
      <TermsContent />
      <LegalFooter active="terms" />
    </div>
  );
}
