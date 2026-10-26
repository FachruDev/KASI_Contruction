import type { LegalSection } from "@/data/legal";
import type { RichTextData } from "@/lib/types";

/** Minimal builders for the Lexical JSON the rich text fields store. */

const base = { direction: "ltr" as const, format: "" as const, indent: 0, version: 1 };

function text(value: string, bold = false) {
  return { type: "text", text: value, detail: 0, format: bold ? 1 : 0, mode: "normal", style: "", version: 1 };
}

function paragraph(value: string, bold = false) {
  return { ...base, type: "paragraph", textFormat: bold ? 1 : 0, textStyle: "", children: [text(value, bold)] };
}

function heading(value: string) {
  return { ...base, type: "heading", tag: "h2", children: [text(value)] };
}

function bulletList(items: readonly string[]) {
  return {
    ...base,
    type: "list",
    listType: "bullet",
    tag: "ul",
    start: 1,
    children: items.map((item, index) => ({ ...base, type: "listitem", value: index + 1, children: [text(item)] })),
  };
}

export function sectionsToLexical(sections: readonly LegalSection[]): RichTextData {
  const children = sections.flatMap((section) => [
    heading(section.title),
    ...section.paragraphs.map((value) => paragraph(value)),
    ...(section.bullets ? [bulletList(section.bullets)] : []),
    ...(section.emphasizedParagraph ? [paragraph(section.emphasizedParagraph, true)] : []),
  ]);
  return { root: { ...base, type: "root", children } } as unknown as RichTextData;
}
