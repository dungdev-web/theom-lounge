'use client';

export function HeroBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image Container */}
      <div
        className="relative h-[500px] md:h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(/banner/banner.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed', // CSS parallax - simpler & smoother
        }}
      >
        {/* DARK GRADIENT OVERLAY */}
        <div
          className="absolute inset-0 z-10"
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(44, 31, 21, 0.4), rgba(44, 31, 21, 0.6), rgba(44, 31, 21, 0.8))',
          }}
        />

        {/* Gold border frame effect */}
        <div className="absolute inset-8 md:inset-12 border-2 md:border-4 border-om-gold/30 rounded-lg pointer-events-none hidden md:block z-20" />

        {/* Content - Centered Text */}
        <div className="absolute inset-0 h-full flex flex-col items-center justify-end pb-20! md:pb-32 z-30">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-wider drop-shadow-2xl animate-float-up text-center px-4">
            Dịch Vụ
          </h1>

          {/* Decorative line */}
          <div className="mt-6 md:mt-8 w-20 md:w-24 h-1 bg-gradient-to-r from-transparent via-om-gold to-transparent opacity-70" />
        </div>
      </div>

      {/* Bottom fade to page background */}
      {/* <div className="h-8 md:h-12 bg-gradient-to-b from-om-dark/30 to-om-cream" /> */}
    </div>
  );
}