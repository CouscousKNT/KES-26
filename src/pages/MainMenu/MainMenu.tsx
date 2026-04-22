import { useState, useEffect } from "react";
import camcoderWebp from "./assets/items/CAMCODER-ITEM.webp";
import camcoderGif from "./assets/items/CAMCODER-ITEM.gif";
import laptopWebp from "./assets/items/PC-ITEM.webp";
import laptopGif from "./assets/items/PC-ITEM.gif";
import smartphoneWebp from "./assets/items/PHONE-ITEM.webp";
import smartphoneGif from "./assets/items/PHONE-ITEM.gif";
import cdWebp from "./assets/items/CD-ITEM.webp";
import cdGif from "./assets/items/CD-ITEM.gif";
import starWebp from "./assets/items/STAR-ITEM.webp";
import starGif from "./assets/items/STAR-ITEM.gif";
import platformImg from "./assets/items/PLATFORM.png";
import bgLoop from "./assets/BGLOOP.gif";
import KES26Modal from "../../components/KES26Modal/KES26Modal";
import ContactPage from "../Contact/ContactPage";
import OnMySidePage from "../OnMySide/OnMySidePage";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import DVDMenu from "../DVDPlayer/DVDMenu";
import ClockIcon from "../../assets/icons/ClockIcon";
import SpeakerIcon from "../../assets/icons/SpeakerIcon";
import BatteryIcon from "../../assets/icons/BatteryIcon";
import { useIsMobile } from "../../hooks/useIsMobile";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
  @font-face {
    font-family: 'Rodin';
    src: url('/fonts/rodin.otf') format('opentype');
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.9; }
  }

  .dvd-nav-hint {
    animation: pulse 3s ease-in-out infinite;
  }
