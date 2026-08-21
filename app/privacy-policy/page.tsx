import type { Metadata } from "next";
import { LegalFooter } from "@/components/legal/LegalFooter";
import { PrivacyHeader } from "@/components/legal/PrivacyHeader";
import { PrivacyPolicyContent } from "@/components/legal/PrivacyPolicyContent";

export const metadata: Metadata = {
  title: "Privacy Policy - Terra Paving",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container">
      <PrivacyHeader />
      <PrivacyPolicyContent />
      <LegalFooter active="privacy" />
    </div>
  );
}
