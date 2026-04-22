export default function SearchIcon({
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
      viewBox="0 0 12 12"
      fill="none"
      className="opacity-40 shrink-0"
    >
      <circle cx="5" cy="5" r="4" stroke={color ?? "#000"} strokeWidth="1.3" />
      <line
        x1="8.5"
        y1="8.5"
        x2="11"
        y2="11"
        stroke={color ?? "#000"}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
