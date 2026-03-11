import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#291E0A] relative text-white/60" role="contentinfo">
      {/* Flower decoration — góc trên phải */}
      <div className="absolute top-0 right-0 opacity-30 pointer-events-none">
        <Image src="/banner/flower.png" alt="" width={150} height={150} />
      </div>
      <div className="mx-auto px-12! py-16!">
        <div className="flex gap-120!">
          {/* Cột 1: Logo */}
          <div className="flex-shrink-0">
            <a href="/" aria-label="The OM Lounge trang chủ">
              <Image
                src="/logo/logo.png"
                alt="The OM Lounge Logo"
                width={200}
                height={200}
                priority
              />
            </a>
          </div>

          {/* Cột 2: Sitemap + Liên hệ */}
          <div className="flex-1 flex flex-col gap-10!  max-w-380">
            {/* Hàng 1: Sitemap — 2 cột riêng biệt */}
            <div>
              <div className="flex items-center gap-2 mb-5!" style={{color:"#B19879"}}>
                <span className="w-3 h-3 rounded-full bg-[#B19879] inline-block" />
                <span className="w-3 h-3 rounded-full border border-[#B19879] inline-block" />
                <span className="text-[10px] tracking-[0.25em] uppercase ">
                  Sitemap
                </span>
              </div>
              <div className="flex gap-65!">
                {/* Cột trái */}
                <div className="flex flex-col gap-3! ">
                  {["Trang chủ", "Giới thiệu", "Dịch vụ"].map((l) => (
                    <a
                      key={l}
                      href="#"
                      className="text-[24px]! text-white/70 hover:text-om-gold transition-colors"
                    >
                      {l}
                    </a>
                  ))}
                </div>
                {/* Cột phải */}
                <div className="flex flex-col gap-3!">
                  {["Tin tức", "Liên hệ"].map((l) => (
                    <a
                      key={l}
                      href="#"
                      className="text-[24px]! text-white/70 hover:text-om-gold transition-colors"
                    >
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Hàng 2: Liên hệ + Đặt lịch */}
            <div className="flex items-start justify-start gap-20!">
              
              <div className="">
                <div className="flex items-center gap-2 mb-4!" style={{color:"#B19879"}}>
                <span className="w-3 h-3 rounded-full bg-[#B19879] inline-block" />

                <span className="w-3 h-3 rounded-full border border-[#B19879] inline-block" />
                <span className="text-[10px] tracking-[0.25em] uppercase ">
                  Liên hệ
                </span>
              </div>
                <div className="space-y-2!">
                  <p className="text-sm text-white/80 font-medium">
                    +84 89 812 12 97
                  </p>
                  <p className="text-xs text-white/55 leading-relaxed">
                    6 Đường G, Phú Mỹ, Quận 7, TP Hồ Chí Minh
                    <br />
                    (gần Crescent Mall)
                  </p>
                  <div className="text-xs text-white/55 space-y-1! pt-1!">
                    <p>
                      <span className="inline-block w-28">Thứ 2 - Thứ 6:</span>
                      09:00 - 19:00
                    </p>
                    <p>
                      <span className="inline-block w-28">
                        Thứ 7 - Chủ nhật:
                      </span>
                      09:00 - 20:00
                    </p>
                  </div>
                </div>
                
              </div>
              <div className="flex-shrink-0 relative">
                  <Image
                    src="/banner/shape.png"
                    alt=""
                    width={250}
                    height={250}
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-[14px] text-[#FCE48C]">
                    Đặt lịch ngay
                  </span>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-12! py-5!">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4!">
            {[
              { label: "Facebook", icon: "f" },
              { label: "TikTok", icon: "♪" },
              { label: "Zalo", icon: "z" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="text-white/50 hover:text-om-gold transition-colors text-sm"
              >
                {s.icon}
              </a>
            ))}
          </div>
          <p className="text-xs text-white/30">
            © 2025 – Copyright The OM Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
