import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";
import { SiteConfigProvider } from "@/components/cms/SiteConfigProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { getSiteConfig } from "@/lib/cms";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument", display: "swap" });

export const viewport: Viewport = {
  themeColor: "#0c0b09",
};

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteConfig();

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: site.siteTitle, template: `%s | ${site.companyName || SITE_NAME}` },
    description: site.siteDescription || SITE_DESCRIPTION,
    icons: site.faviconUrl ? { icon: site.faviconUrl } : undefined,
    alternates: { canonical: "/" },
    openGraph: { title: site.siteTitle, description: site.siteDescription, url: SITE_URL, siteName: site.companyName, locale: "id_ID", type: "website", images: site.seoImageUrl ? [site.seoImageUrl] : undefined },
    twitter: { card: "summary_large_image", title: site.siteTitle, description: site.siteDescription },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const site = await getSiteConfig();
  return (
    <html className={`${geist.variable} ${geistMono.variable} ${instrument.variable}`} lang="id">
      <body className="grain flex min-h-[100dvh] flex-col">
        <SiteConfigProvider config={site}>
          <SmoothScroll>
            <Navbar />
            <main className="relative z-10 flex-1 bg-bone" id="main">
              {children}
            </main>
            <Footer site={site} />
            <WhatsAppFab />
          </SmoothScroll>
        </SiteConfigProvider>
      </body>
    </html>
  );
}
