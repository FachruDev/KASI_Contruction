import type { LegalSection } from "@/data/legal";
import { RichText } from "@/components/ui/RichText";
import type { LegalPage } from "@/lib/types";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/motion/Reveal";

type LegalContentProps = {
  page: LegalPage | null;
  eyebrow: string;
  fallbackTitle: string;
  fallbackSections: readonly LegalSection[];
};

/** CMS rich text when available; otherwise the bundled sections with a sticky table of contents. */
export function LegalContent({ page, eyebrow, fallbackTitle, fallbackSections }: LegalContentProps) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={page?.title ?? fallbackTitle} />
      <section className="mx-auto grid max-w-[88rem] grid-cols-1 gap-14 px-4 pb-28 md:grid-cols-12 md:px-10 md:pb-40">
        {page ? (
          <Reveal className="md:col-span-8 md:col-start-3">
            <RichText data={page.content} />
          </Reveal>
        ) : (
          <>
            <aside className="hidden md:col-span-3 md:block">
              <nav aria-label="Daftar isi" className="sticky top-28 space-y-3">
                {fallbackSections.map((section, index) => (
                  <a className="group flex gap-3 text-[14px] text-ink/50 transition-colors hover:text-ink" href={`#${section.id}`} key={section.id}>
                    <span className="font-mono text-[11px] text-ink/30 group-hover:text-signal-deep">0{index + 1}</span>
                    {section.title}
                  </a>
                ))}
              </nav>
            </aside>
            <div className="space-y-16 md:col-span-8 md:col-start-5">
              {fallbackSections.map((section, index) => (
                <Reveal key={section.id}>
                  <section className="scroll-mt-32 border-t border-ink/10 pt-8" id={section.id}>
                    <span className="font-mono text-[11px] tracking-[0.22em] text-signal-deep">0{index + 1}</span>
                    <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em]">{section.title}</h2>
                    <div className="rich-content mt-6 [&>p:first-child]:text-[1.125rem] [&>p:first-child]:text-ink/72">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {section.bullets ? (
                        <ul>
                          {section.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      ) : null}
                      {section.emphasizedParagraph ? <p className="font-medium text-ink">{section.emphasizedParagraph}</p> : null}
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
