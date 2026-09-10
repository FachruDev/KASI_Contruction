"use client";

import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { SiteConfig } from "@/lib/cms";

const SiteConfigContext = createContext<SiteConfig | null>(null);

export function SiteConfigProvider({ config, children }: { config: SiteConfig; children: ReactNode }) {
  return <SiteConfigContext.Provider value={config}>{children}</SiteConfigContext.Provider>;
}

export function useSiteConfig() {
  const config = useContext(SiteConfigContext);
  if (!config) throw new Error("SiteConfigProvider is missing.");
  return config;
}
