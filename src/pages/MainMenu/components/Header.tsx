import { useEffect, useState } from "react";
import { useIsMobile } from "../../../hooks/useIsMobile";
import ClockIcon from "../../../assets/icons/ClockIcon";
import SpeakerIcon from "../../../assets/icons/SpeakerIcon";
import BatteryIcon from "../../../assets/icons/BatteryIcon";
import { useMusicPlayerContext } from "../../../context/MusicPlayerContext";

// DATE ET HEURE DU JOUR
function LiveClock() {
  const [clock, setClock] = useState({ time: "", date: "" });

  useEffect(() => {
    function tick() {
      const now = new Date();
      const hour = String(now.getHours()).padStart(2, "0");
      const minute = String(now.getMinutes()).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      setClock({ time: `${hour}:${minute}`, date: `${day}/${month}/${year}` });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="flex items-center gap-[3px]">
        <ClockIcon size={13} />
        <span className="tracking-[0.125em] opacity-90">{clock.time}</span>
      </div>
      <span className="opacity-60">{clock.date}</span>
    </>
  );
}

export default function Header() {
  const isMobile = useIsMobile();
  const musicPlayer = useMusicPlayerContext();

  return (
    <>
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
          <LiveClock />
          <button
            onClick={() => musicPlayer.setIsPlaying((p) => !p)}
            className="bg-transparent border-none cursor-pointer p-0 flex items-center"
          >
            <SpeakerIcon size={15} muted={!musicPlayer.isPlaying} />
          </button>
          <BatteryIcon />
        </div>
      </div>
    </>
  );
}
