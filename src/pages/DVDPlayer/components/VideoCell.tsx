import noImg from "../assets/img/no_img.jpg";
import type { Video } from "../videos";

interface VideoCellProps {
  video: Video;
  selected: boolean;
  onClick: () => void;
  onDoubleClick: () => void;
  font: string;
}

export default function VideoCell({
  video,
  selected,
  onClick,
  onDoubleClick,
  font,
}: VideoCellProps) {
  return (
    <div
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={`flex flex-col cursor-pointer min-h-[96px] overflow-hidden max-w-[600px] rounded-[10px] ${
        selected ? "bg-[rgba(18,40,104,0.65)]" : "bg-[rgba(13,32,80,0.55)]"
      }`}
      style={{
        boxShadow: selected
          ? "inset 3px 3px 6px #050e28, inset -1px -1px 0px #1a3570, 0 0 0 2px #fff"
          : "inset 3px 3px 6px #050e28, inset -1px -1px 0px #1a3570",
      }}
    >
      <div className="flex items-stretch flex-1">
        <div className="w-[118px] min-w-[118px] bg-[#040810] flex items-center justify-center overflow-hidden shrink-0">
          {video.imageFilm ? (
            <img
              src={video.imageFilm}
              alt={video.titleFilm}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={noImg}
              alt={"no image"}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="w-full">
          <div className="bg-[#0a3d89] px-2 py-[3px] flex items-center shrink-0 relative overflow-hidden border-t border-white/40">
            <span
              className="text-white text-[13px] leading-[1.2] relative z-[1]"
              style={{ fontFamily: font }}
            >
              {video.numFilm}
            </span>
          </div>

          <div className="px-[10px] py-[6px] flex flex-col gap-[2px] flex-1 h-full bg-[rgba(8,24,64,0.4)] border-l-2 border-white/10">
            <div
              className="text-white text-[11px] leading-[1.6]"
              style={{ fontFamily: font }}
            >
              {video.titleFilm}&nbsp;&nbsp;&nbsp;{video.dateFilm}
            </div>
            <div
              className="text-white text-[11px] leading-[1.6]"
              style={{ fontFamily: font }}
            >
              {video.descriptionFilm}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
