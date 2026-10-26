export type NavItem = {
  label: string;
  href: string;
};

export const MAIN_NAV_ITEMS: readonly NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimoni", href: "/testimonials" },
  { label: "Artikel", href: "/articles" },
  { label: "FAQ", href: "/faq" },
];

export const FOOTER_NAV_ITEMS: readonly NavItem[] = [...MAIN_NAV_ITEMS, { label: "Kontak", href: "/contact" }];

export const FOOTER_LEGAL_ITEMS: readonly NavItem[] = [
  { label: "Kebijakan Privasi", href: "/privacy-policy" },
  { label: "Syarat & Ketentuan", href: "/terms-of-service" },
];

export function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}
