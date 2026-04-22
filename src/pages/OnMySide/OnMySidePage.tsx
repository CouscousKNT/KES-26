import SearchBar from "./components/searchbar/SearchBar";
import Post from "./components/Post/Post";
import BannerSection from "./section/BannerSection";
import ContactSection from "./section/ContactSection";
import FormationSection from "./section/FormationSection";
import ProjectSection from "./section/ProjectSection";
import LanguageSection from "./section/LanguageSection";
import FriendSection from "./section/FriendSection";
import "./OnMySidePage.css";
import backgroundImg from "./assets/background2.jpg";
import coolEmoji from "./assets/emoji/cool.gif";
import hapEmoji from "./assets/emoji/hap.gif";
import noelEmoji from "./assets/emoji/noel.gif";
import rougeEmoji from "./assets/emoji/rouge.gif";
import merciEmoji from "./assets/emoji/merci.gif";
import honteEmoji from "./assets/emoji/honte.gif";
import sourirEmoji from "./assets/emoji/sourire.gif";

function Header() {
  return (
    <div
      className="sticky top-23 z-[200] border-b-2 border-[#062888] shadow-[0_3px_14px_rgba(0,0,120,0.45)] h-10 flex items-center px-4 pt-1 gap-3 overflow-hidden relative"
      style={{
        background:
          "linear-gradient(180deg, #1e78dc 0%, #0d52b8 45%, #083aa0 100%)",
      }}
    >
      {/* REFLET HAUT TITRE */}
      <div
        style={{
          width: "100%",
          height: "5px",
          opacity: 0.9,
          position: "absolute",
          right: "0px",
          top: "3px",
          borderRadius: "7px 7px 7px 7px",
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5))",
        }}
      />
      {/* Remplace .topnav::after */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "52%",
          background:
            "linear-gradient(180deg, rgba(255,255,255,.24) 0%, transparent 100%)",
        }}
      />

      <div className="text-[21px] font-bold text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.5),0_0_22px_rgba(80,200,255,0.8)] tracking-tight flex-shrink-0 relative z-[1]">
        <span className="text-[#80eeff]">on</span>MySide
      </div>
      <div className="flex items-center bg-white/95 border border-white/40 rounded-[13px] px-3 py-[3px] gap-1 relative z-[1]">
        <span>🔍</span>
        <input
          type="text"
          placeholder="Rechercher des profils, un ami..."
          className="bg-transparent border-none outline-none text-black text-[11px] w-40 placeholder-black/60"
        />
      </div>
      <div className="hidden sm:flex items-center gap-px ml-auto relative z-[1]">
        {["Profil", "Amis", "Messages"].map((link) => (
          <div
            key={link}
            className="text-white/90 text-[11px] font-bold px-[9px] py-[5px] rounded-md cursor-pointer hover:bg-white/20 transition-colors [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]"
          >
            {link}
          </div>
        ))}
      </div>
      <div className="hidden sm:flex items-center gap-2 bg-white/20 border border-white/40 rounded-[14px] py-[3px] pr-3 pl-1 cursor-pointer relative z-[1]">
        <div className="w-[26px] h-[26px] rounded-full bg-gradient-to-br from-[#80eeff] to-[#2090d0] border border-white/65 flex items-center justify-center text-[10px] font-bold text-white">
          LV
        </div>
        <span className="text-white text-[11px] font-bold [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
          Le Visiteur
        </span>
      </div>
    </div>
  );
}

