interface NavButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  font: string;
}

export default function NavButton({
  children,
  onClick,
  disabled,
  font,
}: NavButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex-1 border-none rounded text-white text-[13px] py-[7px] text-center tracking-[0.05em] transition-colors duration-100 ${
        disabled
          ? "opacity-[0.35] cursor-default bg-[#0d2050]"
          : "cursor-pointer bg-[#0d2050] hover:bg-[#162e68]"
      }`}
      style={{
        fontFamily: font,
        boxShadow: "inset 3px 3px 5px #050e28, inset -1px -1px 0px #1a3570",
      }}
    >
      {children}
    </button>
  );
}
