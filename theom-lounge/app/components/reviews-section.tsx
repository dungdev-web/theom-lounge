import { useState } from 'react';
import { REVIEWS } from '@/data/services';

export function ReviewsSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="py-20 bg-om-dark relative overflow-hidden grain"
      aria-labelledby="reviews-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 50%, #c8a96e 0%, transparent 60%)',
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="text-om-gold/70 text-xs tracking-[0.3em] uppercase mb-2">
          NHẬN XÉT TỪ
        </p>
        <h2
          id="reviews-heading"
          className="font-serif text-4xl md:text-5xl text-white mb-12"
        >
          Khách Hàng
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <article
              key={r.id}
              className={`relative text-left rounded-sm overflow-hidden transition-all duration-300 cursor-pointer ${
                active === i
                  ? 'ring-1 ring-om-gold/50'
                  : 'opacity-80 hover:opacity-100'
              }`}
              onClick={() => setActive(i)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={r.image}
                  alt={`Review từ ${r.name}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width={400}
                  height={300}
                />
              </div>
              <div className="bg-om-brown/90 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-8 h-8 rounded-full object-cover"
                    width={32}
                    height={32}
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold text-white text-sm">{r.name}</p>
                    <svg
                      className="w-5 h-5 text-om-gold opacity-60 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 21c0 .55.45 1 1 1h7V10H4c-.55 0-1 .45-1 1v10zM14 22h7c.55 0 1-.45 1-1V11c0-.55-.45-1-1-1h-7v12zM8 3C5.24 3 3 5.24 3 8h5V3zm8 0v5h5c0-2.76-2.24-5-5-5z" />
                    </svg>
                  </div>
                </div>
                <p className="text-white/70 text-xs leading-relaxed line-clamp-3">
                  {r.text}
                </p>
                <button className="text-om-gold text-xs mt-2 hover:underline">
                  Đọc thêm
                </button>
              </div>
            </article>
          ))}
        </div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Review ${i + 1}`}
              className={`rounded-full transition-all ${
                active === i
                  ? 'w-6 h-2 bg-om-gold'
                  : 'w-2 h-2 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}