export default function OnMySidePage() {
  return (
    <div
      className="font-[Tahoma,'Trebuchet_MS','Lucida_Grande',sans-serif] text-[11px] text-[#1a3a5c] min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <style>{`
        @keyframes cv-fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <SearchBar />
      <Header />

      <div className="max-w-[1010px] mx-auto px-3 pb-[50px] pt-[14px] flex flex-col gap-[11px]">
        {/* Enfant 1 — animation-delay: .05s */}
        <div
          style={{
            animation: "cv-fadeUp .38s ease both",
            animationDelay: ".05s",
          }}
        >
          <BannerSection />
        </div>

        {/* Enfant 2 — animation-delay: .13s */}
        <div
          className="sm:flex gap-[11px]"
          style={{
            animation: "cv-fadeUp .38s ease both",
            animationDelay: ".13s",
          }}
        >
          {/* Colonne gauche */}
          <div className="w-[218px] flex-shrink-0 flex flex-col gap-[11px]">
            <FormationSection className="hidden sm:block" />
            <FriendSection className="hidden sm:block" />
            <LanguageSection className="hidden sm:block" />
          </div>
          {/* Colonne droite */}
          <div className="flex-1 flex flex-col gap-[11px]">
            <ContactSection />

            <Post
              pseudo="Ousmane ︻╦╤─"
              pseudoInitials="OK"
              date="Avril - Juin 2025"
              likes={142}
              content={
                <>
                  Trop content d'avoir bossé avec{" "}
                  <span className="text-[#1060b0] font-bold cursor-pointer hover:underline">
                    @Clair Obscur
                  </span>{" "}
                  en tant que{" "}
                  <em>
                    <b>Développeur Web.</b>
                  </em>{" "}
                  <img
                    src={noelEmoji}
                    alt="noel"
                    className="inline w-4 h-4 align-middle"
                  />
                  <img
                    src={noelEmoji}
                    alt="noel"
                    className="inline w-4 h-4 align-middle"
                  />{" "}
                  À partir d'une maquette, j'ai créé un site stylé, responsive,
                  SEO Friendly et accessible à tous. Développé avec React et
                  TailwindCSS. Le lien :{" "}
                  <a
                    href="https://clair-obscur-v2.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    clair-obscur-v2.vercel.app
                  </a>{" "}
                  envoyez de la force !!{" "}
                  <img
                    src={merciEmoji}
                    alt="merci"
                    className="inline w-9 h-8 align-middle"
                  />{" "}
                  <span className="text-[#1870c8] cursor-pointer hover:underline">
                    #Front-End
                  </span>{" "}
                  <span className="text-[#1870c8] cursor-pointer hover:underline">
                    #React
                  </span>
                </>
              }
              comments={[
                {
                  initials: "MR",
                  pseudo: "Meg ROSKÜY",
                  text: (
                    <>
                      Bien guez{" "}
                      <img
                        src={honteEmoji}
                        alt="honte"
                        className="inline w-4 h-4 align-middle"
                      />
                    </>
                  ),
                  date: "Il y a 2 h",
                },
                {
                  initials: "ZL",
                  pseudo: "Zizou L.",
                  text: "L'amour du projet !",
                  date: "Il y a 45 min",
                },
              ]}
            />

            <Post
              pseudo="Ousmane ︻╦╤─"
              pseudoInitials="OK"
              date="Avril - Août 2024"
              likes={87}
              showImage={false}
              content={
                <>
                  <span className="text-[#1870c8] cursor-pointer hover:underline">
                    <em>
                      #<b>Assistant Ingénieur</b>
                    </em>
                  </span>{" "}
                  <img
                    src={coolEmoji}
                    alt="cool"
                    className="inline w-4 h-4 align-middle"
                  />{" "}
                  Enrichissement de fonctionnalités, migration de paramètres,
                  collaboration avec l'équipe de développement, BREFFF J'ai trop
                  appris au sein de{" "}
                  <span className="text-[#1060b0] font-bold cursor-pointer hover:underline">
                    @Blg
                  </span>
                  !{" "}
                  <img
                    src={rougeEmoji}
                    alt="rouge"
                    className="inline w-4 h-4 align-middle"
                  />
                  <img
                    src={rougeEmoji}
                    alt="rouge"
                    className="inline w-4 h-4 align-middle"
                  />
                  Énorme merci à eux de m'avoir accueilli !!
                  <span className="text-[#1870c8] cursor-pointer hover:underline">
                    #Javascript
                  </span>{" "}
                  <span className="text-[#1870c8] cursor-pointer hover:underline">
                    #PHP
                  </span>
                </>
              }
              comments={[
                {
                  initials: "MG",
                  pseudo: "Mathis G.",
                  text: "T un tigre !",
                  date: "Il y a 2 ans",
                },
              ]}
            />

            <Post
              pseudo="Ousmane ︻╦╤─"
              pseudoInitials="OK"
              date="Avril	-	Juin	2022"
              likes={214}
              showImage={false}
              content={
                <>
                  Mon tout premier stage chez{" "}
                  <span className="text-[#1060b0] font-bold cursor-pointer hover:underline">
                    @SDIS80
                  </span>{" "}
                  en tant que{" "}
                  <em>
                    <b>Développeur Web</b>
                  </em>{" "}
                  !!{" "}
                  <img
                    src={hapEmoji}
                    alt="hap"
                    className="inline w-4 h-4 align-middle"
                  />
                  <img
                    src={hapEmoji}
                    alt="hap"
                    className="inline w-4 h-4 align-middle"
                  />
                  <img
                    src={hapEmoji}
                    alt="hap"
                    className="inline w-4 h-4 align-middle"
                  />{" "}
                  J'ai finalisé la mise en place d'un logiciel de prévention.{" "}
                  Merci à toute l'équipe pour leur accueil et leur bienveillance
                  !!
                  <span className="text-[#1870c8] cursor-pointer hover:underline">
                    #PHP
                  </span>{" "}
                  <span className="text-[#1870c8] cursor-pointer hover:underline">
                    #Back-End
                  </span>{" "}
                </>
              }
              comments={[
                {
                  initials: "OR",
                  pseudo: "Olivier R.",
                  text: "Wow !",
                  date: "Il y a 6 mois",
                },
                {
                  initials: "MP",
                  pseudo: "Marie P.",
                  text: (
                    <>
                      Beau travail le mangeur de churros{" "}
                      <img
                        src={sourirEmoji}
                        alt="sourire"
                        className="inline w-4 h-4 align-middle"
                      />
                      <img
                        src={sourirEmoji}
                        alt="sourire"
                        className="inline w-4 h-4 align-middle"
                      />
                    </>
                  ),
                  date: "Il y a 6 mois",
                },
              ]}
            />

            <ProjectSection />
          </div>
        </div>

        {/* Enfant 3 — animation-delay: .21s */}
        <div
          className="text-center text-[10px] text-white/60 py-2 [text-shadow:0_1px_2px_rgba(0,0,80,0.42)]"
          style={{
            animation: "cv-fadeUp .38s ease both",
            animationDelay: ".21s",
          }}
        >
          KES-26 © 2026 — Ousmane Kanoute
        </div>
      </div>
    </div>
  );
}
