import { useState } from "react";
import { DATES, TIMES } from "@/data/services";

interface BookingPanelProps {
  onClose: () => void;
  onConfirm: () => void;
}

export function BookingPanel({ onClose, onConfirm }: BookingPanelProps) {
  const [selectedDate, setSelectedDate] = useState("2024-09-06");
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [loading, setLoading] = useState(false);

  const amTimes = TIMES.filter((t) => parseInt(t.value.split(":")[0]) < 12);
  const pmTimes = TIMES.filter((t) => parseInt(t.value.split(":")[0]) >= 12);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    onConfirm();
  };

  const timeBtn = (t: { value: string; disabled: boolean }) => {
    const isSelected = selectedTime === t.value;
    return (
      <button
        key={t.value}
        onClick={() => !t.disabled && setSelectedTime(t.value)}
        disabled={t.disabled}
        className={`py-2! text-xs text-center text-black transition-colors ${
          t.disabled
            ? "bg-[#E5E3DC] text-[#8C929C]! cursor-not-allowed line-through"
            : isSelected
              ? "bg-[#B97951] text-white font-semibold"
              : "bg-white text-om-brown hover:bg-om-gold/10"
        }`}
      >
        <div>{t.value}</div>
        <div className="text-[10px] opacity-60">
          {parseInt(t.value.split(":")[0]) < 12 ? "AM" : "PM"}
        </div>
      </button>
    );
  };

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-label="Xác nhận đặt lịch"
      className="flex flex-col h-full bg-om-cream-dark"
    >
      {/* Header */}
      <div
        className="px-6! py-5! border-b border-[#00000012]"
        style={{ background: "rgba(250, 245, 235, 1)" }}
      >
        <h2 className="font-serif text-3xl text-[#824C08] text-center">
          Xác Nhận Đặt Lịch
        </h2>
      </div>

      {/* Form */}
      <div
        className="flex-1 overflow-y-auto px-6! py-5! space-y-5"
        style={{ background: "rgba(250, 245, 235, 1)" }}
      >
        {/* Customer info */}
        <div className="space-y-3">
          <div>
            <label className="text-xs text-[#824C08] block mb-0.5!">
              Tên khách hàng
            </label>
            <input
              type="text"
              placeholder="Thuỳ Đỗ"
              defaultValue="Thuỳ Đỗ"
              className="text-sm font-medium text-black border-b border-om-brown/30 pb-2! mb-5! w-full bg-transparent outline-none focus:border-om-brown transition-colors"
            />{" "}
          </div>
          <div>
            <label className="text-xs text-[#824C08] block mb-1!">
              Số điện thoại
            </label>

            <input
              type="text"
              placeholder="0969-886-969"
              defaultValue="0969-886-969"
              className="text-sm font-medium text-black border-b border-om-brown/30 pb-2! mb-5! w-full bg-transparent outline-none focus:border-om-brown transition-colors"
            />
          </div>
        </div>

        {/* Date picker */}
        <div>
          <label className="text-xs text-[#824C08] block mb-2!">
            Chọn ngày
          </label>
          <div
            className="flex gap-2 overflow-x-auto mb-5!"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(34, 39, 50, 1) transparent",
            }}
          >
            {DATES.map((d) => {
              const isDisabled = d.dissable;
              const isSelected = selectedDate === d.value;
              return (
                <button
                  key={d.value}
                  onClick={() => !isDisabled && setSelectedDate(d.value)}
                  disabled={isDisabled}
                  aria-pressed={isSelected}
                  className={`py-2.5! px-3!  text-center text-xs text-black transition-colors flex-shrink-0 w-21 ${
                    isDisabled
                      ? " bg-[#E5E3DC] text-[#8C929C]! cursor-not-allowed"
                      : isSelected
                        ? "bg-[#F6C649] font-semibold"
                        : "bg-[#E5E3DC] text-om-brown hover:bg-om-gold/10 border border-transparent hover:border-om-gold/30"
                  }`}
                >
                  <div className="font-medium">{d.label}</div>
                  <div className="text-[10px] opacity-75 mt-0.5!">{d.sub}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time picker */}
        <div>
          <label className="text-xs text-[#824C08] block m-2!">
            Chọn khung giờ
          </label>
          <div className="grid grid-cols-4 gap-1.5">
            {amTimes.map(timeBtn)}
            {pmTimes.map(timeBtn)}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="border-t  border-om-brown/10 px-6! py-5!"
        style={{ background: "rgba(250, 245, 235, 1)" }}
      >
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#824C08] text-white py-3.5! px-4! text-sm font-medium tracking-wider flex items-center justify-between gap-2 transition-colors disabled:opacity-70"
        >
          {loading ? (
            <svg
              className="w-4 h-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}
