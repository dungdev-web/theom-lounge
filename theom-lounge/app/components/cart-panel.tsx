import { CartItem } from '@/times, cart/types';
import { CartItemRow } from './cart-item-row';

function fmt(n: number) {
  return new Intl.NumberFormat('vi-VN').format(n) + ' đ';
}

interface CartPanelProps {
  items: CartItem[];
  onClose: () => void;
  onRemove: (id: string) => void;
  onQuantity: (id: string, delta: number) => void;
  onProceed: () => void;
}

export function CartPanel({
  items,
  onClose,
  onRemove,
  onQuantity,
  onProceed,
}: CartPanelProps) {
  const total = items.reduce((s, i) => s + i.service.price * (i.quantity || 0), 0);

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-label="Giỏ hàng"
      className="flex flex-col h-full bg-[#FAF5EB]"
    >
      {/* Header */}
      <div className="px-6! py-4! border-b border-[#00000012] bg-om-cream ">
        <h2 className="font-serif text-3xl text-[#824C08] text-center">Giỏ Hàng</h2>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto px-4! py-4! space-y-3  ">
        {items.length === 0 ? (
          <p className="text-center text-om-brown/50 text-sm pt-10">Giỏ hàng trống</p>
        ) : (
          items
            .filter(item => !item.parentId) // Chỉ render parent items
            .map((parentItem) => (
              <div key={parentItem.service.id}>
                {/* Parent Item */}
                <CartItemRow item={parentItem} onRemove={onRemove} onQuantity={onQuantity} />
                
                {/* Child Items (Effects) */}
                {items
                  .filter(item => item.parentId === parentItem.service.id)
                  .map((childItem) => (
                    <div key={childItem.service.id} className="ml-8! mt-2!">
                      <CartItemRow  isChild={true} item={childItem} onRemove={onRemove} onQuantity={onQuantity} />
                    </div>
                  ))}
              </div>
            ))
        )}
      </div>

      {/* Footer */}
      <div className=" bg-om-cream px-6! py-5! space-y-4 ">
        {/* Technician */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#888888]">Kỹ thuật viên</span>
          <button className="flex items-center gap-2 text-sm text-[#000000] transition-colors">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80"
              alt="Võ Thị Bích Phượng"
              className="w-6 h-6 rounded-full object-cover"
              width={24}
              height={24}
            />
            <span>Võ Thị Bích Phượng</span>
            <svg className="w-3.5 h-3.5 text-om-brown/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between pt-4! text-[#000000]">
          <span className="text-sm">Tổng thanh toán</span>
          <span className="text-lg font-semibold text-[#F36363]">{fmt(total)}</span>
        </div>

        {/* CTA */}
        <button
          onClick={onProceed}
          className="w-full button bg-om-brown text-white py-3.5! px-4! text-sm font-medium tracking-wider flex items-center justify-between gap-2 hover:bg-om-dark transition-colors"
        >
          Tiếp Tục
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </aside>
  );
}