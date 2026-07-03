import { cn } from "../../lib/utils";

export function TabNav({ tabs, activeTab, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onChange(tab.id)}
          className={cn(
            "rounded-full px-4 py-2 text-sm font-semibold transition",
            activeTab === tab.id
              ? "bg-slate-900 text-white"
              : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
