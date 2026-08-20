import Image from "next/image";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBGbRtJOWqY04xKxy2orpy47U4vSxKKckmxMQsgWmzrlfCFb7JnmGru-60ME8MPWdE9nU91LTOwZUGUnRIzhRqJKPD7GpKgJKmV9vcDsVotxApwDFP4jAHNozSB1o5E7SzNb5wcF6HTc8xzT34ggUoYX3zZPePxfEyh86deDMFujJNL-5cOqSpuoJONnmrsTSmU1XPp6YK15NM1gIF_kJdf9UsGfocIpvCXAgxmooh0LTSH0EW30q6O";

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-10">
      <div className="rounded-xl border border-outline-variant/20 bg-surface-container-low p-8">
        <h3 className="mb-6 font-headline text-2xl font-semibold text-on-background">Contact Information</h3>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-primary-container p-3 text-on-primary-container">
              <MaterialIcon filled>chat</MaterialIcon>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold text-on-surface-variant">WhatsApp / Phone</p>
              <p className="text-lg text-on-background">+1 (555) 123-4567</p>
              <p className="mt-1 text-sm text-outline">Available for quick estimates via photo.</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-secondary-container p-3 text-on-secondary-container">
              <MaterialIcon filled>mail</MaterialIcon>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold text-on-surface-variant">Email</p>
              <p className="text-lg text-on-background">hello@terrapaving.com</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-tertiary-container p-3 text-on-tertiary-container">
              <MaterialIcon filled>business</MaterialIcon>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold text-on-surface-variant">Headquarters</p>
              <p className="text-lg text-on-background">42 Earthway Blvd, Suite 100<br />Portland, OR 97201</p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-surface-variant p-3 text-on-surface-variant">
              <MaterialIcon filled>schedule</MaterialIcon>
            </div>
            <div>
              <p className="mb-1 text-sm font-bold text-on-surface-variant">Business Hours</p>
              <p className="text-on-background">Monday - Friday: 7:00 AM - 6:00 PM</p>
              <p className="text-on-background">Saturday: 8:00 AM - 2:00 PM</p>
              <p className="text-outline">Sunday: Closed</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="relative h-64 overflow-hidden rounded-xl bg-surface-container shadow-xs">
        <Image
          alt="A warm map view showing the Pacific Northwest region around Portland, Oregon."
          className="object-cover"
          fill
          sizes="(min-width: 1024px) 544px, 100vw"
          src={MAP_IMAGE}
          unoptimized
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-2 rounded-full border border-outline-variant/30 bg-surface/80 px-4 py-2 text-sm font-bold text-primary backdrop-blur">
            <MaterialIcon className="text-base">pin_drop</MaterialIcon>
            Map View
          </div>
        </div>
      </div>
    </div>
  );
}
