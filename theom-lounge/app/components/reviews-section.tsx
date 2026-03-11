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
        <p className="text-white text-2xl tracking-[0.35em] uppercase mb-1! mt-[48px]!">
          NHẬN XÉT TỪ
        </p>
        <h2
          id="reviews-heading"
          className="font-serif text-7xl! md:text-5xl text-white mb-[78px]! font-medium"
        >
          Khách Hàng
        </h2>

        {/* Cards row */}
        <div className="relative flex items-end justify-center gap-14.5 max-w-400 mx-auto">
          {/* Prev arrow */}
          {/* <button
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
          </button> */}

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
                  className={`overflow-hidden ${isCenter ? "aspect-[4.5/5]" : "aspect-[3/3]"}`}
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
                 <div className="absolute bottom-[135px]! right-3 z-10">
  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-om-gold/20">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#FCE48C"
      stroke="#FCE48C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-13 h-13 rotate-180"
    >
      <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
      <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" />
    </svg>
  </div>
</div>
                </div>

                {/* Bottom card content */}
                <div className="bg-[#3d2c1e] px-3! py-3! min-h-[160px] flex">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-15 h-15 rounded-full object-cover flex-shrink-0 ring-1 ring-om-gold/30"
                    width={40}
                    height={40}
                    loading="lazy"
                  />
                  <div className="flex flex-col items-start ml-3!">
                    <div className="flex items-center gap-2 mb-2!">
                      <p className="font-semibold text-white text-2xl leading-tight">
                        {r.name}
                      </p>
                    </div>
                    <p
                      className="text-white/65 text-[14px] leading-relaxed max-w-full"
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        wordBreak: "break-all", // ← break-all thay vì break-words cho chuỗi không có space
                      }}
                    >
                      {r.text}
                    </p>
                    <button className="text-[#BC978C] text-xs mt-2! hover:underline transition-colors">
                      Xem thêm
                    </button>
                  </div>
                </div>
              </article>
            );
          })}

          {/* Next arrow */}
          {/* <button
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
          </button> */}
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
