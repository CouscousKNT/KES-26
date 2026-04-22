import GlassCard from "../components/GlassCard";
import FrutigerAeroButton from "../components/inputs/FrutigerAeroButton";
import Avatar from "../components/Avatar";
import GlobeIcon from "../../../assets/icons/GlobeIcon";
import bannerImg from "../assets/banner.jpg";

export default function BannerSection() {
  return (
    <GlassCard>
      <div
        className="relative h-[220px] overflow-hidden"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* REFLET HAUT TITRE */}
        <div
          style={{
            width: "calc(100% - 10px)",
            height: "20px",
            opacity: 0.9,
            position: "absolute",
            right: "5px",
            top: "3px",
            borderRadius: "7px 7px 0px 0px",
            background:
              "linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))",
          }}
        />
        {/* .banner-overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,.4) 0%, transparent 60%)",
          }}
        />

        {/* .banner-gradient-shadow */}
        <div
          className="absolute bottom-0 left-0 right-0 flex items-end gap-3 px-4 py-3"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,18,55,.72) 0%, transparent 100%)",
          }}
        >
          <div className="relative flex-shrink-0">
            <Avatar
              initials="OK"
              profilePicture="./avatar.jpg"
              radius={9}
              size={68}
            />
            {/* .online */}
            <div
              className="absolute bottom-[2px] right-[2px] w-[13px] h-[13px] rounded-full border-2 border-white"
              style={{
                background:
                  "radial-gradient(circle at 32% 26%, #a0ff70 0%, #28b808 100%)",
                boxShadow: "0 0 7px rgba(50,200,30,.72)",
              }}
            />
          </div>

          <div className="flex-1">
            <div className="text-[20px] font-bold text-white [text-shadow:0_1px_4px_rgba(0,0,0,.6)] tracking-tight">
              Ousmane ︻╦╤─
            </div>
            <div className="flex gap-1">
              <div className="text-[11px] text-[rgba(200,230,255,0.9)] mt-[2px]">
                Développeur FullStack · Haut-de-France
              </div>
              <div className="flex justify-center items-center">
                <GlobeIcon size={9} color={"#f8f8f8"} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[5px] items-end">
            <FrutigerAeroButton color="blue" size="small">
              ✉ Envoyer un message
            </FrutigerAeroButton>
            <FrutigerAeroButton color="orange" size="small">
              + Ajouter en ami
            </FrutigerAeroButton>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
