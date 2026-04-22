import React from "react";

interface FullscreenIconProps {
  isFullscreen: boolean;
  size?: number;
  width?: number;
  height?: number;
}

export const FullscreenIcon: React.FC<FullscreenIconProps> = ({
  isFullscreen,
  size,
  width = size ?? 9,
  height = size ?? 9,
}) =>
  isFullscreen ? (
    <svg width={width} height={height} viewBox="0 0 9 9" fill="currentColor">
      <path d="M3 0v3H0V2h2V0h1zm3 0h1v2h2v1H6V0zM0 6h3v3H2V7H0V6zm6 0h3v1H7v2H6V6z" />
    </svg>
  ) : (
    <svg width={width} height={height} viewBox="0 0 9 9" fill="currentColor">
      <path d="M0 0h4v1H1v3H0V0zM5 0h4v4H8V1H5V0zM0 5h1v3h3v1H0V5zM8 5h1v4H5V8h3V5z" />
    </svg>
  );

export default FullscreenIcon;
