import { SERVICE_CATEGORIES } from '@/data/services';

interface CategoryTabsProps {
  activeTab: string;
  onTab: (id: string) => void;
}

export function CategoryTabs({ activeTab, onTab }: CategoryTabsProps) {
  return (
    <div className="sticky top-32 z-30 bg-om-brown/95 backdrop-blur-sm border-b border-om-gold/20 shadow-lg">
      <div className=" mx-auto px-12!">
        <div className="flex items-center justify-between gap-6!">
          {/* Navigation - scrollable */}
          <nav 
            className="flex items-center gap-1! overflow-x-auto scrollbar-hide flex-1 py-0!" 
            aria-label="Danh mục dịch vụ"
          >
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onTab(cat.id);
                  document.getElementById(cat.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className={`whitespace-nowrap px-4! py-3! text-sm font-medium transition-all border-b-2 ${
                  activeTab === cat.id
                    ? 'tab-active text-om-gold border-om-gold'
                    : 'text-om-cream/70 border-transparent hover:text-om-cream'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </nav>

          {/* Search - fixed width, no flex */}
          <div className="flex items-center gap-2 flex-shrink-0 py-3!">
            <div className="relative">
              <input
                type="search"
                placeholder="Tìm kiếm..."
                aria-label="Tìm kiếm dịch vụ"
                className="text-sm bg-transparent border-none px-3 py-2 pr-8 text-om-cream placeholder:text-om-cream/40 focus:outline-none transition-all w-full"
                style={{
                  borderBottom: '2px solid rgba(200, 169, 110, 0.6)',
                  boxShadow: 'none'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderBottomColor = '#c8a96e';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderBottomColor = 'rgba(200, 169, 110, 0.6)';
                }}
              />
              <svg 
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5! h-3.5! text-om-cream/40 pointer-events-none" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
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