import React, { useEffect } from "react";
import { ModalHeader } from "./ui/ModalHeader";
import { ModalFooter } from "./ui/ModalFooter";
import { ModalInnerFrame } from "./ui/ModalInnerFrame";
import { ResizeHandles } from "./ui/ResizeHandles";
import { useModalAnimation } from "./hooks/useModalAnimation";
import { useWindowControls } from "./hooks/useWindowControls";
import { useIsMobile } from "../../hooks/useIsMobile";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface KES26ModalProps {
  /** Contrôle l'affichage du modal (mode contrôlé) */
  open?: boolean;
  /** Appelé quand l'utilisateur ferme le modal */
  onClose?: () => void;
  /** Largeur CSS du modal (ex: "860px", "80vw") */
  width?: string;
  /** Hauteur CSS du modal (ex: "640px", "80vh") */
  height?: string;
  /** Contenu du modal */
  children?: React.ReactNode;
  /** Affiche le bouton de fermeture */
  closable?: boolean;
  /** Démarre directement en plein écran et cache le bouton fullscreen */
  fullscreen?: boolean;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export const KES26Modal: React.FC<KES26ModalProps> = ({
  open = true,
  onClose,
  width = "860px",
  height = "640px",
  children,
  closable = true,
  fullscreen = false,
}) => {
  const { visible, animating } = useModalAnimation(open);

  const initialW = parseInt(width) || 860;
  const initialH = parseInt(height) || 640;
  const isMobile = useIsMobile();
  const {
    size,
    pos,
    isActive,
    isDragging,
    isFullscreen,
    toggleFullscreen,
    onResizeMouseDown,
    onDragMouseDown,
  } = useWindowControls(initialW, initialH, fullscreen);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose?.();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-15 pointer-events-none">
      {/* Resize container — positions are runtime-computed, must stay inline */}
      <div
        style={
          isFullscreen
            ? {
                position: "absolute",
                top: !isMobile ? "7.5%" : "0%",
                bottom: !isMobile ? "6.9%" : "0%",
                left: !isMobile ? "5.7%" : "0%",
                right: !isMobile ? "5.25%" : "0%",
                pointerEvents: "auto",
                transition: isActive ? "none" : "opacity 220ms ease",
                opacity: animating ? 1 : 0,
              }
            : {
                position: "absolute",
                left: `calc(50% + ${pos.x}px - ${size.w / 2}px)`,
                top: `calc(50% + ${pos.y}px - ${size.h / 2}px)`,
                width: size.w,
                height: size.h,
                pointerEvents: "auto",
                transition: isActive
                  ? "none"
                  : "transform 280ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 280ms ease, left 220ms ease, top 220ms ease, width 220ms ease, height 220ms ease",
                transform: animating
                  ? "scale(1) translateY(0)"
                  : "scale(0.92) translateY(16px)",
                opacity: animating ? 1 : 0,
              }
        }
      >
        {/* Visual window */}
        <div
          className={`absolute inset-0 flex flex-col overflow-hidden border-[#6aaee8]
            bg-[linear-gradient(to_bottom,#F6FCFC_0%,#5DB3F3_30%,#5DB3F3_51%,#5DB3F3_80%,#F6FCFC_100%)]
            shadow-[0_8px_40px_rgba(5,16,36,0.45),0_2px_8px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.6),inset_0_-1px_0_rgba(30,80,160,0.3)]
            ${isFullscreen ? "rounded-[16px]" : "rounded-[20px]"}`}
        >
          <ModalHeader
            onClose={onClose}
            closable={closable}
            isDragging={isDragging}
            isFullscreen={isFullscreen}
            showFullscreenButton={!fullscreen}
            onDragMouseDown={onDragMouseDown}
            onToggleFullscreen={toggleFullscreen}
          />
          <ModalInnerFrame>{children}</ModalInnerFrame>
          <ModalFooter />
        </div>

        {/* Resize handles */}
        {!isFullscreen && <ResizeHandles onMouseDown={onResizeMouseDown} />}
      </div>
    </div>
  );
};

export default KES26Modal;
