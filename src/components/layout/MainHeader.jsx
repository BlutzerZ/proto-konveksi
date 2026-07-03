import { PackageSearch } from "lucide-react";
import { Link } from "react-router-dom";
import { BrandLogo } from "./BrandLogo";
import { MainNav } from "./MainNav";

export function MainHeader({ subtitle }) {
  return (
    <>
      <div className="border-b border-white/10 bg-slate-950 text-slate-100">
        <div className="page-shell flex flex-wrap items-center justify-between gap-3 py-2.5 text-xs font-medium md:text-sm">
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <span>Konveksi seragam dan merchandise</span>
            <span>Cart tersimpan otomatis</span>
            <span>Update progres per invoice</span>
          </div>
          <Link to="/tracking" className="inline-flex items-center gap-2 text-slate-200 transition hover:text-white">
            <PackageSearch className="h-4 w-4" />
            Lacak pesanan
          </Link>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-white/70 bg-white/90 backdrop-blur-xl">
        <div className="page-shell flex flex-col gap-4 py-3.5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <BrandLogo subtitle={subtitle} />
            <MainNav />
          </div>
        </div>
      </header>
    </>
  );
}
