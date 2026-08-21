import { MaterialIcon } from "@/components/ui/MaterialIcon";
import { TERMS_SECTIONS } from "@/data/legal";

export function TermsContent() {
  return (
    <main className="mx-auto w-full max-w-7xl flex-grow px-8 pt-32 pb-24">
      <div className="mb-16 max-w-3xl">
        <h1 className="mb-6 font-headline text-4xl leading-tight font-bold text-primary md:text-5xl">Terms of Service</h1>
        <p className="text-lg text-on-surface-variant">Last Updated: October 26, 2023</p>
        <p className="mt-6 text-xl leading-relaxed text-on-surface">
          Welcome to Terra Paving. These Terms of Service constitute a legally binding agreement between you and Terra Paving concerning your access to and use of our website and services.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
        <aside className="sticky top-32 lg:col-span-4">
          <div className="rounded-xl border border-outline-variant/10 bg-surface-container-low p-8 shadow-[0_4px_20px_rgba(46,50,48,0.06)]">
            <h3 className="mb-6 flex items-center gap-2 font-headline text-xl font-bold text-tertiary">
              <MaterialIcon className="text-tertiary">article</MaterialIcon>
              Agreement Structure
            </h3>
            <nav className="flex flex-col space-y-4">
              {TERMS_SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="group flex items-center gap-2 text-on-surface-variant transition-colors hover:text-primary"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-outline-variant transition-colors group-hover:bg-primary" />
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-16 lg:col-span-8">
          {TERMS_SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-32">
              <h2 className="mb-6 border-b border-outline-variant/30 pb-4 font-headline text-3xl font-bold text-on-surface">
                {section.title}
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-on-surface-variant">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}

                {section.bullets ? (
                  <ul className="mt-4 list-disc space-y-2 pl-6 text-on-surface-variant marker:text-primary">
                    {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                ) : null}

                {section.emphasizedParagraph ? (
                  <p className="mt-4 font-bold text-on-surface">{section.emphasizedParagraph}</p>
                ) : null}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
