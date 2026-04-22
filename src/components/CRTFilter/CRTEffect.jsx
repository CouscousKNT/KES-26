import { useEffect, useRef, useState, useCallback } from "react";

// ─── Utility ──────────────────────────────────────────────────────────────────
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ─── Responsive size hook ─────────────────────────────────────────────────────
/**
 * Observes the size of `ref` and re-renders whenever it changes (including on
 * window resize, parent layout shift, flex/grid reflow, etc.).
 */
function useContainerSize(ref) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    // Seed the initial size immediately so canvases are sized on first paint
    const { width, height } = ref.current.getBoundingClientRect();
    setSize({ width: Math.round(width), height: Math.round(height) });

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width: Math.round(width), height: Math.round(height) });
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}

// ─── Snow hook ────────────────────────────────────────────────────────────────
function useSnow(canvasRef, enabled) {
  const frameRef = useRef(null);

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      const d = ctx.createImageData(w, h);
      const b = new Uint32Array(d.data.buffer);
      for (let i = 0; i < b.length; i++) {
        b[i] = ((255 * Math.random()) | 0) << 24;
      }
      ctx.putImageData(d, 0, 0);
      frameRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frameRef.current);
  }, [enabled, canvasRef]);
}

// ─── VCR hook ─────────────────────────────────────────────────────────────────
function useVCR(canvasRef, enabled, config) {
  const renderTail = useCallback((ctx, x, y, radius) => {
    const n = getRandomInt(1, 50);
    const dirs = [1, -1];
    let rd = radius;
    const dir = dirs[Math.floor(Math.random() * dirs.length)];
    for (let i = 0; i < n; i++) {
      let r = getRandomInt((rd -= 0.01), radius);
      let dx = getRandomInt(1, 4) * dir;
      radius -= 0.1;
      ctx.fillRect((x += dx), y, r, r);
      ctx.fill();
    }
  }, []);

  const renderTrackingNoise = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const { blur = 1, miny = 220, miny2 = 220, num = 20 } = config;
    let posy1 = miny;
    let posy2 = canvas.height;
    let posy3 = miny2;

    canvas.style.filter = `blur(${blur}px)`;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.beginPath();

    for (let i = 0; i <= num; i++) {
      const x = Math.random() * canvas.width;
      const y1 = getRandomInt((posy1 += 3), posy2);
      const y2 = getRandomInt(0, (posy3 -= 3));
      ctx.fillRect(x, y1, 2, 2);
      ctx.fillRect(x, y2, 2, 2);
      ctx.fill();
      renderTail(ctx, x, y1, 2);
      renderTail(ctx, x, y2, 2);
    }
    ctx.closePath();
  }, [canvasRef, config, renderTail]);

  useEffect(() => {
    if (!enabled || !canvasRef.current) return;

    const fps = config.fps || 30;
    if (fps >= 60) {
      let frame;
      const animate = () => {
        renderTrackingNoise();
        frame = requestAnimationFrame(animate);
      };
      animate();
      return () => cancelAnimationFrame(frame);
    } else {
      const id = setInterval(renderTrackingNoise, 1000 / fps);
      return () => clearInterval(id);
    }
  }, [enabled, config, renderTrackingNoise]);
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * CRTEffect – wraps its children with an old-TV / VHS screen effect.
 *
 * The component fills 100% of its parent container by default and
 * automatically re-adapts whenever that container is resized.
 *
 * Control the outer dimensions from the outside:
 *   <CRTEffect style={{ width: "80vw", height: "60vh" }}>…</CRTEffect>
 *   <CRTEffect className="my-screen">…</CRTEffect>
 *
 * Effects props (all optional, passed as the `effects` object):
 *   snow        bool    Static noise overlay          (default true)
 *   snowOpacity number  0–1                           (default 0.2)
 *   scanlines   bool    RGB scanlines                 (default true)
 *   vignette    bool    Curved-screen vignette        (default true)
 *   vcr         bool    VHS tracking noise            (default true)
 *   vcrMiny     number  Tracking band start Y         (default 220)
 *   vcrNum      number  Tracking dot count            (default 70)
 *   vcrFps      number  VCR animation FPS             (default 60)
 *   wobbleX     bool    Horizontal wobble             (default true)
 *   wobbleY     bool    Vertical wobble               (default true)
 *   glitch      bool    Occasional glitch skew        (default true)
 */
