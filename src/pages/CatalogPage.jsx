import { useMemo, useState } from "react";
import { MainHeader } from "../components/layout/MainHeader";
import { PageShell } from "../components/layout/PageShell";
import { HeroSection } from "../components/layout/HeroSection";
import { ProductGrid } from "../components/shop/ProductGrid";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useAppStore } from "../store/AppStore";
import { filterProducts, sortProducts } from "../utils/products";

export function CatalogPage() {
  const { publishedProducts, catalogCategories } = useAppStore();
  const [filters, setFilters] = useState({
    keyword: "",
    category: "Semua",
    branding: "Semua",
    minOrder: "Semua",
    sort: "name",
  });

  const products = useMemo(() => {
    const filtered = filterProducts(publishedProducts, filters);
    return sortProducts(filtered, filters.sort);
  }, [publishedProducts, filters]);

  function updateFilter(key, value) {
    setFilters((current) => ({ ...current, [key]: value }));
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_24%),linear-gradient(180deg,_#f8fbff_0%,_#f8fafc_100%)]">
      <MainHeader subtitle="Jelajah katalog custom seperti storefront ecommerce" />
      <PageShell className="space-y-8">
        <HeroSection
          eyebrow="Katalog modern"
          title="Filter produk, pilih card produk, lalu lanjut ke detail yang lebih lengkap."
          description="Halaman ini menjadi katalog utama untuk customer sebelum mereka mengatur jenis, ukuran, logo, dan kuantitas di halaman detail."
          className="from-slate-950 via-slate-900 to-slate-700"
        />

        <section className="space-y-5">
          <SectionHeading eyebrow="Filter katalog" title="Cari produk yang paling relevan" />
          <div className="grid gap-4 rounded-[1.5rem] border border-white/70 bg-white/95 p-4 shadow-card lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,0.65fr))]">
            <input
              type="search"
              placeholder="Cari workshirt, polo, jaket, atau merchandise"
              value={filters.keyword}
              onChange={(event) => updateFilter("keyword", event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm"
            />
            <select value={filters.branding} onChange={(event) => updateFilter("branding", event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
              <option>Semua</option>
              <option value="bordir">Bordir</option>
              <option value="sablon">Sablon</option>
              <option value="laser">Laser</option>
            </select>
            <select value={filters.minOrder} onChange={(event) => updateFilter("minOrder", event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
              <option>Semua</option>
              <option value="25">MOQ 25 pcs</option>
              <option value="36">MOQ 36 pcs</option>
            </select>
            <select value={filters.sort} onChange={(event) => updateFilter("sort", event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
              <option value="name">Urutkan nama</option>
              <option value="price-asc">Harga mulai termurah</option>
              <option value="price-desc">Harga mulai tertinggi</option>
              <option value="min-order">MOQ terkecil</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-2">
            {catalogCategories.map((item) => {
              const itemValue = item.id === "all" ? "Semua" : item.id;
              const active = filters.category === itemValue;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => updateFilter("category", itemValue)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${active ? "bg-slate-900 text-white" : "bg-white text-slate-600"}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <ProductGrid products={products} />
        </section>
      </PageShell>
    </div>
  );
}
