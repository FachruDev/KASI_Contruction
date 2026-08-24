import Image from "next/image";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBGbRtJOWqY04xKxy2orpy47U4vSxKKckmxMQsgWmzrlfCFb7JnmGru-60ME8MPWdE9nU91LTOwZUGUnRIzhRqJKPD7GpKgJKmV9vcDsVotxApwDFP4jAHNozSB1o5E7SzNb5wcF6HTc8xzT34ggUoYX3zZPePxfEyh86deDMFujJNL-5cOqSpuoJONnmrsTSmU1XPp6YK15NM1gIF_kJdf9UsGfocIpvCXAgxmooh0LTSH0EW30q6O";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">
      <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-8">
        <h3 className="mb-6 font-headline text-2xl font-semibold text-on-background">Informasi Kontak Kami</h3>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-primary-container p-3 text-on-primary-container">
              <MaterialIcon filled>chat</MaterialIcon>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold text-on-surface-variant">WhatsApp / Telepon</p>
              <p className="text-lg text-on-background">+62 821 - 2392 - 7180</p>
              <p className="mt-1 text-sm text-outline">Respon cepat, hubungi no kami</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-secondary-container p-3 text-on-secondary-container">
              <MaterialIcon filled>mail</MaterialIcon>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold text-on-surface-variant">Email</p>
              <p className="text-lg text-on-background">customerservice@kasi.com</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-tertiary-container p-3 text-on-tertiary-container">
              <MaterialIcon filled>business</MaterialIcon>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold text-on-surface-variant">Lokasi</p>
              <p className="text-lg text-on-background">
                Jl. H Appandi kp. Kaum Pandak RT 002/01, Kabupaten Bogor, Jawa Barat <br />No.rumah 49, 16913</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-surface-variant p-3 text-on-surface-variant">
              <MaterialIcon filled>schedule</MaterialIcon>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold text-on-surface-variant">Jam Kerja</p>
              <p className="text-on-background">Senin - Jummat: 7:00 AM - 7:00 PM</p>
              <p className="text-on-background">Sabtu: 8:00 AM - 7:00 PM</p>
              <p className="text-outline">Minggu: Tutup</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="relative h-64 overflow-hidden rounded-xl bg-surface-container shadow-xs">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d115450.87145564539!2d106.815021!3d-6.5244088!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa49178e0b914f503%3A0x7c84bd8b82250d61!2sJasa%20Pengaspalan%20Bogor!5e1!3m2!1sid!2sid!4v1787557793233!5m2!1sid!2sid" width="600" height="450" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </div>
  );
}
