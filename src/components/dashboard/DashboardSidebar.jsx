import { Link } from "react-router-dom";
import { BrandLogo } from "../layout/BrandLogo";
import { cn } from "../../lib/utils";

export function DashboardSidebar({ title, summary, actions, tabs, activeTab, onTabChange, accent = "slate" }) {
  const accentClass = accent === "sky" ? "text-sky-200" : "text-slate-300";

  return (
    <aside className="border-b border-white/60 bg-slate-950 px-4 py-5 text-slate-100 lg:min-h-screen lg:border-b-0 lg:border-r lg:px-5 lg:py-6">
      <BrandLogo to="/" subtitle={title} />
      <div className="mt-6 rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
        <p className={cn("text-xs font-semibold uppercase tracking-[0.24em]", accentClass)}>{summary.eyebrow}</p>
        <p className="mt-2 text-xl font-black">{summary.title}</p>
        <p className="mt-2 text-sm leading-6 text-slate-300">{summary.description}</p>
      </div>
      <nav className="mt-6 grid gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={cn(
              "inline-flex items-center gap-3 rounded-[1rem] px-4 py-3 text-left text-sm font-semibold transition",
              activeTab === tab.id ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white",
            )}
            onClick={() => onTabChange(tab.id)}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </nav>
      <div className="mt-6 flex flex-wrap gap-3">
        {actions.map((action) =>
          action.to ? (
            <Link
              key={action.label}
              to={action.to}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
            >
              {action.label}
            </Link>
          ) : (
            <button
              key={action.label}
              type="button"
              onClick={action.onClick}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white"
            >
              {action.label}
            </button>
          ),
        )}
      </div>
    </aside>
  );
}
