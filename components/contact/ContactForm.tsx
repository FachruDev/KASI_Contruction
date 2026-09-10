"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const inputClass =
    "w-full rounded-lg border-none bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all placeholder:text-outline-variant focus:ring-2 focus:ring-primary/50";

  return (
    <div className="rounded-xl border border-outline-variant/30 bg-surface-bright p-8 shadow-[0_4px_20px_rgba(46,50,48,0.06)] sm:p-12">
      <h2 className="mb-8 font-headline text-3xl font-semibold text-primary">Hubungi Kami</h2>
      <form
        className="space-y-6"
        onSubmit={async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          setIsSubmitting(true);
          setStatus(null);
          const form = new FormData(event.currentTarget);
          const areaValue = String(form.get("area") ?? "").trim();

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
            const result = await response.json() as { message?: string };
            if (!response.ok) throw new Error(result.message ?? "Formulir belum dapat diproses.");
            event.currentTarget.reset();
            setStatus("Terima kasih. Permintaan Anda sudah terkirim.");
          } catch (error) {
            setStatus(error instanceof Error ? error.message : "Formulir belum dapat diproses.");
          } finally {
            setIsSubmitting(false);
          }
        }}
      >
        <input aria-hidden="true" className="hidden" name="website" tabIndex={-1} type="text" />
        <div>
          <label className="mb-2 block font-label text-sm font-bold text-on-surface-variant" htmlFor="full_name">
            Nama Lengkap
          </label>
          <input className={inputClass} id="full_name" name="name" placeholder="Masukkan nama Anda" required type="text" />
        </div>

        <div>
          <label className="mb-2 block font-label text-sm font-bold text-on-surface-variant" htmlFor="whatsapp">
            Nomor WhatsApp
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-outline">
              <span className="material-symbols-outlined text-xl">phone</span>
            </span>
            <input
              className={`${inputClass} pr-4 pl-12`}
              id="whatsapp"
              name="phone"
              placeholder="08xxxxxxxxxx"
              type="tel"
              required
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-label text-sm font-bold text-on-surface-variant" htmlFor="location">
            Lokasi Pekerjaan
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-outline">
              <span className="material-symbols-outlined text-xl">location_on</span>
            </span>
            <input
              className={`${inputClass} pr-4 pl-12`}
              id="location"
              name="location"
              placeholder="Contoh: Bogor, Jawa Barat"
              type="text"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-label text-sm font-bold text-on-surface-variant" htmlFor="project_type">
              Kebutuhan Pengaspalan
            </label>
            <select
              className={`${inputClass} cursor-pointer appearance-none`}
              defaultValue=""
              id="project_type"
              name="requirement"
              required
            >
              <option disabled value="">Pilih kebutuhan pengaspalan</option>
              <option value="road">Pengaspalan Jalan</option>
              <option value="housing">Pengaspalan Perumahan</option>
              <option value="parking">Area Parkir</option>
              <option value="commercial">Kawasan Usaha / Komersial</option>
              <option value="industrial">Kawasan Industri</option>
              <option value="repair">Perbaikan Aspal</option>
              <option value="other">Lainnya</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-label text-sm font-bold text-on-surface-variant" htmlFor="area">
              Perkiraan Luas Area (m²)
            </label>
            <input className={inputClass} id="area" min="0" name="area" placeholder="Contoh: 500" type="number" />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-label text-sm font-bold text-on-surface-variant" htmlFor="message">
            Detail Proyek
          </label>
          <textarea
            className={`${inputClass} resize-y`}
            id="message"
            name="detail"
            placeholder="Ceritakan kondisi atau kebutuhan pengaspalan Anda..."
            rows={4}
          />
        </div>

        <button
          className="mt-4 w-full rounded-xl bg-primary py-4 font-label text-lg font-bold text-on-primary shadow-[0_4px_14px_rgba(74,124,89,0.3)] transition-opacity hover:opacity-90"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? "Mengirim..." : "Ajukan Permintaan"}
        </button>
        {status ? <p aria-live="polite" className="text-center text-sm text-on-surface-variant">{status}</p> : null}
      </form>
    </div>
  );
}
