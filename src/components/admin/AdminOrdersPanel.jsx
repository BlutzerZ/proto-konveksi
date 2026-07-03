import { useMemo, useState } from "react";
import { MessageSquareText, SendHorizontal } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { StatusBadge } from "../ui/StatusBadge";
import { formatCurrency } from "../../utils/formatters";
import { getOrderRevenue } from "./adminMetrics";

function buildDefaultNote(order) {
  return `Halo ${order.customer.picName}, pesanan ${order.invoice} sudah kami verifikasi. ${order.items[0]?.productName || "Item"} akan masuk tahap approval desain sebelum produksi. Estimasi selesai ${order.estimatedShipDate}.`;
}

export function AdminOrdersPanel({ orders, onVerifyOrder }) {
  const [notes, setNotes] = useState(() => Object.fromEntries(orders.map((order) => [order.id, order.adminNotes || buildDefaultNote(order)])));
  const waitingOrders = useMemo(() => orders.filter((order) => order.adminStatus === "Menunggu Verifikasi"), [orders]);

  function updateNote(orderId, value) {
    setNotes((current) => ({ ...current, [orderId]: value }));
  }

  return (
    <Card>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <SectionHeading eyebrow="Order masuk" title="Verifikasi pesanan dan catatan WhatsApp" />
        <div className="rounded-[1rem] bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-800">
          {waitingOrders.length} perlu verifikasi
        </div>
      </div>
      <div className="mt-5 space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4">
            <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.75fr)]">
              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-slate-900">{order.invoice} • {order.customer.companyName}</p>
                    <p className="mt-1 text-sm text-slate-500">{order.customer.city} • PIC {order.customer.picName} • {order.customer.whatsapp}</p>
                  </div>
                  <StatusBadge status={order.adminStatus} />
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
                  <div className="rounded-[1rem] bg-white p-4 text-sm text-slate-600">
                    <p className="font-semibold text-slate-900">Item</p>
                    <p className="mt-2">{order.items.map((item) => `${item.productName} (${item.qty} pcs)`).join(", ")}</p>
                  </div>
                  <div className="rounded-[1rem] bg-white p-4 text-sm text-slate-600">
                    <p className="font-semibold text-slate-900">Logo/file</p>
                    <p className="mt-2">{order.items.map((item) => item.logoFileName || "-").join(", ")}</p>
                  </div>
                  <div className="rounded-[1rem] bg-white p-4 text-sm text-slate-600">
                    <p className="font-semibold text-slate-900">Nilai order</p>
                    <p className="mt-2">{formatCurrency(getOrderRevenue(order))}</p>
                  </div>
                </div>
                <p className="mt-4 rounded-[1rem] bg-white p-4 text-sm leading-7 text-slate-600">
                  Catatan customer: {order.customer.note || "Tidak ada catatan tambahan."}
                </p>
              </div>

              <div className="rounded-[1rem] border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <MessageSquareText className="h-4 w-4 text-sky-700" />
                  Catatan verifikasi untuk template WA
                </div>
                <textarea
                  value={notes[order.id] ?? buildDefaultNote(order)}
                  onChange={(event) => updateNote(order.id, event.target.value)}
                  rows={6}
                  className="mt-3 w-full rounded-[1rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-100"
                />
                <div className="mt-3 flex flex-wrap gap-2">
                  <Button type="button" variant="secondary" onClick={() => updateNote(order.id, buildDefaultNote(order))}>
                    Reset template
                  </Button>
                  {order.adminStatus === "Menunggu Verifikasi" ? (
                    <Button type="button" onClick={() => onVerifyOrder(order.id, notes[order.id] ?? buildDefaultNote(order))}>
                      <SendHorizontal className="h-4 w-4" />
                      Verifikasi dan release
                    </Button>
                  ) : (
                    <Button type="button" variant="secondary" disabled>Sudah dirilis</Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
