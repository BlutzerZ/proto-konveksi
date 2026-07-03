import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { formatCurrency } from "../../utils/formatters";

export function AdminCatalogPanel({ catalog, onUpdateProduct }) {
  return (
    <Card>
      <SectionHeading eyebrow="Manajemen katalog" title="Produk, ukuran, harga, dan publish status" />
      <div className="mt-5 space-y-4">
        {catalog.map((product) => (
          <div key={product.id} className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4">
            <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_180px_180px_160px]">
              <div>
                <p className="font-bold text-slate-900">{product.name}</p>
                <p className="mt-1 text-sm text-slate-500">{product.material} • MOQ {product.minOrder} pcs • {product.leadTime}</p>
                <p className="mt-2 text-sm text-slate-600">{product.shortDescription}</p>
              </div>
              <Field label="MOQ">
                <input type="number" value={product.minOrder} onChange={(event) => onUpdateProduct(product.id, { minOrder: Number(event.target.value) })} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm" />
              </Field>
              <Field label="Lead time">
                <input value={product.leadTime} onChange={(event) => onUpdateProduct(product.id, { leadTime: event.target.value })} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm" />
              </Field>
              <Field label="Publish">
                <select value={product.published ? "yes" : "no"} onChange={(event) => onUpdateProduct(product.id, { published: event.target.value === "yes" })} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                  <option value="yes">Published</option>
                  <option value="no">Draft</option>
                </select>
              </Field>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <Info title="Ukuran / size set" value={product.sizeProfileId} />
              <Info title="Jenis / variant" value={product.variants.join(", ")} />
              <Info title="Tier harga mulai" value={product.priceTiers.map((tier) => `${tier.label}: ${formatCurrency(tier.unitPrice)}`).join(" • ")} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Field({ label, children }) {
  return <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>{children}</label>;
}

function Info({ title, value }) {
  return <div className="rounded-[1rem] bg-white p-4 text-sm text-slate-600"><p className="font-semibold text-slate-900">{title}</p><p className="mt-2">{value}</p></div>;
}
