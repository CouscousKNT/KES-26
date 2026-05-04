import type { CSSProperties } from "react";
import { AeroButton } from "../../../components/inputs/AeroButton";

const pixelFont = { fontFamily: "'VT323', 'Courier New', monospace" };
const displayFont = { fontFamily: "'Orbitron', sans-serif" };

const S = {
  signalBar: {
    background: "linear-gradient(180deg, #4ba3dc 0%, #1c4a8a 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
  } satisfies CSSProperties,

  iconChip: {
    background:
      "linear-gradient(180deg, #ffffff 0%, #d6e6fa 50%, #9ec4e6 100%)",
    boxShadow: `
      inset 0 1px 0 rgba(255,255,255,0.9),
      inset 0 -1px 1px rgba(30,80,160,0.2),
      0 1px 2px rgba(30,80,160,0.3)
    `,
  } satisfies CSSProperties,

  battery: {
    background: "linear-gradient(180deg, #ffffff 0%, #d6e6fa 100%)",
  } satisfies CSSProperties,

  batteryCell: {
    background: "linear-gradient(180deg, #b4e58a 0%, #6bb83a 100%)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
  } satisfies CSSProperties,
};

const batteryReflect = `
/* Embout batterie */
.battery::after {
  content: '';
  position: absolute;
  right: -4px; top: 5px;
  width: 3px; height: 8px;
  background: #1c4a8a;
  border-radius: 0 2px 2px 0;
}
`;

export function ContactHeader() {
  return (
    <header
      className="w-full flex items-center gap-2 border-b-2 px-1 pb-2.5 pt-1.5"
      style={{
        ...pixelFont,
        borderColor: "rgba(30,80,160,0.25)",
        color: "#1c4a8a",
      }}
    >
      <style>{batteryReflect}</style>
      <div className="flex h-[18px] items-end gap-[2px]" aria-label="Signal">
        <span
          className="w-1 rounded-[1px]"
          style={{ ...S.signalBar, height: 6 }}
        />
        <span
          className="w-1 rounded-[1px]"
          style={{ ...S.signalBar, height: 10 }}
        />
        <span
          className="w-1 rounded-[1px]"
          style={{ ...S.signalBar, height: 14 }}
        />
        <span
          className="w-1 rounded-[1px]"
          style={{ ...S.signalBar, height: 18 }}
        />
      </div>

      <h1
        className="m-0 flex-1 text-center text-[22px] italic tracking-[2px]"
        style={{
          textShadow:
            "0 1px 0 rgba(255,255,255,0.7), 0 2px 3px rgba(30,80,160,0.3)",
          transform: "skewX(-6deg)",
          ...displayFont,
          fontWeight: 900,
          color: "#1c4a8a",
        }}
      >
        k-Message
      </h1>

      <div className="flex items-center gap-1.5">
        <AeroButton className="flex h-[22px] w-[26px] items-center justify-center rounded-[5px] border text-xs cursor-pointer">
          ✉
        </AeroButton>
        <AeroButton className="flex h-[22px] w-[26px] items-center justify-center rounded-[5px] border text-xs cursor-pointer">
          ♪
        </AeroButton>

        <div
          className="battery relative flex h-5 w-9 items-center gap-[2px] rounded-[3px] border-[1.5px] p-[2px]"
          style={{ ...S.battery, borderColor: "#1c4a8a" }}
          aria-label="Batterie pleine"
        >
          <span className="h-full flex-1 rounded-[1px]" style={S.batteryCell} />
          <span className="h-full flex-1 rounded-[1px]" style={S.batteryCell} />
          <span className="h-full flex-1 rounded-[1px]" style={S.batteryCell} />
        </div>
      </div>
    </header>
  );
}
