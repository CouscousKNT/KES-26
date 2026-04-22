import { useState, useEffect, useRef } from "react";
import React from "react";

export type ResizeDir = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

export function useWindowControls(
  initialW: number,
  initialH: number,
  initialFullscreen = false,
) {
  const MIN_W = 320;
  const MIN_H = 200;
  const [size, setSize] = useState({ w: initialW, h: initialH });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(initialFullscreen);
  const savedStateRef = useRef<{
    w: number;
    h: number;
    x: number;
    y: number;
  } | null>(null);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      savedStateRef.current = { w: size.w, h: size.h, x: pos.x, y: pos.y };
      setSize({ w: window.innerWidth, h: window.innerHeight });
      setPos({ x: 0, y: 0 });
      setIsFullscreen(true);
    } else {
      const saved = savedStateRef.current;
      if (saved) {
        setSize({ w: saved.w, h: saved.h });
        setPos({ x: saved.x, y: saved.y });
      }
      setIsFullscreen(false);
    }
  };

  const resizeRef = useRef<{
    dir: ResizeDir;
    startX: number;
    startY: number;
    startW: number;
    startH: number;
    startPosX: number;
    startPosY: number;
  } | null>(null);

  const dragRef = useRef<{
    startX: number;
    startY: number;
    startPosX: number;
    startPosY: number;
  } | null>(null);

  const onResizeMouseDown = (dir: ResizeDir) => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    resizeRef.current = {
      dir,
      startX: e.clientX,
      startY: e.clientY,
      startW: size.w,
      startH: size.h,
      startPosX: pos.x,
      startPosY: pos.y,
    };
    setIsActive(true);
    document.body.style.cursor = `${dir}-resize`;
    document.body.style.userSelect = "none";
  };

  const onDragMouseDown = (e: React.MouseEvent) => {
    if (isFullscreen) return;
    if ((e.target as HTMLElement).closest("button")) return;
    e.preventDefault();
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      startPosX: pos.x,
      startPosY: pos.y,
    };
    setIsActive(true);
    setIsDragging(true);
    document.body.style.cursor = "move";
    document.body.style.userSelect = "none";
  };

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const r = resizeRef.current;
      if (r) {
        const dx = e.clientX - r.startX;
        const dy = e.clientY - r.startY;
        let newW = r.startW,
          newH = r.startH;
        let newPx = r.startPosX,
          newPy = r.startPosY;

        if (r.dir.includes("e")) {
          newW = Math.max(MIN_W, r.startW + dx);
          newPx = r.startPosX + (newW - r.startW) / 2;
        }
        if (r.dir.includes("w")) {
          newW = Math.max(MIN_W, r.startW - dx);
          newPx = r.startPosX - (newW - r.startW) / 2;
        }
        if (r.dir.includes("s")) {
          newH = Math.max(MIN_H, r.startH + dy);
          newPy = r.startPosY + (newH - r.startH) / 2;
        }
        if (r.dir.includes("n")) {
          newH = Math.max(MIN_H, r.startH - dy);
          newPy = r.startPosY - (newH - r.startH) / 2;
        }

        setSize({ w: newW, h: newH });
        setPos({ x: newPx, y: newPy });
        return;
      }

      const d = dragRef.current;
      if (d) {
        setPos({
          x: d.startPosX + e.clientX - d.startX,
          y: d.startPosY + e.clientY - d.startY,
        });
      }
    };

    const onUp = () => {
      resizeRef.current = null;
      dragRef.current = null;
      setIsActive(false);
      setIsDragging(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, []);

  return {
    size,
    pos,
    isActive,
    isDragging,
    isFullscreen,
    toggleFullscreen,
    onResizeMouseDown,
    onDragMouseDown,
  };
}
