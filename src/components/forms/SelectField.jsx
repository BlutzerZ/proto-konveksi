export function SelectField({ children, ...props }) {
  return (
    <select
      {...props}
      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm focus:border-sky-400 focus:outline-none focus:ring-4 focus:ring-sky-100"
    >
      {children}
    </select>
  );
}
