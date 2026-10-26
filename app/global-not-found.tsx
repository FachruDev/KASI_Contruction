import "./(site)/globals.css";
import type { Metadata } from "next";
import { fontVariables } from "@/app/fonts";
import { NotFoundContent } from "@/components/layout/NotFoundContent";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan | KASI",
  robots: { index: false },
};

/** Served for URLs outside every route group, where neither root layout applies. */
export default function GlobalNotFound() {
  return (
    <html className={fontVariables} lang="id">
      <body className="grain">
        <NotFoundContent />
      </body>
    </html>
  );
}
