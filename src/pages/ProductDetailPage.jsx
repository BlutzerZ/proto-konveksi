import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MainHeader } from "../components/layout/MainHeader";
import { PageShell } from "../components/layout/PageShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useAppStore } from "../store/AppStore";
import { formatCurrency } from "../utils/formatters";

export function ProductDetailPage() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { publishedProducts, sizeProfiles, addToCart, resolveCategoryLabel, resolveUnitPrice } = useAppStore();
  const product = useMemo(() => publishedProducts.find((item) => item.id === productId), [publishedProducts, productId]);

  const [selectedImage, setSelectedImage] = useState(product?.gallery?.[0] || product?.image || "");
  const [qty, setQty] = useState(product?.minOrder || 36);
  const [variant, setVariant] = useState(product?.variants?.[0] || "");
  const [size, setSize] = useState("L");
  const [branding, setBranding] = useState(product?.defaultBranding || "");
  const [logoFileName, setLogoFileName] = useState("");
  const [note, setNote] = useState("");
  const [selectedAddons, setSelectedAddons] = useState([]);

  if (!product) {
    return (
      <div className="min-h-screen bg-[linear-gradient(180deg,_#f8fafc_0%,_#eef2ff_100%)]">
        <MainHeader subtitle="Detail produk custom" />
        <PageShell>
          <Card>
            <SectionHeading eyebrow="Produk tidak ditemukan" title="Item ini belum tersedia" />
            <Link to="/catalog">
              <Button asChild variant="secondary">
                <span>Kembali ke katalog</span>
              </Button>
            </Link>
          </Card>
        </PageShell>
      </div>
    );
  }

  const sizeProfile = sizeProfiles.find((item) => item.id === product.sizeProfileId) || sizeProfiles[0];
  const unitPrice = resolveUnitPrice(product, qty);
  const addonUnitTotal = selectedAddons.reduce((total, item) => total + item.price, 0);
  const addonsTotal = addonUnitTotal * qty;
  const subtotal = qty * unitPrice + addonsTotal;

  function toggleAddon(addon) {
    setSelectedAddons((current) =>
      current.some((item) => item.id === addon.id) ? current.filter((item) => item.id !== addon.id) : [...current, addon],
    );
  }

  function handleAddToCart() {
    addToCart({
      productId: product.id,
      productName: product.name,
      categoryLabel: resolveCategoryLabel(product.categoryId),
      variant,
      size,
      qty: Number(qty),
      branding,
      logoFileName,
      note,
      addons: selectedAddons,
      addonUnitTotal,
      addonsTotal,
      unitPrice,
      subtotal,
      image: selectedImage,
    });
    navigate("/cart");
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f8fbff_0%,_#f8fafc_100%)]">
      <MainHeader subtitle="Detail produk dan konfigurasi pemesanan" />
      <PageShell className="space-y-8">
        <section className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_420px]">
          <Card className="space-y-5 p-4 md:p-5">
            <img src={selectedImage} alt={product.name} className="h-[420px] w-full rounded-[1.75rem] object-cover" />
            <div className="grid gap-3 md:grid-cols-3">
              {product.gallery.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-[1.2rem] border ${selectedImage === image ? "border-slate-900" : "border-slate-200"}`}
                >
                  <img src={image} alt={product.name} className="h-28 w-full object-cover" />
                </button>
              ))}
            </div>
          </Card>

          <Card className="space-y-5">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">{resolveCategoryLabel(product.categoryId)}</p>
              <h1 className="mt-2 text-3xl font-black text-slate-900">{product.name}</h1>
              <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
            </div>
            <div className="grid gap-3 rounded-[1.4rem] bg-slate-50 p-4 text-sm text-slate-600 md:grid-cols-2">
              <div>
                <p className="font-semibold text-slate-900">Material</p>
                <p className="mt-1">{product.material}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Lead time</p>
                <p className="mt-1">{product.leadTime}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">MOQ</p>
                <p className="mt-1">{product.minOrder} pcs</p>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Use case</p>
                <p className="mt-1">{product.useCase}</p>
              </div>
            </div>

            <div className="grid gap-4">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Jenis produk</span>
                <select value={variant} onChange={(event) => setVariant(event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
                  {product.variants.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Qty</span>
                  <input
                    type="number"
                    min={product.minOrder}
                    value={qty}
                    onChange={(event) => setQty(Number(event.target.value))}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Ukuran dominan</span>
                  <select value={size} onChange={(event) => setSize(event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
                    {sizeProfile.sizes.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Teknik branding</span>
                <select value={branding} onChange={(event) => setBranding(event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
                  {product.brandingOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="block rounded-[1.25rem] border border-dashed border-slate-300 bg-slate-50 p-5">
                <input
                  type="file"
                  hidden
                  onChange={(event) => setLogoFileName(event.target.files?.[0]?.name || "")}
                />
                <span className="block text-sm font-semibold text-slate-900">{logoFileName || "Upload logo / desain"}</span>
                <span className="mt-2 block text-sm text-slate-500">AI, CDR, PDF, PNG, atau ZIP referensi produksi.</span>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Catatan pesanan</span>
                <textarea
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  rows={4}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm"
                  placeholder="Posisi logo, nama personal, deadline event, atau catatan lainnya."
                />
              </label>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-900">Addon produksi</p>
              {product.addons.map((addon) => {
                const active = selectedAddons.some((item) => item.id === addon.id);
                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon)}
                    className={`flex w-full items-center justify-between rounded-[1.2rem] border px-4 py-3 text-left ${active ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-slate-50 text-slate-700"}`}
                  >
                    <span className="font-semibold">{addon.name}</span>
                    <span>{formatCurrency(addon.price)}</span>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[1.4rem] bg-slate-950 p-5 text-white">
              <p className="text-sm text-slate-300">Estimasi total</p>
              <p className="mt-2 text-3xl font-black">{formatCurrency(subtotal)}</p>
              <p className="mt-2 text-sm text-slate-300">Unit {formatCurrency(unitPrice)} • addon {formatCurrency(addonsTotal)}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button onClick={handleAddToCart}>Tambah ke keranjang</Button>
              <Link to="/cart">
                <Button asChild variant="secondary">
                  <span>Buka keranjang</span>
                </Button>
              </Link>
            </div>
          </Card>
        </section>

        <Card>
          <SectionHeading eyebrow="Spesifikasi" title="Hal penting sebelum checkout" />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {product.specs.map((spec) => (
              <div key={spec} className="rounded-[1.2rem] bg-slate-50 p-4 text-sm text-slate-700">
                {spec}
              </div>
            ))}
          </div>
        </Card>
      </PageShell>
    </div>
  );
}
