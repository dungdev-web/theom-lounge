import { ReactNode } from 'react';

interface SidePanelProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function SidePanel({ open, onClose, children }: SidePanelProps) {
  if (!open) return null;
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-om-dark/30 backdrop-blur-[1px] animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Panel */}
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[340px] shadow-2xl animate-slide-in-right">
        {children}
      </div>
    </>
  );
}