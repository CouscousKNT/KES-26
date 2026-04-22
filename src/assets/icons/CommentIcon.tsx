export default function CommentIcon({
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
        d="M2 2h10a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5l-3 2V3a1 1 0 0 1 1-1z"
        stroke={color ?? "#000"}
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}
