import { CtaBand } from "@/components/layout/CtaBand";
import { HeroSection } from "@/components/landing/HeroSection";
import { HighlightsSection } from "@/components/landing/HighlightsSection";
import { IntroSection } from "@/components/landing/IntroSection";
import { ServicesRail } from "@/components/landing/ServicesRail";
import { StatsSection } from "@/components/landing/StatsSection";
import { WorkShowcase } from "@/components/landing/WorkShowcase";
import { getHomeData, getServices, getShowcaseProjects, getSiteConfig } from "@/lib/cms";

export default async function HomePage() {
  const [home, site, services, projects] = await Promise.all([getHomeData(), getSiteConfig(), getServices(), getShowcaseProjects()]);
  return (
    <>
      <HeroSection hero={home.hero} highlight={home.stats[0]} site={site} />
      <IntroSection about={home.about} />
      <StatsSection stats={home.stats} />
      {services.length ? <ServicesRail heading={home.services} services={services} /> : null}
      <HighlightsSection highlights={home.highlights} />
      {projects.length ? <WorkShowcase heading={home.portfolio} projects={projects} /> : null}
      <CtaBand cta={home.cta} site={site} />
    </>
  );
}
