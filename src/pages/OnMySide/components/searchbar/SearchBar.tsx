import React, { useState } from "react";
import "./SearchBar.css";
import BookmarksBar from "./bookmark/BookmarksBar";
import TabBar, { type TabProps } from "./tab/TabBar";
import GlobeIcon from "../../../../assets/icons/GlobeIcon";
import SearchIcon from "../../../../assets/icons/SearchIcon";
import RefreshIcon from "../../../../assets/icons/RefreshIcon";
import BackIcon from "../../../../assets/icons/BackIcon";
import ForwardIcon from "../../../../assets/icons/ForwardIcon";

let tabCounter = 4;
const initialTabs: TabProps[] = [
  { id: 1, label: "OnMySide - Ousma...", couleur: "#4a90e2", lettre: "O" },
  {
    id: 2,
    label: "Habbo | Se faire d...",
    couleur: "#fdec00",
    lettre: "H",
  },
  { id: 3, label: "Blablaland Tchat Grat...", couleur: "#c703a6", lettre: "B" },
];

export default function SearchBar() {
  const [tabs, setTabs] = useState(initialTabs);
  const [activeTab, setActiveTab] = useState(1);
  const [refreshAnimation, setRefreshAnimation] = useState(false);

  const closeTab = (id: number) => {
    const remaining = tabs.filter((t) => t.id !== id);
    setTabs(remaining);
    if (activeTab === id && remaining.length > 0)
      setActiveTab(remaining[remaining.length - 1].id);
  };

  const addTab = () => {
    const t = {
      id: tabCounter++,
      label: "Nouvel onglet",
      couleur: "#888",
      lettre: "N",
    };
    setTabs((prev) => [...prev, t]);
    setActiveTab(t.id);
  };

  const handleRefreshAnimation = () => {
    setRefreshAnimation(true);
    setTimeout(() => setRefreshAnimation(false), 1800);
  };

  return (
    <>
      <div className="sf-font overflow-hidden shadow-2xl sticky top-0 z-200">
        <div className="addressbar flex items-center gap-2 px-2.5 py-1.5 border-b border-[#8a8a8a] select-none">
          {/* Back / Forward buttons */}
          <div className="nav-back-forward-group flex items-center rounded-xl border border-[#8a8a8a] overflow-hidden">
            <button
              title="Précédent"
              className="nav-btn nav-btn-divider flex items-center justify-center w-8 h-[26px] bg-transparent border-none text-[#444] cursor-pointer transition-[background] duration-[80ms]
               opacity-35 pointer-events-none"
            >
              <BackIcon color={"#555"} />
            </button>
            <button
              title="Suivant"
              className="nav-btn flex items-center justify-center w-8 h-[26px] bg-transparent border-none text-[#444] cursor-pointer transition-[background] duration-[80ms]"
            >
              <ForwardIcon color={"#555"} />
            </button>
          </div>

          {/* Refresh button */}
          <button
            title="Recharger"
            onClick={handleRefreshAnimation}
            className="refresh-btn flex items-center justify-center w-[30px] h-[26px] rounded-md border border-transparent bg-transparent text-[#444] cursor-pointer transition-all duration-[80ms]"
          >
            <RefreshIcon color={"#555"} />
          </button>

          {/* Address bar */}
          <div className="searchbar-input flex-1 flex items-center gap-1 border border-[#8a8a8a] rounded-[10px] px-2 h-[26px] cursor-text">
            <GlobeIcon size={14} color={"#888"} />
            <input
              type="text"
              defaultValue="www.onmyside.fr/profil.php?id=1776241621012002"
              spellCheck={false}
              onClick={(e: React.MouseEvent<HTMLInputElement>) =>
                e.currentTarget.select()
              }
              className="address-input flex-1 border-none outline-none bg-transparent text-[12px] text-[#222] text-center"
            />
            <span className="rss text-white text-[9px] font-bold tracking-wide border border-[#3a70b0] rounded-[3px] px-1 py-px cursor-pointer shrink-0">
              RSS
            </span>
          </div>

          {/* Search bar Google */}
          <div className="searchbar-input hidden md:flex items-center gap-1 border border-[#8a8a8a] rounded-[10px] px-1.5 h-[26px] w-[140px]">
            <SearchIcon color={"#555"} />
            <input
              type="text"
              placeholder="Google"
              spellCheck={false}
              className="google-input flex-1 border-none outline-none bg-transparent text-[12px] text-[#222] min-w-0"
            />
          </div>
        </div>

        {/* ── Tab bar ── */}
        <TabBar
          tabs={tabs}
          activeTab={activeTab}
          onSelect={setActiveTab}
          onClose={closeTab}
          onAdd={addTab}
        />

        {/* ── Bookmarks bar ── */}
        <BookmarksBar />

        {/* ── Refresh loading animation ── */}
        {refreshAnimation && (
          <div className="refresh-bar h-[3px] bg-gradient-to-r from-[#4a90e2] to-[#73b6ff]" />
        )}
      </div>
    </>
  );
}
