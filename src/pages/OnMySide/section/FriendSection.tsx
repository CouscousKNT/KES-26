import GlassCard from "../components/GlassCard";
import SectionHeader from "../components/SectionHeader";
import Avatar from "../components/Avatar";
import csharpLogo from "../assets/friends/csharp.webp";
import typeScriptLogo from "../assets/friends/typescript.webp";
import phpLogo from "../assets/friends/php.webp";
import symfonyLogo from "../assets/friends/symfony.webp";
import mysqlLogo from "../assets/friends/mysql.webp";
import javaLogo from "../assets/friends/java.webp";

type Friend = {
  initials: string;
  pseudo: string;
  profilePicture: string;
};

const friends: Friend[] = [
  {
    initials: "TS",
    pseudo: "TypeScript",
    profilePicture: typeScriptLogo,
  },
  {
    initials: "PHP",
    pseudo: "PHP",
    profilePicture: phpLogo,
  },
  {
    initials: "CS",
    pseudo: "C#",
    profilePicture: csharpLogo,
  },
  {
    initials: "SF",
    pseudo: "Symfony",
    profilePicture: symfonyLogo,
  },
  {
    initials: "JV",
    pseudo: "Java",
    profilePicture: javaLogo,
  },
  {
    initials: "MS",
    pseudo: "MySQL",
    profilePicture: mysqlLogo,
  },
];

export default function FriendSection({ className }: { className?: string } = {}) {
  const css = ` 
  .sf-font { font-family: 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; }

.addressbar {
      background: linear-gradient(
    to bottom,
    #4d87d2 0%,
    #4d87d2 15%,
    #4d87d2 50%,
    #2b5db2 51%,
    #3369b6 65%,
    #65a6e2 100%
  );
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 0 2px 4px rgba(0,0,0,0.25);
}
.nav-back-forward-group {
  background: linear-gradient(to bottom, #bed9e0 0%, #87bed2 50%, #74acc3 51%, #7fb8cc 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 1px 2px rgba(0,0,0,0.3);
}
.nav-btn-divider { border-right: 1px solid #9a9a9a; }
.nav-btn:hover  { background: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.05)); }
.nav-btn:active { background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.05)); }

.refresh-btn:hover  {
  background: linear-gradient(to bottom, rgba(255,255,255,0.5), rgba(255,255,255,0.1));
  border-color: rgba(0,0,0,0.15);
}
.refresh-btn:active { background: rgba(0,0,0,0.08); }

.searchbar-input {
  background: linear-gradient(to bottom, #d0d0d0 0%, #e8e8e8 4%, #ffffff 100%);
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.2), inset 0 1px 2px rgba(0,0,0,0.15),
              0 1px 0 rgba(255,255,255,0.7);
}
.address-input::selection { background: #b3d5f5; }
.google-input::placeholder { color: #aaa; font-size: 11px; }

.tabbar {
  background: linear-gradient(to bottom, #49a3c8 0%, #4394c3 40%, #3b8db2 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
}
.tab-active {
  background: linear-gradient(to bottom, #f5f5f5 0%, #7ab0e0 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.9), 1px 0 0 rgba(0,0,0,0.1);
  border-bottom: 1px solid #ececec !important;
  margin-bottom: -1px;
}
.tab-inactive:hover {
  background: linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.05));
}
.tab-add-btn {
  background: linear-gradient(to bottom, #727a7e, #73a5bc);
  box-shadow: 0 1px 1px rgba(0,0,0,0.3);
}
.bookmarksbar {
  background: linear-gradient(to bottom, #8ecaef 0%, #6bb4eb 100%);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
}
.bookmark:hover {
  background: linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.2));
  border-color: rgba(0,0,0,0.12);
}
.bookmark:active {
  background: linear-gradient(to bottom, rgba(0,0,0,0.01), rgba(0,0,0,0.005));
}
.rss { background: linear-gradient(to bottom, #7ab0e0, #4a88c8); }

@keyframes refresh-bar {
  from { width: 5%;  opacity: 0.7; }
  to   { width: 95%; opacity: 1;   }
}
.refresh-bar { animation: refresh-bar 1.8s ease-in-out infinite alternate; }`;

  return (
    <>
      <style>{css}</style>
      <GlassCard className={className}>
        <SectionHeader title="Amis" badge={String(friends.length)} />
        <div className="p-3">
          <div className="grid grid-cols-3 gap-2">
            {friends.map((f, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 cursor-pointer rounded-lg p-1 transition-colors hover:bg-white/55"
              >
                <Avatar
                  size={56}
                  profilePicture={f.profilePicture}
                  initials={f.initials}
                />

                <div className="text-[9px] font-bold text-[#1a3a5c] text-center leading-tight w-[58px] overflow-hidden text-ellipsis whitespace-nowrap">
                  {f.pseudo}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[10px] border-t border-[rgba(175,220,255,0.35)] pt-2 text-center text-[10px] font-bold text-[#1a6fb5] cursor-pointer hover:underline">
            Voir tous les amis →
          </div>
        </div>
      </GlassCard>
    </>
  );
}
