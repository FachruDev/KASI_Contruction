import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText as LexicalRichText } from "@payloadcms/richtext-lexical/react";
import type { RichTextData } from "@/lib/types";

/** Renders Lexical content from the CMS inside the site's editorial prose styles. */
export function RichText({ data, className = "" }: { data: RichTextData | null | undefined; className?: string }) {
  if (!data) return null;
  return <LexicalRichText className={`rich-content ${className}`} data={data as unknown as SerializedEditorState} />;
}
