import GlassCard from "../components/GlassCard";
import SectionHeader from "../components/SectionHeader";

const langues = [
  { dot: "dg", label: "Français", sub: "Langue maternelle" },
  { dot: "db", label: "Anglais", sub: "Professionnel (B2)" },
  { dot: "do", label: "Espagnol", sub: "(B1)" },
];

function MiniItem({
  dot,
  label,
  sub,
}: {
  dot: string;
  label: string;
  sub?: string;
}) {
  return (
    <div className="flex items-center gap-2 px-2 py-[5px] rounded-lg">
      <div className={`w-2 h-2 rounded-full flex-shrink-0 cv-${dot}`} />
      <div>
        <div className="text-[11px] text-[#1a3a5c] font-bold">{label}</div>
        {sub && <div className="text-[10px] text-[#2a5a8c] mt-px">{sub}</div>}
      </div>
    </div>
  );
}

export default function LanguageSection({
  className,
}: { className?: string } = {}) {
  return (
    <GlassCard className={className}>
      <SectionHeader title="Langues" badge={String(langues.length)} />
      <div className="p-3">
        <div className="flex flex-col">
          {langues.map((l, i) => (
            <MiniItem key={i} dot={l.dot} label={l.label} sub={l.sub} />
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
