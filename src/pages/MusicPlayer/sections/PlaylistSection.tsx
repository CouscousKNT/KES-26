import { tracks } from "../tracks";

interface PlaylistProps {
  currentIdx: number;
  onSelect: (index: number) => void;
}

export default function PlaylistSection({
  currentIdx,
  onSelect,
}: PlaylistProps) {
  const PLAYLIST_STYLE = `
  .wa-track-row:hover { background: #001e30 !important; }
}
`;
  return (
    <>
      <style>{PLAYLIST_STYLE}</style>
      {/* ══ PLAYLIST COLUMN HEADERS ════════════════════════════════════════ */}
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(210,238,255,0.88) 0%, rgba(170,215,255,0.80) 48%, rgba(130,190,248,0.90) 100%)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderLeft: "1px solid rgba(255,255,255,0.65)",
          borderRight: "1px solid rgba(100,160,220,0.35)",
          borderTop: "none",
          borderBottom: "1px solid rgba(80,140,200,0.35)",
          display: "grid",
          gridTemplateColumns: "36px 1fr 170px 58px",
          padding: "3px 10px",
          fontSize: 9,
          letterSpacing: 2,
          color: "rgba(0,50,120,0.55)",
          textTransform: "uppercase",
          userSelect: "none",
        }}
      >
        <span style={{ textAlign: "right" }}>#</span>
        <span style={{ paddingLeft: 10 }}>Titre</span>
        <span>Artiste</span>
        <span style={{ textAlign: "right" }}>Durée</span>
      </div>

      {/* ══ PLAYLIST ROWS ══════════════════════════════════════════════════ */}
      <div
        style={{
          background: "#060f18",
          borderLeft: "1px solid rgba(255,255,255,0.15)",
          borderRight: "1px solid rgba(0,0,0,0.4)",
          borderTop: "none",
          borderBottom: "1px solid #001020",
          height: "100%",
          overflowY: "auto",
        }}
      >
        {/* REFLET DROIT PLAYLIST */}
        <div
          style={{
            width: "15px",
            height: "calc(100% - 190px)",
            opacity: 0.4,
            position: "absolute",
            right: "2px",
            bottom: "3px",
            borderRadius: "0px 0px 20px 0px",
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))",
          }}
        />
        {/* REFLET GAUCHE PLAYLIST */}
        <div
          style={{
            width: "15px",
            height: "calc(100% - 190px)",
            opacity: 0.4,
            position: "absolute",
            left: "2px",
            bottom: "3px",
            borderRadius: "0px 0px 0px 20px",
            background:
              "linear-gradient(270deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))",
          }}
        />
        {tracks.map((t, i) => {
          const isActive = i === currentIdx;
          return (
            <div
              key={t.id}
              className="wa-track-row"
              onClick={() => onSelect(i)}
              style={{
                display: "grid",
                gridTemplateColumns: "36px 1fr 170px 58px",
                padding: "4px 10px",
                borderBottom: "1px solid #001220",
                cursor: "pointer",
                alignItems: "center",
                background: isActive ? "#002840" : "transparent",
                transition: "background 0.1s",
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  color: isActive ? "#00bbdd" : "#003a52",
                  textAlign: "right",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontSize: 11,
                  paddingLeft: 10,
                  color: isActive ? "#00eeff" : "#0088bb",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textShadow: isActive ? "0 0 8px #00aaff55" : "none",
                }}
              >
                {t.title}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: isActive ? "#00aabb" : "#005a78",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {t.artist}
              </span>
              <span
                style={{
                  fontSize: 11,
                  color: isActive ? "#0099bb" : "#004a62",
                  textAlign: "right",
                }}
              >
                {t.duration}
              </span>
            </div>
          );
        })}
      </div>
      {/* ══ STATUS BAR ═════════════════════════════════════════════════════ */}
      <div
        style={{
          background: "linear-gradient(180deg, #0a1828, #050e18)",
          borderLeft: "1px solid rgba(255,255,255,0.1)",
          borderRight: "1px solid rgba(0,0,0,0.4)",
          borderTop: "none",
          borderBottom: "1px solid rgba(100,160,220,0.4)",
          padding: "3px 10px",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 9,
          color: "#004060",
          letterSpacing: 1,
          userSelect: "none",
        }}
      >
        <span>{tracks.length} pistes</span>
        <span>KES Media Player - 2.95</span>
      </div>
    </>
  );
}
