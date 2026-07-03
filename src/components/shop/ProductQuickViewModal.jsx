import { Link } from "react-router-dom";
import { AppModal } from "../layout/AppModal";
import { Button } from "../ui/Button";
import { formatCurrency } from "../../utils/formatters";
import { getStartingPrice } from "../../utils/products";

export function ProductQuickViewModal({ product, onClose }) {
  if (!product) return null;

  return (
    <AppModal
      open={Boolean(product)}
      onClose={onClose}
      title={product.name}
      body={
        <div className="space-y-5">
          <img src={product.image} alt={product.name} className="h-64 w-full rounded-[1.5rem] object-cover" />
          <div className="grid gap-3 text-sm text-slate-600 md:grid-cols-2">
            <div className="rounded-[1.25rem] bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Mulai dari {formatCurrency(getStartingPrice(product))}</p>
              <p className="mt-2">MOQ {product.minOrder} pcs • {product.leadTime}</p>
            </div>
            <div className="rounded-[1.25rem] bg-slate-50 p-4">
              <p className="font-semibold text-slate-900">Pilihan branding</p>
              <p className="mt-2">{product.brandingOptions.join(" • ")}</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-600">{product.description}</p>
          <div className="flex flex-wrap gap-2">
            {product.specs.map((spec) => (
              <span key={spec} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-600">
                {spec}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link to={`/products/${product.id}`}>
              <Button asChild>
                <span>Lihat detail produk</span>
              </Button>
            </Link>
            <Link to={`/products/${product.id}`}>
              <Button asChild variant="secondary">
                <span>Tambah ke keranjang</span>
              </Button>
            </Link>
          </div>
        </div>
      }
    />
  );
}
