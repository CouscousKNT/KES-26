import React from "react";

interface ModalFooterProps {
  children?: React.ReactNode;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children }) => (
  <div
    className="h-[20px] bg-[linear-gradient(to_bottom,#F6FCFC_0%,#BFE1FE_20%,#5DB3F3_51%,#5DB3F3_98%,#77B3E0_100%)] flex items-center justify-center"
    aria-hidden
  >
    {children}
  </div>
);

export default ModalFooter;
