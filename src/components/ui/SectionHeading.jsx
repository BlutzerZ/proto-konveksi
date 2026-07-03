export function SectionHeading({ eyebrow, title, description, action }) {
  return (
    <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-700">{eyebrow}</p>
        ) : null}
        <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900 md:text-[2rem]">{title}</h2>
        {description ? <p className="mt-2.5 max-w-3xl text-sm leading-7 text-slate-600">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
