import { Link } from "react-router-dom";
import { brandName } from "../../data/products";

export function BrandLogo({ subtitle = "Konveksi modern untuk katalog, checkout, dan tracking produksi", to = "/" }) {
  return (
    <Link to={to} className="inline-flex items-center gap-3">
      <div className="grid h-12 w-12 place-items-center rounded-[1.15rem] bg-gradient-to-br from-slate-700 via-slate-800 to-sky-700 text-lg font-black text-white shadow-card">
        PT
      </div>
      <div>
        <p className="text-base font-bold tracking-tight text-slate-900 md:text-lg">{brandName}</p>
        <p className="text-xs text-slate-500 md:text-sm">{subtitle}</p>
      </div>
    </Link>
  );
}
