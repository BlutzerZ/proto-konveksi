import { cn } from "../../lib/utils";

export function HeroSection({ eyebrow, title, description, actions, className, children }) {
  return (
    <section
      className={cn(
        "hero-panel bg-[linear-gradient(135deg,#111827_0%,#1f2937_45%,#334155_100%)]",
        className,
      )}
    >
      <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
        <div>
          {eyebrow ? <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">{eyebrow}</p> : null}
          <h1 className="mt-3 max-w-4xl text-3xl font-black tracking-tight md:text-[2.6rem] md:leading-[1.05]">{title}</h1>
          {description ? <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200 md:text-[15px]">{description}</p> : null}
        </div>
        {actions ? <div className="flex flex-wrap gap-2.5">{actions}</div> : null}
      </div>
      {children ? <div className="mt-6 md:mt-7">{children}</div> : null}
    </section>
  );
}
