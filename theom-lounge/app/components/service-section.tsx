import { SERVICE_CATEGORIES } from "@/data/services";
import { ServiceRow } from "./service-row";

interface ServiceSectionProps {
  category: (typeof SERVICE_CATEGORIES)[0];
  onAdd: (id: string) => void;
}

export function ServiceSection({ category, onAdd }: ServiceSectionProps) {
  const isRight = category.imagePosition === "right";
          console.log('category.anchor:', category.anchor, 'id:', category.id)

  if (
    category.id === "combo" ||
    category.id === "pedicure" ||
    category.id === "drinks"
  ) {
    return (
      <section id={category.anchor} className="py-16! scroll-mt-32!">
        <div className="mx-auto px-12! grid grid-cols-1 lg:grid-cols-2 gap-12! items-start">
          {/* Image */}
          <div className="relative  aspect-6.5/5  overflow-hidden rounded-sm">

            <img
              src={`/banner/${category.image}`}
              alt="Gói Combo nail service tại The OM Lounge"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
              width={900}
              height={675}
            />
          </div>
          {/* Services */}
          <div>
            <h2 className="font-serif text-3xl font-medium text-om-brown mb-6!">
              {category.label}
            </h2>
            {category.services.map((s) => (
              <ServiceRow key={s.id} service={s} onAdd={() => onAdd(s.id)} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  if (category.id === "manicure" || category.id === "hieuung") {
    return (
      <section id={category.anchor} className="py-16! scroll-mt-32!">
        <div
          className="mx-auto px-12! h-full grid grid-cols-1 lg:grid-cols-2 gap-12! items-start"
        >
          {/* Services */}
          <div>
            <h2 className="font-serif text-3xl font-medium text-om-brown mb-6!">
              {category.label}
            </h2>
            {category.services.map((s) => (
              <ServiceRow key={s.id} service={s} onAdd={() => onAdd(s.id)} />
            ))}
          </div>
          {/* Image */}
          <div className="relative h-full overflow-hidden rounded-sm">
            <img
              src={`/banner/${category.image}`}
              alt={category.imageAlt}
              className={`w-full  object-cover hover:scale-105 transition-transform duration-700 ${category.anchor==="manicure" ? "aspect-4/5" : "h-full"}`}
              loading="lazy"
              width={900}
              height={900}
            />
          </div>
        </div>
      </section>
    );
  }
  return null;
}
