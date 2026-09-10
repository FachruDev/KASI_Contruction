import { ServiceCard } from "@/components/services/ServiceCard";
import type { ServiceItem } from "@/data/services";

export function ServicesGrid({ services }: { services: readonly ServiceItem[] }) {
  return (
    <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}
