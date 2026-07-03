export function ToastViewport({ toasts }) {
  return (
    <div className="fixed right-4 top-4 z-[70] flex w-[min(92vw,24rem)] flex-col gap-3">
      {toasts.map((toast) => (
        <div key={toast.id} className="rounded-[1.5rem] border border-white/70 bg-white/95 p-4 shadow-card">
          <p className="text-sm leading-6 text-slate-700">{toast.message}</p>
        </div>
      ))}
    </div>
  );
}
