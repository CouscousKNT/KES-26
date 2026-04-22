export type BookmarkItemProps = {
  emoji: string;
  label: string;
  muted?: boolean;
};

export default function BookmarkItem({
  emoji,
  label,
  muted,
}: BookmarkItemProps) {
  return (
    <div
      className={`bookmark flex items-center gap-1 px-2 py-0.5 text-[11px] cursor-pointer rounded border border-transparent whitespace-nowrap transition-all duration-[80ms]
        ${muted ? "text-[#999]" : "text-[#333]"}`}
    >
      <span className="text-[11px]">{emoji}</span>
      {label}
    </div>
  );
}
