export default function ThumbIcon({
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
        d="M2 6h2v6H2V6zM5 6l2-4c1 0 1.5.5 1.5 1.5V5h3.5l-.8 5H5V6z"
        fill={color ?? "#000"}
      />
    </svg>
  );
}
