export type TabProps = {
  id: number;
  label: string;
  couleur: string;
  lettre: string;
};

const TabFavicon = ({
  couleur,
  lettre,
}: {
  couleur: string;
  lettre: string;
}) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    className="rounded-sm shrink-0"
  >
    <rect width="12" height="12" rx="2" fill={couleur} />
    <text x="2" y="9" fill="white" fontSize="8" fontFamily="sans-serif">
      {lettre}
    </text>
  </svg>
);

export default function Tab({
  tab,
  isActive,
  onSelect,
  onClose,
}: {
  tab: TabProps;
  isActive: boolean;
  onSelect: () => void;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      className={`flex items-center gap-1 px-2.5 h-6 text-[11px] cursor-pointer rounded-t-md border border-transparent transition-[background] duration-100 max-w-[180px] min-w-0
        ${isActive ? "tab-active border-[#8a8a8a] text-[#111] z-10" : "tab-inactive bg-transparent text-[#333]"}`}
    >
      {/* Favicon - Une lettre et un fond couleuré */}
      <TabFavicon couleur={tab.couleur} lettre={tab.lettre} />

      {/* Label Onglet */}
      <span className="flex-1 min-w-0 overflow-hidden whitespace-nowrap text-ellipsis">
        {tab.label}
      </span>

      {/* Bouton Croix - Fermer l'onglet */}
      <span
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="w-3.5 h-3.5 rounded-full bg-black/15 flex items-center justify-center text-[9px] text-[#555] cursor-pointer shrink-0 ml-0.5 transition-[background] duration-100 hover:bg-[#b0543a] hover:text-white"
      >
        ✕
      </span>
    </div>
  );
}
