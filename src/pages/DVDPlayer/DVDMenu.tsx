import { useState, useEffect, useRef } from "react";
import titleScreenMp4 from "./assets/intro/titlescreen.mp4";
import videos, { type Video } from "./videos";
import NavButton from "./components/NavButton";
import VideoCell from "./components/VideoCell";
import EmptyCell from "./components/EmptyCell";

const font = "'VCR OSD Mono', monospace";

export default function DVDMenu({
  onPlay,
}: {
  onPlay?: (video: (typeof videos)[number]) => void;
}) {
  // VARIABLE DE FONCTIONNEMENT DU MENU
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [page, setPage] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(0);
  const VideoPerPage = isMobile ? 4 : 8;
  const totalPages = Math.ceil(videos.length / VideoPerPage);

  // VARIABLE DE CONSTRUCTION DE LA GRILLE ESTHETIQUE
  const outerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const handlePlay = (v?: (typeof videos)[number] | null) => {
    const video = v ?? videos[selectedVideo];
    if (!video) return;
    if (onPlay) onPlay(video);
  };

  // FONCTION DE CHANGEMENT DE PAGE
  const changePage = (dir: number) => {
    setPage((p) => {
      const np = p + dir;
      if (np < 0 || np >= totalPages) return p;
      return np;
    });
  };

  // FONCTION DE CONSTRUCTION DE LA GRILLE ESTHETIQUE
  const drawGrid = () => {
    const el = outerRef.current;
    const svg = svgRef.current;
    if (!el || !svg) return;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    const step = 18;
    let lines = "";
    for (let x = 0; x <= w; x += step)
      lines += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="#1a3878" stroke-width="0.8"/>`;
    for (let y = 0; y <= h; y += step)
      lines += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="#1a3878" stroke-width="0.8"/>`;
    svg.innerHTML = lines;
  };

  // CONSTRUCTION DE LA GRILLE ESTHETIQUE APRES LA VIDEO D'INTRODUCTION
  useEffect(() => {
    if (showIntro) return;
    drawGrid();
    const ro = new ResizeObserver(() => {
      drawGrid();
      setIsMobile((prev) => {
        const next = window.innerWidth < 640;
        if (prev !== next) setPage(0);
        return next;
      });
    });
    if (outerRef.current) ro.observe(outerRef.current);
    return () => ro.disconnect();
  }, [showIntro]);

  // RE-CONSTRUCTION DE LA GRILLE AU CHANGEMENT DE PAGE
  useEffect(() => {
    setTimeout(drawGrid, 0);
  }, [page]);

  // COMMANDE CLAVIER :
  //   - FLECHE DROITE / FLECHE GAUCHE : CHANGEMENT DE PAGE
  //   - ENTRER : LECTURE DE LA VIDEO
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") changePage(1);
      if (e.key === "ArrowLeft") changePage(-1);
      if (e.key === "Enter") handlePlay();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selectedVideo, page]);

  // CALCUL DE L'INDEX DE DEPART POUR DECOUPAGE
  const pageStartIndex = page * VideoPerPage;

  // TABLEAU DE VIDEO POUR UNE PAGE
  const currentPageVideos: (Video | null)[] = videos.slice(
    pageStartIndex,
    pageStartIndex + VideoPerPage,
  );
  while (currentPageVideos.length < VideoPerPage) currentPageVideos.push(null);

  // FORMATAGE AFFICHAGE DE LA PAGE COURANTE
  const pageLabel =
    String(page + 1).padStart(2, "0") +
    "/" +
    String(totalPages).padStart(2, "0");

  // AFFICHAGE VIDEO D'INTROCUTION
  if (showIntro) {
    return (
      <div className="absolute inset-0 bg-[#01186c] overflow-hidden">
        <video
          src={titleScreenMp4}
          autoPlay
          playsInline
          onEnded={() => setShowIntro(false)}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <>
      <style>
        {`@import url('https://fonts.cdnfonts.com/css/vcr-osd-mono');
        .body{ background: #01186c; }
        `}
      </style>

      <div
        className="bg-[#01186c] p-4 flex items-center justify-center w-full min-h-full box-border"
        style={{ fontFamily: font }}
      >
        <div
          ref={outerRef}
          className="relative border-[3px] border-[#1e3060] rounded-[10px] px-[14px] pt-[10px] w-full max-w-[1200px] mx-auto"
        >
          {/* GRILLE DE FOND ESTHETIQUE */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg
              ref={svgRef}
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full block"
            />
          </div>

          {/* FLECHE DE CHANGEMENT DE PAGE */}
          <span
            onClick={() => changePage(-1)}
            className="absolute top-1/2 -translate-y-1/2 -left-0.5 text-[#6a8acc] text-[18px] cursor-pointer p-1 select-none z-[2]"
          >
            &#9664;
          </span>
          <span
            onClick={() => changePage(1)}
            className="absolute top-1/2 -translate-y-1/2 -right-0.5 text-[#6a8acc] text-[18px] cursor-pointer p-1 select-none z-[2]"
          >
            &#9654;
          </span>

          <div className="relative z-[1]">
            {/* COMPTEUR DE PAGE */}
            <div className="flex justify-end mb-2">
              <span
                className="text-white text-[15px] tracking-[1px]"
                style={{ fontFamily: font }}
              >
                {pageLabel}
              </span>
            </div>

            {/* CONSTRUCTION DE LA GRILLE DE VIDEO */}
            <div
              className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-[6px] mb-[10px]`}
            >
              {currentPageVideos.map((video, index) => {
                // INDEX GLOBAL ( la variable "index" correspond à celle de la page courante)
                const globalIndex = pageStartIndex + index;
                return video ? (
                  <VideoCell
                    key={globalIndex}
                    video={video}
                    selected={globalIndex === selectedVideo}
                    font={font}
                    onClick={() => setSelectedVideo(globalIndex)}
                    onDoubleClick={() => {
                      setSelectedVideo(globalIndex);
                      handlePlay(video);
                    }}
                  />
                ) : (
                  <EmptyCell key={index} />
                );
              })}
            </div>
          </div>

          {/* BOUTONS ACTIONS */}
          <div className="sticky bottom-0 z-[2] flex gap-[6px] bg-[#0a3d89]/40 rounded-b-[10px] border-[#1e3060] -mx-[14px] px-[14px] py-[12px]">
            <NavButton
              font={font}
              onClick={() => changePage(-1)}
              disabled={page === 0}
            >
              Previous
            </NavButton>
            <NavButton
              font={font}
              onClick={() => {
                handlePlay(videos[selectedVideo]);
              }}
            >
              Play
            </NavButton>
            <NavButton
              font={font}
              onClick={() => changePage(1)}
              disabled={page >= totalPages - 1}
            >
              Next
            </NavButton>
          </div>
        </div>
      </div>
    </>
  );
}
