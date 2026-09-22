export type NavKey =
  | "home"
  | "services"
  | "portfolio"
  | "testimonials"
  | "faq"
  | "contact";

export type NavItem = {
  key: NavKey;
  label: string;
  href: string;
};

export const MAIN_NAV_ITEMS: readonly NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "services", label: "Services", href: "/services" },
  { key: "portfolio", label: "Portfolio", href: "/portfolio" },
  { key: "testimonials", label: "Testimonials", href: "/testimonials" },
  { key: "faq", label: "FAQ", href: "/faq" },
  { key: "contact", label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LEGAL_ITEMS = [
  { label: "Privacy Policy", href: "/privacy-policy", target: "_blank" },
  { label: "Terms of Service", href: "/terms-of-service", target: "_blank" },
] as const;

export const FOOTER_NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
