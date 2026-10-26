"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useLenis } from "lenis/react";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { MAIN_NAV_ITEMS, isActivePath } from "@/data/navigation";
import { useSiteConfig } from "@/components/cms/SiteConfigProvider";
import { ButtonIsland } from "@/components/ui/Button";
import { EASE_CINE, EASE_FLUID } from "@/components/motion/SmoothScroll";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function Navbar() {
  const site = useSiteConfig();
  const pathname = usePathname();
  const lenis = useLenis();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  // The overlay belongs to the route it was opened on, so navigating closes it.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const close = () => setOpenPath(null);

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (open || current < 160) return setHidden(false);
    if (Math.abs(current - previous) < 6) return;
    setHidden(current > previous);
  });

  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpenPath(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, lenis]);

  const toggle = () => setOpenPath(open ? null : pathname);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1 }}
            className="pointer-events-auto fixed inset-0 flex flex-col justify-between bg-ink/90 px-6 pt-32 pb-10 text-bone backdrop-blur-3xl md:px-12"
            exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.15 } }}
            id="site-menu"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE_FLUID }}
          >
            <nav aria-label="Menu utama">
              <ul className="flex flex-col gap-1">
                {[...MAIN_NAV_ITEMS, { label: "Kontak", href: "/contact" }].map((item, index) => (
                  <li className="overflow-hidden" key={item.href}>
                    <motion.div
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: "-60%", opacity: 0, transition: { duration: 0.35, delay: index * 0.02 } }}
                      initial={{ y: "100%", opacity: 0 }}
                      transition={{ duration: 0.9, delay: 0.1 + index * 0.05, ease: EASE_CINE }}
                    >
                      <Link
                        className="group flex items-baseline gap-4 py-1 text-[clamp(2.5rem,9vw,5.5rem)] leading-[1.02] font-medium tracking-[-0.045em]"
                        href={item.href}
                        onClick={close}
                      >
                        <span className="font-mono text-xs tracking-normal text-bone/40">0{index + 1}</span>
                        <span className={`transition-colors duration-500 ease-fluid ${isActivePath(pathname, item.href) ? "text-signal" : "group-hover:text-bone/60"}`}>
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>
            </nav>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-6 border-t border-bone/10 pt-6 text-sm text-bone/60 md:flex-row md:items-end md:justify-between"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.8, delay: 0.45, ease: EASE_CINE }}
            >
              <div className="space-y-1">
                <p>{site.email}</p>
                <p className="max-w-sm">{site.address}</p>
              </div>
              <a
                className="inline-flex items-center gap-2 text-bone transition-colors hover:text-signal"
                href={createWhatsAppUrl(site.whatsappPhone, site.whatsappMessage)}
                rel="noopener noreferrer"
                target="_blank"
              >
                WhatsApp +{site.whatsappPhone.replace(/\D/g, "").replace(/^0/, "62")}
                <ArrowUpRightIcon size={16} weight="light" />
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <motion.div
        animate={{ y: hidden ? "-140%" : "0%" }}
        className="relative mx-auto mt-4 flex w-fit justify-center px-4 md:mt-6"
        transition={{ duration: 0.7, ease: EASE_FLUID }}
      >
        <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-ink/75 py-1.5 pr-1.5 pl-5 text-bone shadow-[0_20px_50px_-20px_rgba(12,11,9,0.6)] backdrop-blur-xl hairline-dark">
          <Link aria-label={`${site.companyName} beranda`} className="mr-2 flex items-center gap-2 text-[15px] font-semibold tracking-[-0.03em]" href="/">
            <span aria-hidden="true" className="size-2 rounded-full bg-signal" />
            {site.companyName}
          </Link>

          <nav aria-label="Navigasi utama" className="hidden lg:block">
            <ul className="flex items-center">
              {MAIN_NAV_ITEMS.map((item) => {
                const active = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      aria-current={active ? "page" : undefined}
                      className={`relative block rounded-full px-3.5 py-2 text-[13px] transition-colors duration-500 ease-fluid ${active ? "text-bone" : "text-bone/55 hover:text-bone"}`}
                      href={item.href}
                    >
                      {active ? (
                        <motion.span className="absolute inset-0 rounded-full bg-bone/[0.08]" layoutId="nav-active" transition={{ duration: 0.6, ease: EASE_FLUID }} />
                      ) : null}
                      <span className="relative">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link className="group ml-2 hidden items-center gap-3 rounded-full bg-signal py-1 pr-1 pl-4 text-[13px] font-medium text-ink transition-colors duration-500 ease-fluid hover:bg-signal-soft sm:flex" href="/contact">
            Konsultasi
            <ButtonIsland>
              <ArrowUpRightIcon size={15} weight="light" />
            </ButtonIsland>
          </Link>

          <button
            aria-controls="site-menu"
            aria-expanded={open}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="relative ml-1 flex size-11 items-center justify-center rounded-full bg-bone/[0.08] transition-colors duration-500 ease-fluid hover:bg-bone/[0.14] lg:hidden"
            onClick={toggle}
            type="button"
          >
            <span className={`absolute h-px w-4.5 bg-bone transition-transform duration-500 ease-fluid ${open ? "rotate-45" : "-translate-y-[3.5px]"}`} />
            <span className={`absolute h-px w-4.5 bg-bone transition-transform duration-500 ease-fluid ${open ? "-rotate-45" : "translate-y-[3.5px]"}`} />
          </button>
        </div>
      </motion.div>
    </header>
  );
}
