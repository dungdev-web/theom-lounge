interface SuccessModalProps {
  onClose: () => void;
}

export function SuccessModal({ onClose }: SuccessModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4! animate-fade-in "
      onClick={onClose}
    >
      <div className="absolute inset-0  backdrop-blur-[2px]" />
      <div
        className="relative bg-om-cream rounded-sm p-8! max-w-2xl w-full text-center shadow-2xl animate-scale-in bg-[#FAF5EB]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Đặt lịch thành công"
      >
        <button
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-4 right-4 text-[#523C14] hover:text-om-brown transition-colors"
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
        <div className="relative w-32 h-32 mx-auto! mb-5!">
          {/* Vòng tròn mờ ngoài cùng */}
          <div className="absolute inset-0 rounded-full bg-[#F2EBD9]" />
          {/* Vòng tròn mờ giữa */}
          <div className="absolute inset-4 rounded-full bg-[#E4D7B4]" />

          {/* Vòng tròn trắng chính */}
          <div className="absolute inset-8 rounded-full bg-white shadow-sm flex items-center justify-center">
            <svg
              className="w-11 h-9 text-[#824C08] -rotate-[45deg] translate-x-0.5 -translate-y-0.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </div>

          {/* <div className="absolute left-1/2 -translate-x-1/2 top-full w-px h-6 border-l-2 border-dashed border-om-brown/20" /> */}

          {/* Checkmark xanh */}
          <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
            {" "}
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

          <div className="absolute top-1 left-0 w-2 h-2 rounded-full bg-yellow-300" />
          <div className="absolute top-0 right-2 w-1.5 h-1.5 rounded-full bg-blue-300/60" />
          <div className="absolute bottom-4 left-1 w-1.5 h-1.5 rounded-full bg-pink-300/60" />
          <div className="absolute bottom-0 right-6 w-1 h-1 rounded-full bg-yellow-400" />
        </div>

        <h3 className="font-serif text-3xl font-medium text-[#222732] mb-3!">
          Gửi Yêu Cầu Thành Công!
        </h3>
        <p className="text-[18px] text-[#715E28] leading-relaxed">
          Cảm ơn bạn đã đặt dịch vụ tại The OM Lounge. Chúng tôi đã nhận được
          thông tin đặt lịch từ bạn và sẽ liên hệ lại trong thời gian sớm nhất.
        </p>
       
      </div>
    </div>
  );
}
