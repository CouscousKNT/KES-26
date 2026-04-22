import { type ReactNode } from "react";

interface ActionButtonProps {
  onClick: () => void;
  children: ReactNode;
  active?: boolean;
  title?: string;
}

/** Frutiger Aero / Windows Vista glass button */
export default function ActionButton({
  onClick,
  children,
  active = false,
  title,
}: ActionButtonProps) {
  const ACTION_BUTTON_STYLE = `
  .wa-btn-aero:hover { filter: brightness(1.08); box-shadow: inset 0 1px 0 rgba(255,255,255,0.95), 0 4px 12px rgba(0,100,220,0.45) !important; }
`;
  return (
    <>
      <style>{ACTION_BUTTON_STYLE}</style>
      <button
        onClick={onClick}
        title={title}
        className="wa-btn-aero"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 44,
          height: 34,
          padding: "0 12px",
          position: "relative",
          background: active
            ? "linear-gradient(180deg, #0266ad 0%, #133ca1 48%, #021074 49%, #044dbc 100%)"
            : "linear-gradient(180deg, #64b4ff8c 0%, #3282e6b3 48%, #0a46b4e6 49%, #145ad2f2 100%)",
          border: "1px solid",
          borderColor: active
            ? "rgba(26, 78, 184, 0.95)"
            : "rgba(80,160,255,0.8)",
          borderRadius: 6,
          boxShadow: active
            ? "inset 0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 5px rgba(0,50,160,0.75)"
            : "inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 8px rgba(0,100,220,0.35), 0 1px 2px rgba(0,0,0,0.15)",
          color: "#daecfc",
          textShadow: active
            ? "0 1px 3px rgba(0,0,80,0.6)"
            : "0 1px 0 rgba(255, 255, 255, 0.95)",
          fontSize: 15,
          cursor: "pointer",
          fontFamily: "'Share Tech Mono', 'Courier New', monospace",
          userSelect: "none",
          backdropFilter: "blur(6px)",
          transition: "all 0.15s ease",
        }}
      >
        {/* Vista "bubble" gloss — top half specular shine */}
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "50%",
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.65) 0%, rgba(255,255,255,0.08) 100%)",
            borderRadius: "5px 5px 0 0",
            pointerEvents: "none",
          }}
        />
        <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
      </button>
    </>
  );
}
