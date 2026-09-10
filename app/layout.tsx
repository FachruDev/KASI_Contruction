import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Literata, Nunito_Sans } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";
import { SiteConfigProvider } from "@/components/cms/SiteConfigProvider";
import { getSiteConfig } from "@/lib/cms";
import "./globals.css";

const literata = Literata({
  subsets: ["latin"],
  variable: "--font-literata",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteConfig();

  return {
    metadataBase: new URL(SITE_URL),
    title: { default: site.siteTitle, template: `%s | ${site.companyName || SITE_NAME}` },
    description: site.siteDescription || SITE_DESCRIPTION,
    alternates: { canonical: "/" },
    openGraph: { title: site.siteTitle, description: site.siteDescription, url: SITE_URL, siteName: site.companyName, locale: "id_ID", type: "website" },
    twitter: { card: "summary_large_image", title: site.siteTitle, description: site.siteDescription },
  };
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const site = await getSiteConfig();
  return (
    <html lang="id" className="light">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${literata.variable} ${nunitoSans.variable} flex min-h-screen flex-col bg-background text-on-background`}>
        <SiteConfigProvider config={site}>{children}</SiteConfigProvider>
      </body>
    </html>
  );
}
