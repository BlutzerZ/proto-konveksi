import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { MainHeader } from "../components/layout/MainHeader";
import { PageShell } from "../components/layout/PageShell";
import { HeroSection } from "../components/layout/HeroSection";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";
import { StatusBadge } from "../components/ui/StatusBadge";
import { useAppStore } from "../store/AppStore";
import { formatCurrency } from "../utils/formatters";

export function TrackingPage() {
  const [searchParams] = useSearchParams();
  const { orders } = useAppStore();
  const defaultInvoice = searchParams.get("invoice") || orders[0]?.invoice || "";
  const [invoiceInput, setInvoiceInput] = useState(defaultInvoice);
  const [activeInvoice, setActiveInvoice] = useState(defaultInvoice);
  const record = useMemo(() => orders.find((order) => order.invoice === activeInvoice), [orders, activeInvoice]);
  const latestUpdate = record?.productionUpdates[0];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_22%),linear-gradient(180deg,_#f8fbff_0%,_#f8fafc_100%)]">
      <MainHeader subtitle="Pantau progres order berdasarkan invoice" />
      <PageShell className="space-y-8">
        <HeroSection
          eyebrow="Tracking customer"
          title="Masukkan invoice untuk melihat status pesanan, estimasi kirim, dan update terbaru."
          description="Halaman ini menampilkan ringkasan order yang relevan untuk customer tanpa membuka detail operasional internal."
          className="from-slate-950 via-slate-900 to-sky-900"
        />

        <Card>
          <SectionHeading eyebrow="Cari invoice" title="Lihat status pesanan" />
          <div className="flex flex-col gap-3 lg:flex-row">
            <input
              value={invoiceInput}
              onChange={(event) => setInvoiceInput(event.target.value.toUpperCase())}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm"
            />
            <Button onClick={() => setActiveInvoice(invoiceInput)}>
              <Search className="h-4 w-4" />
              Tampilkan progres
            </Button>
          </div>
          <p className="mt-3 text-sm text-slate-500">Invoice contoh: {orders.map((order) => order.invoice).join(" • ")}</p>
        </Card>

        {record ? (
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_340px]">
            <section className="space-y-6">
              <Card>
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Ringkasan order</p>
                    <h2 className="mt-2 text-2xl font-black text-slate-900 md:text-3xl">{record.items[0]?.productName}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {record.customer.companyName} • {record.items[0]?.qty} pcs • Estimasi kirim {record.estimatedShipDate}
                    </p>
                  </div>
                  <StatusBadge status={record.status} />
                </div>
                <div className="mt-5 rounded-[1.15rem] bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                  {latestUpdate
                    ? `Update terakhir: ${latestUpdate.stage} pada ${latestUpdate.date}. ${latestUpdate.estimate}.`
                    : "Pesanan sedang menunggu proses verifikasi dan penjadwalan awal."}
                </div>
                <div className="mt-6 space-y-4">
                  {record.productionUpdates.map((item, index) => (
                    <div key={item.id} className="flex gap-4">
                      <div className={`mt-1 h-3 w-3 rounded-full ${index === 0 ? "bg-sky-700" : "bg-slate-200"}`} />
                      <div>
                        <p className="font-semibold text-slate-900">{item.stage}</p>
                        <p className="text-sm text-slate-500">{item.date} • {item.estimate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            <aside className="space-y-6">
              <Card>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Status order</p>
                <h3 className="mt-2 text-2xl font-black text-slate-900">{record.currentStage}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">Status ini diperbarui setelah order diproses tim internal dan siap dibagikan ke customer.</p>
              </Card>
              <Card>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Update terbaru</p>
                <div className="mt-3 rounded-[1.2rem] bg-slate-50 p-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">{latestUpdate?.stage || record.currentStage}</p>
                  <p className="mt-1">{latestUpdate?.date || "Menunggu jadwal"}</p>
                  <p className="mt-2">{latestUpdate?.estimate || record.estimatedShipDate}</p>
                </div>
              </Card>
              <Card>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Ringkasan item</p>
                <div className="mt-3 space-y-3">
                  {record.items.map((item) => (
                    <div key={item.productName} className="rounded-[1.2rem] bg-slate-50 p-4 text-sm text-slate-600">
                      <p className="font-semibold text-slate-900">{item.productName}</p>
                      <p className="mt-1">{item.qty} pcs • {item.variant} • {item.size}</p>
                      <p className="mt-1">{formatCurrency(item.subtotal)}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </aside>
          </div>
        ) : null}
      </PageShell>
    </div>
  );
}
