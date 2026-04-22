import React from "react";
import ModalButton from "../inputs/ModalButton";
import CrossIcon from "../../../assets/icons/CrossIcon";
import { FullscreenIcon } from "../../../assets/icons/FullscreenIcon";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ModalHeaderProps {
  onClose?: () => void;
  closable: boolean;
  isDragging: boolean;
  isFullscreen: boolean;
  showFullscreenButton: boolean;
  onDragMouseDown: (e: React.MouseEvent) => void;
  onToggleFullscreen: () => void;
}

// ─── ModalHeader ──────────────────────────────────────────────────────────────

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  onClose,
  closable,
  isDragging,
  isFullscreen,
  showFullscreenButton,
  onDragMouseDown,
  onToggleFullscreen,
}) => (
  <div
    onMouseDown={onDragMouseDown}
    className={`relative h-12 flex items-center justify-center gap-4 pl-8 pr-4 select-none z-10
      bg-[linear-gradient(to_bottom,#919ECF_0%,#A6C3E2_9%,#21498E_47%,#21498E_78%,#4585C9_100%)]
      shadow-[inset_0_4px_0_rgba(255,255,255,0.15),0_5px_5px_rgba(30,60,110,0.35)]
      ${isDragging ? "cursor-move" : "cursor-default"}
      ${isFullscreen ? "rounded-none" : "rounded-t-[20px]"}`}
  >
    <div className="modal-header-chrome w-[50%] h-2 rounded-md bg-[linear-gradient(to_bottom,#FFFFFF_0%,#868686_55%,#868686_100%)] shadow-[0_3px_1px_rgba(0,0,0,0.25)]" />

    <div
      className="text-white text-[1.2rem] [text-shadow:0_0px_4px_rgba(0,0,0,0.45)] whitespace-nowrap"
      style={{ fontFamily: '"Ishmeria", sans-serif' }}
    >
      KES-26
    </div>

    <div className="w-[50%] flex gap-2 justify-center items-center">
      <div className="modal-header-chrome w-full h-2 rounded-md bg-[linear-gradient(to_bottom,#FFFFFF_0%,#868686_55%,#868686_100%)] shadow-[0_3px_1px_rgba(0,0,0,0.25)]"></div>

      <div className="relative w-auto flex right-0 gap-1 items-center justify-center">
        {showFullscreenButton && (
          <ModalButton color="blue" onClick={onToggleFullscreen}>
            <FullscreenIcon isFullscreen={isFullscreen} size={10} />
          </ModalButton>
        )}

        {closable && (
          <ModalButton color="red" onClick={onClose}>
            <CrossIcon size={10} color="#fff" />
          </ModalButton>
        )}
      </div>
    </div>
  </div>
);

export default ModalHeader;
