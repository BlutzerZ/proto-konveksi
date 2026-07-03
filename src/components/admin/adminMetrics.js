export const reportPeriods = {
  weekly: { label: "Mingguan", fileLabel: "mingguan" },
  monthly: { label: "Bulanan", fileLabel: "bulanan" },
  yearly: { label: "Tahunan", fileLabel: "tahunan" },
};

export function getOrderRevenue(order) {
  return order.items.reduce((total, item) => total + item.subtotal, 0);
}

export function getOrderQuantity(order) {
  return order.items.reduce((total, item) => total + item.qty, 0);
}

export function buildFinancialSummary(orders) {
  const revenue = orders.reduce((total, order) => total + getOrderRevenue(order), 0);
  const quantity = orders.reduce((total, order) => total + getOrderQuantity(order), 0);
  const verified = orders.filter((order) => order.adminStatus === "Terverifikasi").length;
  const waiting = orders.length - verified;
  const estimatedCost = Math.round(revenue * 0.58);
  const grossProfit = revenue - estimatedCost;

  return { revenue, quantity, verified, waiting, estimatedCost, grossProfit };
}

export function buildReportRows(orders, period) {
  return orders.map((order, index) => {
    const revenue = getOrderRevenue(order);
    const cost = Math.round(revenue * (period === "weekly" ? 0.56 : period === "monthly" ? 0.58 : 0.6));
    const paid = order.adminStatus === "Terverifikasi" ? Math.round(revenue * 0.5) : 0;

    return {
      no: index + 1,
      invoice: order.invoice,
      customer: order.customer.companyName,
      city: order.customer.city,
      period: reportPeriods[period].label,
      status: order.adminStatus,
      quantity: getOrderQuantity(order),
      revenue,
      cost,
      grossProfit: revenue - cost,
      paid,
      receivable: revenue - paid,
      stage: order.currentStage,
    };
  });
}

export function buildRevenueTrend(orders, period) {
  const multiplier = period === "weekly" ? 1 : period === "monthly" ? 4 : 12;
  const labels = period === "weekly"
    ? ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab"]
    : period === "monthly"
      ? ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4"]
      : ["Q1", "Q2", "Q3", "Q4"];

  const baseRevenue = buildFinancialSummary(orders).revenue || 1;
  return labels.map((label, index) => ({
    label,
    pendapatan: Math.round((baseRevenue / labels.length) * (0.74 + index * 0.13) * multiplier),
    order: Math.max(1, Math.round((orders.length + index) * (period === "yearly" ? 3 : 1))),
  }));
}

export function buildProductionSeries(orders) {
  return [
    { name: "Review", value: orders.filter((order) => order.currentStage === "Review Admin").length },
    { name: "Approval", value: orders.filter((order) => order.currentStage === "Approval Desain").length },
    { name: "Produksi", value: orders.filter((order) => ["Cutting", "Bordir / Sablon", "Jahit"].includes(order.currentStage)).length },
    { name: "QC", value: orders.filter((order) => order.currentStage === "QC").length },
    { name: "Kirim", value: orders.filter((order) => order.currentStage === "Siap Kirim").length },
  ];
}

export function downloadReportCsv(rows, period) {
  const headers = ["No", "Invoice", "Customer", "Kota", "Periode", "Status", "Qty", "Pendapatan", "Estimasi Biaya", "Laba Kotor", "Terbayar", "Piutang", "Tahap"];
  const csvRows = [
    headers,
    ...rows.map((row) => [
      row.no,
      row.invoice,
      row.customer,
      row.city,
      row.period,
      row.status,
      row.quantity,
      row.revenue,
      row.cost,
      row.grossProfit,
      row.paid,
      row.receivable,
      row.stage,
    ]),
  ];
  const csv = csvRows.map((row) => row.map((cell) => `"${String(cell).replaceAll("\"", "\"\"")}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `laporan-${reportPeriods[period].fileLabel}-sentaprint.csv`;
  link.click();
  URL.revokeObjectURL(url);
}
