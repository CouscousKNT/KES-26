import camcoderWebp from "../assets/items/CAMCODER-ITEM.webp";
import camcoderGif from "../assets/items/CAMCODER-ITEM.gif";
import laptopWebp from "../assets/items/PC-ITEM.webp";
import laptopGif from "../assets/items/PC-ITEM.gif";
import smartphoneWebp from "../assets/items/PHONE-ITEM.webp";
import smartphoneGif from "../assets/items/PHONE-ITEM.gif";
import cdWebp from "../assets/items/CD-ITEM.webp";
import cdGif from "../assets/items/CD-ITEM.gif";
import starWebp from "../assets/items/STAR-ITEM.webp";
import starGif from "../assets/items/STAR-ITEM.gif";
import platformImg from "../assets/items/plateformCompressed.png";
import { useState } from "react";

// Fonction executé lorsque l'on clique sur un item
interface ItemsPlacementParamsProps {
  onVideoClick: () => void;
  onContactClick: () => void;
  onProjetClick: () => void;
  onMusicClick: () => void;
}

interface ItemProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  // Placement vertical sur la plateforme
  bottomOffset: string;
  onClick?: () => void;
}

interface PlatformProps {
  id: string;
  items: ItemProps[];
}

interface ItemIconProps {
  staticSrc: string;
  animatedSrc: string;
  alt: string;
}
function ItemIcon({ staticSrc, animatedSrc, alt }: ItemIconProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <img
      src={hovered ? animatedSrc : staticSrc}
      alt={alt}
      style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.3))" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}

export default function ItemsPlacement({
  onVideoClick,
  onContactClick,
  onProjetClick,
  onMusicClick,
}: ItemsPlacementParamsProps) {
  const platforms: PlatformProps[] = [
    {
      id: "platform1",
      items: [
        {
          id: "videos",
          label: "Vidéos",
          icon: (
            <ItemIcon
              staticSrc={camcoderWebp}
              animatedSrc={camcoderGif}
              alt="Mes Projets Informatiques"
            />
          ),
          bottomOffset: "bottom-[-48px] md:bottom-[-59px]",
          onClick: onVideoClick,
        },
        {
          id: "contact",
          label: "Contact",
          icon: (
            <ItemIcon
              staticSrc={smartphoneWebp}
              animatedSrc={smartphoneGif}
              alt="Mes Projets Informatiques"
            />
          ),
          bottomOffset: "bottom-[-43px] md:bottom-[-50px]",
          onClick: onContactClick,
        },
        {
          id: "projets",
          label: "Projets",
          icon: (
            <ItemIcon
              staticSrc={laptopWebp}
              animatedSrc={laptopGif}
              alt="Mes Projets Informatiques"
            />
          ),
          bottomOffset: "bottom-[-45px] md:bottom-[-53px]",
          onClick: onProjetClick,
        },
      ],
    },
    {
      id: "platform2",
      items: [
        {
          id: "music",
          label: "Musique",
          icon: (
            <ItemIcon
              staticSrc={cdWebp}
              animatedSrc={cdGif}
              alt="Mes Musiques"
            />
          ),
          bottomOffset: "bottom-[-42px] md:bottom-[-50px]",
          onClick: onMusicClick,
        },
        {
          id: "blog",
          label: "???",
          icon: (
            <ItemIcon staticSrc={starWebp} animatedSrc={starGif} alt="???" />
          ),
          bottomOffset: "bottom-[-43px] md:bottom-[-51px]",
        },
      ],
    },
  ];
  return platforms.map((platform: PlatformProps) => (
    <div key={platform.id} className="relative flex justify-center">
      <div className="relative w-full max-w-[1000px] h-[80px] md:h-[120px] ">
        <div className="flex items-end justify-center gap-[10px] md:gap-[60px] pb-1 relative bottom-[1px] z-[2] h-full">
          {platform.items.map((item: ItemProps) => {
            return (
              <div
                key={item.id}
                className={`group min-w-[120px] w-[120px] md:w-[180px] relative cursor-pointer flex flex-col items-center hover:z-10 ${item.bottomOffset}`}
                style={{
                  objectFit: "contain",
                }}
                onClick={item.onClick ? item.onClick : () => {}}
              >
                {item.icon}
                <div className="absolute bottom-[-9px] left-1/2 -translate-x-1/2 border border-transparent text-white [text-shadow:0_3px_3px_rgba(0,0,0,0.6)] [font-family:-apple-system,'Helvetica_Neue',Helvetica,Arial,sans-serif] text-[13px] font-bold tracking-[0.01em] py-[2px] px-[9px] rounded whitespace-nowrap pointer-events-none transition-[border-color,box-shadow] duration-200 group-hover:border-[rgba(255,255,255,0.18)] group-hover:shadow-[0_1px_3px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.18)]">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
        <img
          src={platformImg}
          alt=""
          className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 w-[680px] h-[150px] md:h-[190px] pointer-events-none"
        />
      </div>
    </div>
  ));
}
