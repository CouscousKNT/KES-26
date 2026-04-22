import GlassCard from "../components/GlassCard";
import SectionHeader from "../components/SectionHeader";

type FormationProps = {
  date: string;
  title: string;
  school: string;
};

const formations: FormationProps[] = [
  {
    date: "Sept. 2024 – En cours",
    title: "Master 1 MIAGE",
    school: "UPJV - Amiens",
  },
  {
    date: "Sept. 2023 – Juin 2024",
    title: "Licence Informatique",
    school: "UPJV - Amiens",
  },
  {
    date: "Sept. 2020 – Juin 2022",
    title: "DUT Informatique",
    school: "IUT - Amiens",
  },
];

export default function FormationSection({
  className,
}: { className?: string } = {}) {
  return (
    <GlassCard className={className}>
      <SectionHeader title="Formations" badge="3" />
      <div className="p-3">
        {formations.map((f, i) => (
          <div
            key={i}
            className={`${i < formations.length - 1 ? "mb-[9px] pb-[9px] border-b border-[rgba(175,220,255,0.35)]" : ""}`}
          >
            <div className="text-[10px] font-bold text-[#1a6fb5] mb-[3px] tracking-[0.3px]">
              {f.date}
            </div>
            <div className="flex items-center gap-2 rounded-lg transition-all">
              <div className="w-2 h-2 rounded-full flex-shrink-0 cv-db" />
              <div>
                <div className="text-[11px] text-[#1a3a5c] font-bold">
                  {f.title}
                </div>
                <div className="text-[10px] text-[#2a5a8c] mt-px">
                  {f.school}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
