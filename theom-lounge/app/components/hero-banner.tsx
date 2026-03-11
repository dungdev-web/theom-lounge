"use client";

export function HeroBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image Container */}
      <div
        className="relative h-[500px] md:h-[600px]"
        style={{
          backgroundImage: "url(/banner/banner.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay: blend đen + vàng nâu #654A1B */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(180deg, rgba(101,74,27,0.55) 0%, rgba(101,74,27,0.85) 80%, rgba(0,0,0,0.6) 100%)",
          }}
        />

        {/* Content */}
        <div className="absolute inset-0 h-full flex flex-col items-center justify-end pb-20! md:pb-32 z-30">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-wider drop-shadow-2xl animate-float-up text-center px-4">
            Dịch Vụ
          </h1>
          <div className="mt-6 md:mt-8 w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-om-gold to-transparent opacity-70" />
        </div>
      </div>

      {/* Bottom fade to page background */}
      {/* <div className="h-8 md:h-12 bg-gradient-to-b from-om-dark/30 to-om-cream" /> */}
    </div>
  );
}
