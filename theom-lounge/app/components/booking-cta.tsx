interface BookingCTAProps {
  onBook: () => void;
}

export function BookingCTA({ onBook }: BookingCTAProps) {
  return (
    <section
      className="relative overflow-hidden h-[600px] flex items-center justify-center"
      aria-labelledby="cta-heading"
    >
      {/* Ảnh nền */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/banner/bannerbooking.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay rgba(82,60,20,0.64) */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(82,60,20,0.64)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto px-6!">
        <h2
          id="cta-heading"
          className="font-serif text-4xl md:text-5xl text-white mb-4! font-light"
        >
          Đặt lịch hẹn chữa lành
        </h2>
        <p className="text-white/70 text-sm leading-relaxed mb-8!">
          Đến The OM Lounge để xả stress và làm mới mình. Vẻ đẹp bắt đầu từ những
          điều nhỏ nhất và lan tỏa đến cả tâm hồn.
        </p>
        <button
          onClick={onBook}
          className="inline-flex items-center gap-2 border border-white text-white px-8! py-2.5! text-xs font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-[#824C08] transition-colors"
        >
          TRẢI NGHIỆM NGAY
        </button>
      </div>
    </section>
  );
}