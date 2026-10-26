import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

/** Shared body for both 404s: the in-site one and the global fallback for URLs no route matches. */
export function NotFoundContent() {
  return (
    <section className="relative isolate flex min-h-[100dvh] flex-col justify-end overflow-hidden bg-ink px-4 pt-40 pb-14 text-bone md:px-10 md:pb-20">
      <p aria-hidden="true" className="pointer-events-none absolute -top-[0.12em] right-0 left-0 -z-10 text-center text-[clamp(10rem,42vw,40rem)] leading-none font-semibold tracking-[-0.08em] text-transparent select-none bg-linear-to-b from-bone/12 to-bone/0 bg-clip-text">
        404
      </p>
      <div className="mx-auto w-full max-w-[88rem]">
        <Eyebrow tone="dark">Halaman tidak ditemukan</Eyebrow>
        <h1 className="mt-7 max-w-4xl text-[clamp(2.75rem,7vw,7rem)] leading-[0.92] font-medium tracking-[-0.055em]">
          Jalan ini <span className="serif-accent text-signal">belum</span> kami aspal.
        </h1>
        <p className="mt-8 max-w-lg text-lg leading-relaxed text-bone/60">Halaman yang Anda cari mungkin sudah dipindahkan atau alamatnya salah ketik.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/">Kembali ke beranda</Button>
          <Button href="/contact" variant="ghost-dark">
            Hubungi kami
          </Button>
        </div>
      </div>
    </section>
  );
}
