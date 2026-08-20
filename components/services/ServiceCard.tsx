import Image from "next/image";
import Link from "next/link";
import type { ServiceItem } from "@/data/services";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[12px] border border-outline-variant/30 bg-surface-bright transition-shadow duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden bg-surface-container">
        <Image
          alt={service.imageAlt}
          className="object-cover"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={service.image}
          unoptimized
        />
      </div>

      <div className="flex flex-grow flex-col p-6">
        <h3 className="mb-2 font-headline text-2xl text-primary">{service.title}</h3>
        <p className="mb-4 flex-grow text-on-surface-variant">{service.description}</p>

        <div className="mb-4">
          <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-tertiary">
            Key Benefits
          </h4>
          <ul className="space-y-1 text-sm text-on-surface-variant">
            {service.benefits.map((benefit) => (
              <li className="flex items-start" key={benefit}>
                <MaterialIcon className="mr-2 mt-0.5 text-sm text-primary" filled>
                  check_circle
                </MaterialIcon>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <span className="mb-2 inline-block rounded-full bg-secondary-container px-2 py-1 text-xs text-on-secondary-container">
            Ideal for: {service.idealFor}
          </span>
        </div>

        <div className="mt-auto">
          <div className="mb-4 text-lg font-bold text-on-surface">
            From {service.price}
            <span className="text-sm font-normal text-on-surface-variant">/m²</span>
          </div>
          <Link
            className="block w-full rounded-[12px] border border-primary bg-surface px-4 py-3 text-center font-label font-bold text-primary transition-colors hover:bg-primary hover:text-on-primary"
            href="/contact"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </article>
  );
}
