import Tab, { type TabProps } from "./Tab";

export type { TabProps };

export default function TabBar({
  tabs,
  activeTab,
  onSelect,
  onClose,
  onAdd,
}: {
  tabs: TabProps[];
  activeTab: number;
  onSelect: (id: number) => void;
  onClose: (id: number) => void;
  onAdd: () => void;
}) {
  return (
    <div className="tabbar flex items-end px-2 gap-0.5 h-7 border-b border-[#7a7a7a]">
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          tab={tab}
          isActive={activeTab === tab.id}
          onSelect={() => onSelect(tab.id)}
          onClose={() => onClose(tab.id)}
        />
      ))}
      <div
        onClick={onAdd}
        title="Nouvel onglet"
        className="tab-add-btn flex items-center justify-center w-[18px] h-[18px] rounded border border-[#9a9a9a] text-[13px] text-[#555] cursor-pointer self-center ml-1"
      >
        +
      </div>
    </div>
  );
}
