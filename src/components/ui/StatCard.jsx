import { Card } from "./Card";

export function StatCard({ label, value, hint }) {
  return <Card className="rounded-[1.35rem]">
    <p className="text-sm font-semibold text-slate-500">{label}</p>
    <p className="mt-2 text-2xl font-black text-slate-900 md:text-3xl">{value}</p>
    {hint ? <p className="mt-2 text-sm leading-6 text-slate-500">{hint}</p> : null}
  </Card>;
}
