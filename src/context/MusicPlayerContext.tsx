import { createContext, useContext, type ReactNode } from "react";
import { useMusicPlayer, type MusicPlayerControls } from "../pages/MusicPlayer/hooks/useMusicPlayer";

const MusicPlayerContext = createContext<MusicPlayerControls | null>(null);

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const player = useMusicPlayer();
  return (
    <MusicPlayerContext.Provider value={player}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayerContext(): MusicPlayerControls {
  const ctx = useContext(MusicPlayerContext);
  if (!ctx) throw new Error("useMusicPlayerContext must be used within MusicPlayerProvider");
  return ctx;
}
