import Link from "next/link";
import { MAIN_NAV_ITEMS, type NavKey } from "@/data/navigation";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

interface NavbarProps {
  active?: NavKey;
}

export function Navbar({ active }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface/90 shadow-xs backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Link className="font-headline text-2xl font-bold text-primary" href="/">
          Terra Paving
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 font-body md:flex">
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = item.key === active;

            return (
              <Link
                key={item.key}
                aria-current={isActive ? "page" : undefined}
                className={
                  isActive
                    ? "border-b-2 border-primary pb-1 font-bold text-primary transition-opacity hover:opacity-80"
                    : "text-on-surface-variant transition-colors duration-200 hover:text-primary hover:opacity-80"
                }
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center md:flex">
          <Link
            className="rounded-full bg-primary px-6 py-2.5 font-bold text-on-primary transition-transform duration-150 hover:scale-95 hover:opacity-80"
            href="/contact"
          >
            Get a Quote
          </Link>
        </div>

        <button aria-label="Open navigation menu" className="text-primary md:hidden" type="button">
          <MaterialIcon className="text-3xl">menu</MaterialIcon>
        </button>
      </div>
    </header>
  );
}
