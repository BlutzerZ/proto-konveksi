import { X } from "lucide-react";

export function AppModal({ open, onClose, title, body }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative mx-auto mt-10 w-[min(92vw,56rem)] rounded-[2rem] border border-white/60 bg-white/95 p-6 shadow-soft md:mt-16 md:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-slate-100 p-2 text-slate-600 transition hover:bg-slate-200"
        >
          <X className="h-5 w-5" />
        </button>
        <h3 className="text-2xl font-black text-slate-900">{title}</h3>
        {typeof body === "string" ? <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{body}</p> : <div className="mt-4">{body}</div>}
      </div>
    </div>
  );
}
