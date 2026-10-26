"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircleIcon, PaperPlaneTiltIcon, WarningCircleIcon } from "@phosphor-icons/react/ssr";
import { buttonClasses, ButtonIsland } from "@/components/ui/Button";
import { EASE_FLUID } from "@/components/motion/SmoothScroll";

const REQUIREMENTS = [
  { value: "road", label: "Pengaspalan jalan" },
  { value: "housing", label: "Pengaspalan perumahan" },
  { value: "parking", label: "Area parkir" },
  { value: "commercial", label: "Kawasan usaha / komersial" },
  { value: "industrial", label: "Kawasan industri" },
  { value: "repair", label: "Perbaikan aspal" },
  { value: "other", label: "Lainnya" },
] as const;

const inputClass =
  "w-full rounded-2xl bg-ink/[0.035] px-5 py-4 text-[16px] text-ink outline-none hairline transition-[background-color,box-shadow] duration-500 ease-fluid placeholder:text-ink/30 focus:bg-bone focus:shadow-[inset_0_0_0_1px_var(--color-signal),0_0_0_4px_rgb(251_103_1/0.12)]";

function Field({ label, htmlFor, optional, children }: { label: string; htmlFor: string; optional?: boolean; children: ReactNode }) {
  return (
    <div>
      <label className="mb-2.5 flex items-baseline justify-between px-1 text-[13px] font-medium text-ink/70" htmlFor={htmlFor}>
        {label}
        {optional ? <span className="font-mono text-[10px] tracking-[0.15em] text-ink/35 uppercase">Opsional</span> : null}
      </label>
      {children}
    </div>
  );
}

type Status = { tone: "success" | "error"; message: string } | null;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Keep the element: React clears event.currentTarget once the handler yields at the first await.
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const areaValue = String(form.get("area") ?? "").trim();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          phone: form.get("phone"),
          location: form.get("location"),
          requirement: form.get("requirement"),
          area: areaValue ? Number(areaValue) : 0,
          detail: form.get("detail"),
          website: form.get("website"),
        }),
      });
      const result = (await response.json().catch(() => ({}))) as { message?: string };
      if (!response.ok) throw new Error(result.message ?? "Formulir belum dapat diproses.");
      formElement.reset();
      setStatus({ tone: "success", message: "Terima kasih. Permintaan Anda sudah terkirim, tim kami akan segera menghubungi Anda." });
    } catch (error) {
      setStatus({ tone: "error", message: error instanceof Error ? error.message : "Formulir belum dapat diproses." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-[2rem] bg-ink/[0.035] p-1.5 hairline">
      <div className="rounded-[calc(2rem-0.375rem)] bg-bone p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.7)] ambient-shadow sm:p-10">
        <p className="font-mono text-[10px] tracking-[0.22em] text-ink/45 uppercase">Formulir konsultasi</p>
        <h2 className="mt-3 mb-10 text-3xl font-medium tracking-[-0.045em] md:text-4xl">Ceritakan proyek Anda.</h2>

        <form className="space-y-6" onSubmit={onSubmit}>
          <input aria-hidden="true" autoComplete="off" className="hidden" name="website" tabIndex={-1} type="text" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field htmlFor="full_name" label="Nama lengkap">
              <input autoComplete="name" className={inputClass} id="full_name" name="name" placeholder="Nama Anda" required type="text" />
            </Field>
            <Field htmlFor="whatsapp" label="Nomor WhatsApp">
              <input autoComplete="tel" className={inputClass} id="whatsapp" inputMode="tel" name="phone" placeholder="08xxxxxxxxxx" required type="tel" />
            </Field>
          </div>

          <Field htmlFor="location" label="Lokasi pekerjaan">
            <input className={inputClass} id="location" name="location" placeholder="Contoh: Bogor, Jawa Barat" required type="text" />
          </Field>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field htmlFor="project_type" label="Kebutuhan">
              <select className={`${inputClass} cursor-pointer appearance-none`} defaultValue="" id="project_type" name="requirement" required>
                <option disabled value="">
                  Pilih kebutuhan
                </option>
                {REQUIREMENTS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </Field>
            <Field htmlFor="area" label="Perkiraan luas (m²)" optional>
              <input className={inputClass} id="area" inputMode="numeric" min="0" name="area" placeholder="Contoh: 500" type="number" />
            </Field>
          </div>

          <Field htmlFor="message" label="Detail proyek" optional>
            <textarea className={`${inputClass} resize-y`} id="message" name="detail" placeholder="Kondisi jalan saat ini, akses lokasi, target waktu…" rows={5} />
          </Field>

          <div className="flex flex-col gap-5 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xs text-[13px] leading-relaxed text-ink/45">Data Anda hanya dipakai untuk menindaklanjuti permintaan ini.</p>
            <button className={buttonClasses("ink", "disabled:opacity-60")} disabled={isSubmitting} type="submit">
              {isSubmitting ? "Mengirim…" : "Kirim permintaan"}
              <ButtonIsland variant="ink">
                <PaperPlaneTiltIcon size={17} weight="light" />
              </ButtonIsland>
            </button>
          </div>

          <AnimatePresence>
            {status ? (
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                aria-live="polite"
                className={`flex items-start gap-3 rounded-2xl px-5 py-4 text-[14px] leading-relaxed ${status.tone === "success" ? "bg-ink text-bone" : "bg-signal/10 text-signal-deep"}`}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.5, ease: EASE_FLUID }}
              >
                {status.tone === "success" ? <CheckCircleIcon className="mt-0.5 shrink-0 text-signal" size={18} weight="light" /> : <WarningCircleIcon className="mt-0.5 shrink-0" size={18} weight="light" />}
                {status.message}
              </motion.p>
            ) : null}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
