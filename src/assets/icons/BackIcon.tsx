export default function BackIcon({
  size,
  width = size ?? 8,
  height = size ?? 13,
  color = null,
}: {
  size?: number;
  width?: number;
  height?: number;
  color?: string | null;
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 8 13" fill="none">
      <path
        d="M7 1L1 6.5L7 12"
        stroke={color ?? "#000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
