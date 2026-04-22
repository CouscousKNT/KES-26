import type { MouseEvent } from "react";

function fmt(seconds: number): string {
  const s = Math.floor(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

interface ProgressBarProps {
  progress: number;
  trackDuration: number;
  onProgressClick: (e: MouseEvent<HTMLDivElement>) => void;
}

export default function ProgressBarSection({
  progress,
  trackDuration,
  onProgressClick,
}: ProgressBarProps) {
  const pct = trackDuration > 0 ? (progress / trackDuration) * 100 : 0;

  return (
    <div
      style={{
        borderTop: "none",
        borderBottom: "1px solid rgba(100,160,220,0.4)",
        padding: "6px 10px",
      }}
    >
      <div
        style={{
          height: 8,
          background: "rgba(255,255,255,0.35)",
          border: "1px solid rgba(100,160,220,0.45)",
          borderTop: "1px solid rgba(255,255,255,0.7)",
          borderLeft: "1px solid rgba(255,255,255,0.7)",
          boxShadow: "inset 0 1px 4px rgba(0,60,140,0.18)",
          borderRadius: 4,
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
        }}
        onClick={onProgressClick}
      >
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: "linear-gradient(90deg, #2288cc, #55c0ff)",
            boxShadow: "0 0 8px rgba(80,180,255,0.5)",
            transition: "width 0.4s linear",
            position: "relative",
          }}
        >
          {/* Playhead marker */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: 3,
              height: "100%",
              background: "#00eeff",
              boxShadow: "0 0 6px #00eeff",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 3,
          fontSize: 9,
          color: "rgba(0,50,120,0.6)",
          letterSpacing: 1,
        }}
      >
        <span>{fmt(progress)}</span>
        <span>{trackDuration > 0 ? fmt(trackDuration) : "--:--"}</span>
      </div>
    </div>
  );
}
