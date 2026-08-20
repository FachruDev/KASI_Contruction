import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HighlightsSection } from "@/components/landing/HighlightsSection";
import { IntroSection } from "@/components/landing/IntroSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";

export default function HomePage() {
  return (
    <>
      <Navbar active="home" />
      <main className="grow">
        <HeroSection />
        <StatsSection />
        <IntroSection />
        <HighlightsSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
