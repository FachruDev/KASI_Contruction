import { CtaBand } from "@/components/layout/CtaBand";
import { HeroSection } from "@/components/landing/HeroSection";
import { HighlightsSection } from "@/components/landing/HighlightsSection";
import { IntroSection } from "@/components/landing/IntroSection";
import { ServicesRail } from "@/components/landing/ServicesRail";
import { StatsSection } from "@/components/landing/StatsSection";
import { WorkShowcase } from "@/components/landing/WorkShowcase";
import { getHomeData, getPortfolio, getServices, getSiteConfig } from "@/lib/cms";

export default async function HomePage() {
  const [home, site, services, portfolio] = await Promise.all([getHomeData(), getSiteConfig(), getServices(), getPortfolio()]);
  return (
    <>
      <HeroSection hero={home.hero} highlight={home.stats[0]} site={site} />
      <IntroSection />
      <StatsSection stats={home.stats} />
      <ServicesRail services={services} />
      <HighlightsSection features={home.features} />
      <WorkShowcase projects={portfolio.projects} />
      <CtaBand ctaLabel={home.cta.ctaLabel} ctaMessage={home.cta.ctaMessage} site={site} subtitle={home.cta.subtitle} title={home.cta.title} />
    </>
  );
}
