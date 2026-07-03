import { cn } from "../../lib/utils";

export function Card({ className, children }) {
  return <article className={cn("glass-panel rounded-[1.5rem] p-5 md:p-6", className)}>{children}</article>;
}
