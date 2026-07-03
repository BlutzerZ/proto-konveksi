export function FormField({ label, children, hint, error }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      {children}
      {hint ? <small className="mt-2 block text-sm leading-6 text-slate-500">{hint}</small> : null}
      {error ? <small className="mt-2 block text-sm leading-6 text-rose-600">{error}</small> : null}
    </label>
  );
}
