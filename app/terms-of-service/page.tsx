import type { Metadata } from "next";
import { TermsContent } from "@/components/legal/TermsContent";
import { Navbar } from "@/components/layout/Navbar";
import { getLegalPage } from "@/lib/cms";
import { Footer } from "@/components/layout/Footer";

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
      <Footer />
    </div>
  );
}
