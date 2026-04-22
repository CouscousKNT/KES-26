import type React from "react";

type ActionButtonProps = {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  extra?: string;
};

export default function ActionButton({
  label,
  icon,
  onClick,
  extra = "",
}: ActionButtonProps) {
  const css = `  
  .fa-actions {
    background: linear-gradient(180deg, rgba(210,235,255,0.35) 0%, rgba(185,220,255,0.9) 100%);
  }
  .fa-action-btn:hover {
    background: linear-gradient(180deg, rgba(100,180,255,0.22) 0%, rgba(60,140,220,0.12) 100%);
    color: #1a4a7a;
  }
  .fa-action-btn:active { background: rgba(60,140,220,0.2); }`;
  return (
    <>
      <style>{css}</style>
      <button
        className={`fa-action-btn flex-1 flex items-center justify-center gap-[6px] px-1 py-2 text-[11px] font-bold text-[#2a5a8c] cursor-pointer border-none bg-transparent border-r border-[rgba(180,215,255,0.4)] last:border-r-0 transition-colors ${extra}`}
        onClick={onClick}
      >
        {icon}
        {label}
      </button>
    </>
  );
}
