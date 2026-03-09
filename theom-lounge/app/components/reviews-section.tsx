import { useState } from 'react';
import { REVIEWS } from '@/data/services';

export function ReviewsSection() {
  const [active, setActive] = useState(0);

  const getVisibleReviews = () => {
    const reviews = [];
    for (let i = 0; i < 3; i++) {
      reviews.push(REVIEWS[(active + i) % REVIEWS.length]);
    }
    return reviews;
  };

  const visibleReviews = getVisibleReviews();

  const handleNext = () => {
    setActive((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section
      className="py-20! bg-om-dark relative overflow-hidden grain"
      aria-labelledby="reviews-heading"
    >
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 50%, #c8a96e 0%, transparent 60%)',
        }}
      />
      <div className="relative z-10 mx-auto px-6! text-center">
        <p className="text-om-gold/70 text-xs tracking-[0.3em] uppercase mb-2!">
          NHẬN XÉT TỪ
        </p>
        <h2
          id="reviews-heading"
          className="font-serif text-4xl md:text-5xl text-white mb-12!"
        >
          Khách Hàng
        </h2>

        {/* Slider Container */}
        <div className="relative flex items-center justify-center gap-8 mb-8!">
          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 p-2 text-white/60 hover:text-om-gold transition-colors"
            aria-label="Previous review"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="flex items-end justify-center gap-6 w-full">
            {visibleReviews.map((r, i) => (
              <article
                key={r.id}
                className={`relative text-left rounded-sm overflow-hidden transition-all duration-300 flex-shrink-0 ${
                  i === 1
                    ? 'ring-2 ring-om-gold/80 w-160 h-190'
                    : 'opacity-50 w-110 hover:opacity-70'
                }`}
              >
                {/* Image */}
                <div className={`overflow-hidden ${i === 1 ? 'aspect-[4/3]' : 'aspect-[4/5]'}`}>
                  <img
                    src={r.image}
                    alt={`Review từ ${r.name}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={400}
                    height={300}
                  />
                </div>

                {/* Content */}
                <div className="bg-om-brown/90 p-4 min-h-[180px]">
                  <div className="flex items-center gap-2 mb-2!">
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
                        className="w-5 h-5 text-om-gold opacity-60"
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
                  <button className="text-om-gold text-xs mt-2! hover:underline">
                    Xem thêm
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-20 p-2 text-white/60 hover:text-om-gold transition-colors"
            aria-label="Next review"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-6!">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Review ${i + 1}`}
              className={`rounded-full transition-all bg-red-800 ${
                active === i
                  ? 'w-8 h-2 bg-om-gold'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}