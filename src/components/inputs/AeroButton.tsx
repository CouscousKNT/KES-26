const styles = {
  green: {
    background: "linear-gradient(180deg, #328840 0%, #8dd78f 100%)",
    boxShadow: `
      inset 0 1px 0 rgba(255,255,255,0.95),
      inset 0 -2px 3px rgba(30,100,40,0.3),
      0 2px 4px rgba(30,100,40,0.35),
      0 4px 12px rgba(90,180,100,0.3)
    `,
    color: "#173d1b",
    borderColor: "rgba(30,100,40,0.5)",
  },
  ice: {
    background:
      "linear-gradient(180deg, #7ba8d8 0%, #a8c8e8 45%, #c9e0f5 65%, #ffffff 100%)",
    boxShadow: `
      inset 0 1px 0 rgba(255,255,255,0.95),
      inset 0 -2px 3px rgba(30,80,160,0.3),
      0 2px 4px rgba(30,80,160,0.35),
      0 4px 8px rgba(30,80,160,0.2)
    `,
    color: "#1c4a8a",
    borderColor: "rgba(30,80,160,0.4)",
  },
};

const reflect = `
.aero-reflect::after {
  content: "";
  position: absolute;
  top: 5%;
  width: 95%;
  height: 40%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.1));
  border-radius: inherit;
  transition: background 400ms ease;
  pointer-events: none;
}
`;

interface AeroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "green" | "ice";
}

export function AeroButton({
  variant = "ice",
  className = "",
  children,
  ...props
}: AeroButtonProps) {
  return (
    <>
      <style>{reflect}</style>
      <button
        className={`aero-reflect relative flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[10px] border px-3.5 py-3 text-[17px] transition-transform duration-100 hover:-translate-y-px active:translate-y-px ${className}`}
        style={{ ...styles[variant] }}
        {...props}
      >
        {children}
      </button>
    </>
  );
}
