import { CartItem } from "@/times, cart/types";

function fmt(n: number) {
  return new Intl.NumberFormat("vi-VN").format(n) + " đ";
}

interface CartItemRowProps {
  item: CartItem;
  onRemove: (id: string) => void;
  onQuantity: (id: string, delta: number) => void;
  isChild?: boolean;
}

export function CartItemRow({
  item,
  onRemove,
  onQuantity,
  isChild = false,
}: CartItemRowProps) {
  const hasDuration = item.service.duration && item.service.duration > 0;
  const isQuantityItem = isChild || (item.quantity && item.quantity > 0);

  return (
    <div
      className={`flex items-center gap-3 rounded-sm p-3! text-[#0A0C11] ${
        isChild ? "bg-transparent p-2!" : "bg-white/60 p-3!"
      }`}
    >
      <img
        src={`/products/${item.service.image || "placeholder.jpg"}`}
        alt={item.service.name}
        className={` object-cover rounded-sm flex-shrink-0 ${isChild ? "w-10 h-10" : "w-14 h-14"}`}
        width={56}
        height={56}
        loading="lazy"
      />

      <div className="flex-1 min-w-0">
        {/* Main service name */}
        <div className="flex justify-between">
          {" "}
          
          <p
            className={`font-medium text-om-brown ${isChild ? "text-xs" : "text-sm"}`}
          >
            {isChild
              ? `${item.service.name} (${item.effect || "Không hiệu ứng"})`
              : item.service.name}
          </p>
          {!isChild && (
            <button
              onClick={() => onRemove(item.service.id)}
              aria-label={`Xóa ${item.service.name}`}
              className="text-om-brown/30 hover:text-red-400 transition-colors"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="flex justify-between">
          {!isChild && (
            <p className="text-sm text-om-brown/80 mt-0.5">
              {fmt(item.service.price)}
            </p>
          )}
          {!isChild && hasDuration && (
            <p className="text-xs text-om-brown/40 mt-0.5 flex items-center gap-1">
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {item.service.duration} phút
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        {isQuantityItem && isChild && (
          <div className="flex items-center gap-1.5 border border-om-brown/20 rounded-4xl px-1.5! py-0.5!">
            <button
              onClick={() => onQuantity(item.service.id, -1)}
              aria-label="Giảm số lượng"
              className="w-6 h-6  flex items-center justify-center text-om-brown/60 hover:border-om-gold hover:text-om-gold transition-colors text-xs"
            >
              −
            </button>
            <span className="text-sm text-om-brown w-4 text-center">
              {item.quantity || 0}
            </span>
            <button
              onClick={() => onQuantity(item.service.id, 1)}
              aria-label="Tăng số lượng"
              className="w-6 h-6 flex items-center justify-center text-om-brown/60 hover:border-om-gold hover:text-om-gold transition-colors text-xs"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
