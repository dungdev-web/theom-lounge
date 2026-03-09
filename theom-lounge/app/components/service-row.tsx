function fmt(n: number) {
  return new Intl.NumberFormat('vi-VN').format(n) + ' đ';
}

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration?: number;
}

interface ServiceRowProps {
  service: Service;
  onAdd: () => void;
}

export function ServiceRow({ service, onAdd }: ServiceRowProps) {
  return (
    <article
      className="service-row flex items-start justify-between py-5! border-b border-om-brown/8 group cursor-default "
      aria-label={`${service.name} - ${fmt(service.price)}`}
    >
      <div className="flex-1 pr-6!">
        <h3 className="font-serif text-base font-medium text-om-brown group-hover:text-om-dark transition-colors">
          {service.name}
        </h3>
        <p className="text-sm text-om-brown/55 mt-0.5! leading-relaxed">{service.description}</p>
        <p className="text-sm font-semibold text-om-brown/70 mt-2!">
          {Math.round(service.price / 1000)}k
        </p>
      </div>
      <button
        onClick={onAdd}
        aria-label={`Thêm ${service.name} vào giỏ hàng`}
        className="service-add-btn opacity-0 group-hover:opacity-100 mt-0.5! w-7 h-7 rounded-full border border-om-brown/30 flex items-center justify-center text-om-brown/60 hover:border-om-gold hover:text-om-gold hover:bg-om-gold/5 transition-all flex-shrink-0"
      >
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
    </article>
  );
}