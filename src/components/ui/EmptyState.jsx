import { SearchX } from "lucide-react";
import { Card } from "./Card";

export function EmptyState({ title, description, action, icon: Icon = SearchX }) {
  return (
    <Card className="text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-3xl bg-slate-100 text-slate-500">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-xl font-black text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </Card>
  );
}
