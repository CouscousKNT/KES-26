import React from "react";

interface ModalInnerFrameProps {
  children?: React.ReactNode;
}

export const ModalInnerFrame: React.FC<ModalInnerFrameProps> = ({
  children,
}) => (
  <div
    className="relative z-5 flex-1 overflow-y-auto mx-2 mt-4 mb-0 rounded-[20px]
      border-[1.5px] border-[#b8d4f0]
      outline outline-1 outline-white/90
      bg-white
      shadow-[inset_0_5px_5px_rgba(0,0,0,0.15),inset_0_0_0_1px_rgba(255,255,255,0.8)]"
  >
    {children}
  </div>
);

export default ModalInnerFrame;
