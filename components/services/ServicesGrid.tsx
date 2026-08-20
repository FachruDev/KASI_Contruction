import { SERVICES } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";

export function ServicesGrid() {
  return (
    <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {SERVICES.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}
