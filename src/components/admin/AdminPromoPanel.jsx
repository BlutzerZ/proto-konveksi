import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";

export function AdminPromoPanel({ editingPromo, onChangePromo, onSavePromo }) {
  return (
    <Card>
      <SectionHeading eyebrow="Promo popup" title="CMS promo banner landing" />
      <div className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-4">
          <Field label="Judul promo">
            <input value={editingPromo.title} onChange={(event) => onChangePromo({ title: event.target.value })} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm" />
          </Field>
          <Field label="Deskripsi">
            <textarea value={editingPromo.description} onChange={(event) => onChangePromo({ description: event.target.value })} rows={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm" />
          </Field>
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="CTA label">
              <input value={editingPromo.ctaLabel} onChange={(event) => onChangePromo({ ctaLabel: event.target.value })} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm" />
            </Field>
            <Field label="Periode">
              <input value={editingPromo.period} onChange={(event) => onChangePromo({ period: event.target.value })} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm" />
            </Field>
          </div>
          <label className="flex items-center gap-3 rounded-[1.2rem] bg-slate-50 p-4 text-sm text-slate-700">
            <input type="checkbox" checked={editingPromo.active} onChange={(event) => onChangePromo({ active: event.target.checked })} />
            Promo aktif di landing popup
          </label>
          <Button type="button" onClick={onSavePromo}>Simpan promo banner</Button>
        </div>
        <div className="rounded-[1.4rem] bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_55%,#0f766e_100%)] p-5 text-white">
          <p className="text-sm font-semibold text-sky-200">{editingPromo.badge}</p>
          <h3 className="mt-2 text-2xl font-black">{editingPromo.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-200">{editingPromo.description}</p>
          <p className="mt-4 text-sm text-slate-300">{editingPromo.period}</p>
          <Button className="mt-5">{editingPromo.ctaLabel}</Button>
        </div>
      </div>
    </Card>
  );
}

function Field({ label, children }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>{children}</label>;
}
