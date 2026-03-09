interface SuccessModalProps {
  onClose: () => void;
}

export function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-om-dark/50 backdrop-blur-[2px]" />
      <div
        className="relative bg-om-cream rounded-sm p-8 max-w-md w-full text-center shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Đặt lịch thành công"
      >
        <button
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-4 right-4 text-om-brown/40 hover:text-om-brown transition-colors"
        >
          <svg
            className="w-5 h-5"
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

        {/* Icons */}
        <div className="relative w-20 h-20 mx-auto mb-5">
          <div className="w-20 h-20 rounded-full bg-om-cream-dark flex items-center justify-center">
            <svg className="w-9 h-9 text-om-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          {/* Sparkles */}
          {[
            'top-0 left-2 w-1.5 h-1.5 bg-om-gold/60',
            'top-2 right-0 w-2 h-2 bg-om-gold/40',
            'bottom-2 left-0 w-1 h-1 bg-om-gold/50',
          ].map((cls, i) => (
            <div key={i} className={`absolute rounded-full ${cls}`} />
          ))}
        </div>

        <h3 className="font-serif text-2xl font-medium text-om-brown mb-3">
          Gửi Yêu Cầu Thành Công!
        </h3>
        <p className="text-sm text-om-brown/65 leading-relaxed">
          Cảm ơn bạn đã đặt dịch vụ tại The OM Lounge. Chúng tôi đã nhận được
          thông tin đặt lịch từ bạn và sẽ liên hệ lại trong thời gian sớm nhất.
        </p>
        <button
          onClick={onClose}
          className="mt-6 px-8 py-2.5 bg-om-gold text-white text-sm font-medium rounded-sm hover:bg-om-gold-light transition-colors"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}