import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HighlightsSection } from "@/components/landing/HighlightsSection";
import { IntroSection } from "@/components/landing/IntroSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { getHomeData, getSiteConfig } from "@/lib/cms";

export default async function HomePage() {
  const [home, site] = await Promise.all([getHomeData(), getSiteConfig()]);
  return (
    <>
      <Navbar active="home" />
      <main className="grow">
        <HeroSection hero={home.hero} site={site} />
        <StatsSection stats={home.stats} />
        <IntroSection />
        <HighlightsSection features={home.features} />
        <FinalCtaSection cta={home.cta} site={site} />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
