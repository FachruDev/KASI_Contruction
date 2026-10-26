"use client";

import Image from "next/image";
import { useRef, useState, type PointerEvent } from "react";
import { ArrowsHorizontalIcon } from "@phosphor-icons/react/ssr";

/** Drag (or use arrow keys) to wipe between the before and after photographs. */
export function BeforeAfter({ before, after, title }: { before: string; after: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const moveTo = (clientX: number) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setPosition(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    moveTo(event.clientX);
  };

  return (
    <div className="rounded-[2rem] bg-ink/[0.035] p-1.5 hairline">
      <div
        className="relative aspect-[4/3] cursor-ew-resize touch-pan-y overflow-hidden rounded-[calc(2rem-0.375rem)] bg-bone-deep select-none md:aspect-[16/9]"
        onPointerDown={onPointerDown}
        onPointerMove={(event) => dragging && moveTo(event.clientX)}
        onPointerUp={() => setDragging(false)}
        ref={ref}
      >
        <Image alt={`Hasil proyek ${title}`} className="object-cover" draggable={false} fill sizes="(min-width: 768px) 80vw, 100vw" src={after} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image alt={`Kondisi sebelum proyek ${title}`} className="object-cover" draggable={false} fill sizes="(min-width: 768px) 80vw, 100vw" src={before} />
        </div>

        <span className="absolute top-5 left-5 rounded-full bg-ink/60 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-bone uppercase backdrop-blur-md">Sebelum</span>
        <span className="absolute top-5 right-5 rounded-full bg-bone/80 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-ink uppercase backdrop-blur-md">Sesudah</span>

        <div className="pointer-events-none absolute inset-y-0 w-px bg-bone" style={{ left: `${position}%` }}>
          <div
            aria-label="Geser perbandingan sebelum dan sesudah"
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={Math.round(position)}
            className="pointer-events-auto absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-bone text-ink shadow-[0_12px_30px_-8px_rgba(12,11,9,0.5)]"
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") setPosition((value) => Math.max(0, value - 5));
              if (event.key === "ArrowRight") setPosition((value) => Math.min(100, value + 5));
            }}
            role="slider"
            tabIndex={0}
          >
            <ArrowsHorizontalIcon size={22} weight="light" />
          </div>
        </div>
      </div>
    </div>
  );
}
