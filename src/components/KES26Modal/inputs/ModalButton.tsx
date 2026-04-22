import type React from "react";

// MERCI https://makeaero.com/ POUR LE BOUTON AERO !!!
// THANKS https://makeaero.com/ FOR THE AERO BUTTON !!!

export type Color = "blue" | "red";

type ModalButtonProps = {
  children: React.ReactNode;
  color?: Color;
  href?: string;
  onClick?: () => void;
};

const COLOR_MAP: Record<Color, { hue: number; sat: number }> = {
  blue: { hue: 250, sat: 0.28 },
  red: { hue: 32, sat: 0.2 },
};

export default function ModalButton({
  children,
  color = "blue",
  href,
  onClick,
}: ModalButtonProps) {
  const css = `
  .modal-button-button {
  --hue: 142;
  --sat: 0.32;
  --glow-intensity: 0.45;

  --fg: oklch(15% calc(var(--sat) * 0.5) var(--hue));
  --bg: oklch(75% var(--sat) var(--hue) / 0.8);
  --bg-dark: oklch(45% var(--sat) var(--hue) / 0.75);
  --bottom-glow: radial-gradient(
    farthest-corner at bottom center,
    rgba(255, 255, 255, var(--glow-intensity)),
    transparent
    
  );

  display: flex;
  background-color: var(--bg);
  background: var(--bottom-glow), linear-gradient(to bottom, var(--bg-dark), var(--bg));

  border: 1px solid var(--bg);
  border-radius: 9999px;

  

  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
  text-shadow: 0 2px 0.5em rgba(0, 0, 0, 0.2);

  color: rgb(243, 243, 243);
  font-family: "Lucida Grande", "Lucida Sans Unicode", "Segoe UI", system-ui, sans-serif;
  font-weight: 700;

  cursor: pointer;
  position: relative;
  transition: all 300ms ease;

  user-select: none;
  -webkit-user-select: none;
}

.outer {

    border-radius: 9999px;
    padding: 4px 5px;
    border-color: rgba(255,255,255,0.18);
    box-shadow: inset 0 1px 3px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.18);
}

.modal-button-button::after {
  content: "";
  position: absolute;
  top: 4%;
  width: calc(100% - 1.1em);
  height: 40%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1));
  border-radius: inherit;
  transition: background 400ms ease;
  pointer-events: none;
}

.modal-button-button:hover,
.modal-button-button:focus {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
  transform: translateY(-1px);
}

.modal-button-button:active {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transform: translateY(1px);
}

.modal-button-button.small {
  padding: 0.6em;
  font-size: 0.675rem;
  aspect-ratio: 1 / 1;
  justify-content: center;
  align-items: center;
}}

`;
  const { hue, sat } = COLOR_MAP[color];

  return (
    <>
      <style>{css}</style>
      <div className="outer">
        <button
          className={`modal-button-button small`}
          style={{ "--hue": hue, "--sat": sat } as React.CSSProperties}
          onClick={onClick}
        >
          {href ? (
            <a href={href} target="_blank" rel="noreferrer">
              {children}
            </a>
          ) : (
            children
          )}
        </button>
      </div>
    </>
  );
}
