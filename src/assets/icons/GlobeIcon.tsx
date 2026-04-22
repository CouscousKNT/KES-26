export default function GlobeIcon({
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
      className="opacity-60 shrink-0"
    >
      <circle
        cx="7"
        cy="7"
        r="5.5"
        stroke={color ?? "#000"}
        strokeWidth="1.2"
      />
      <ellipse
        cx="7"
        cy="7"
        rx="2.5"
        ry="5.5"
        stroke={color ?? "#000"}
        strokeWidth="1.2"
      />
      <line
        x1="1.5"
        y1="5.5"
        x2="12.5"
        y2="5.5"
        stroke={color ?? "#000"}
        strokeWidth="1.2"
      />
      <line
        x1="1.5"
        y1="8.5"
        x2="12.5"
        y2="8.5"
        stroke={color ?? "#000"}
        strokeWidth="1.2"
      />
    </svg>
  );
}
