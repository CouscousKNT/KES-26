import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AeroButton } from "../../components/inputs/AeroButton";
import titleScreenImg from "./assets/img/titleScreen3.png";
import foreground from "./assets/img/wave.png";
import introVideo from "./assets/intro/titleScreenAnimationV2.mp4";
import KES26Modal from "../../components/KES26Modal/KES26Modal";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useMusicPlayerContext } from "../../context/MusicPlayerContext";

export default function TitleScreen() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const { setIsPlaying } = useMusicPlayerContext();
  const [showIntro, setShowIntro] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  function handleStart() {
    setIsPlaying(true);
    if (isMobile) {
      navigate("/home");
    } else {
      setShowIntro(true);
    }
  }

  function handleVideoEnd() {
    navigate("/home");
  }

  const content = (
    <div className="relative w-full h-full bg-[_#e3eced] overflow-hidden flex flex-col items-center">
      <img
        className="z-5 relative top-[12%] w-[50vh] sm:w-[80vh] h-auto"
        src={titleScreenImg}
        alt=""
      />
      <div className="z-5 absolute bottom-[20%] w-full flex justify-center italic">
        <AeroButton color="ice" onClick={handleStart}>
          <h1
            className="m-0 flex-1 text-center text-md italic tracking-[2px]"
            style={{
              textShadow:
                "0 1px 0 rgba(255,255,255,0.7), 0 2px 3px rgba(30,80,160,0.3)",
              fontFamily: "'Orbitron', sans-serif",
              fontWeight: 900,
              color: "#1c4a8a",
            }}
          >
            Démarrer KES-26
          </h1>
        </AeroButton>
      </div>
      <div className="w-full absolute bottom-0">
        <img
          src={foreground}
          alt=""
          className="w-full h-auto block"
          style={{ objectFit: "fill" }}
        />
      </div>
      {showIntro && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 14,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <video
            ref={videoRef}
            src={introVideo}
            autoPlay
            playsInline
            onEnded={handleVideoEnd}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      )}
    </div>
  );

  return (
    <>
      {isMobile ? (
        <KES26Modal fullscreen>{content}</KES26Modal>
      ) : (
        <div className="w-screen h-screen">{content}</div>
      )}
    </>
  );
}
