import { Navigate, Route, Routes } from "react-router-dom";
import { AppModal } from "./components/layout/AppModal";
import { ToastProvider } from "./components/providers/ToastProvider";
import { AppStoreProvider } from "./store/AppStore";
import { modalTemplates } from "./data/modals";
import { AdminPage } from "./pages/AdminPage";
import { CartPage } from "./pages/CartPage";
import { CatalogPage } from "./pages/CatalogPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { OperatorPage } from "./pages/OperatorPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { TrackingPage } from "./pages/TrackingPage";
import { useMemo, useState } from "react";

export default function App() {
  const [modalKey, setModalKey] = useState(null);

  const modal = useMemo(() => (modalKey ? modalTemplates[modalKey] : null), [modalKey]);

  function openModal(key) {
    setModalKey(key);
  }

  const shared = {
    openModal,
  };

  return (
    <AppStoreProvider>
      <ToastProvider>
        <AppModal open={Boolean(modal)} onClose={() => setModalKey(null)} title={modal?.title} body={modal?.body} />
        <Routes>
          <Route path="/" element={<HomePage {...shared} />} />
          <Route path="/catalog" element={<CatalogPage {...shared} />} />
          <Route path="/products/:productId" element={<ProductDetailPage {...shared} />} />
          <Route path="/cart" element={<CartPage {...shared} />} />
          <Route path="/checkout" element={<CheckoutPage {...shared} />} />
          <Route path="/order" element={<Navigate to="/checkout" replace />} />
          <Route path="/tracking" element={<TrackingPage {...shared} />} />
          <Route path="/login" element={<LoginPage {...shared} />} />
          <Route path="/admin" element={<AdminPage {...shared} />} />
          <Route path="/operator" element={<OperatorPage {...shared} />} />
        </Routes>
      </ToastProvider>
    </AppStoreProvider>
  );
}
