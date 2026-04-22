import ActionButton from "../inputs/ActionButton";

interface ControlSectionProps {
  isPlaying: boolean;
  shuffle: boolean;
  repeat: boolean;
  volume: number;
  onPrev: () => void;
  onNext: () => void;
  onStop: () => void;
  onTogglePlay: () => void;
  onToggleShuffle: () => void;
  onToggleRepeat: () => void;
  onVolumeChange: (value: number) => void;
}

export default function ControlSection({
  isPlaying,
  shuffle,
  repeat,
  volume,
  onPrev,
  onNext,
  onStop,
  onTogglePlay,
  onToggleShuffle,
  onToggleRepeat,
  onVolumeChange,
}: ControlSectionProps) {
  const CONTROLS_STYLE = `
  input[type=range].wa-slider {
    -webkit-appearance: none;
    appearance: none;
    height: 4px;
    background: #005f9e;
    outline: none;
    cursor: pointer;
  }
  input[type=range].wa-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 18px;
    background: linear-gradient(180deg, #1a6090, #0a3060);
    border: 1px solid #2288bb;
    border-radius: 2px;
    cursor: pointer;
  }

}
`;

  return (
    <>
      <style>{CONTROLS_STYLE}</style>
      <div
        style={{
          borderTop: "none",
          borderBottom: "1px solid rgba(100,160,220,0.4)",
          padding: "8px 10px",
          display: "flex",
          alignItems: "center",
          gap: 5,
          flexWrap: "wrap",
        }}
      >
        <ActionButton onClick={onPrev} title="Précédent">
          |◀
        </ActionButton>
        <ActionButton
          onClick={onTogglePlay}
          title="Lecture / Pause"
          active={isPlaying}
        >
          {isPlaying ? "⏸" : "▶"}
        </ActionButton>
        <ActionButton onClick={onStop} title="Stop">
          ■
        </ActionButton>
        <ActionButton onClick={onNext} title="Suivant">
          ▶|
        </ActionButton>
        <ActionButton
          onClick={onToggleShuffle}
          title="Aléatoire"
          active={shuffle}
        >
          ⇄
        </ActionButton>
        <ActionButton onClick={onToggleRepeat} title="Répéter" active={repeat}>
          ↻
        </ActionButton>

        {/* Volume slider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginLeft: "auto",
          }}
        >
          <span
            style={{
              fontSize: 9,
              color: "rgba(0,50,120,0.65)",
              letterSpacing: 2,
              textShadow: "0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            VOL
          </span>
          <input
            type="range"
            className="wa-slider"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => onVolumeChange(Number(e.target.value))}
            style={{ width: 100 }}
          />
          <span
            style={{
              fontSize: 10,
              color: "rgba(0,60,140,0.8)",
              minWidth: 24,
              textAlign: "right",
              textShadow: "0 1px 0 rgba(255,255,255,0.7)",
            }}
          >
            {volume}
          </span>
        </div>
      </div>
    </>
  );
}
