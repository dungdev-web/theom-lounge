"use client";

import { useState } from "react";
import { REVIEWS } from "@/data/services";

export function ReviewsSection() {
  const [active, setActive] = useState(1);

  const getCards = () => [
    REVIEWS[(active - 1 + REVIEWS.length) % REVIEWS.length],
    REVIEWS[active % REVIEWS.length],
    REVIEWS[(active + 1) % REVIEWS.length],
  ];

  const cards = getCards();

  return (
    <section
      className="py-10! bg-om-dark relative overflow-hidden "
      aria-labelledby="reviews-heading"
      style={{
        backgroundImage: "url('/banner/bannersection.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Linear gradient overlay: #81694B 20% → #614F38 100% */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(129,105,75,0.20) 0%, rgba(97,79,56,1) 100%)",
        }}
      />

      <div className="relative z-10 text-center px-6!">
        {/* Heading */}
        <p className="text-om-gold/80 text-xs tracking-[0.35em] uppercase mb-1! mt-[48px]!">
          NHẬN XÉT TỪ
        </p>
        <h2
          id="reviews-heading"
          className="font-serif text-4xl md:text-5xl text-white mb-[78px]! font-medium"
        >
          Khách Hàng
        </h2>

        {/* Cards row */}
        <div className="relative flex items-end justify-center gap-14.5 max-w-400 mx-auto">
          {/* Prev arrow */}
          <button
            onClick={() =>
              setActive((p) => (p - 1 + REVIEWS.length) % REVIEWS.length)
            }
            aria-label="Trước"
            className="absolute -left-4 md:-left-10 bottom-1/2 z-20 p-2! text-white/50 hover:text-om-gold transition-colors"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {cards.map((r, i) => {
            const isCenter = i === 1;
            return (
              <article
                key={`${r.id}-${i}`}
                onClick={() =>
                  !isCenter &&
                  setActive(
                    (active + (i === 0 ? -1 : 1) + REVIEWS.length) %
                      REVIEWS.length,
                  )
                }
                className={`
                  relative text-left rounded-sm overflow-hidden flex-shrink-0 transition-all duration-500 cursor-pointer
                  ${
                    isCenter
                      ? "w-90 md:w-140 h-full opacity-100 ring-2 ring-om-gold z-10"
                      : "w-50 md:w-95 opacity-50 hover:opacity-65"
                  }
                `}
              >
                {/* Image */}
                <div
                  className={`overflow-hidden ${isCenter ? "aspect-[3/4]" : "aspect-[3/3]"}`}
                >
                  <img
                    src={r.image}
                    alt={`Đánh giá của ${r.name} tại The OM Lounge`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={300}
                    height={isCenter ? 400 : 500}
                  />
                  {/* Quote icon */}
                  <div className="absolute bottom-[168px]! right-3 z-10">
                    <div className="w-8 h-8 rounded-full bg-om-gold flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 21c0 .55.45 1 1 1h7V10H4c-.55 0-1 .45-1 1v10zM14 22h7c.55 0 1-.45 1-1V11c0-.55-.45-1-1-1h-7v12zM8 3C5.24 3 3 5.24 3 8h5V3zm8 0v5h5c0-2.76-2.24-5-5-5z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom card content */}
                <div className="bg-[#3d2c1e] px-3! py-3! min-h-[160px]">
                  <div className="flex items-center gap-2 mb-2!">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className="w-8 h-8 rounded-full object-cover flex-shrink-0 ring-1 ring-om-gold/30"
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                    <p className="font-semibold text-white text-sm leading-tight">
                      {r.name}
                    </p>
                  </div>
                  <p className="text-white/65 text-xs leading-relaxed line-clamp-4">
                    {r.text}
                  </p>
                  <button className="text-om-gold text-xs mt-2! hover:underline transition-colors">
                    Xem thêm
                  </button>
                </div>
              </article>
            );
          })}

          {/* Next arrow */}
          <button
            onClick={() => setActive((p) => (p + 1) % REVIEWS.length)}
            aria-label="Tiếp theo"
            className="absolute -right-4 md:-right-10 bottom-1/2 z-20 p-2! text-white/50 hover:text-om-gold transition-colors"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-3 mt-8!">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Review ${i + 1}`}
              className={`rounded-full transition-all duration-300 flex items-center justify-center ${
                active % REVIEWS.length === i
                  ? "w-8 h-8 border-2 border-white bg-transparent ring-0"
                  : "w-2 h-2 bg-white/60 hover:bg-white"
              }`}
            >
              {/* Dot nhỏ bên trong khi active */}
              {active % REVIEWS.length === i && (
                <span className="w-1.5 h-1.5 rounded-full bg-white block" />
              )}
            </button>
          ))}
        </div>

        {/* Technician strip */}
        {/* <div className="mt-6! flex items-center justify-center gap-2">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4! py-2!">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80"
              alt="Quốc Phi Phạm Lê"
              className="w-6 h-6 rounded-full object-cover"
              width={24}
              height={24}
            />
            <span className="text-white text-xs">Quốc Phi Phạm Lê</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}
