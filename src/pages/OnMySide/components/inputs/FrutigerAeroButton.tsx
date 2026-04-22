import type React from "react";

// MERCI https://makeaero.com/ POUR LE BOUTON AERO !!!
// THANKS https://makeaero.com/ FOR THE AERO BUTTON !!!
export type Color = "green" | "blue" | "orange" | "purple" | "pink";
type Size = "small" | "medium" | "large";

type FrutigerAeroButtonProps = {
  children: React.ReactNode;
  color?: Color;
  size?: Size;
  href?: string;
  onClick?: () => void;
};

const COLOR_MAP: Record<Color, { hue: number; sat: number }> = {
  green: { hue: 142, sat: 0.48 },
  blue: { hue: 250, sat: 0.28 },
  orange: { hue: 102, sat: 0.3 },
  purple: { hue: 295, sat: 0.28 },
  pink: { hue: 340, sat: 0.28 },
};

export default function FrutigerAeroButton({
  children,
  color = "green",
  size = "small",
  href,
  onClick,
}: FrutigerAeroButtonProps) {
  const css = `
  .frutiger-aero-button {
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

.frutiger-aero-button::after {
  content: "";
  position: absolute;
  top: 4%;
  left: 0.75em;
  width: calc(100% - 1.5em);
  height: 40%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1));
  border-radius: inherit;
  transition: background 400ms ease;
  pointer-events: none;
}

.frutiger-aero-button:hover,
.frutiger-aero-button:focus {
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.4);
  transform: translateY(-1px);
}

.frutiger-aero-button:active {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transform: translateY(1px);
}

.frutiger-aero-button.small {
  padding: 0.5em 1.5em;
  font-size: 0.675rem;
}

.frutiger-aero-button.medium {
  padding: 0.75em 2em;
  font-size: 1rem;
}

.frutiger-aero-button.large {
  padding: 1em 3em;
  font-size: 1.125rem;
}
`;
  const { hue, sat } = COLOR_MAP[color];

  return (
    <>
      <style>{css}</style>

      <button
        className={`frutiger-aero-button ${size}`}
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
    </>
  );
}
