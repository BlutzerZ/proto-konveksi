import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { MainHeader } from "../components/layout/MainHeader";
import { PageShell } from "../components/layout/PageShell";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useAppStore } from "../store/AppStore";
import { formatCurrency } from "../utils/formatters";
import { useToast } from "../components/providers/ToastProvider";

export function CheckoutPage() {
  const navigate = useNavigate();
  const { pushToast } = useToast();
  const { cart, cartSubtotal, checkoutDraft, setCheckoutDraft, submitCheckout } = useAppStore();
  const [createdInvoice, setCreatedInvoice] = useState("");
  const { register, handleSubmit } = useForm({ defaultValues: checkoutDraft });

  function onSubmit(values) {
    if (!cart.length) {
      pushToast("Keranjang masih kosong.");
      return;
    }

    setCheckoutDraft(values);
    const order = submitCheckout(values);
    setCreatedInvoice(order.invoice);
    pushToast(`Checkout terkirim ke admin dengan invoice ${order.invoice}.`);
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#f8fbff_0%,_#f8fafc_100%)]">
      <MainHeader subtitle="Checkout pesanan custom" />
      <PageShell className="space-y-8">
        <Card className="bg-[linear-gradient(135deg,#111827_0%,#1f2937_55%,#334155_100%)] text-white">
          <SectionHeading
            eyebrow="Checkout"
            title="Kirim pesanan ke admin untuk diverifikasi"
            description="Checkout v1 belum memproses pembayaran. Admin akan memeriksa spesifikasi, logo, qty, dan kelengkapan order sebelum masuk produksi."
          />
        </Card>

        {!cart.length && !createdInvoice ? (
          <Card>
            <SectionHeading eyebrow="Keranjang kosong" title="Belum ada item untuk checkout" />
            <Link to="/catalog">
              <Button asChild>
                <span>Kembali belanja</span>
              </Button>
            </Link>
          </Card>
        ) : null}

        {createdInvoice ? (
          <Card className="space-y-4">
            <SectionHeading eyebrow="Checkout berhasil" title={`Pesanan masuk dengan invoice ${createdInvoice}`} />
            <p className="text-sm leading-7 text-slate-600">
              Admin akan memverifikasi detail pesanan Anda. Gunakan nomor invoice ini untuk memantau progres setelah order dirilis ke produksi.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => navigate(`/tracking?invoice=${createdInvoice}`)}>Buka tracking</Button>
              <Link to="/catalog">
                <Button asChild variant="secondary">
                  <span>Lanjut belanja</span>
                </Button>
              </Link>
            </div>
          </Card>
        ) : null}

        {!createdInvoice ? (
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_360px]">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Card className="space-y-4">
                <SectionHeading eyebrow="Data pembeli" title="Informasi checkout" />
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Nama perusahaan / instansi</span>
                    <input {...register("companyName", { required: true })} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">PIC</span>
                    <input {...register("picName", { required: true })} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">WhatsApp</span>
                    <input {...register("whatsapp", { required: true })} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Email</span>
                    <input {...register("email")} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm" />
                  </label>
                </div>
              </Card>

              <Card className="space-y-4">
                <SectionHeading eyebrow="Pengiriman" title="Alamat dan catatan" />
                <div className="grid gap-4">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Kota</span>
                    <input {...register("city", { required: true })} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Alamat lengkap</span>
                    <textarea {...register("address", { required: true })} rows={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm" />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">Catatan untuk admin</span>
                    <textarea {...register("note")} rows={3} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm" />
                  </label>
                </div>
              </Card>

              <Button type="submit">Kirim pesanan ke admin</Button>
            </form>

            <aside>
              <Card className="space-y-4">
                <SectionHeading eyebrow="Ringkasan order" title="Checkout tanpa pembayaran online" />
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div key={item.id} className="rounded-[1.2rem] bg-slate-50 p-4 text-sm text-slate-600">
                      <p className="font-semibold text-slate-900">{item.productName}</p>
                      <p className="mt-1">{item.qty} pcs • {item.variant} • {item.size}</p>
                      <p className="mt-1">{formatCurrency(item.subtotal)}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between rounded-[1.2rem] bg-slate-950 p-4 text-white">
                  <span>Total</span>
                  <span className="text-xl font-black">{formatCurrency(cartSubtotal)}</span>
                </div>
              </Card>
            </aside>
          </div>
        ) : null}
      </PageShell>
    </div>
  );
}
