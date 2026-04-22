/** Animated EQ bars */
export default function EqBars({ isPlaying }: { isPlaying: boolean }) {
  const BAR_COUNT = 18;
  return (
    <div
      style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 28 }}
    >
      {Array.from({ length: BAR_COUNT }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 3,
            borderRadius: 1,
            background: "linear-gradient(180deg, #4ab8ff, #1050bb)",
            boxShadow: "0 0 4px #3090ee44",
            animation: isPlaying
              ? `waEq ${0.5 + (i % 6) * 0.12}s ease-in-out ${(i * 0.035).toFixed(2)}s infinite alternate`
              : "none",
            height: isPlaying ? undefined : 3,
            minHeight: 3,
          }}
        />
      ))}
    </div>
  );
}
