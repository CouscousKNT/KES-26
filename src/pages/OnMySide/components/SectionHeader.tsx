type SectionHeaderProps = {
  title: string;
  badge?: string;
  right?: string;
};

export default function SectionHeader({
  title,
  badge,
  right,
}: SectionHeaderProps) {
  const css = `
  .header-section {
    background: linear-gradient(180deg, #3a9fd6 0%, #1a6fb5 100%);
          background: linear-gradient(
    to bottom,
    #b7d3f7 0%,
    #4d87d2 25%,
    #4d87d2 50%,
    #2b5db2 51%,
    #3369b6 65%,
    #65a6e2 100%
  );
  }
`;
  return (
    <>
      <style>{css}</style>
      <div className="header-section min-height-25 relative flex items-center gap-2 px-3 py-[5px] border-b border-[#0d4a8a]">
        <span
          className="text-xs font-bold text-white"
          style={{ textShadow: "0 2px 3px rgba(0,0,100,.5)" }}
        >
          {title}
        </span>
        {badge && (
          <span className="bg-white/25 border border-white/40 rounded-lg px-2 py-px text-[10px] text-white font-bold">
            {badge}
          </span>
        )}
        {right && (
          <span className="ml-auto text-[9px] text-white/80 italic">
            {right}
          </span>
        )}
      </div>
    </>
  );
}
