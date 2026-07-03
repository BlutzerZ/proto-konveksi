import { CheckCircle2, ClipboardList, PackageCheck, WalletCards } from "lucide-react";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { StatCard } from "../ui/StatCard";
import { formatCurrency } from "../../utils/formatters";
import { buildFinancialSummary } from "./adminMetrics";

export function AdminOverviewPanel({ orders, catalog, verifiedOrders, onOpenOrders, onOpenReports }) {
  const summary = buildFinancialSummary(orders);
  const cards = [
    { label: "Order masuk", value: String(orders.length), icon: ClipboardList },
    { label: "Perlu verifikasi", value: String(summary.waiting), icon: CheckCircle2 },
    { label: "Job operator", value: String(verifiedOrders.length), icon: PackageCheck },
    { label: "Pendapatan", value: formatCurrency(summary.revenue), icon: WalletCards },
  ];

  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((item) => <StatCard key={item.label} label={item.label} value={item.value} icon={item.icon} />)}
      </div>
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <Card>
          <SectionHeading eyebrow="Ruang kerja admin" title="Kontrol yang sudah tersedia" />
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {[
              "Monitor pendapatan dan progress produksi",
              "Verifikasi order dengan catatan WhatsApp",
              "Download laporan mingguan, bulanan, tahunan",
              "Kelola katalog, MOQ, lead time, dan publish",
              "Edit promo banner landing",
              "Pantau job yang tampil ke operator",
            ].map((item) => (
              <div key={item} className="rounded-[1rem] border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700">{item}</div>
            ))}
          </div>
        </Card>
        <Card>
          <SectionHeading eyebrow="Tindakan cepat" title="Prioritas hari ini" />
          <div className="mt-4 space-y-3">
            <button type="button" onClick={onOpenOrders} className="w-full rounded-[1rem] border border-slate-200 bg-white p-4 text-left transition hover:border-sky-200 hover:bg-sky-50">
              <p className="font-bold text-slate-900">{summary.waiting} order menunggu verifikasi</p>
              <p className="mt-1 text-sm text-slate-500">Lengkapi catatan agar template WhatsApp tidak kosong.</p>
            </button>
            <button type="button" onClick={onOpenReports} className="w-full rounded-[1rem] border border-slate-200 bg-white p-4 text-left transition hover:border-emerald-200 hover:bg-emerald-50">
              <p className="font-bold text-slate-900">Laporan pendapatan siap diunduh</p>
              <p className="mt-1 text-sm text-slate-500">{catalog.length} produk dan {orders.length} invoice menjadi sumber ringkasan.</p>
            </button>
          </div>
        </Card>
      </div>
    </section>
  );
}
