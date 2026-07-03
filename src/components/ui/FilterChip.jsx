import { cn } from "../../lib/utils";

export function FilterChip({ active, children, className, ...props }) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold transition",
        active
          ? "border-slate-900 bg-slate-900 text-white"
          : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
