export default function ForwardIcon({
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
        d="M1 1L7 6.5L1 12"
        stroke={color ?? "#000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
