import GlassCard from "../components/GlassCard";
import SectionHeader from "../components/SectionHeader";
import ProjectCard, { type ProjectProps } from "../components/ProjectCard";
import kes26Img from "../assets/kes26Logo.png";
import medicanovaImg from "../assets/medicanovaLogo.png";
import clairobscurImg from "../assets/clairobscurLogo.png";

const projects: ProjectProps[] = [
  {
    projectBackgroundImage: kes26Img,
    projectTitle: "KES-26",
    projectDescription: "Portfolio Personnel · 2026",
  },
  {
    projectBackgroundImage: clairobscurImg,
    projectTitle: "Clair Obscur",
    projectDescription: "Site vitrine · 2025",
    projectLink: "https://clair-obscur-v2.vercel.app/",
  },
  {
    projectBackgroundImage: medicanovaImg,
    projectTitle: "Medica Nova",
    projectDescription: "Gestion de dossier patient · 2024",
    projectLink:
      "https://github.com/miage-amiens-organization/2024_M1_PRO-05_GR9",
  },
];

export default function ProjectsSection() {
  return (
    <GlassCard>
      <SectionHeader title="🚀 Projets & Réalisations" />
      <div className="grid grid-cols-3 gap-[9px] p-3">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </GlassCard>
  );
}
