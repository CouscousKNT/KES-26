import { useState } from "react";
import type React from "react";
import CommentIcon from "../../../../assets/icons/CommentIcon";
import GlobeIcon from "../../../../assets/icons/GlobeIcon";
import ShareIcon from "../../../../assets/icons/ShareIcon";
import ThumbIcon from "../../../../assets/icons/ThumbIcon";
import ActionButton from "./ActionButton";
import Avatar from "../Avatar";
import Comment, { type CommentProps } from "./Comment";

export type PostProps = {
  pseudo: string;
  pseudoInitials: string;
  date: string;
  content: React.ReactNode;
  showImage?: boolean;
  likes?: number;
  comments?: CommentProps[];
};

export default function Post({
  pseudo,
  pseudoInitials,
  date,
  content,
  showImage = true,
  likes = 0,
  comments = [],
}: PostProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [commentText, setCommentText] = useState("");
  const [localComments, setLocalComments] = useState(comments);
  const [showComments, setShowComments] = useState(false);

  const handleLike = () => {
    setLiked((v) => {
      setLikeCount((c) => (v ? c - 1 : c + 1));
      return !v;
    });
  };

  const handleComment = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && commentText.trim()) {
      setLocalComments((prev) => [
        ...prev,
        {
          initials: "LV",
          pseudo: "Le Visiteur",
          text: commentText.trim(),
          date: "À l'instant",
        },
      ]);
      setCommentText("");
    }
  };

  return (
    <div
      className="w-full backdrop-blur-sm border-2 border-white/75 rounded-[10px] overflow-hidden relative"
      style={{
        background:
          "linear-gradient(155deg, rgba(255,255,255,0.58) 0%, rgba(195,232,255,0.4) 100%)",
        boxShadow:
          "0 4px 22px rgba(0,80,180,0.4), inset 0 1px 0 rgba(255,255,255,0.75)",
      }}
    >
      {/* Remplace .fa-card::before */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none rounded-t-[10px] z-0"
        style={{
          height: "42%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.38) 0%, transparent 100%)",
        }}
      />
      {/* REFLET HAUT TITRE */}
      <div
        style={{
          width: "calc(100% - 10px)",
          height: "20px",
          opacity: 1,
          position: "absolute",
          right: "5px",
          top: "3px",
          borderRadius: "7px 7px 0px 0px",
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))",
        }}
      />

      {/* ── HEADER ── */}
      <div className="flex items-start gap-[9px] px-[14px] pt-3 relative z-10">
        <Avatar
          initials={pseudoInitials}
          profilePicture="./avatar.jpg"
          size={38}
          radius={5}
          online
        />
        <div className="flex-1">
          <div className="text-[12px] font-bold text-[#0d4a8a] cursor-pointer hover:underline [text-shadow:0_1px_0_rgba(255,255,255,0.7)]">
            {pseudo}
          </div>
          <div className="text-[10px] text-[#3a6a9a] mt-px flex items-center gap-1">
            <span>{date}</span>
            <span>·</span>
            <GlobeIcon color={"#3a6a9a"} size={10} />
          </div>
        </div>
      </div>

      {/* ── CORPS ── */}
      <div className="px-[14px] pt-[10px] pb-3 text-[12px] leading-[1.6] text-[#1a3050] relative z-10">
        {content}
      </div>

      {/* ── IMAGE placeholder ── */}
      {showImage && (
        <div className="w-full border-t border-white/50 border-b border-[rgba(180,215,255,0.4)] relative overflow-hidden z-10" />
      )}

      {/* ── STATS ── */}
      <div
        className="flex items-center justify-between px-[14px] py-[7px] border-t border-b border-[rgba(180,215,255,0.45)] relative z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(220,240,255,0.5) 0%, rgba(195,228,255,0.3) 100%)",
        }}
      >
        <div className="flex items-center gap-[5px] text-[11px] text-[#2a5a8c]">
          <div
            className="w-[18px] h-[18px] rounded-full border border-white/60 flex items-center justify-center flex-shrink-0"
            style={{
              background:
                "linear-gradient(180deg, #6ac8f0 0%, #2090d0 50%, #0060b0 100%)",
              boxShadow: "0 1px 4px rgba(0,80,180,0.3)",
            }}
          >
            <ThumbIcon size={11} color="#fff" />
          </div>
          <span>
            <strong className="text-[#1060b0]">{liked ? "Vous" : ""}</strong>
            {liked && likeCount - 1 > 0
              ? ` et ${likeCount - 1} autres personnes`
              : ""}
            {!liked && likeCount > 0 ? `${likeCount} personnes aiment ça` : ""}
            {liked && likeCount === 1 ? " aimez ça" : ""}
          </span>
        </div>
        <span
          className="text-[11px] text-[#2a5a8c] cursor-pointer hover:underline"
          onClick={() => setShowComments((v) => !v)}
        >
          {localComments.length} commentaire
          {localComments.length > 1 ? "s" : ""}
        </span>
      </div>

      {/* ── ACTIONS ── */}
      <div className="flex border-b border-[rgba(180,215,255,0.35)] relative z-10">
        <ActionButton
          label={liked ? "J'aime ♥" : "J'aime"}
          icon={<ThumbIcon size={14} color={liked ? "#2a5a8c" : "#3a7ac8"} />}
          onClick={handleLike}
          extra={liked ? "text-[#1060b0]" : ""}
        />
        <ActionButton
          label="Commenter"
          icon={<CommentIcon size={14} color="#2a5a8c" />}
          onClick={() => setShowComments((v) => !v)}
        />
        <ActionButton
          label="Partager"
          icon={<ShareIcon size={14} color="#2a5a8c" />}
        />
      </div>

      {/* ── COMMENTAIRES ── */}
      {showComments && (
        <div className="relative z-10">
          {/* Input */}
          <div className="flex items-center gap-2 px-[14px] py-[10px] border-b border-[rgba(180,215,255,0.3)]">
            <Avatar initials={"LV"} size={29} radius={5} />
            <input
              className="flex-1 border border-[rgba(100,160,255,0.5)] rounded-[12px] px-3 py-[6px] text-[11px] text-[#1a3050] outline-none transition-colors focus:border-[rgba(50,130,255,0.7)] placeholder-[#7aaacf]"
              style={{
                background:
                  "linear-gradient(180deg, #d8eeff 0%, #eef7ff 4%, #ffffff 100%)",
                boxShadow: "inset 0 2px 4px rgba(0,60,180,0.1)",
              }}
              type="text"
              placeholder="Écrire un commentaire..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              onKeyDown={handleComment}
            />
          </div>

          {/* Liste */}
          {localComments.map((c, i) => (
            <Comment key={i} {...c} />
          ))}
        </div>
      )}
    </div>
  );
}
