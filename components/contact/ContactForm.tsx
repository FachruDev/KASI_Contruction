export function ContactForm() {
  const inputClass =
    "w-full rounded-lg border-none bg-surface-container-low px-4 py-3 text-on-surface outline-none transition-all placeholder:text-outline-variant focus:ring-2 focus:ring-primary/50";

  return (
    <div className="rounded-xl border border-outline-variant/30 bg-surface-bright p-8 shadow-[0_4px_20px_rgba(46,50,48,0.06)] sm:p-12">
      <h2 className="mb-8 font-headline text-3xl font-semibold text-primary">Hubungi Kami</h2>
      <form className="space-y-6">
        <div>
          <label className="mb-2 block font-label text-sm font-bold text-on-surface-variant" htmlFor="full_name">
            Nama Lengkap
          </label>
          <input className={inputClass} id="full_name" placeholder="Masukkan nama Anda" type="text" />
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
              placeholder="08xxxxxxxxxx"
              type="tel"
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
              placeholder="Contoh: Bogor, Jawa Barat"
              type="text"
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
            >
              <option disabled value="">Pengaspalan Jalan</option>
              <option value="residential">Pengaspalan Perumahan</option>
              <option value="commercial">Area Parkir</option>
              <option value="repair">Kawasan Usaha / Komersial</option>
              <option value="sealcoating">Kawasan Industri</option>
              <option value="other">Lainnya</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block font-label text-sm font-bold text-on-surface-variant" htmlFor="area">
              Perkiraan Luas Area (m²)
            </label>
            <input className={inputClass} id="area" placeholder="Contoh: 500" type="number" />
          </div>
        </div>

        <div>
          <label className="mb-2 block font-label text-sm font-bold text-on-surface-variant" htmlFor="message">
            Detail Proyek
          </label>
          <textarea
            className={`${inputClass} resize-y`}
            id="message"
            placeholder="Ceritakan kondisi atau kebutuhan pengaspalan Anda..."
            rows={4}
          />
        </div>

        <button
          className="mt-4 w-full rounded-xl bg-primary py-4 font-label text-lg font-bold text-on-primary shadow-[0_4px_14px_rgba(74,124,89,0.3)] transition-opacity hover:opacity-90"
          type="submit"
        >
          Ajukan Permintaan
        </button>
      </form>
    </div>
  );
}