`;

// ─── SVG Icons ───────────────────────────────────────────────────────────────

function CamcorderIcon() {
  const [hovered, setHovered] = useState(false);
  return (
    <img
      src={hovered ? camcoderGif : camcoderWebp}
      alt="Camcorder"
      style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.3))" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}

function SmartphoneIcon() {
  const [hovered, setHovered] = useState(false);
  return (
    <img
      src={hovered ? smartphoneGif : smartphoneWebp}
      alt="Smartphone"
      style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.3))" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}

function LaptopIcon() {
  const [hovered, setHovered] = useState(false);
  return (
    <img
      src={hovered ? laptopGif : laptopWebp}
      alt="pc"
      style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.3))" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}

function CDIcon() {
  const [hovered, setHovered] = useState(false);
  return (
    <img
      src={hovered ? cdGif : cdWebp}
      alt="cd"
      style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.3))" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}

function StarIcon() {
  const [hovered, setHovered] = useState(false);
  return (
    <img
      src={hovered ? starGif : starWebp}
      alt="star"
      style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.3))" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function MainMenu() {
  const [clock, setClock] = useState({ time: "", date: "" });
  const [muted, setMuted] = useState(false);
  const [isOnMySideOpen, setIsOnMySideOpen] = useState(false);
  const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(false);
  const [isDVDPlayerOpen, setIsDVDPlayerOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const isMobile = useIsMobile();
  // ─── Data ────────────────────────────────────────────────────────────────────

  const SHELVES = [
    {
      id: "shelf1",
      items: [
        {
          id: "videos",
          label: "Vidéos",
          icon: <CamcorderIcon />,
          bottomOffset: "bottom-[-48px] md:bottom-[-59px]",
          onClick: () => setIsDVDPlayerOpen(true),
        },
        {
          id: "contact",
          label: "Contact",
          icon: <SmartphoneIcon />,
          bottomOffset: "bottom-[-43px] md:bottom-[-50px]",
          onClick: () => {
            setIsContactOpen(true);
          },
        },
        {
          id: "projets",
          label: "Projets",
          icon: <LaptopIcon />,
          bottomOffset: "bottom-[-45px] md:bottom-[-53px]",
          onClick: () => {
            setIsOnMySideOpen(true);
          },
        },
      ],
    },
    {
      id: "shelf2",
      items: [
        {
          id: "music",
          label: "Musique",
          icon: <CDIcon />,
          bottomOffset: "bottom-[-42px] md:bottom-[-50px]",
          onClick: () => {
            setIsMusicPlayerOpen(true);
          },
        },
        {
          id: "blog",
          label: "???",
          icon: <StarIcon />,
          bottomOffset: "bottom-[-43px] md:bottom-[-51px]",
        },
      ],
    },
  ];

  // Live clock
  useEffect(() => {
    function tick() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      const d = String(now.getDate()).padStart(2, "0");
      const mo = String(now.getMonth() + 1).padStart(2, "0");
      const y = now.getFullYear();
      setClock({ time: `${h}:${m}`, date: `${d}/${mo}/${y}` });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div className="w-screen h-[100vh] overflow-hidden relative">
        <img
          src={bgLoop}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Bottom fade */}
        <div className="fixed bottom-0 left-0 right-0 h-[60px] pointer-events-none bg-[linear-gradient(transparent,rgba(80,140,180,0.3))]" />

        {/* Top bar */}
        <div
          className="absolute top-0 left-0 right-0 h-6 flex items-center justify-between px-[30px] text-white text-xs tracking-[0.08em] z-[5] [font-family:inherit]"
          style={{
            background:
              "linear-gradient(to bottom, #464f75 0%, #123152 9%, #051228 46%, #051228 87%, #020A12 100%)",
            top: !isMobile ? "7.2%" : "0%",
            left: !isMobile ? "5.8%" : "0%",
            right: !isMobile ? "5.4%" : "0%",
          }}
        >
          <span className="opacity-90">Ousmane</span>

          <div className="flex items-center gap-[15px] ml-auto">
            <div className="flex items-center gap-[3px]">
              <ClockIcon size={13} />
              <span className="tracking-[0.125em] opacity-90">
                {clock.time}
              </span>
            </div>
            <span className="opacity-60">{clock.date}</span>
            <button
              onClick={() => {
                const next = !muted;
                setMuted(next);
                document.querySelectorAll("audio, video").forEach((el) => {
                  (el as HTMLMediaElement).muted = next;
                });
              }}
              className="bg-transparent border-none cursor-pointer p-0 flex items-center"
              aria-label={muted ? "Activer le son" : "Couper le son"}
            >
              <SpeakerIcon size={15} muted={muted} />
            </button>
            <BatteryIcon />
          </div>
        </div>

        {/* Shelves */}
        <div
          className="absolute top-[45%] md:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1000px] flex flex-col gap-[60px]"
          style={{ width: "min(700px, 90vw)" }}
        >
          {SHELVES.map((shelf) => (
            <div key={shelf.id} className="relative flex justify-center">
              <div className="relative w-full max-w-[1000px] h-[80px] md:h-[120px] ">
                <div className="flex items-end justify-center gap-[10px] md:gap-[60px] pb-1 relative bottom-[1px] z-[2] h-full">
                  {shelf.items.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={`group min-w-[120px] w-[120px] md:w-[180px] relative cursor-pointer flex flex-col items-center hover:z-10 ${item.bottomOffset}`}
                        style={{
                          objectFit: "contain",
                        }}
                        onClick={item.onClick ? item.onClick : () => {}}
                      >
                        {item.icon}
                        <div className="absolute bottom-[-9px] left-1/2 -translate-x-1/2 border border-transparent text-white [text-shadow:0_3px_3px_rgba(0,0,0,0.6)] [font-family:-apple-system,'Helvetica_Neue',Helvetica,Arial,sans-serif] text-[13px] font-bold tracking-[0.01em] py-[2px] px-[9px] rounded whitespace-nowrap pointer-events-none transition-[border-color,box-shadow] duration-200 group-hover:border-[rgba(255,255,255,0.18)] group-hover:shadow-[0_1px_3px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.18)]">
                          {item.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <img
                  src={platformImg}
                  alt=""
                  className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[680px] h-[150px] md:h-[190px] pointer-events-none"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation hint */}
        <p className="dvd-nav-hint absolute bottom-[18px] left-1/2 -translate-x-1/2 text-[rgba(200,230,255,0.6)] text-[10px] tracking-[0.15em] text-center">
          KES-26 - Cliquez sur une icône pour explorer mon univers numérique
        </p>
      </div>
      <KES26Modal
        open={isOnMySideOpen}
        onClose={() => setIsOnMySideOpen(false)}
        width="860px"
        height="600px"
        fullscreen={isMobile}
      >
        <OnMySidePage />
      </KES26Modal>
      <KES26Modal
        open={isMusicPlayerOpen}
        onClose={() => setIsMusicPlayerOpen(false)}
        width="700px"
        height="500px"
        fullscreen={isMobile}
      >
        <MusicPlayer />
      </KES26Modal>
      <KES26Modal
        open={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        width="500px"
        height="700px"
        fullscreen={isMobile}
      >
        <ContactPage />
      </KES26Modal>
      <KES26Modal
        open={isDVDPlayerOpen}
        onClose={() => setIsDVDPlayerOpen(false)}
        width="768px"
        height="640px"
        fullscreen={isMobile}
      >
        <DVDMenu />
      </KES26Modal>
    </>
  );
}
