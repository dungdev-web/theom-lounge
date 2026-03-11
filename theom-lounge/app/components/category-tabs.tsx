import { SERVICE_CATEGORIES } from '@/data/services';

interface CategoryTabsProps {
  activeTab: string;
  onTab: (id: string) => void;
}

export function CategoryTabs({ activeTab, onTab }: CategoryTabsProps) {
  return (
    <div
      className="sticky top-[138px] z-30"
      // style={{ backgroundColor: 'rgba(82,60,20,0.85)', backdropFilter: 'blur(8px)' }}
    >
      <div className="mx-auto px-12!">
        <div className="flex items-center justify-between gap-6!">

          {/* Nav tabs với separator | */}
          <nav
            className="flex items-center overflow-x-auto scrollbar-hide flex-1"
            aria-label="Danh mục dịch vụ"
          >
            {SERVICE_CATEGORIES.map((cat, index) => (
              <div key={cat.id} className="flex items-center">
                {/* Separator | giữa các tab */}
                {index > 0 && (
                  <span className="text-white/20 text-sm select-none px-1">|</span>
                )}
                <button
                  onClick={() => {
                    onTab(cat.id);
                    document.getElementById(cat.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`whitespace-nowrap px-4! py-4! text-xs font-semibold tracking-widest uppercase transition-all border-b-2 ${
                    activeTab === cat.id
                      ? 'text-om-gold border-om-gold'
                      : 'text-white/60 border-transparent hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              </div>
            ))}
          </nav>

          {/* Search */}
          <div className="flex items-center flex-shrink-0 py-3!">
            <div className="relative">
              <input
                type="search"
                placeholder="Tìm kiếm"
                aria-label="Tìm kiếm dịch vụ"
                className="text-sm bg-transparent border-none px-3! py-2! pr-8! text-white placeholder:text-white/40 focus:outline-none w-full"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.25)' }}
                onFocus={(e) => { e.currentTarget.style.borderBottomColor = '#c8a96e'; }}
                onBlur={(e) => { e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.25)'; }}
              />
              <svg
                className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}