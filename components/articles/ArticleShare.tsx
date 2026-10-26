"use client";

import { useState } from "react";
import { CheckIcon, EnvelopeSimpleIcon, LinkSimpleIcon, WhatsappLogoIcon } from "@phosphor-icons/react/ssr";

const actionClass =
  "flex size-11 items-center justify-center rounded-full bg-ink/[0.04] text-ink hairline transition-[background-color,color,transform] duration-500 ease-fluid hover:bg-ink hover:text-bone active:scale-95";

export function ArticleShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const share = (build: (url: string) => string) => () => window.open(build(window.location.href), "_blank", "noopener,noreferrer");

  return (
    <div className="flex items-center justify-between gap-6 border-t border-ink/10 pt-8">
      <span className="font-mono text-[10px] tracking-[0.22em] text-ink/45 uppercase">Bagikan artikel</span>
      <div className="flex gap-2">
        <button aria-label="Bagikan lewat WhatsApp" className={actionClass} onClick={share((url) => `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`)} type="button">
          <WhatsappLogoIcon size={18} weight="light" />
        </button>
        <button aria-label="Bagikan lewat email" className={actionClass} onClick={share((url) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`)} type="button">
          <EnvelopeSimpleIcon size={18} weight="light" />
        </button>
        <button aria-label={copied ? "Tautan tersalin" : "Salin tautan"} className={actionClass} onClick={copy} type="button">
          {copied ? <CheckIcon size={18} weight="light" /> : <LinkSimpleIcon size={18} weight="light" />}
        </button>
      </div>
    </div>
  );
}
