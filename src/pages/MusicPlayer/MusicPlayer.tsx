import type { MusicPlayerControls } from "./hooks/useMusicPlayer";
import SpeakerIcon from "../../assets/icons/SpeakerIcon";
import ControlSection from "./sections/ControlSection";
import PlaylistSection from "./sections/PlaylistSection";
import ProgressBarSection from "./sections/ProgressBarSection";
import TrackInfoSection from "./sections/TrackInfoSection";

export default function MusicPlayer(props: MusicPlayerControls) {
  const {
    currentIdx,
    setCurrentIdx,
    isPlaying,
    setIsPlaying,
    progress,
    trackDuration,
    volume,
    setVolume,
    shuffle,
    setShuffle,
    repeat,
    setRepeat,
    track,
    scrolledTitle,
    prev,
    next,
    stop,
    handleProgressClick,
  } = props;

  return (
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
  );
}
