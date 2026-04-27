import { useState } from "react";
import bgLoop from "./assets/BGLOOP.gif";
import KES26Modal from "../../components/KES26Modal/KES26Modal";
import ContactPage from "../Contact/ContactPage";
import OnMySidePage from "../OnMySide/OnMySidePage";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import { useMusicPlayerContext } from "../../context/MusicPlayerContext";
import DVDMenu from "../DVDPlayer/DVDMenu";
import { type Video } from "../DVDPlayer/videos";
import { useIsMobile } from "../../hooks/useIsMobile";
import ReactPlayer from "react-player";
import ItemsPlacement from "./components/ItemsPlacement";
import Header from "./components/Header";

interface ModalsConfigProps {
  id: string;
  open: boolean;
  onClose?: () => void;
  width: string;
  height: string;
  content: React.ReactNode;
}

const styles = `
  @keyframes pulse {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.9; }
  }

  .indication {
    animation: pulse 3s ease-in-out infinite;
  }
`;

export default function MainMenu() {
  const musicPlayer = useMusicPlayerContext();
  const [isOnMySideOpen, setIsOnMySideOpen] = useState(false);
  const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(false);
  const [isDVDPlayerOpen, setIsDVDPlayerOpen] = useState(false);
  const [playingVideo, setPlayingVideo] = useState<Video | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const isMobile = useIsMobile();

  // INITIALISATION DES KES26MODAL
  const modalsConfig: ModalsConfigProps[] = [
    {
      id: "DVDPlayer",
      open: isDVDPlayerOpen,
      onClose: () => setIsDVDPlayerOpen(false),
      width: "768px",
      height: "640px",
      content: playingVideo ? (
        <div className="relative w-full h-full bg-black flex flex-col">
          <button
            onClick={() => {
              setPlayingVideo(null);
              musicPlayer.setIsPlaying(true);
            }}
            className="absolute top-2 left-2 z-10 text-white text-xs bg-black/50 px-3 py-1 rounded hover:bg-black/80"
          >
            [ ← Retour ]
          </button>
          <ReactPlayer
            src={playingVideo.urlFilm}
            playing
            controls
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        <DVDMenu
          onPlay={(video) => {
            if (video.urlFilm) {
              setPlayingVideo(video);
              musicPlayer.setIsPlaying(false);
            }
          }}
        />
      ),
    },
    {
      id: "onMySide",
      open: isOnMySideOpen,
      onClose: () => setIsOnMySideOpen(false),
      width: "860px",
      height: "600px",
      content: <OnMySidePage />,
    },
    {
      id: "contactMe",
      open: isContactOpen,
      onClose: () => setIsContactOpen(false),
      width: "500px",
      height: "700px",
      content: <ContactPage />,
    },
    {
      id: "musicPlayer",
      open: isMusicPlayerOpen,
      onClose: () => setIsMusicPlayerOpen(false),
      width: "700",
      height: "500px",
      content: <MusicPlayer {...musicPlayer} />,
    },
  ];

  return (
    <>
      <style>{styles}</style>
      <div className="w-screen h-[100vh] overflow-hidden relative">
        <img
          src={bgLoop}
          alt=""
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <Header />

        {/* PLATFORMES ET ITEMS */}
        <div
          className="absolute top-[45%] md:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1000px] flex flex-col gap-[60px]"
          style={{ width: "min(700px, 90vw)" }}
        >
          <ItemsPlacement
            onVideoClick={() => setIsDVDPlayerOpen(true)}
            onContactClick={() => setIsContactOpen(true)}
            onProjetClick={() => setIsOnMySideOpen(true)}
            onMusicClick={() => setIsMusicPlayerOpen(true)}
          />
        </div>

        <p className="indication absolute bottom-[12%] left-1/2 -translate-x-1/2 text-[#304f68] text-[10px] tracking-[0.15em] text-center">
          KES-26 - Sélectionnez un item pour découvrir mon univers numérique
        </p>
      </div>

      {/* PLACEMENTS DES KES26MODALS */}
      {modalsConfig.map((modal) => (
        <KES26Modal
          key={modal.id}
          open={modal.open}
          onClose={modal.onClose}
          width={modal.width}
          height={modal.height}
          fullscreen={isMobile}
        >
          {modal.content}
        </KES26Modal>
      ))}
    </>
  );
}
