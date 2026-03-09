export function Footer() {
  return (
    <footer className="bg-om-dark text-white/60 py-14" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full border border-om-gold/40 flex items-center justify-center">
              <span className="text-om-gold/80 font-serif text-xs font-bold leading-tight text-center">
                THE<br />
                OM
              </span>
            </div>
            <div>
              <div className="font-serif text-sm font-semibold text-white tracking-widest">
                THE OM
              </div>
              <div className="text-[9px] tracking-[0.3em] text-om-gold/50 uppercase">
                Lounge
              </div>
            </div>
          </div>
          <p className="text-xs leading-relaxed">
            Nail & Beauty Salon cao cấp. Trải nghiệm thư giãn sang trọng.
          </p>
          <div className="flex gap-3 mt-4">
            {['Facebook', 'Instagram', 'TikTok'].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-7 h-7 rounded-full border border-white/20 flex items-center justify-center hover:border-om-gold hover:text-om-gold transition-colors text-xs"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>
        {/* Links */}
        {[
          {
            title: 'Dịch vụ',
            links: ['Gói Combo', 'Manicure', 'Pedicure', 'Hiệu ứng', 'Drinks'],
          },
          {
            title: 'Thông tin',
            links: ['Trang chủ', 'Giới thiệu', 'Tin tức', 'Liên hệ'],
          },
          {
            title: 'Liên hệ',
            links: [
              '📍 123 Đường ABC, Q.1',
              '📞 0969-886-969',
              '✉️ hello@theomlounge.vn',
              '🕐 09:00 – 20:00',
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <h3 className="text-white text-xs font-semibold tracking-widest uppercase mb-4">
              {col.title}
            </h3>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-xs hover:text-om-gold transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3">
        <p className="text-xs">© 2024 The OM Lounge. All rights reserved.</p>
        <p className="text-xs">Chính sách bảo mật · Điều khoản sử dụng</p>
      </div>
    </footer>
  );
}