import React from "react";
import type { ResizeDir } from "../hooks/useWindowControls";

const HANDLE_THICKNESS = 5;

interface ResizeHandlesProps {
  onMouseDown: (dir: ResizeDir) => (e: React.MouseEvent) => void;
}

export const ResizeHandles: React.FC<ResizeHandlesProps> = ({ onMouseDown }) => {
  const t = HANDLE_THICKNESS;
  const c = t * 2;

  return (
    <>
      {/* Edges */}
      <div
        className="absolute z-[20]"
        style={{ top: 0, left: c, right: c, height: t, cursor: "n-resize" }}
        onMouseDown={onMouseDown("n")}
      />
      <div
        className="absolute z-[20]"
        style={{ bottom: 0, left: c, right: c, height: t, cursor: "s-resize" }}
        onMouseDown={onMouseDown("s")}
      />
      <div
        className="absolute z-[20]"
        style={{ left: 0, top: c, bottom: c, width: t, cursor: "w-resize" }}
        onMouseDown={onMouseDown("w")}
      />
      <div
        className="absolute z-[20]"
        style={{ right: 0, top: c, bottom: c, width: t, cursor: "e-resize" }}
        onMouseDown={onMouseDown("e")}
      />
      {/* Corners */}
      <div
        className="absolute z-[21]"
        style={{ top: 0, left: 0, width: c, height: c, cursor: "nw-resize" }}
        onMouseDown={onMouseDown("nw")}
      />
      <div
        className="absolute z-[21]"
        style={{ top: 0, right: 0, width: c, height: c, cursor: "ne-resize" }}
        onMouseDown={onMouseDown("ne")}
      />
      <div
        className="absolute z-[21]"
        style={{ bottom: 0, left: 0, width: c, height: c, cursor: "sw-resize" }}
        onMouseDown={onMouseDown("sw")}
      />
      <div
        className="absolute z-[21]"
        style={{ bottom: 0, right: 0, width: c, height: c, cursor: "se-resize" }}
        onMouseDown={onMouseDown("se")}
      />
    </>
  );
};

export default ResizeHandles;