export default function CRTEffect({
  children,
  effects = {},
  style,
  className,
}) {
  const {
    snow = true,
    snowOpacity = 0.05,
    scanlines = false,
    vignette = false,
    vcr = true,
    vcrMiny = 220,
    vcrNum = 0,
    vcrFps = 60,
    wobbleX = true,
    wobbleY = true,
    glitch = false,
  } = effects;

  // The outer div is the measurement target
  const outerRef = useRef(null);
  const { width, height } = useContainerSize(outerRef);

  const snowCanvasRef = useRef(null);
  const vcrCanvasRef = useRef(null);

  const vcrConfig = {
    miny: vcrMiny,
    miny2: vcrMiny,
    num: vcrNum,
    fps: vcrFps,
    blur: 1,
  };

  useSnow(snowCanvasRef, snow);
  useVCR(vcrCanvasRef, vcr, vcrConfig);

  // ── Shared style helpers ──────────────────────────────────────────────────
  const fillAbsolute = {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  };

  return (
    <>
      <style>{`
        @keyframes crt-wobble-x {
          50%  { transform: translateX(1px); }
          51%  { transform: translateX(0); }
        }
        @keyframes crt-wobble-y {
          0%   { transform: translateY(1px); }
          100% { transform: translateY(0); }
        }
        @keyframes crt-glitch {
          40%  { opacity:1;   transform: scale(1,1)   skew(0deg); }
          41%  { opacity:0.8; transform: scale(1,1.2) skew(80deg); }
          42%  { opacity:0.8; transform: scale(1,1.2) skew(-50deg); }
          43%  { opacity:1;   transform: scale(1,1)   skew(0deg); }
        }
      `}</style>

      {/* Outer: measurement target + clipping box */}
      <div
        ref={outerRef}
        className={className}
        style={{
          // Default: fill parent. Caller can override via `style` prop.
          width: "100%",
          height: "100%",
          ...style,
          // Always required internally
          overflow: "hidden",
          position: "relative",
          background:
            "transparent linear-gradient(to bottom, #85908c 0%, #323431 100%) repeat scroll 0 0",
          backgroundSize: "cover",
        }}
      >
        {/* Animation wrapper */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            animation:
              [
                wobbleX ? "crt-wobble-x 100ms infinite" : "",
                wobbleY ? "crt-wobble-y 100ms infinite" : "",
                glitch ? "crt-glitch 5s ease 2000ms infinite" : "",
              ]
                .filter(Boolean)
                .join(", ") || undefined,
          }}
        >
          {/* Inner flex centering */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* User content */}
            <div
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                zIndex: 1,
              }}
            >
              {children}
            </div>

            {/* Snow – half resolution canvas, sized to measured container */}
            {snow && (
              <canvas
                ref={snowCanvasRef}
                width={Math.max(1, Math.round(width / 2))}
                height={Math.max(1, Math.round(height / 2))}
                style={{
                  ...fillAbsolute,
                  opacity: snowOpacity,
                  zIndex: 9998,
                  backgroundColor: "#aaa",
                }}
              />
            )}

            {/* VCR tracking noise – full resolution canvas */}
            {vcr && (
              <canvas
                ref={vcrCanvasRef}
                width={Math.max(1, width)}
                height={Math.max(1, height)}
                style={{ ...fillAbsolute, opacity: 0.6, zIndex: 9998 }}
              />
            )}

            {/* RGB scanlines */}
            {scanlines && (
              <div
                style={{
                  ...fillAbsolute,
                  zIndex: 9999,
                  background: `
                    linear-gradient(rgba(18,16,16,0) 50%, rgba(0,0,0,0.25) 50%),
                    linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))
                  `,
                  backgroundSize: "100% 2px, 3px 100%",
                }}
              />
            )}
          </div>
        </div>

        {/* Vignette – outermost, on top of all layers */}
        {vignette && (
          <div
            style={{
              ...fillAbsolute,
              zIndex: 10000,
              backgroundImage:
                "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/86186/crt.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
            }}
          />
        )}
      </div>
    </>
  );
}
