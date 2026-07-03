import { ArrowUpRight, BadgePercent, Shirt } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/formatters";
import { getProductImage, getStartingPrice } from "../../utils/products";
import { Card } from "./Card";
import { useAppStore } from "../../store/AppStore";

export function ProductCard({ product }) {
  const { resolveCategoryLabel } = useAppStore();

  return (
    <Link to={`/products/${product.id}`} className="group block h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-sky-200">
      <Card className="flex h-full min-h-[520px] flex-col overflow-hidden p-0 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-soft">
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-100 to-sky-50">
          <img
            src={getProductImage(product)}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
            <Shirt className="h-3.5 w-3.5 text-sky-700" />
            {resolveCategoryLabel(product.categoryId)}
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-slate-950/85 p-2 text-white shadow-sm transition group-hover:bg-sky-700">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div>
            <h3 className="min-h-[3.5rem] text-lg font-black leading-7 text-slate-900">{product.name}</h3>
            <p className="mt-1.5 min-h-[4.5rem] text-sm leading-6 text-slate-600">{product.material} • {product.shortDescription}</p>
          </div>
          <div className="mt-auto rounded-[1.15rem] bg-stone-50 p-4">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Mulai dari</p>
                <p className="text-xl font-black text-slate-900">{formatCurrency(getStartingPrice(product))}</p>
              </div>
              <div className="rounded-2xl bg-sky-100 p-3 text-sky-700">
                <BadgePercent className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-slate-700">
            <div>
              <p>MOQ {product.minOrder} pcs</p>
              <p className="mt-1 text-xs font-medium text-slate-500">{product.leadTime}</p>
            </div>
            <span className="inline-flex items-center gap-1 text-sky-700">
              Detail
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
