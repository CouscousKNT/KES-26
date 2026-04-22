import type React from "react";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({ children, className }: GlassCardProps) {
  const css = `
  .aero-glass {
    background: linear-gradient(155deg, rgba(255,255,255,.56) 0%, rgba(195,232,255,.32) 100%);
    border: 1px solid rgba(255,255,255,.72);
    border-radius: 13px;
    box-shadow: 0 4px 22px rgba(0,80,180,0.4), inset 0 1px 0 rgba(255,255,255,0.75);
    backdrop-filter: blur(18px);
    overflow: hidden;
    position: relative;
  }
  .aero-glass::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 44%;
    background: linear-gradient(180deg, rgba(255,255,255,.38) 0%, transparent 100%);
    border-radius: 13px 13px 0 0;
    pointer-events: none;
  }`;
  return (
    <>
      <style>{css}</style>
      <div
        className={`aero-glass relative rounded-[13px] overflow-hidden border border-white/70 shadow-[0_4px_22px_rgba(0,80,180,0.4)] ${className}`}
      >
        {children}
      </div>
    </>
  );
}
