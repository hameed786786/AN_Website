type Tab = {
  id: string;
  label: string;
  icon: string;
};

type FeaturesTabsProps = {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (id: string) => void;
};

export default function FeaturesTabs({
  tabs,
  activeTab,
  setActiveTab,
}: FeaturesTabsProps) {
  return (
    <div className="flex flex-wrap items-center gap-6">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 rounded-full px-5 py-3 transition-all duration-300 ${
              isActive
                ? "bg-[#F1C94A] text-black shadow-[0px_4px_12px_rgba(0,0,0,0.08)]"
                : "bg-transparent text-[#7A7A7A]"
            }`}
          >
            <img
              src={tab.icon}
              alt={tab.label}
              className={`h-4 w-4 ${
                isActive ? "opacity-100" : "opacity-70"
              }`}
            />

            <span
              className="text-[16px] font-normal leading-[100%]"
              style={{
                fontFamily: "ArialCustom",
              }}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}