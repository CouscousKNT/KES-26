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
  const [showIntro, setShowIntro] = useState(true);
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const outerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const VideoPerPage = isMobile ? 4 : 8;
  const totalPages = Math.ceil(videos.length / VideoPerPage);

  const handlePlay = (v?: (typeof videos)[number] | null) => {
    const video = v ?? videos[selected];
    if (!video) return;
    if (onPlay) onPlay(video);
    else alert(`Lecture : Titre ${video.numFilm}`);
  };

  const go = (dir: number) => {
    setPage((p) => {
      const np = p + dir;
      if (np < 0 || np >= totalPages) return p;
      return np;
    });
  };

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

  useEffect(() => {
    setTimeout(drawGrid, 0);
  }, [page]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Enter") handlePlay();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [selected, page]);

  const start = page * VideoPerPage;
  const slice: (Video | null)[] = videos.slice(start, start + VideoPerPage);
  while (slice.length < VideoPerPage) slice.push(null);

  const pageLabel =
    String(page + 1).padStart(2, "0") +
    "/" +
    String(totalPages).padStart(2, "0");

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
          {/* Grille de fond */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg
              ref={svgRef}
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full block"
            />
          </div>

          {/* Flèches latérales */}
          <span
            onClick={() => go(-1)}
            className="absolute top-1/2 -translate-y-1/2 -left-0.5 text-[#6a8acc] text-[18px] cursor-pointer p-1 select-none z-[2]"
          >
            &#9664;
          </span>
          <span
            onClick={() => go(1)}
            className="absolute top-1/2 -translate-y-1/2 -right-0.5 text-[#6a8acc] text-[18px] cursor-pointer p-1 select-none z-[2]"
          >
            &#9654;
          </span>

          {/* Contenu */}
          <div className="relative z-[1]">
            {/* Compteur de page */}
            <div className="flex justify-end mb-2">
              <span
                className="text-white text-[15px] tracking-[1px]"
                style={{ fontFamily: font }}
              >
                {pageLabel}
              </span>
            </div>

            {/* Grille de vidéos */}
            <div
              className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-[6px] mb-[10px]`}
            >
              {slice.map((v, i) => {
                const gi = start + i;
                return v ? (
                  <VideoCell
                    key={gi}
                    video={v}
                    selected={gi === selected}
                    font={font}
                    onClick={() => setSelected(gi)}
                    onDoubleClick={() => {
                      setSelected(gi);
                      handlePlay(v);
                    }}
                  />
                ) : (
                  <EmptyCell key={i} />
                );
              })}
            </div>
          </div>

          {/* Boutons de navigation — sticky en bas de la modal */}
          <div className="sticky bottom-0 z-[2] flex gap-[6px] bg-[#0a3d89]/40 rounded-b-[10px] border-[#1e3060] -mx-[14px] px-[14px] py-[12px]">
            <NavButton font={font} onClick={() => go(-1)} disabled={page === 0}>
              Previous
            </NavButton>
            <NavButton font={font} onClick={handlePlay}>
              Play
            </NavButton>
            <NavButton
              font={font}
              onClick={() => go(1)}
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
