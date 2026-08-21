import { FaqContent } from "@/components/faq/FaqContent";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-on-background antialiased">
      <Navbar active="faq" />
      <FaqContent />
      <WhatsAppFab />
      <Footer />
    </div>
  );
}
