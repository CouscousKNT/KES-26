export default function SpeakerIcon({
  muted = false,
  size,
  width = size ?? 13,
  height = size ?? 13,
  color = null,
}: {
  muted?: boolean;
  size?: number;
  width?: number;
  height?: number;
  color?: string | null;
}) {
  const c = color ?? "white";
  return muted ? (
    <svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <path d="M2 5H4.5L8 2V12L4.5 9H2V5Z" fill={c} fillOpacity="0.85" />
      <line
        x1="10"
        y1="5"
        x2="13"
        y2="9"
        stroke={c}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
      <line
        x1="13"
        y1="5"
        x2="10"
        y2="9"
        stroke={c}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
    </svg>
  ) : (
    <svg width={width} height={height} viewBox="0 0 14 14" fill="none">
      <path d="M2 5H4.5L8 2V12L4.5 9H2V5Z" fill={c} fillOpacity="0.85" />
      <path
        d="M10 4.5C11.2 5.3 11.2 8.7 10 9.5"
        stroke={c}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />
      <path
        d="M11.5 3C13.5 4.5 13.5 9.5 11.5 11"
        stroke={c}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeOpacity="0.7"
      />
    </svg>
  );
}
