import { cn, statusTone } from "../../lib/utils";

const tones = {
  amber: "bg-amber-100 text-amber-800",
  sky: "bg-sky-100 text-sky-800",
  emerald: "bg-emerald-100 text-emerald-800",
  slate: "bg-slate-100 text-slate-700",
};

export function StatusBadge({ children, status }) {
  return (
    <span className={cn("inline-flex rounded-full px-3 py-1 text-sm font-semibold", tones[statusTone(status)])}>
      {children || status}
    </span>
  );
}
