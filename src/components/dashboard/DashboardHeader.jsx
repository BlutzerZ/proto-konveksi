export function DashboardHeader({ eyebrow, title, description, actions }) {
  return (
    <header className="mb-6 flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">{eyebrow}</p>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 md:text-4xl">{title}</h1>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 md:text-base">{description}</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">{actions}</div>
    </header>
  );
}
