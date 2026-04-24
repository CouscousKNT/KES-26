import { useState, useRef, useEffect, useCallback, type MouseEvent } from "react";
import { tracks } from "../tracks";

export function useMusicPlayer() {
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
  const scrolledTitle = (titleStr + titleStr).slice(scrollOffset, scrollOffset + 42);

  // MISE A JOUR DE currentIndex.current A CHAQUE FOIS QUE currentIndex CHANGE
  useEffect(() => {
    currentIdxRef.current = currentIdx;
  }, [currentIdx]);

  // CREATION DE L'AUDIO, RECUPERATION ET MAJ DE LA DUREE ET
  useEffect(() => {
    const audio = new Audio();
    audio.src = tracks[0].src;
    audio.volume = 0.2;
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

  // ACTION A FAIRE A LA FIN DE LA MUSIQUE (REPETER / ALEATOIRE OU MORCEAU SUIVANT)
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
      }
    };

    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, [repeat, shuffle]);

  // CHANGE LE SRC DE L'AUDIO LORSQUE L'INDEX CHANGE
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.src = tracks[currentIdx].src;
    audio.load();
    setProgress(0);
    setTrackDuration(0);
  }, [currentIdx]);

  // PLAY / PAUSE
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying, currentIdx]);

  // CONVERSION DU VOLUME VERS UN NOMBRE COMPRIS ENTRE 0 ET 1
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume / 100;
  }, [volume]);

  // SCROLLING TICKER
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

  // MORCEAU PRECEDENT
  const prev = useCallback((): void => {
    setCurrentIdx((i) => (i - 1 + tracks.length) % tracks.length);
  }, []);

  // MORCEAU SUIVANT
  const next = useCallback((): void => {
    if (shuffle) setCurrentIdx(Math.floor(Math.random() * tracks.length));
    else setCurrentIdx((i) => (i + 1) % tracks.length);
  }, [shuffle]);

  // ARRET DU MORCEAU, REMISE DE LA PROGRESS BAR A 0
  const stop = (): void => {
    setIsPlaying(false);
    setProgress(0);
    if (audioRef.current) audioRef.current.currentTime = 0;
  };

  // DEPLACEMENT DANS LE MORCEAU DEPUIS LA PROGRESS BAR
  const handleProgressClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (!audioRef.current || !trackDuration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const newTime = ((e.clientX - rect.left) / rect.width) * trackDuration;
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  return {
    currentIdx, setCurrentIdx,
    isPlaying, setIsPlaying,
    progress,
    trackDuration,
    volume, setVolume,
    shuffle, setShuffle,
    repeat, setRepeat,
    track,
    scrolledTitle,
    prev,
    next,
    stop,
    handleProgressClick,
  };
}

export type MusicPlayerControls = ReturnType<typeof useMusicPlayer>;
