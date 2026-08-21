import Link from "next/link";
import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { MAIN_NAV_ITEMS } from "@/data/navigation";

const legalItems = [
  { label: "Privacy Policy", href: "/privacy-policy", key: "privacy" },
  { label: "Terms of Service", href: "/terms-of-service", key: "terms" },
] as const;

type LegalFooterProps = {
  active: "privacy" | "terms";
};

export function LegalFooter({ active }: LegalFooterProps) {
  const links = [...legalItems, ...MAIN_NAV_ITEMS];

  if (active === "privacy") {
    return (
      <footer className="mt-auto w-full rounded-t-xl border-t border-outline-variant/20 bg-surface-container dark:bg-on-surface">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-6 px-8 py-12 md:flex-row md:space-y-0">
          <Link
            href="/"
            className="flex items-center gap-2 font-headline text-xl font-bold text-primary dark:text-primary-fixed-dim"
          >
            <MaterialIcon filled>landscape</MaterialIcon>
            Terra Paving
          </Link>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 font-body text-sm leading-relaxed text-on-surface-variant dark:text-surface-variant">
            {links.map((item) => {
              const isActive = "key" in item && item.key === active;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? "font-bold text-primary opacity-90 transition-all hover:opacity-100 hover:underline dark:text-primary-fixed-dim"
                      : "text-on-surface-variant opacity-90 transition-all hover:text-primary hover:opacity-100 hover:underline dark:text-surface-variant"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="font-body text-sm leading-relaxed text-on-surface-variant opacity-80 dark:text-surface-variant">
            © 2024 Terra Paving. Rooted in Quality.
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="mt-auto w-full rounded-t-xl border-t border-outline-variant/20 bg-surface-container dark:bg-on-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between space-y-6 px-8 py-12 font-body text-sm leading-relaxed text-on-surface-variant dark:text-surface-variant md:flex-row md:space-y-0">
        <div className="flex flex-col items-center space-y-2 md:items-start">
          <Link href="/" className="font-headline text-xl font-bold text-primary dark:text-primary-fixed-dim">
            Terra Paving
          </Link>
          <span>© 2024 Terra Paving. Rooted in Quality.</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
          {links.map((item) => {
            const isActive = "key" in item && item.key === active;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive
                    ? "font-bold text-primary opacity-90 transition-all hover:opacity-100 hover:underline dark:text-primary-fixed-dim"
                    : "text-on-surface-variant opacity-90 transition-all hover:text-primary hover:opacity-100 hover:underline dark:text-surface-variant"
                }
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
