import { Card } from "./Card";

export function InfoCard({ eyebrow, title, description, icon: Icon, action }) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          {eyebrow ? <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">{eyebrow}</p> : null}
          <h3 className="mt-2 text-lg font-black text-slate-900 md:text-xl">{title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
        </div>
        {Icon ? (
          <div className="rounded-[1rem] bg-sky-100 p-3 text-sky-700">
            <Icon className="h-5 w-5" />
          </div>
        ) : null}
      </div>
      {action ? <div className="mt-5">{action}</div> : null}
    </Card>
  );
}
