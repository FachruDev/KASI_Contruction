import { MaterialIcon } from "@/components/ui/MaterialIcon";
import type { HomeData } from "@/lib/cms";

export function HighlightsSection({ features }: { features: HomeData["features"] }) {
  const [expertCrews, qualityMaterials, transparentPricing] = features;
  if (!expertCrews || !qualityMaterials || !transparentPricing) return null;

  return (
    <section className="mx-auto max-w-7xl px-8 py-16">
      <div className="grid auto-rows-62.5 grid-cols-1 gap-6 md:grid-cols-3">
        <div className="soft-shadow group relative flex flex-col justify-end overflow-hidden rounded-4xl bg-surface-container p-10 md:col-span-2">
          <div className="absolute inset-0 bg-primary/5 transition-colors group-hover:bg-primary/10" />
          <div className="relative z-10">
            <MaterialIcon className="mb-4 text-4xl text-primary">{expertCrews.icon}</MaterialIcon>
            <h3 className="mb-2 font-headline text-2xl font-bold text-on-background">{expertCrews.title}</h3>
            <p className="max-w-md font-body text-on-surface-variant">{expertCrews.description}</p>
          </div>
        </div>

        <div className="soft-shadow flex flex-col justify-end rounded-4xl border border-surface-container-highest bg-surface-bright p-10 transition-transform duration-300 hover:-translate-y-1">
          <MaterialIcon className="mb-4 text-4xl text-tertiary">{qualityMaterials.icon}</MaterialIcon>
          <h3 className="mb-2 font-headline text-xl font-bold text-on-background">{qualityMaterials.title}</h3>
          <p className="font-body text-sm text-on-surface-variant">{qualityMaterials.description}</p>
        </div>

        <div className="soft-shadow flex flex-col justify-end rounded-4xl bg-primary-container p-10 text-on-primary-container">
          <MaterialIcon className="mb-4 text-4xl text-on-primary-container">{transparentPricing.icon}</MaterialIcon>
          <h3 className="mb-2 font-headline text-xl font-bold">{transparentPricing.title}</h3>
          <p className="font-body text-sm text-on-primary-container/80">{transparentPricing.description}</p>
        </div>

        <div className="soft-shadow relative overflow-hidden rounded-4xl bg-surface-bright md:col-span-2">
          <div
            aria-hidden="true"
            className="absolute inset-0 h-full w-full bg-cover bg-center opacity-40"
            style={{ backgroundImage: "url('/assets/images/landing/landing2.jpeg')" }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent" />
          <div className="absolute bottom-0 left-0 z-10 w-full p-10">
            <h3 className="mb-2 font-headline text-2xl font-bold text-on-background">Solusi Aspal untuk Berbagai Kebutuhan</h3>
            <p className="font-body text-on-surface-variant">Dari jalan perumahan hingga area komersial dan industri, kami siap membantu mewujudkan pekerjaan pengaspalan yang sesuai kebutuhan Anda.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
