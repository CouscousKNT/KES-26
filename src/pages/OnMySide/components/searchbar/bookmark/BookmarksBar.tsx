import BookmarkItem, { type BookmarkItemProps } from "./BookmarkItem";

const defaultBookmarks: BookmarkItemProps[] = [
  { emoji: "⭐", label: "Top Sites" },
  { emoji: "📄", label: "Signets" },
  // { emoji: "📰", label: "Le Monde" },
  // { emoji: "🍎", label: "Apple" },
  { emoji: "📦", label: "MDN Web Docs" },
  { emoji: "»", label: "Plus", muted: true },
];

export default function BookmarksBar() {
  return (
    <div className="bookmarksbar flex items-center px-2.5 h-6 gap-0.5 border-b border-[#b0b0b0]">
      <span className="text-[11px] text-[#777] mr-1 leading-none">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className="inline align-middle"
        >
          <rect
            x="1"
            y="1"
            width="8"
            height="7"
            rx="1"
            stroke="#888"
            strokeWidth="1"
          />
          <line x1="1" y1="3.5" x2="9" y2="3.5" stroke="#888" strokeWidth="1" />
        </svg>
      </span>
      {defaultBookmarks.map((bookmark) => (
        <BookmarkItem key={bookmark.label} {...bookmark} />
      ))}
    </div>
  );
}
