"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { MAIN_NAV_ITEMS, type NavKey } from "@/data/navigation";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

interface NavbarProps {
  active?: NavKey;
}

export function Navbar({ active }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const previousScrollY = lastScrollY.current;

      // Selalu tampil ketika berada dekat bagian atas halaman.
      if (currentScrollY < 80) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Jangan sembunyikan navbar ketika mobile menu sedang terbuka.
      if (open) {
        setVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const scrollDifference = currentScrollY - previousScrollY;

      // Threshold kecil agar navbar tidak berkedip karena scroll 1-2px.
      if (Math.abs(scrollDifference) < 8) {
        return;
      }

      if (scrollDifference > 0) {
        // Scroll ke bawah.
        setVisible(false);
      } else {
        // Scroll ke atas.
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  return (
    <>
      <header
        className={`
          fixed left-4 right-4 top-4 z-50
          rounded-2xl
          bg-surface/90
          shadow-[0_8px_30px_rgba(46,50,48,0.12)]
          backdrop-blur-xl
          transition-transform
          duration-300
          ease-out

          lg:left-0
          lg:right-0
          lg:top-0
          lg:w-full
          lg:rounded-none
          lg:shadow-xs

          ${
            visible
              ? "translate-y-0"
              : "-translate-y-[calc(100%+2rem)] lg:-translate-y-full"
          }
        `}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            className="shrink-0 font-headline text-xl font-bold text-primary sm:text-2xl"
          >
            Terra Paving
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 font-body lg:flex xl:gap-8"
          >
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = item.key === active;

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    isActive
                      ? "border-b-2 border-primary pb-1 font-bold text-primary transition-opacity hover:opacity-80"
                      : "text-on-surface-variant transition-colors duration-200 hover:text-primary hover:opacity-80"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center lg:flex">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-6 py-2.5 font-bold text-on-primary transition-all duration-150 hover:scale-95 hover:opacity-80"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((current) => !current)}
            className="flex size-11 items-center justify-center rounded-xl text-primary transition-colors hover:bg-surface-container-low lg:hidden"
          >
            <MaterialIcon className="text-3xl">
              {open ? "close" : "menu"}
            </MaterialIcon>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            absolute
            left-0
            right-0
            top-[calc(100%+0.75rem)]
            overflow-hidden
            rounded-2xl
            bg-surface/95
            shadow-[0_12px_40px_rgba(46,50,48,0.16)]
            backdrop-blur-xl
            transition-all
            duration-300
            lg:hidden

            ${
              open
                ? "visible translate-y-0 opacity-100"
                : "pointer-events-none invisible -translate-y-2 opacity-0"
            }
          `}
        >
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="p-3"
          >
            <ul className="flex flex-col gap-1">
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = item.key === active;

                return (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      onClick={closeMenu}
                      className={`
                        flex min-h-12 items-center
                        rounded-xl
                        px-4 py-3
                        text-base
                        transition-colors

                        ${
                          isActive
                            ? "bg-primary-container/30 font-bold text-primary"
                            : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                        }
                      `}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-3 border-t border-outline-variant/30 pt-3">
              <Link
                href="/contact"
                onClick={closeMenu}
                className="flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 font-bold text-on-primary transition-opacity hover:opacity-80 active:scale-[0.98]"
              >
                Get a Quote
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Ruang navbar pada mobile.
          Desktop navbar fixed sehingga spacing juga dibutuhkan. */}
      <div className="h-24 lg:h-18" />
    </>
  );
}