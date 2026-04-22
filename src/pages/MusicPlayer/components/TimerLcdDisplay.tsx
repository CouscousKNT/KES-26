/** 7-segment LCD timer display */
export default function TimerLcdDisplay({
  time,
  label,
}: {
  time: string;
  label: string;
}) {
  return (
    <div
      className="timer-lcd-screen"
      style={{
        background: "linear-gradient(180deg, #001828, #002a40)",
        border: "1px solid rgba(100,160,220,0.5)",
        borderTop: "1px solid rgba(255,255,255,0.3)",
        borderLeft: "1px solid rgba(255,255,255,0.3)",
        borderRadius: 10,
        padding: "4px 10px",
        minWidth: 80,
        boxShadow:
          "inset 0 2px 8px rgba(0,0,0,0.7), 0 1px 0 rgba(255,255,255,0.6)",
      }}
    >
      {/* REFLET DROIT TIMER */}
      <div
        style={{
          width: "10px",
          height: "calc(100% - 20px)",
          opacity: 0.4,
          position: "absolute",
          right: "13px",
          bottom: "10px",
          borderRadius: "0px 7px 7px 0px",
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))",
        }}
      />
      {/* REFLET GAUCHE TIMER */}
      <div
        style={{
          width: "10px",
          height: "calc(100% - 20px)",
          opacity: 0.4,
          position: "absolute",
          right: "77px",
          bottom: "10px",
          borderRadius: "7px 0px 0px 7px",
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))",
        }}
      />
      <div
        style={{
          fontFamily: "'Digital7', 'Share Tech Mono', 'Courier New', monospace",
          fontSize: 28,
          color: "#00ccff",
          letterSpacing: 3,
          lineHeight: 1,
        }}
      >
        {time}
      </div>
      <div
        style={{
          fontSize: 9,
          color: "#004a68",
          letterSpacing: 2,
          marginTop: 2,
          textTransform: "uppercase",
          fontFamily: "'Share Tech Mono', 'Courier New', monospace",
        }}
      >
        / {label}
      </div>
    </div>
  );
}
