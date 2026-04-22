import EqBars from "../components/EqBars";
import TimerLcdDisplay from "../components/TimerLcdDisplay";
import type { Track } from "../tracks";

function fmt(seconds: number): string {
  const s = Math.floor(seconds);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

interface TrackInfoProps {
  isPlaying: boolean;
  scrolledTitle: string;
  track: Track;
  progress: number;
  trackDuration: number;
}

export default function TrackInfoSection({
  isPlaying,
  scrolledTitle,
  track,
  progress,
  trackDuration,
}: TrackInfoProps) {
  const TRACK_INFO_STYLE = `
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
  @keyframes waEq { from { height: 3px; } to { height: 26px; } }
  @keyframes waBlink { 50% { opacity: 0.3; } }
}
`;
  return (
    <>
      <style>{TRACK_INFO_STYLE}</style>
      <div
        style={{
          // background:
          //   "linear-gradient(180deg, rgba(210,238,255,0.88) 0%, rgba(170,215,255,0.80) 48%, rgba(130,190,248,0.90) 100%)",
          position: "relative",
          padding: "7px 10px",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        {/* Play indicator */}
        <span
          style={{
            color: isPlaying ? "#0066cc" : "#99c0e0",
            fontSize: 12,
            minWidth: 14,
            animation: isPlaying ? "waBlink 1.2s step-end infinite" : "none",
          }}
        >
          {isPlaying ? "▶" : "■"}
        </span>

        {/* TITRE */}
        <div
          style={{
            flex: 1,
            height: 48,
            background: "linear-gradient(180deg, #001828, #002a40)",
            border: "1px solid rgba(100,160,220,0.5)",
            borderTop: "1px solid rgba(255,255,255,0.7)",
            borderLeft: "1px solid rgba(255,255,255,0.7)",
            boxShadow: "inset 0 1px 4px rgba(0,60,140,0.12)",
            borderRadius: 10,
            padding: "4px 9px",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {/* REFLET HAUT TITRE */}
          <div
            style={{
              width: "calc(100% - 243px)",
              height: "10px",
              opacity: 0.4,
              position: "absolute",
              right: "203px",
              top: "12px",
              borderRadius: "7px 7px 0px 0px",
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))",
            }}
          />
          {/* REFLET BAS TITRE */}
          <div
            style={{
              width: "calc(100% - 243px)",
              height: "10px",
              opacity: 0.4,
              position: "absolute",
              right: "203px",
              bottom: "12px",
              borderRadius: "0px 0px 7px 7px",
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))",
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontFamily:
                "'Digital7', 'Share Tech Mono', 'Courier New', monospace",
              color: "#00ccff",
              letterSpacing: 0.5,
              textShadow: "0 1px 0 rgba(255,255,255,0.7)",
            }}
          >
            {isPlaying ? scrolledTitle : `${track.title}  —  ${track.artist}`}
          </span>
        </div>

        {/* EQ visualiser */}
        <EqBars isPlaying={isPlaying} />

        {/* LCD timer */}
        <TimerLcdDisplay
          time={fmt(progress)}
          label={trackDuration > 0 ? track.duration : "--:--"}
        />
      </div>
    </>
  );
}
