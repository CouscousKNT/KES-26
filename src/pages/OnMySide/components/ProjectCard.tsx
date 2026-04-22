export type ProjectProps = {
  projectBackgroundImage: string;
  projectTitle?: string;
  projectDescription: string;
  projectLink?: string;
};

export default function ProjectCard({
  projectBackgroundImage,
  projectTitle,
  projectDescription,
  projectLink,
}: ProjectProps) {
  return (
    <div className="rounded-[9px] overflow-hidden cursor-pointer border border-white/50 shadow-[0_2px_9px_rgba(0,60,190,0.18)] transition-all hover:shadow-[0_5px_18px_rgba(0,80,225,0.32)] hover:-translate-y-px">
      <a href={projectLink} target="_blank" rel="noopener noreferrer">
        <div
          style={{
            backgroundImage: `url(${projectBackgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="cv-pcard-bg h-[70px] flex items-center justify-center flex-col gap-1"
        >
          <div className="text-[11px] font-bold text-white [text-shadow:0_1px_2px_rgba(0,0,0,.7)] px-2 text-center">
            {projectTitle}
          </div>
        </div>
        <div className="text-[9px] font-bold text-[#1a3a5c] px-2 py-[5px] bg-[rgba(218,240,255,0.6)]">
          {projectDescription}
        </div>
      </a>
    </div>
  );
}
