interface BookingCTAProps {
  onBook: () => void;
}

export function BookingCTA({ onBook }: BookingCTAProps) {
  return (
    <section
      className="py-20 bg-om-brown relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=60)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
        }}
      />
      <div className="relative text-center max-w-xl mx-auto px-6">
        <p className="text-om-gold/70 text-xs tracking-[0.3em] uppercase mb-3">
          ĐẶT LỊCH HẸN
        </p>
        <h2 id="cta-heading" className="font-serif text-4xl md:text-5xl text-white mb-5">
          chữa lành
        </h2>
        <p className="text-white/60 text-sm leading-relaxed mb-8">
          Đặt lịch ngay hôm nay để trải nghiệm không gian thư giãn sang trọng và
          dịch vụ nail cao cấp tại The OM Lounge.
        </p>
        <button
          onClick={onBook}
          className="inline-flex items-center gap-2 bg-om-gold text-white px-8 py-3 text-sm font-medium tracking-wider hover:bg-om-gold-light transition-colors"
        >
          ĐẶT LỊCH NGAY
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}