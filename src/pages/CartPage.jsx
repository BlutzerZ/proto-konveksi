import { Link, useNavigate } from "react-router-dom";
import { MainHeader } from "../components/layout/MainHeader";
import { PageShell } from "../components/layout/PageShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useAppStore } from "../store/AppStore";
import { formatCurrency } from "../utils/formatters";

export function CartPage() {
  const navigate = useNavigate();
  const { cart, cartSubtotal, updateCartItem, removeCartItem, clearCart } = useAppStore();

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f8fbff_0%,_#f8fafc_100%)]">
      <MainHeader subtitle="Keranjang belanja custom" />
      <PageShell className="space-y-8">
        <Card className="bg-[linear-gradient(135deg,#111827_0%,#1f2937_55%,#334155_100%)] text-white">
          <SectionHeading
            eyebrow="Keranjang"
            title="Ringkas item sebelum checkout"
            description="Semua item yang ditambahkan dari detail produk tersimpan di browser Anda dan tetap muncul saat refresh."
          />
        </Card>

        {!cart.length ? (
          <Card>
            <SectionHeading eyebrow="Keranjang kosong" title="Belum ada item yang dipilih" />
            <Link to="/catalog">
              <Button asChild>
                <span>Buka katalog</span>
              </Button>
            </Link>
          </Card>
        ) : (
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.3fr)_360px]">
            <section className="space-y-4">
              {cart.map((item) => (
                <Card key={item.id}>
                  <div className="flex flex-col gap-4 md:flex-row">
                    <img src={item.image} alt={item.productName} className="h-40 w-full rounded-[1.35rem] object-cover md:w-56" />
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                        <div>
                          <h2 className="text-xl font-black text-slate-900">{item.productName}</h2>
                          <p className="mt-1 text-sm text-slate-500">{item.variant} • {item.size} • {item.branding}</p>
                        </div>
                        <button type="button" onClick={() => removeCartItem(item.id)} className="text-sm font-semibold text-slate-500">
                          Hapus
                        </button>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-sm font-semibold text-slate-700">Qty</span>
                          <input
                            type="number"
                            min={1}
                            value={item.qty}
                            onChange={(event) => updateCartItem(item.id, { qty: Number(event.target.value) })}
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm"
                          />
                        </label>
                        <div className="rounded-[1.2rem] bg-slate-50 p-4">
                          <p className="text-sm text-slate-500">Subtotal</p>
                          <p className="mt-2 text-xl font-black text-slate-900">{formatCurrency(item.qty * item.unitPrice + item.addonsTotal)}</p>
                        </div>
                      </div>
                      <div className="rounded-[1.2rem] bg-slate-50 p-4 text-sm text-slate-600">
                        <p>Logo: {item.logoFileName || "Belum ada file"}</p>
                        <p className="mt-1">Addon: {item.addons.length ? item.addons.map((addon) => addon.name).join(", ") : "-"}</p>
                        <p className="mt-1">Catatan: {item.note || "-"}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </section>

            <aside>
              <Card className="space-y-4">
                <SectionHeading eyebrow="Ringkasan" title="Siap ke checkout" />
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Total item</span>
                    <span className="font-semibold text-slate-900">{cart.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold text-slate-900">{formatCurrency(cartSubtotal)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Pembayaran</span>
                    <span className="font-semibold text-slate-900">Diverifikasi admin</span>
                  </div>
                </div>
                <Button className="w-full" onClick={() => navigate("/checkout")}>Lanjut checkout</Button>
                <Button className="w-full" variant="secondary" onClick={clearCart}>Kosongkan keranjang</Button>
              </Card>
            </aside>
          </div>
        )}
      </PageShell>
    </div>
  );
}
