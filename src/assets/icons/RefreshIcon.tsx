export default function RefreshIcon({
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
    <svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <path
        d="M13 7.5A5.5 5.5 0 1 1 7.5 2H10M10 2L7.5 4.5M10 2L7.5-.5"
        stroke={color ?? "#555"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
