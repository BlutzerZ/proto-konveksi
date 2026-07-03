import { cn } from "../../lib/utils";

const styles = {
  primary:
    "bg-gradient-to-r from-slate-700 to-sky-700 text-white shadow-soft hover:-translate-y-0.5 hover:shadow-card",
  secondary:
    "border border-slate-200 bg-white text-slate-700 shadow-sm hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50",
  dark: "bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-0.5",
  ghost: "text-slate-700 hover:bg-slate-100",
};

export function Button({ className, variant = "primary", asChild = false, ...props }) {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-[0.9rem] px-4 py-2.5 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
        styles[variant],
        className,
      )}
      {...props}
    />
  );
}
