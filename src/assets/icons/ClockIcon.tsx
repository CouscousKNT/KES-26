export default function ClockIcon({
  size,
  width = size ?? 11,
  height = size ?? 11,
  color = null,
}: {
  size?: number;
  width?: number;
  height?: number;
  color?: string | null;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 12 12" fill="none">
      <circle
        cx="6"
        cy="6"
        r="5"
        stroke={color ?? "white"}
        strokeWidth="1.2"
        strokeOpacity="0.85"
      />
      <line
        x1="6"
        y1="6"
        x2="6"
        y2="3"
        stroke={color ?? "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
      <line
        x1="6"
        y1="6"
        x2="9"
        y2="6"
        stroke={color ?? "white"}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
    </svg>
  );
}
