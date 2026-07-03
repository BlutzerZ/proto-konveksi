import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { catalogCategories, brandName, initialCatalogProducts, initialPromoBanner, sizeProfiles } from "../data/products";
import { initialOrders } from "../data/mockOrders";

const CART_STORAGE_KEY = "prototype-cart";
const CHECKOUT_STORAGE_KEY = "prototype-checkout-draft";
const PROMO_STORAGE_KEY = "prototype-promo-dismissed";

const stageOptions = ["Approval Desain", "Cutting", "Bordir / Sablon", "Jahit", "QC", "Siap Kirim"];

const AppStoreContext = createContext(null);

function readStorage(key, fallback) {
  if (typeof window === "undefined") return fallback;

  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

function formatInvoiceNumber(orderNumber) {
  return `INV-2026-${String(712 + orderNumber).padStart(4, "0")}`;
}

function resolveUnitPrice(product, qty) {
  const sorted = [...product.priceTiers].sort((a, b) => a.minQty - b.minQty);
  const match = sorted.filter((tier) => qty >= tier.minQty).at(-1) || sorted[0];
  return match.unitPrice;
}

function resolveCategoryLabel(categoryId) {
  return catalogCategories.find((item) => item.id === categoryId)?.label || categoryId;
}

function buildTrackingStatus(stage) {
  if (stage === "QC" || stage === "Siap Kirim") return stage;
  if (stage === "Approval Desain") return "Menunggu Verifikasi";
  return "Dalam Produksi";
}

export function AppStoreProvider({ children }) {
  const [catalog, setCatalog] = useState(initialCatalogProducts);
  const [promoBanner, setPromoBanner] = useState(initialPromoBanner);
  const [cart, setCart] = useState(() => readStorage(CART_STORAGE_KEY, []));
  const [checkoutDraft, setCheckoutDraftState] = useState(() =>
    readStorage(CHECKOUT_STORAGE_KEY, {
      companyName: "",
      picName: "",
      whatsapp: "",
      email: "",
      city: "",
      address: "",
      note: "",
    }),
  );
  const [promoDismissed, setPromoDismissed] = useState(() => readStorage(PROMO_STORAGE_KEY, false));
  const [orders, setOrders] = useState(initialOrders);

  useEffect(() => {
    writeStorage(CART_STORAGE_KEY, cart);
  }, [cart]);

  useEffect(() => {
    writeStorage(CHECKOUT_STORAGE_KEY, checkoutDraft);
  }, [checkoutDraft]);

  useEffect(() => {
    writeStorage(PROMO_STORAGE_KEY, promoDismissed);
  }, [promoDismissed]);

  function addToCart(payload) {
    setCart((current) => {
      const existingIndex = current.findIndex(
        (item) =>
          item.productId === payload.productId &&
          item.variant === payload.variant &&
          item.size === payload.size &&
          item.branding === payload.branding,
      );

      if (existingIndex === -1) {
        return [...current, { ...payload, id: crypto.randomUUID() }];
      }

      return current.map((item, index) =>
        index === existingIndex
          ? {
              ...item,
              qty: item.qty + payload.qty,
              addonsTotal: (item.qty + payload.qty) * item.addonUnitTotal,
              subtotal: (item.qty + payload.qty) * item.unitPrice + (item.qty + payload.qty) * item.addonUnitTotal,
            }
          : item,
      );
    });
  }

  function updateCartItem(itemId, patch) {
    setCart((current) =>
      current.map((item) => {
        if (item.id !== itemId) return item;
        const qty = patch.qty ?? item.qty;
        const unitPrice = patch.unitPrice ?? item.unitPrice;
        const addonUnitTotal = patch.addonUnitTotal ?? item.addonUnitTotal;
        const addonsTotal = qty * addonUnitTotal;
        return {
          ...item,
          ...patch,
          qty,
          unitPrice,
          addonUnitTotal,
          addonsTotal,
          subtotal: qty * unitPrice + addonsTotal,
        };
      }),
    );
  }

  function removeCartItem(itemId) {
    setCart((current) => current.filter((item) => item.id !== itemId));
  }

  function clearCart() {
    setCart([]);
  }

  function dismissPromo() {
    setPromoDismissed(true);
  }

  function resetPromoDismiss() {
    setPromoDismissed(false);
  }

  function setCheckoutDraft(patch) {
    setCheckoutDraftState((current) => ({ ...current, ...patch }));
  }

  function submitCheckout(customerInput) {
    const nextOrderNumber = orders.length + 1;
    const invoice = formatInvoiceNumber(nextOrderNumber);
    const createdOrder = {
      id: `order-${String(nextOrderNumber).padStart(3, "0")}`,
      invoice,
      customer: customerInput,
      items: cart.map((item) => ({
        productId: item.productId,
        productName: item.productName,
        categoryLabel: item.categoryLabel,
        variant: item.variant,
        size: item.size,
        qty: item.qty,
        branding: item.branding,
        logoFileName: item.logoFileName,
        note: item.note,
        addonNames: item.addons.map((addon) => addon.name),
        unitPrice: item.unitPrice,
        subtotal: item.subtotal,
        image: item.image,
      })),
      status: "Menunggu Verifikasi",
      adminStatus: "Menunggu Verifikasi",
      operatorVisible: false,
      paymentStatus: "Belum diproses",
      currentStage: "Review Admin",
      estimatedShipDate: "Menunggu jadwal admin",
      adminNotes: "Order baru dari checkout ecommerce. Perlu verifikasi spesifikasi dan logo.",
      productionUpdates: [],
    };

    setOrders((current) => [createdOrder, ...current]);
    setCheckoutDraftState(customerInput);
    setCart([]);
    return createdOrder;
  }

  function verifyOrder(orderId, verificationNote = "") {
    setOrders((current) =>
      current.map((order) =>
        order.id === orderId
          ? {
              ...order,
              status: "Dalam Produksi",
              adminStatus: "Terverifikasi",
              operatorVisible: true,
              currentStage: "Approval Desain",
              estimatedShipDate: order.estimatedShipDate === "Menunggu jadwal admin" ? "Estimasi 7-10 hari kerja" : order.estimatedShipDate,
              adminNotes: verificationNote.trim() || order.adminNotes,
              productionUpdates: order.productionUpdates.length
                ? order.productionUpdates
                : [
                    {
                      id: crypto.randomUUID(),
                      stage: "Approval Desain",
                      date: "03 Jul 2026",
                      estimate: "Release ke cutting setelah admin approve",
                      note: verificationNote.trim() || "Admin memverifikasi brief, file logo, dan konfigurasi ukuran untuk diproses operator.",
                      photo: order.items[0]?.image,
                    },
                  ],
            }
          : order,
      ),
    );
  }

  function updatePromoBanner(patch) {
    setPromoBanner((current) => ({ ...current, ...patch }));
  }

  function updateCatalogProduct(productId, patch) {
    setCatalog((current) => current.map((item) => (item.id === productId ? { ...item, ...patch } : item)));
  }

  function addCatalogProduct(product) {
    setCatalog((current) => [{ ...product, id: product.id || crypto.randomUUID() }, ...current]);
  }

  function addProductionUpdate(orderId, payload) {
    setOrders((current) =>
      current.map((order) => {
        if (order.id !== orderId) return order;

        const nextStage = payload.stage;
        const nextStatus = buildTrackingStatus(nextStage);
        return {
          ...order,
          status: nextStatus,
          currentStage: nextStage,
          estimatedShipDate: payload.estimate || order.estimatedShipDate,
          productionUpdates: [
            {
              id: crypto.randomUUID(),
              stage: payload.stage,
              date: payload.date,
              estimate: payload.estimate,
              note: payload.note,
              photo: payload.photo,
            },
            ...order.productionUpdates,
          ],
        };
      }),
    );
  }

  const value = useMemo(() => {
    const featuredProducts = catalog.filter((item) => item.featured && item.published);
    const publishedProducts = catalog.filter((item) => item.published);
    const verifiedOrders = orders.filter((order) => order.operatorVisible);
    const cartCount = cart.reduce((total, item) => total + item.qty, 0);
    const cartSubtotal = cart.reduce((total, item) => total + item.subtotal, 0);

    return {
      brandName,
      catalogCategories,
      sizeProfiles,
      stageOptions,
      catalog,
      featuredProducts,
      publishedProducts,
      promoBanner,
      promoDismissed,
      cart,
      cartCount,
      cartSubtotal,
      checkoutDraft,
      orders,
      verifiedOrders,
      addToCart,
      updateCartItem,
      removeCartItem,
      clearCart,
      dismissPromo,
      resetPromoDismiss,
      setCheckoutDraft,
      submitCheckout,
      verifyOrder,
      updatePromoBanner,
      updateCatalogProduct,
      addCatalogProduct,
      addProductionUpdate,
      resolveUnitPrice,
      resolveCategoryLabel,
    };
  }, [catalog, promoBanner, promoDismissed, cart, checkoutDraft, orders]);

  return <AppStoreContext.Provider value={value}>{children}</AppStoreContext.Provider>;
}

export function useAppStore() {
  const context = useContext(AppStoreContext);

  if (!context) {
    throw new Error("useAppStore must be used within AppStoreProvider");
  }

  return context;
}
