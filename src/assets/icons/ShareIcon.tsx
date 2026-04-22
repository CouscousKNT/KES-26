export default function ShareIcon({
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
    <svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <path
        d="M9 2l3 3-3 3V6.5C6 6.5 4 8 3.5 11 3 8 4.5 4.5 9 4.5V2z"
        fill={color ?? "#000"}
      />
    </svg>
  );
}
