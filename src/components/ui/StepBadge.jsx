import { cn } from "../../lib/utils";

export function StepBadge({ step, active }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold",
        active ? "bg-white text-slate-900" : "bg-slate-100 text-slate-500",
      )}
    >
      {step}
    </span>
  );
}
