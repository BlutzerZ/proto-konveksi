import { useMemo } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { StatCard } from "../ui/StatCard";
import { formatCurrency } from "../../utils/formatters";
import { buildFinancialSummary, buildProductionSeries, buildRevenueTrend, reportPeriods } from "./adminMetrics";

const chartColors = ["#0369a1", "#0f766e", "#f97316", "#7c3aed", "#334155"];

export function AdminMonitorPanel({ orders, catalog, verifiedOrders, period, onPeriodChange }) {
  const summary = useMemo(() => buildFinancialSummary(orders), [orders]);
  const trend = useMemo(() => buildRevenueTrend(orders, period), [orders, period]);
  const production = useMemo(() => buildProductionSeries(orders), [orders]);

  return (
    <section className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Pendapatan estimasi" value={formatCurrency(summary.revenue)} />
        <StatCard label="Qty produksi" value={`${summary.quantity} pcs`} />
        <StatCard label="Order terverifikasi" value={String(summary.verified)} />
        <StatCard label="Katalog aktif" value={String(catalog.filter((item) => item.published).length)} />
      </div>

      <Card>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading eyebrow="Monitor performa" title="Pendapatan dan volume order" />
          <div className="flex flex-wrap gap-2">
            {Object.entries(reportPeriods).map(([key, item]) => (
              <button
                key={key}
                type="button"
                onClick={() => onPeriodChange(key)}
                className={`rounded-[0.9rem] px-4 py-2 text-sm font-semibold transition ${period === key ? "bg-slate-900 text-white" : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.4fr)_minmax(300px,0.8fr)]">
          <div className="h-[320px] min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trend} margin={{ left: 0, right: 12, top: 8, bottom: 0 }}>
                <defs>
                  <linearGradient id="revenueFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0369a1" stopOpacity={0.35} />
                    <stop offset="95%" stopColor="#0369a1" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="label" stroke="#64748b" tickLine={false} />
                <YAxis stroke="#64748b" tickLine={false} tickFormatter={(value) => `${Math.round(value / 1000000)}jt`} />
                <Tooltip formatter={(value, name) => [name === "pendapatan" ? formatCurrency(value) : value, name === "pendapatan" ? "Pendapatan" : "Order"]} />
                <Area type="monotone" dataKey="pendapatan" stroke="#0369a1" strokeWidth={3} fill="url(#revenueFill)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="h-[320px] min-w-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={production} margin={{ left: 0, right: 12, top: 8, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" tickLine={false} />
                <YAxis allowDecimals={false} stroke="#64748b" tickLine={false} />
                <Tooltip />
                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                  {production.map((entry, index) => <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      <div className="grid gap-5 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <Card>
          <SectionHeading eyebrow="Distribusi produksi" title="Tahap aktif hari ini" />
          <div className="mt-4 h-[260px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={production} dataKey="value" nameKey="name" innerRadius={58} outerRadius={94} paddingAngle={4}>
                  {production.map((entry, index) => <Cell key={entry.name} fill={chartColors[index % chartColors.length]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card>
          <SectionHeading eyebrow="Antrian operator" title="Job yang sudah dirilis admin" />
          <div className="mt-4 space-y-3">
            {verifiedOrders.map((order) => (
              <div key={order.id} className="grid gap-3 rounded-[1rem] border border-slate-200 bg-slate-50 p-4 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="font-bold text-slate-900">{order.invoice} • {order.customer.companyName}</p>
                  <p className="mt-1 text-sm text-slate-500">{order.currentStage} • {order.estimatedShipDate}</p>
                </div>
                <p className="text-sm font-semibold text-slate-700">{formatCurrency(getOrderTotal(order))}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

function getOrderTotal(order) {
  return order.items.reduce((total, item) => total + item.subtotal, 0);
}
