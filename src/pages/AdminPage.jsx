import { useState } from "react";
import { Activity, FileBarChart2, LayoutDashboard, Megaphone, PackageSearch, ShoppingCart, Tags } from "lucide-react";
import { AdminCatalogPanel } from "../components/admin/AdminCatalogPanel";
import { AdminMonitorPanel } from "../components/admin/AdminMonitorPanel";
import { AdminOrdersPanel } from "../components/admin/AdminOrdersPanel";
import { AdminOverviewPanel } from "../components/admin/AdminOverviewPanel";
import { AdminProductionPanel } from "../components/admin/AdminProductionPanel";
import { AdminPromoPanel } from "../components/admin/AdminPromoPanel";
import { AdminReportsPanel } from "../components/admin/AdminReportsPanel";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";
import { Button } from "../components/ui/Button";
import { useAppStore } from "../store/AppStore";

const tabs = [
  { id: "overview", label: "Ringkasan", icon: LayoutDashboard },
  { id: "monitor", label: "Monitor", icon: Activity },
  { id: "orders", label: "Order Masuk", icon: ShoppingCart },
  { id: "reports", label: "Laporan", icon: FileBarChart2 },
  { id: "catalog", label: "Katalog", icon: Tags },
  { id: "promo", label: "Promo Banner", icon: Megaphone },
  { id: "production", label: "Produksi", icon: PackageSearch },
];

export function AdminPage() {
  const {
    catalog,
    orders,
    promoBanner,
    verifiedOrders,
    verifyOrder,
    updatePromoBanner,
    updateCatalogProduct,
  } = useAppStore();
  const [activeTab, setActiveTab] = useState("overview");
  const [reportPeriod, setReportPeriod] = useState("monthly");
  const [editingPromo, setEditingPromo] = useState(promoBanner);

  function handlePromoChange(patch) {
    setEditingPromo((current) => ({ ...current, ...patch }));
  }

  function handleSavePromo() {
    updatePromoBanner(editingPromo);
  }

  return (
    <div className="grid min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_22%),linear-gradient(180deg,_#f8fbff_0%,_#f8fafc_100%)] lg:grid-cols-[280px_minmax(0,1fr)]">
      <DashboardSidebar
        title="Admin CMS dan operasional"
        summary={{
          eyebrow: "Fokus admin",
          title: "Katalog, order, monitor, dan laporan",
          description: "Admin mengelola storefront, memverifikasi pesanan, membaca performa produksi, dan menyiapkan laporan pendapatan.",
        }}
        actions={[{ label: "Kembali Login", to: "/login" }]}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
      <main className="p-4 md:p-6 xl:p-8">
        <DashboardHeader
          eyebrow="Admin panel"
          title="Manajemen konveksi dan verifikasi order"
          description="Dashboard ini memusatkan order masuk, monitor produksi, laporan pendapatan, katalog, promo, dan catatan template WhatsApp."
          actions={[
            <Button key="reports" variant="secondary" onClick={() => setActiveTab("reports")}>Download laporan</Button>,
            <Button key="orders" onClick={() => setActiveTab("orders")}>Buka order masuk</Button>,
          ]}
        />

        {activeTab === "overview" ? (
          <AdminOverviewPanel
            orders={orders}
            catalog={catalog}
            verifiedOrders={verifiedOrders}
            onOpenOrders={() => setActiveTab("orders")}
            onOpenReports={() => setActiveTab("reports")}
          />
        ) : null}

        {activeTab === "monitor" ? (
          <AdminMonitorPanel
            orders={orders}
            catalog={catalog}
            verifiedOrders={verifiedOrders}
            period={reportPeriod}
            onPeriodChange={setReportPeriod}
          />
        ) : null}

        {activeTab === "orders" ? <AdminOrdersPanel orders={orders} onVerifyOrder={verifyOrder} /> : null}

        {activeTab === "reports" ? (
          <AdminReportsPanel orders={orders} period={reportPeriod} onPeriodChange={setReportPeriod} />
        ) : null}

        {activeTab === "catalog" ? <AdminCatalogPanel catalog={catalog} onUpdateProduct={updateCatalogProduct} /> : null}

        {activeTab === "promo" ? (
          <AdminPromoPanel
            editingPromo={editingPromo}
            onChangePromo={handlePromoChange}
            onSavePromo={handleSavePromo}
          />
        ) : null}

        {activeTab === "production" ? <AdminProductionPanel verifiedOrders={verifiedOrders} /> : null}
      </main>
    </div>
  );
}
