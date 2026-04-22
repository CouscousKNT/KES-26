import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type MouseEvent,
} from "react";
import { tracks } from "./tracks";
import ControlSection from "./sections/ControlSection";
import PlaylistSection from "./sections/PlaylistSection";
import ProgressBarSection from "./sections/ProgressBarSection";
import TrackInfoSection from "./sections/TrackInfoSection";

export default function MusicPlayer() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [trackDuration, setTrackDuration] = useState<number>(0);
  const [volume, setVolume] = useState<number>(20);
  const [shuffle, setShuffle] = useState<boolean>(false);
  const [repeat, setRepeat] = useState<boolean>(false);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const currentIdxRef = useRef(currentIdx);

  const track = tracks[currentIdx];
  const titleStr = `${track.title}  —  ${track.artist}  ———     `;
  const scrolledTitle = (titleStr + titleStr).slice(
    scrollOffset,
    scrollOffset + 42,
  );

  // Keep currentIdxRef in sync for use inside the ended handler
  useEffect(() => {
    currentIdxRef.current = currentIdx;
  }, [currentIdx]);

  // Init audio element once
  useEffect(() => {
    const audio = new Audio();
    audio.src = tracks[0].src;
    audio.volume = 0.8;
    audioRef.current = audio;

    const onTimeUpdate = () => setProgress(audio.currentTime);
    const onLoaded = () => setTrackDuration(audio.duration);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("loadedmetadata", onLoaded);

    return () => {
      audio.pause();
      audio.src = "";
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("loadedmetadata", onLoaded);
    };
  }, []);

  // Re-register ended handler when shuffle/repeat change so closures stay fresh
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onEnded = () => {
      if (repeat) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
      } else {
        const nextIdx = shuffle
          ? Math.floor(Math.random() * tracks.length)
          : (currentIdxRef.current + 1) % tracks.length;
        setCurrentIdx(nextIdx);
        // isPlaying stays true; the play/pause effect will fire
      }
    };

    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, [repeat, shuffle]);

  // Load new src when track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = tracks[currentIdx].src;
    audio.load();
    setProgress(0);
    setTrackDuration(0);
  }, [currentIdx]);

  // Sync play/pause with audio — fires on both isPlaying and currentIdx changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentIdx]);

  // Sync volume with audio
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100;
  }, [volume]);

  // Scrolling ticker
  useEffect(() => {
    setScrollOffset(0);
    if (scrollRef.current) clearInterval(scrollRef.current);
    if (isPlaying) {
      scrollRef.current = setInterval(() => {
        setScrollOffset((o) => (o + 1) % titleStr.length);
      }, 120);
    }
    return () => {
      if (scrollRef.current) clearInterval(scrollRef.current);
    };
  }, [isPlaying, track.id, titleStr.length]);

  const prev = useCallback((): void => {
    setCurrentIdx((i) => (i - 1 + tracks.length) % tracks.length);
  }, []);

  const next = useCallback((): void => {
    if (shuffle) setCurrentIdx(Math.floor(Math.random() * tracks.length));
    else setCurrentIdx((i) => (i + 1) % tracks.length);
  }, [shuffle]);

  const stop = (): void => {
    setIsPlaying(false);
    setProgress(0);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  const handleProgressClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (!audioRef.current || !trackDuration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const newTime = ((e.clientX - rect.left) / rect.width) * trackDuration;
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(180deg, rgba(210,238,255,0.88) 0%, rgba(170,215,255,0.80) 48%, rgba(130,190,248,0.90) 100%)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
            borderLeft: "1px solid rgba(255,255,255,0.65)",
            borderRight: "1px solid rgba(100,160,220,0.35)",
            borderTop: "none",
            borderBottom: "1px solid rgba(100,160,220,0.4)",
            padding: "6px 10px",
          }}
        >
          {/* SECTION INFO MUSIQUE EN COURS */}
          <TrackInfoSection
            isPlaying={isPlaying}
            scrolledTitle={scrolledTitle}
            track={track}
            progress={progress}
            trackDuration={trackDuration}
          />
          {/* SECTION BARRE DE PROGRESSION  */}
          <ProgressBarSection
            progress={progress}
            trackDuration={trackDuration}
            onProgressClick={handleProgressClick}
          />

          {/* SECTION BOUTONS DE CONTROLE */}
          <ControlSection
            isPlaying={isPlaying}
            shuffle={shuffle}
            repeat={repeat}
            volume={volume}
            onPrev={prev}
            onNext={next}
            onStop={stop}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onToggleShuffle={() => setShuffle((s) => !s)}
            onToggleRepeat={() => setRepeat((r) => !r)}
            onVolumeChange={setVolume}
          />
        </div>
        {/* SECTION PLAYLIST  */}
        <PlaylistSection
          currentIdx={currentIdx}
          onSelect={(i) => {
            setCurrentIdx(i);
            setIsPlaying(true);
          }}
        />
      </div>
    </>
  );
}
