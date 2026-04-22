export default function BatteryIcon({
  level = 3,
  size,
  width = size ?? 22,
  height = size ? size * (11 / 22) : 11,
  color = null,
}: {
  level?: number;
  size?: number;
  width?: number;
  height?: number;
  color?: string | null;
}) {
  const c = color ?? "white";
  return (
    <svg width={width} height={height} viewBox="0 0 24 12" fill="none">
      <rect
        x="0.6"
        y="0.6"
        width="20.8"
        height="10.8"
        rx="2.4"
        stroke={c}
        strokeWidth="1.2"
        strokeOpacity="0.85"
      />
      <rect
        x="21.4"
        y="3.5"
        width="2"
        height="5"
        rx="1"
        fill={c}
        fillOpacity="0.7"
      />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={2.2 + i * 4.8}
          y={2.2}
          width={3.6}
          height={7.6}
          rx={0.8}
          fill={c}
          fillOpacity={i < level ? 0.85 : 0.15}
        />
      ))}
    </svg>
  );
}
