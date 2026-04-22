import { useState } from "react";
import React from "react";
import Avatar from "../Avatar";

export type CommentProps = {
  initials: string;
  pseudo: string;
  text: React.ReactNode;
  date: string;
};

export default function Comment({
  initials,
  pseudo,
  text,
  date,
}: CommentProps) {
  const [liked, setLiked] = useState(false);
  const css = `  
  .fa-comment-bubble {
    background: linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(230,245,255,0.5) 100%);
    box-shadow: 0 1px 4px rgba(0,60,180,0.08), inset 0 1px 0 rgba(255,255,255,0.6);
  }`;
  return (
    <>
      <style>{css}</style>
      <div className="flex items-start gap-2 px-[14px] py-2 border-b border-[rgba(180,215,255,0.22)] last:border-b-0 last:pb-3">
        <div className="flex-shrink-0">
          <Avatar initials={initials} size={26} radius={4} />
        </div>
        <div className="flex-1">
          <div className="fa-comment-bubble border border-[rgba(200,228,255,0.6)] rounded-[2px_10px_10px_10px] px-[10px] py-[7px]">
            <div className="text-[11px] font-bold text-[#0d4a8a] cursor-pointer mb-[2px] hover:underline">
              {pseudo}
            </div>
            <div className="text-[11px] text-[#1a3050] leading-[1.5]">
              {text}
            </div>
          </div>
          <div className="flex items-center gap-[10px] mt-1">
            <span className="text-[10px] text-[#5a8ab8]">{date}</span>
            <span
              className="text-[10px] font-bold cursor-pointer hover:underline"
              style={{ color: liked ? "#e04020" : "#3a7ac8" }}
              onClick={() => setLiked((l) => !l)}
            >
              {liked ? "J'aime ♥" : "J'aime"}
            </span>
            <span className="text-[10px] font-bold text-[#3a7ac8] cursor-pointer hover:underline">
              Répondre
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
