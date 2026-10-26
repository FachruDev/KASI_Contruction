import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { fontVariables } from "@/app/fonts";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { SiteConfigProvider } from "@/components/cms/SiteConfigProvider";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/ui/WhatsAppFab";
import { getSiteConfig } from "@/lib/cms";
import "./globals.css";

// Pages are static; CMS edits refresh them on demand, and this is a safety net if a refresh is missed.
export const revalidate = 3600;

export const viewport: Viewport = {
  themeColor: "#0c0b09",
};

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteConfig();

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: site.metaTitle, template: `%s | ${site.companyName || SITE_NAME}` },
    description: site.metaDescription,
    icons: site.favicon ? { icon: site.favicon } : undefined,
    alternates: { canonical: "/" },
    openGraph: { title: site.metaTitle, description: site.metaDescription, url: SITE_URL, siteName: site.companyName, locale: "id_ID", type: "website", images: site.ogImage ? [site.ogImage] : undefined },
    twitter: { card: "summary_large_image", title: site.metaTitle, description: site.metaDescription },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const site = await getSiteConfig();
  return (
    <html className={fontVariables} lang="id">
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
