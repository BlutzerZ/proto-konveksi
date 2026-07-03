import { useMemo } from "react";
import { Download } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { StatCard } from "../ui/StatCard";
import { formatCurrency } from "../../utils/formatters";
import { buildFinancialSummary, buildReportRows, downloadReportCsv, reportPeriods } from "./adminMetrics";

export function AdminReportsPanel({ orders, period, onPeriodChange }) {
  const rows = useMemo(() => buildReportRows(orders, period), [orders, period]);
  const summary = useMemo(() => buildFinancialSummary(orders), [orders]);

  return (
    <section className="space-y-6">
      <Card>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <SectionHeading eyebrow="Laporan" title="Pendapatan, biaya, laba, dan piutang" />
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
            <Button type="button" onClick={() => downloadReportCsv(rows, period)}>
              <Download className="h-4 w-4" />
              Download CSV
            </Button>
          </div>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <StatCard label="Pendapatan" value={formatCurrency(summary.revenue)} />
          <StatCard label="Estimasi biaya" value={formatCurrency(summary.estimatedCost)} />
          <StatCard label="Laba kotor" value={formatCurrency(summary.grossProfit)} />
          <StatCard label="Qty terjual" value={`${summary.quantity} pcs`} />
        </div>
      </Card>

      <Card>
        <SectionHeading eyebrow={reportPeriods[period].label} title="Rincian invoice" />
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[920px] text-left text-sm">
            <thead className="text-xs uppercase text-slate-500">
              <tr>
                {["Invoice", "Customer", "Qty", "Pendapatan", "Biaya", "Laba", "Piutang", "Tahap"].map((item) => (
                  <th key={item} className="border-b border-slate-200 px-3 py-3 font-bold">{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.invoice} className="border-b border-slate-100">
                  <td className="px-3 py-3 font-semibold text-slate-900">{row.invoice}</td>
                  <td className="px-3 py-3 text-slate-600">{row.customer}</td>
                  <td className="px-3 py-3 text-slate-600">{row.quantity} pcs</td>
                  <td className="px-3 py-3 text-slate-600">{formatCurrency(row.revenue)}</td>
                  <td className="px-3 py-3 text-slate-600">{formatCurrency(row.cost)}</td>
                  <td className="px-3 py-3 font-semibold text-emerald-700">{formatCurrency(row.grossProfit)}</td>
                  <td className="px-3 py-3 text-slate-600">{formatCurrency(row.receivable)}</td>
                  <td className="px-3 py-3 text-slate-600">{row.stage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </section>
  );
}
