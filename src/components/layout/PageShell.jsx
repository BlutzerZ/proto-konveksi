import { cn } from "../../lib/utils";

export function PageShell({ className, children }) {
  return <main className={cn("page-shell py-6 md:py-8", className)}>{children}</main>;
}
