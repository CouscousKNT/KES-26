export default function CrossIcon({
  size,
  width = size ?? 14,
  height = size ?? 14,
  color = null,
}: {
  size?: number;
  width?: number;
  height?: number;
  color?: string | null;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      className="shrink-0"
    >
      <line
        x1="2"
        y1="2"
        x2="12"
        y2="12"
        stroke={color ?? "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="2"
        x2="2"
        y2="12"
        stroke={color ?? "#000"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
