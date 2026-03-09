import { useState } from 'react';
import { DATES, TIMES } from '@/data/services';

interface BookingPanelProps {
  onClose: () => void;
  onConfirm: () => void;
}

export function BookingPanel({ onClose, onConfirm }: BookingPanelProps) {
  const [selectedDate, setSelectedDate] = useState('2024-09-06');
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [loading, setLoading] = useState(false);

  const amTimes = TIMES.filter((t) => {
    const h = parseInt(t.split(':')[0]);
    return h >= 9 && h < 12;
  });
  const pmTimes = TIMES.filter((t) => {
    const h = parseInt(t.split(':')[0]);
    return h >= 12;
  });

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    onConfirm();
  };

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-label="Xác nhận đặt lịch"
      className="flex flex-col h-full bg-om-cream-dark"
    >
      {/* Header */}
      <div className="px-6 py-5 border-b border-om-brown/10">
        <h2 className="font-serif text-xl text-om-gold text-center">Xác Nhận Đặt Lịch</h2>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
        {/* Customer info */}
        <div className="space-y-3">
          <div>
            <label className="text-xs text-om-brown/50 block mb-1">Tên khách hàng</label>
            <div className="text-sm font-medium text-om-brown bg-white/60 rounded-sm px-3 py-2.5">
              Thuỳ Đỗ
            </div>
          </div>
          <div>
            <label className="text-xs text-om-brown/50 block mb-1">Số điện thoại</label>
            <div className="text-sm font-medium text-om-brown bg-white/60 rounded-sm px-3 py-2.5">
              0969-886-969
            </div>
          </div>
        </div>

        {/* Date picker */}
        <div>
          <label className="text-xs text-om-brown/50 block mb-2">Chọn ngày</label>
          <div className="grid grid-cols-4 gap-2">
            {DATES.map((d) => (
              <button
                key={d.value}
                onClick={() => setSelectedDate(d.value)}
                aria-pressed={selectedDate === d.value}
                className={`py-2.5 px-1 rounded-sm text-center text-xs transition-colors ${
                  selectedDate === d.value
                    ? 'bg-om-gold text-white font-semibold'
                    : 'bg-white/60 text-om-brown hover:bg-white border border-transparent hover:border-om-gold/30'
                }`}
              >
                <div className="font-medium">{d.label}</div>
                <div className="text-[10px] opacity-75 mt-0.5">{d.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Time picker */}
        <div>
          <label className="text-xs text-om-brown/50 block mb-2">Chọn khung giờ</label>
          <div className="grid grid-cols-4 gap-1.5">
            {amTimes.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                aria-pressed={selectedTime === t}
                className={`py-2 rounded-sm text-xs text-center transition-colors ${
                  selectedTime === t
                    ? 'bg-om-gold text-white font-semibold'
                    : 'bg-white/60 text-om-brown hover:bg-white'
                }`}
              >
                <div>{t}</div>
                <div className="text-[10px] opacity-60">AM</div>
              </button>
            ))}
            {pmTimes.map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                aria-pressed={selectedTime === t}
                className={`py-2 rounded-sm text-xs text-center transition-colors ${
                  selectedTime === t
                    ? 'bg-om-gold text-white font-semibold'
                    : 'bg-white/60 text-om-brown hover:bg-white'
                }`}
              >
                <div>{t}</div>
                <div className="text-[10px] opacity-60">PM</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-om-brown/10 px-6 py-5">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-om-brown text-white py-3.5 text-sm font-medium tracking-wider flex items-center justify-center gap-2 hover:bg-om-dark transition-colors disabled:opacity-70"
        >
          {loading ? (
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
          ) : (
            <>
              Đặt Lịch
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}