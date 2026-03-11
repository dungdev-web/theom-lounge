import Image from 'next/image';

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

function IconCart({ count, onClick }: { count: number; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={`Giỏ hàng (${count} dịch vụ)`}
      className="flex items-center button gap-2 bg-om-gold text-white font-semibold text-sm px-4! py-2! rounded-sm hover:bg-om-gold-light bg-amber-300 transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9" />
      </svg>
      GIỎ HÀNG <div className='rounded-[50%] text-[#824C08] bg-[#E5E3DC] p-0.5! w-[20px] h-[20px]'>{count}</div>
    </button>
  );
}

export function Navbar({ cartCount, onCartOpen }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 ">
      {/* Row 1: ENGLISH | Logo | GIỎ HÀNG */}
      <div className="max-w-370 mx-auto! px-6! h-20! flex items-center justify-between">
        {/* Left - ENGLISH */}
        <a 
          href="/en/services" 
          className="text-white/70 text-xs font-medium tracking-wide hover:text-white transition-colors hidden md:block"
        >
          ENGLISH
        </a>

        {/* Center - Logo */}
        <a 
          href="/" 
          className="flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2" 
          aria-label="The OM Lounge trang chủ"
        >
          <Image 
            src="/logo/logo.png" 
            alt="The OM Lounge Logo" 
            width={150} 
            height={150}
            priority
          />
         
        </a>

        {/* Right - GIỎ HÀNG */}
        <div className="flex items-center gap-4 ml-auto">
          <IconCart count={cartCount} onClick={onCartOpen} />
        </div>
      </div>

      {/* Row 2: Navigation Menu */}
      <nav 
        className="hidden md:flex items-center justify-center gap-10 border-t border-om-gold/10 py-4!" 
        role="navigation" 
        aria-label="Menu chính"
      >
        {['Trang chủ', 'Giới thiệu', 'Dịch vụ', 'Tin tức', 'Liên hệ'].map((item, i) => (
          <a
            key={item}
            href={i === 0 ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
            className={`nav-link text-sm font-medium transition-colors ${
              i === 2 
                ? 'text-om-gold border-b-2 border-om-gold' 
                : 'text-white/70 hover:text-om-gold'
            }`}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}