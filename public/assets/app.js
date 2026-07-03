const productCatalog = [
  {
    id: "quarter-zip-polo",
    category: "Polo",
    name: "Quarter Zip-Polo",
    image: "assets/media/pdf/polo-001.jpg",
    material: "Lacoste CVC24s",
    branding: "bordir",
    minOrder: 36,
    design: "Half zipper, bordir 2 titik",
    prices: { 36: 112000, 50: 109000, 100: 105000 },
    addons: [
      { name: "Longsleeve", price: 7000 },
      { name: "2XL", price: 5000 },
      { name: "3XL", price: 10000 }
    ]
  },
  {
    id: "elora-top",
    category: "Tshirt",
    name: "Elora Top",
    image: "assets/media/pdf/polo-003.jpg",
    material: "Combed 30S",
    branding: "sablon",
    minOrder: 36,
    design: "Sablon DTF",
    prices: { 36: 66000, 50: 64000, 100: 62000 },
    addons: [
      { name: "Longsleeve", price: 7000 },
      { name: "Plastisol", price: 8000 },
      { name: "3XL", price: 10000 }
    ]
  },
  {
    id: "urban-bolt",
    category: "Workshirt",
    name: "Urban Bolt",
    image: "assets/media/pdf/workshirt-001.jpg",
    material: "American Drill",
    branding: "bordir",
    minOrder: 36,
    design: "Bordir 3 titik, zipper dada, 2 kantong",
    prices: { 36: 141000, 50: 137000, 100: 130500 },
    addons: [
      { name: "Japan Drill", price: 15000 },
      { name: "Longsleeve", price: 10000 },
      { name: "3XL", price: 20000 }
    ]
  },
  {
    id: "chief-field",
    category: "WajaKarya",
    name: "Chief-field",
    image: "assets/media/pdf/workshirt-003.jpg",
    material: "American Drill",
    branding: "bordir",
    minOrder: 36,
    design: "Zipper, bordir 2 titik",
    prices: { 36: 272000, 50: 257000, 100: 243000 },
    addons: [
      { name: "Japan Drill", price: 15000 },
      { name: "4XL", price: 35000 },
      { name: "5XL", price: 45000 }
    ]
  },
  {
    id: "tumbler-vura",
    category: "Tumbler",
    name: "Tumbler VURA",
    image: "assets/media/pdf/vest-001.jpg",
    material: "Stainless steel sus304",
    branding: "sablon",
    minOrder: 25,
    design: "380ml, 7x19cm",
    prices: { 25: 118000, 50: 110000, 100: 110000 },
    addons: [
      { name: "Custom sleeve box", price: 7000 },
      { name: "Logo 2 sisi", price: 3000 }
    ]
  },
  {
    id: "pathfinder-hybrid-vest",
    category: "Vest",
    name: "Pathfinder Hybrid Vest",
    image: "assets/media/pdf/vest-003.jpg",
    material: "Water repellent x Corduroy",
    branding: "bordir",
    minOrder: 36,
    design: "Bordir 1 titik, puff",
    prices: { 36: 215000, 50: 204000, 100: 193000 },
    addons: [
      { name: "2XL", price: 10000 },
      { name: "4XL", price: 30000 },
      { name: "Custom bahan", price: 20000 }
    ]
  },
  {
    id: "nova-hood-puffer",
    category: "Jacket",
    name: "Nova Hood Puffer",
    image: "assets/media/pdf/vest-004.jpg",
    material: "Water repellent x polar",
    branding: "bordir",
    minOrder: 36,
    design: "Bordir 2 titik, furing katun",
    prices: { 36: 240000, 50: 228000, 100: 216000 },
    addons: [
      { name: "3XL", price: 20000 },
      { name: "Furing premium", price: 18000 },
      { name: "Nama bordir", price: 8000 }
    ]
  },
  {
    id: "lini-selaras",
    category: "Aura",
    name: "Lini Selaras",
    image: "assets/media/pdf/workshirt-005.jpg",
    material: "Japanese Fiber",
    branding: "bordir",
    minOrder: 36,
    design: "Bordir 1 titik",
    prices: { 36: 130000, 50: 123000, 100: 117000 },
    addons: [
      { name: "2XL", price: 10000 },
      { name: "Longsleeve", price: 10000 }
    ]
  },
  {
    id: "pluvia-raincoat",
    category: "Raincoat",
    name: "Pluvia Raincoat",
    image: "assets/media/pdf/vest-006.jpg",
    material: "3 layer",
    branding: "sablon",
    minOrder: 36,
    design: "Sablon 1 titik",
    prices: { 36: 175000, 50: 166000, 100: 157000 },
    addons: [
      { name: "Reflective strip", price: 12000 },
      { name: "Tas kemas", price: 5000 }
    ]
  },
  {
    id: "daily-grind",
    category: "Sweatpants",
    name: "Daily Grind",
    image: "assets/media/pdf/polo-005.jpg",
    material: "Lotto",
    branding: "sablon",
    minOrder: 25,
    design: "Variasi kantong, sablon",
    prices: { 25: 84000, 50: 80000, 100: 76000 },
    addons: [
      { name: "Quick dry stretch", price: 8000 },
      { name: "Polar", price: 9000 },
      { name: "3XL", price: 10000 }
    ]
  }
];

const trackingRecords = {
  "INV-2026-0712": {
    customer: "PT Arunika Persada",
    product: "Urban Bolt Workshirt",
    qty: "50 pcs",
    status: "Dalam Produksi",
    balance: "Rp 2.500.000",
    timeline: [
      { label: "Pesanan diverifikasi admin", date: "02 Jul 2026", active: true },
      { label: "Invoice dibuat otomatis", date: "02 Jul 2026", active: true },
      { label: "Cutting dan persiapan bahan", date: "03 Jul 2026", active: true },
      { label: "Sablon / bordir berjalan", date: "04 Jul 2026", active: true },
      { label: "QC dan finishing", date: "05 Jul 2026", active: false },
      { label: "Siap kirim", date: "06 Jul 2026", active: false }
    ],
    photos: [
      { title: "Bahan dan pola siap potong", note: "Tahap cutting dimulai pukul 09:10" },
      { title: "Bordir logo depan kiri", note: "Logo company sedang diproses" },
      { title: "Pemeriksaan jahitan sampel", note: "QC awal oleh supervisor produksi" }
    ]
  }
};

const adminData = {
  stats: [
    { value: "124", label: "Total pesanan bulan ini" },
    { value: "18", label: "Pesanan baru" },
    { value: "11", label: "Produksi aktif" },
    { value: "Rp 186 jt", label: "Revenue simulasi" }
  ],
  orders: [
    { invoice: "INV-2026-0712", customer: "PT Arunika Persada", item: "Urban Bolt", status: "Perlu Verifikasi" },
    { invoice: "INV-2026-0713", customer: "CV Pesisir Karya", item: "Quarter Zip-Polo", status: "Dalam Produksi" },
    { invoice: "INV-2026-0714", customer: "Yayasan Pilar Bangsa", item: "Nova Hood Puffer", status: "QC" }
  ],
  customers: [
    { name: "PT Arunika Persada", city: "Semarang", volume: "7 pesanan", note: "Sering order workshirt dan vest." },
    { name: "CV Pesisir Karya", city: "Solo", volume: "3 pesanan", note: "Aktif minta update produksi via WhatsApp." },
    { name: "Yayasan Pilar Bangsa", city: "Yogyakarta", volume: "5 pesanan", note: "Order musiman untuk event tahunan." }
  ],
  monitoring: [
    { name: "Urban Bolt | INV-2026-0712", progress: 68, stage: "Bordir", risk: "On track" },
    { name: "Quarter Zip-Polo | INV-2026-0713", progress: 42, stage: "Cutting", risk: "Perlu approval desain" },
    { name: "Nova Hood Puffer | INV-2026-0714", progress: 88, stage: "QC", risk: "Siap kirim" }
  ],
  reports: [
    { label: "Pesanan selesai", value: "37" },
    { label: "Pesanan terlambat", value: "4" },
    { label: "Rata-rata lead time", value: "6.2 hari" },
    { label: "Customer repeat order", value: "61%" }
  ],
  templates: [
    "Pesanan selesai dan siap kirim ke customer.",
    "Sisa pembayaran invoice sebelum pengiriman.",
    "Promo diskon repeat order untuk customer aktif."
  ],
  pricing: [
    { title: "Harga katalog", text: "Gunakan tier harga katalog untuk produk standar dengan bahan dan branding default." },
    { title: "Harga custom", text: "Aktifkan quote manual jika customer meminta bahan khusus atau model di luar katalog." },
    { title: "Invoice otomatis", text: "Nomor invoice terbentuk saat pesanan lolos verifikasi admin." }
  ]
};

const operatorData = {
  jobs: [
    { id: "INV-2026-0712", product: "Urban Bolt", customer: "PT Arunika Persada", qty: "50 pcs", deadline: "06 Jul 2026", status: "Bordir" },
    { id: "INV-2026-0713", product: "Quarter Zip-Polo", customer: "CV Pesisir Karya", qty: "36 pcs", deadline: "07 Jul 2026", status: "Cutting" },
    { id: "INV-2026-0714", product: "Nova Hood Puffer", customer: "Yayasan Pilar Bangsa", qty: "100 pcs", deadline: "08 Jul 2026", status: "QC" }
  ],
  stages: ["Verifikasi Desain", "Cutting", "Sablon / Bordir", "Jahit / Finishing", "QC", "Selesai"]
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(value);

const getCategories = () => [...new Set(productCatalog.map((item) => item.category))];
const findProduct = (id) => productCatalog.find((item) => item.id === id);
const getProductImage = (product) => product?.image || "assets/media/pdf/polo-001.jpg";

function landingProductCard(product) {
  return `
    <article class="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/95 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <div class="relative overflow-hidden bg-gradient-to-br from-slate-100 to-orange-50">
        <img src="${getProductImage(product)}" alt="${product.name}" class="h-64 w-full object-cover transition duration-500 group-hover:scale-105">
        <div class="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm">
          <i data-lucide="shirt" class="h-3.5 w-3.5 text-brand-500"></i>${product.category}
        </div>
      </div>
      <div class="space-y-4 p-5">
        <div>
          <h3 class="text-xl font-black tracking-tight text-slate-900">${product.name}</h3>
          <p class="mt-2 text-sm leading-7 text-slate-600">${product.material} • ${product.design}</p>
        </div>
        <div class="rounded-[1.25rem] bg-slate-50 p-4">
          <div class="flex items-center justify-between gap-3">
            <div>
              <p class="text-xs uppercase tracking-[0.24em] text-slate-400">Mulai dari</p>
              <p class="text-2xl font-black text-slate-900">${formatCurrency(getStartingPrice(product))}</p>
            </div>
            <div class="rounded-2xl bg-brand-100 p-3 text-brand-700">
              <i data-lucide="badge-percent" class="h-5 w-5"></i>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row">
          <button class="inline-flex items-center justify-center gap-2 rounded-[1rem] bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800" type="button" data-product-detail="${product.id}">
            <i data-lucide="eye" class="h-4 w-4"></i>Detail
          </button>
          <a class="inline-flex items-center justify-center gap-2 rounded-[1rem] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50" href="order.html?product=${product.id}">
            <i data-lucide="shopping-bag" class="h-4 w-4"></i>Pesan
          </a>
        </div>
      </div>
    </article>
  `;
}

function renderHome() {
  const featured = document.getElementById("featured-products");
  const chips = document.getElementById("home-category-chips");
  const categorySections = document.getElementById("home-category-sections");
  const searchInput = document.getElementById("home-search");
  if (!featured || !chips || !categorySections || !searchInput) return;

  let activeCategory = "Semua";
  let searchTerm = "";

  const draw = () => {
    const visibleProducts = productCatalog.filter((item) => {
      const categoryMatch = activeCategory === "Semua" || item.category === activeCategory;
      const haystack = `${item.name} ${item.category} ${item.material} ${item.design}`.toLowerCase();
      const searchMatch = haystack.includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });

    const recommended = visibleProducts.slice(0, 6);
    featured.innerHTML = recommended.length
      ? recommended.map((item) => landingProductCard(item)).join("")
      : `<div class="rounded-[1.75rem] border border-white/70 bg-white/95 p-6 shadow-card"><strong class="block text-slate-900">Produk tidak ditemukan</strong><span class="mt-2 block text-sm text-slate-500">Coba kata kunci atau kategori lain.</span></div>`;

    const grouped = getCategories()
      .map((category) => ({
        category,
        items: productCatalog
          .filter((item) => item.category === category)
          .filter((item) => {
            const haystack = `${item.name} ${item.category} ${item.material} ${item.design}`.toLowerCase();
            return haystack.includes(searchTerm.toLowerCase());
          })
          .slice(0, 3)
      }))
      .filter((group) => group.items.length > 0);

    categorySections.innerHTML = grouped.map((group) => `
      <article class="rounded-[2rem] border border-white/70 bg-white/95 p-5 shadow-card md:p-6">
        <div class="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span class="inline-flex rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">${group.category}</span>
            <h3 class="mt-3 text-2xl font-black tracking-tight text-slate-900">Koleksi ${group.category}</h3>
          </div>
          <a class="inline-flex items-center gap-2 text-sm font-semibold text-brand-600" href="catalog.html">Lihat kategori <i data-lucide="arrow-right" class="h-4 w-4"></i></a>
        </div>
        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          ${group.items.map((item) => landingProductCard(item)).join("")}
        </div>
      </article>
    `).join("");

    bindProductDetails();
    initIcons();
  };

  chips.innerHTML = ["Semua", ...getCategories()]
    .map((category) => `<button class="${category === "Semua" ? "bg-slate-900 text-white" : "border border-slate-200 bg-white text-slate-700"} whitespace-nowrap rounded-full px-4 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5" type="button" data-home-category="${category}">${category}</button>`)
    .join("");

  chips.addEventListener("click", (event) => {
    const button = event.target.closest("[data-home-category]");
    if (!button) return;
    activeCategory = button.dataset.homeCategory;
    chips.querySelectorAll("[data-home-category]").forEach((chip) => {
      const active = chip === button;
      chip.className = `${active ? "bg-slate-900 text-white" : "border border-slate-200 bg-white text-slate-700"} whitespace-nowrap rounded-full px-4 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5`;
    });
    draw();
  });

  searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    draw();
  });

  draw();
}

function getStartingPrice(product) {
  const firstKey = Object.keys(product.prices)[0];
  return product.prices[firstKey];
}

function sortProducts(products, sortValue) {
  const sorted = [...products];
  if (sortValue === "low-price") {
    sorted.sort((a, b) => getStartingPrice(a) - getStartingPrice(b));
  } else if (sortValue === "high-price") {
    sorted.sort((a, b) => getStartingPrice(b) - getStartingPrice(a));
  }
  return sorted;
}

function renderCatalog() {
  const container = document.getElementById("catalog-products");
  const categoryFilters = document.getElementById("catalog-category-filters");
  const brandFilter = document.getElementById("brand-filter");
  const minOrderFilter = document.getElementById("min-order-filter");
  const sortFilter = document.getElementById("sort-filter");
  if (!container || !categoryFilters || !brandFilter || !minOrderFilter || !sortFilter) return;

  let activeCategory = "Semua";
  const draw = () => {
    const brand = brandFilter.value;
    const minOrder = minOrderFilter.value;
    const products = sortProducts(
      productCatalog.filter((product) => {
        const categoryMatch = activeCategory === "Semua" || product.category === activeCategory;
        const brandMatch = brand === "all" || product.branding === brand;
        const minOrderMatch = minOrder === "all" || String(product.minOrder) === minOrder;
        return categoryMatch && brandMatch && minOrderMatch;
      }),
      sortFilter.value
    );
    container.innerHTML = products.length
      ? products.map((item) => landingProductCard(item)).join("")
      : `<div class="rounded-[1.75rem] border border-white/70 bg-white/95 p-6 text-sm text-slate-600 shadow-card">Produk tidak ditemukan untuk kombinasi filter ini.</div>`;
    bindProductDetails();
    initIcons();
  };

  categoryFilters.innerHTML = ["Semua", ...getCategories()]
    .map((category) => `<button class="${category === "Semua" ? "bg-slate-900 text-white" : "border border-slate-200 bg-white text-slate-700"} whitespace-nowrap rounded-full px-4 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5" type="button" data-category-filter="${category}">${category}</button>`)
    .join("");

  categoryFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category-filter]");
    if (!button) return;
    activeCategory = button.dataset.categoryFilter;
    categoryFilters.querySelectorAll("[data-category-filter]").forEach((chip) => {
      const active = chip === button;
      chip.className = `${active ? "bg-slate-900 text-white" : "border border-slate-200 bg-white text-slate-700"} whitespace-nowrap rounded-full px-4 py-3 text-sm font-semibold shadow-sm transition hover:-translate-y-0.5`;
    });
    draw();
  });

  brandFilter.addEventListener("change", draw);
  minOrderFilter.addEventListener("change", draw);
  sortFilter.addEventListener("change", draw);
  draw();
}

function bindProductDetails() {
  document.querySelectorAll("[data-product-detail]").forEach((button) => {
    button.addEventListener("click", () => openProductModal(button.dataset.productDetail));
  });
}

function openProductModal(productId) {
  const product = findProduct(productId);
  if (!product) return;
  const appModal = document.getElementById("app-modal");
  if (appModal) {
    openAppModal(
      product.name,
      `
        <div class="grid gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div class="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50">
            <img src="${getProductImage(product)}" alt="${product.name}" class="h-full w-full object-cover">
          </div>
          <div class="space-y-5">
            <div>
              <p class="text-sm font-semibold uppercase tracking-[0.24em] text-brand-500">${product.category}</p>
              <p class="mt-3 text-sm leading-7 text-slate-600">${product.material} • ${product.design} • Minimum order ${product.minOrder} pcs</p>
            </div>
            <div class="grid gap-4 md:grid-cols-2">
              <div class="rounded-[1.25rem] bg-slate-50 p-4">
                <h4 class="font-bold text-slate-900">Tier harga</h4>
                <div class="mt-3 space-y-2">
                  ${Object.entries(product.prices).map(([qty, price]) => `<div class="flex items-center justify-between text-sm"><span>${qty} pcs</span><strong>${formatCurrency(price)}</strong></div>`).join("")}
                </div>
              </div>
              <div class="rounded-[1.25rem] bg-slate-50 p-4">
                <h4 class="font-bold text-slate-900">Add-on</h4>
                <div class="mt-3 space-y-2">
                  ${product.addons.map((addon) => `<div class="flex items-center justify-between text-sm"><span>${addon.name}</span><strong>+ ${formatCurrency(addon.price)}</strong></div>`).join("")}
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-3 sm:flex-row">
              <a href="order.html?product=${product.id}" class="inline-flex items-center justify-center gap-2 rounded-[1rem] bg-slate-900 px-4 py-3 text-sm font-semibold text-white"><i data-lucide="shopping-bag" class="h-4 w-4"></i>Pesan Produk Ini</a>
              <button type="button" class="inline-flex items-center justify-center gap-2 rounded-[1rem] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700" data-toast="Tim admin akan menggunakan invoice untuk menghubungkan pesanan ini ke tracking produksi."><i data-lucide="message-square-share" class="h-4 w-4"></i>Info Tracking</button>
            </div>
          </div>
        </div>
      `
    );
    return;
  }

  const modal = document.getElementById("product-modal");
  const content = document.getElementById("product-modal-content");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="page-intro">
      <span class="eyebrow">${product.category}</span>
      <h1>${product.name}</h1>
      <p>${product.material} • ${product.design} • Minimum order ${product.minOrder} pcs</p>
    </div>
    <div class="dashboard-grid">
      <article class="card-shadow">
        <h3>Tier harga</h3>
        <div class="price-list">
          ${Object.entries(product.prices).map(([qty, price]) => `
            <div class="price-item">
              <span>${qty} pcs</span>
              <strong>${formatCurrency(price)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
      <article class="card-shadow">
        <h3>Add-on</h3>
        <div class="price-list">
          ${product.addons.map((addon) => `
            <div class="price-item">
              <span>${addon.name}</span>
              <strong>+ ${formatCurrency(addon.price)}</strong>
            </div>
          `).join("")}
        </div>
      </article>
    </div>
    <div class="cta-actions" style="margin-top: 18px;">
      <a class="btn btn-primary" href="order.html?product=${product.id}">Pesan Produk Ini</a>
      <a class="btn btn-secondary" href="tracking.html">Lihat Tracking</a>
    </div>
  `;

  modal.classList.remove("hidden");
}

function bindModalClose() {
  document.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", () => {
      document.getElementById("product-modal")?.classList.add("hidden");
    });
  });
}

function renderOrderForm() {
  const categorySelect = document.getElementById("order-category");
  const productSelect = document.getElementById("order-product");
  const addonGrid = document.getElementById("addon-grid");
  const estimateButton = document.getElementById("estimate-button");
  const estimateBox = document.getElementById("estimate-box");
  const summaryBox = document.getElementById("order-summary");
  if (!categorySelect || !productSelect || !addonGrid || !estimateButton || !estimateBox || !summaryBox) return;

  const params = new URLSearchParams(window.location.search);
  const selectedProductId = params.get("product");
  let activeStep = 0;
  let currentEstimate = null;

  const categories = getCategories();
  categorySelect.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");

  const fillProducts = (category, preferredId = null) => {
    const products = productCatalog.filter((product) => product.category === category);
    productSelect.innerHTML = products.map((product) => `<option value="${product.id}">${product.name}</option>`).join("");
    if (preferredId && products.some((product) => product.id === preferredId)) {
      productSelect.value = preferredId;
    }
    fillAddons();
  };

  const fillAddons = () => {
    const product = productCatalog.find((item) => item.id === productSelect.value);
    addonGrid.innerHTML = (product?.addons || []).map((addon, index) => `
      <label class="flex items-center justify-between gap-4 rounded-[1.25rem] border border-slate-200 bg-slate-50 px-4 py-4">
        <span class="text-sm font-medium text-slate-800">${addon.name} <small class="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">+ ${formatCurrency(addon.price)}</small></span>
        <input type="checkbox" data-addon-index="${index}">
      </label>
    `).join("");
  };

  categorySelect.addEventListener("change", () => fillProducts(categorySelect.value));
  productSelect.addEventListener("change", fillAddons);

  const initialProduct = productCatalog.find((item) => item.id === selectedProductId) || productCatalog[0];
  categorySelect.value = initialProduct.category;
  fillProducts(initialProduct.category, initialProduct.id);

  const computeEstimate = () => {
    const product = productCatalog.find((item) => item.id === productSelect.value);
    const qty = Number(document.getElementById("order-qty").value);
    const basePrice = product.prices[qty] || Object.values(product.prices)[0];
    const selectedAddons = [...addonGrid.querySelectorAll("input:checked")].map((input) => product.addons[Number(input.dataset.addonIndex)]);
    const addonTotal = selectedAddons.reduce((total, addon) => total + addon.price, 0);
    const subtotal = (basePrice + addonTotal) * qty;
    currentEstimate = { product, qty, basePrice, selectedAddons, subtotal };
    estimateBox.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between gap-3"><span>Produk</span><strong>${product.name}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Harga dasar / pcs</span><strong>${formatCurrency(basePrice)}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Add-on / pcs</span><strong>${formatCurrency(addonTotal)}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Subtotal simulasi</span><strong>${formatCurrency(subtotal)}</strong></div>
      </div>
    `;
    fillSummary();
    showToast("Estimasi berhasil dihitung.", "success");
  };

  const fillSummary = () => {
    const company = document.getElementById("customer-name").value || "-";
    const pic = document.getElementById("customer-pic").value || "-";
    const city = document.getElementById("customer-city").value || "-";
    const branding = document.getElementById("order-branding").value;
    const note = document.getElementById("order-note").value || "-";
    if (!currentEstimate) {
      summaryBox.innerHTML = "<p class='text-sm text-slate-500'>Hitung estimasi terlebih dahulu agar ringkasan terisi.</p>";
      return;
    }

    summaryBox.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between gap-3"><span>Customer</span><strong>${company}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>PIC</span><strong>${pic}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Kota</span><strong>${city}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Produk</span><strong>${currentEstimate.product.name}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Branding</span><strong>${branding}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Qty</span><strong>${currentEstimate.qty} pcs</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Add-on</span><strong>${currentEstimate.selectedAddons.map((item) => item.name).join(", ") || "Tidak ada"}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Catatan</span><strong>${note}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Total estimasi</span><strong>${formatCurrency(currentEstimate.subtotal)}</strong></div>
      </div>
    `;
  };

  estimateButton.addEventListener("click", computeEstimate);

  const steps = [...document.querySelectorAll(".step")];
  const stepPanels = [...document.querySelectorAll(".step-panel")];
  const prevButton = document.getElementById("prev-step");
  const nextButton = document.getElementById("next-step");

  const syncStep = () => {
    steps.forEach((step, index) => {
      const active = index === activeStep;
      step.className = active
        ? "step active inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
        : "step inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700";
    });
    stepPanels.forEach((panel, index) => {
      panel.classList.toggle("hidden", index !== activeStep);
      panel.classList.toggle("active", index === activeStep);
    });
    prevButton.disabled = activeStep === 0;
    nextButton.textContent = activeStep === stepPanels.length - 1 ? "Submit Mock" : "Lanjut";
    prevButton.className = `inline-flex items-center justify-center gap-2 rounded-[1rem] border border-slate-200 px-5 py-3 text-sm font-semibold shadow-sm ${activeStep === 0 ? "cursor-not-allowed bg-slate-100 text-slate-400" : "bg-white text-slate-700"}`;
  };

  steps.forEach((step, index) => {
    step.addEventListener("click", () => {
      activeStep = index;
      syncStep();
    });
  });

  prevButton.addEventListener("click", () => {
    activeStep = Math.max(0, activeStep - 1);
    syncStep();
  });

  nextButton.addEventListener("click", () => {
    if (activeStep === 3) fillSummary();
    if (activeStep === stepPanels.length - 1) {
      nextButton.textContent = "Pesanan Tersimpan";
      showToast("Ringkasan pesanan mock disimpan.", "success");
      return;
    }
    activeStep += 1;
    syncStep();
  });

  document.getElementById("design-upload").addEventListener("change", (event) => {
    const file = event.target.files[0];
    document.getElementById("upload-label").textContent = file ? `${file.name} siap diunggah` : "Klik untuk memilih file desain customer";
    if (file) showToast(`File ${file.name} siap digunakan.`);
  });

  syncStep();
  fillSummary();
  initIcons();
}

function renderTracking() {
  const button = document.getElementById("tracking-button");
  const input = document.getElementById("invoice-input");
  const result = document.getElementById("tracking-result");
  if (!button || !input || !result) return;

  const draw = () => {
    const record = trackingRecords[input.value.trim()];
    if (!record) {
      result.classList.remove("hidden");
      document.getElementById("tracking-title").textContent = "Invoice tidak ditemukan";
      document.getElementById("tracking-status-pill").textContent = "Periksa nomor invoice";
      document.getElementById("tracking-status-pill").className = "inline-flex w-fit rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700";
      document.getElementById("tracking-summary").innerHTML = "<p class='text-sm text-slate-500'>Gunakan invoice contoh INV-2026-0712 untuk melihat simulasi penuh.</p>";
      document.getElementById("tracking-timeline").innerHTML = "";
      document.getElementById("tracking-photos").innerHTML = "";
      showToast("Invoice tidak ditemukan.", "warning");
      return;
    }

    result.classList.remove("hidden");
    document.getElementById("tracking-title").textContent = `${record.customer} • ${record.product}`;
    const pill = document.getElementById("tracking-status-pill");
    pill.textContent = record.status;
    pill.className = "inline-flex w-fit rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700";

    document.getElementById("tracking-summary").innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between gap-3"><span>Customer</span><strong>${record.customer}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Produk</span><strong>${record.product}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Jumlah</span><strong>${record.qty}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Status</span><strong>${record.status}</strong></div>
        <div class="flex items-center justify-between gap-3"><span>Sisa pembayaran</span><strong>${record.balance}</strong></div>
      </div>
    `;

    document.getElementById("tracking-timeline").innerHTML = record.timeline.map((item) => `
      <div class="flex gap-4 rounded-[1.25rem] border ${item.active ? "border-emerald-200 bg-emerald-50/60" : "border-slate-200 bg-slate-50"} p-4">
        <span class="mt-1 inline-flex h-4 w-4 rounded-full ${item.active ? "bg-emerald-500" : "bg-slate-300"}"></span>
        <div class="min-w-0">
          <strong class="block text-slate-900">${item.label}</strong>
          <div class="text-sm text-slate-500">${item.date}</div>
        </div>
      </div>
    `).join("");

    document.getElementById("tracking-photos").innerHTML = record.photos.map((photo, index) => `
      <article class="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-card">
        <img src="${getProductImage(productCatalog[index % productCatalog.length])}" alt="${photo.title}" class="h-56 w-full object-cover">
        <div class="p-5">
          <strong class="block text-slate-900">${photo.title}</strong>
          <span class="mt-2 block text-sm leading-6 text-slate-500">${photo.note}</span>
        </div>
      </article>
    `).join("");
    initIcons();
  };

  button.addEventListener("click", draw);
  draw();
}

function renderLogin() {
  const form = document.getElementById("login-form");
  if (!form) return;
  const roleSelect = document.getElementById("login-role");
  const roleHint = document.getElementById("login-role-hint");
  const roleNotes = {
    admin: "Admin akan diarahkan ke statistik, chart, monitoring, dan laporan.",
    operator: "Operator akan diarahkan ke daftar pekerjaan, detail order, dan update tahapan produksi."
  };

  document.getElementById("toggle-password").addEventListener("click", () => {
    const input = document.getElementById("login-password");
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    document.getElementById("toggle-password").textContent = isPassword ? "Sembunyikan" : "Lihat";
    showToast(isPassword ? "Password sedang ditampilkan." : "Password disembunyikan kembali.");
  });

  roleSelect.addEventListener("change", () => {
    roleHint.textContent = roleNotes[roleSelect.value];
    showToast(`Role aktif diubah ke ${roleSelect.options[roleSelect.selectedIndex].text}.`);
  });

  document.querySelectorAll("[data-role-card]").forEach((button) => {
    button.addEventListener("click", () => {
      roleSelect.value = button.dataset.roleCard;
      roleHint.textContent = roleNotes[roleSelect.value];
      showToast(`Mode ${roleSelect.value} dipilih.`);
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    showToast(`Memproses login sebagai ${roleSelect.value}...`);
    setTimeout(() => {
      window.location.href = roleSelect.value === "admin" ? "admin.html" : "operator.html";
    }, 450);
  });
}

let adminCharts = [];
function destroyAdminCharts() {
  adminCharts.forEach((chart) => chart.destroy());
  adminCharts = [];
}

function renderAdminCharts(range = "weekly") {
  if (typeof ApexCharts === "undefined" || !document.querySelector("#orders-chart")) return;
  destroyAdminCharts();
  const orderSeries = range === "weekly" ? [18, 24, 20, 27] : [76, 92, 88, 104];
  const trendSeries = range === "weekly" ? [42, 55, 61, 73, 68, 79, 88] : [128, 140, 156, 149, 166, 181];

  const ordersChart = new ApexCharts(document.querySelector("#orders-chart"), {
    chart: { type: "donut", height: 280, toolbar: { show: false } },
    series: orderSeries,
    labels: ["Verifikasi", "Produksi", "QC", "Selesai"],
    colors: ["#f97316", "#0f172a", "#38bdf8", "#22c55e"],
    legend: { position: "bottom" },
    dataLabels: { enabled: false },
    stroke: { width: 0 }
  });

  const trendChart = new ApexCharts(document.querySelector("#trend-chart"), {
    chart: { type: "area", height: 280, toolbar: { show: false } },
    series: [{ name: "Pesanan", data: trendSeries }],
    xaxis: { categories: range === "weekly" ? ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"] : ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun"] },
    colors: ["#ea580c"],
    fill: { type: "gradient", gradient: { opacityFrom: 0.35, opacityTo: 0.02 } },
    stroke: { curve: "smooth", width: 4 },
    dataLabels: { enabled: false },
    grid: { borderColor: "#e2e8f0" }
  });

  ordersChart.render();
  trendChart.render();
  adminCharts = [ordersChart, trendChart];
}

function renderAdmin() {
  const stats = document.getElementById("admin-stats");
  if (!stats) return;

  stats.innerHTML = adminData.stats.map((stat, index) => {
    const icons = ["shopping-bag", "badge-check", "factory", "wallet"];
    const accents = ["from-orange-500 to-orange-600", "from-sky-500 to-sky-600", "from-emerald-500 to-emerald-600", "from-violet-500 to-violet-600"];
    return `
      <article class="rounded-[1.75rem] border border-white/70 bg-white/95 p-5 shadow-card">
        <div class="flex items-start justify-between gap-3">
          <div>
            <p class="text-sm font-semibold text-slate-500">${stat.label}</p>
            <p class="mt-3 text-3xl font-black tracking-tight text-slate-900">${stat.value}</p>
          </div>
          <div class="rounded-2xl bg-gradient-to-br ${accents[index]} p-3 text-white shadow-card">
            <i data-lucide="${icons[index]}" class="h-5 w-5"></i>
          </div>
        </div>
      </article>
    `;
  }).join("");

  document.getElementById("recent-orders").innerHTML = adminData.orders.map((order, index) => {
    const product = productCatalog[index % productCatalog.length];
    return `
      <div class="flex items-center gap-4 rounded-[1.5rem] border border-slate-100 bg-slate-50 p-4">
        <img src="${getProductImage(product)}" alt="${order.item}" class="h-16 w-16 rounded-2xl object-cover">
        <div class="min-w-0 flex-1">
          <p class="font-bold text-slate-900">${order.invoice}</p>
          <p class="text-sm text-slate-500">${order.customer} • ${order.item}</p>
        </div>
        <button type="button" class="rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm" data-order-preview="${order.invoice}">Preview</button>
      </div>
    `;
  }).join("");

  document.getElementById("monitoring-summary").innerHTML = adminData.monitoring.map((item) => `
    <div>
      <div class="mb-2 flex items-center justify-between gap-3 text-sm">
        <span class="font-semibold text-slate-800">${item.name}</span>
        <span class="rounded-full px-3 py-1 text-xs font-semibold ${item.risk === "On track" ? "bg-emerald-100 text-emerald-700" : item.risk === "Siap kirim" ? "bg-sky-100 text-sky-700" : "bg-amber-100 text-amber-700"}">${item.stage}</span>
      </div>
      <div class="h-2 rounded-full bg-slate-200"><div class="h-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600" style="width:${item.progress}%"></div></div>
    </div>
  `).join("");

  document.getElementById("orders-table").innerHTML = adminData.orders.map((order, index) => `
    <div class="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
      <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div class="flex items-center gap-4">
          <img src="${getProductImage(productCatalog[index % productCatalog.length])}" alt="${order.item}" class="h-20 w-20 rounded-2xl object-cover">
          <div>
            <p class="text-lg font-black text-slate-900">${order.invoice}</p>
            <p class="text-sm text-slate-500">${order.customer} • ${order.item}</p>
            <span class="mt-2 inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">${order.status}</span>
          </div>
        </div>
        <div class="flex flex-wrap gap-3">
          <button type="button" class="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white" data-dashboard-action="verify-order" data-invoice="${order.invoice}">Verifikasi</button>
          <button type="button" class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700" data-dashboard-action="generate-invoice" data-invoice="${order.invoice}">Generate Invoice</button>
          <button type="button" class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700" data-dashboard-action="edit-order" data-invoice="${order.invoice}">Edit</button>
        </div>
      </div>
    </div>
  `).join("");

  document.getElementById("customers-list").innerHTML = adminData.customers.map((customer, index) => `
    <div class="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
      <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div class="flex items-center gap-4">
          <img src="${getProductImage(productCatalog[index % productCatalog.length])}" alt="${customer.name}" class="h-16 w-16 rounded-2xl object-cover">
          <div>
            <p class="text-lg font-black text-slate-900">${customer.name}</p>
            <p class="text-sm text-slate-500">${customer.city} • ${customer.volume}</p>
            <p class="mt-2 text-sm leading-6 text-slate-600">${customer.note}</p>
          </div>
        </div>
        <div class="flex flex-wrap gap-3">
          <button type="button" class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm" data-dashboard-action="edit-customer" data-customer="${customer.name}">Edit Data</button>
          <button type="button" class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700" data-dashboard-action="customer-history" data-customer="${customer.name}">Histori</button>
        </div>
      </div>
    </div>
  `).join("");

  document.getElementById("monitoring-board").innerHTML = adminData.monitoring.map((item, index) => `
    <div class="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
      <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div class="flex items-center gap-4">
          <img src="${getProductImage(productCatalog[index % productCatalog.length])}" alt="${item.name}" class="h-20 w-20 rounded-2xl object-cover">
          <div>
            <p class="text-lg font-black text-slate-900">${item.name}</p>
            <p class="text-sm text-slate-500">Tahap saat ini: ${item.stage}</p>
            <div class="mt-3 h-2 w-full max-w-xs rounded-full bg-slate-200"><div class="h-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600" style="width:${item.progress}%"></div></div>
          </div>
        </div>
        <div class="flex flex-wrap gap-3">
          <span class="inline-flex rounded-full px-3 py-2 text-xs font-semibold ${item.risk === "On track" ? "bg-emerald-100 text-emerald-700" : item.risk === "Siap kirim" ? "bg-sky-100 text-sky-700" : "bg-amber-100 text-amber-700"}">${item.risk}</span>
          <button type="button" class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700" data-dashboard-action="open-monitor-item" data-monitor="${item.name}">Buka detail</button>
        </div>
      </div>
    </div>
  `).join("");

  document.getElementById("invoice-preview").innerHTML = `
    <div class="rounded-[1.75rem] bg-slate-50 p-5">
      <div class="grid gap-4 md:grid-cols-2">
        <div class="space-y-3">
          <div class="flex items-center justify-between"><span class="text-sm text-slate-500">No Invoice</span><strong>INV-2026-0712</strong></div>
          <div class="flex items-center justify-between"><span class="text-sm text-slate-500">Customer</span><strong>PT Arunika Persada</strong></div>
          <div class="flex items-center justify-between"><span class="text-sm text-slate-500">Total</span><strong>Rp 7.050.000</strong></div>
        </div>
        <div class="space-y-3">
          <button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-[1rem] bg-slate-900 px-4 py-3 text-sm font-semibold text-white" data-dashboard-action="print-invoice">Cetak Invoice</button>
          <button type="button" class="inline-flex w-full items-center justify-center gap-2 rounded-[1rem] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700" data-dashboard-action="send-wa-invoice">Kirim ke WhatsApp</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("whatsapp-templates").innerHTML = adminData.templates.map((template, index) => `
    <div class="flex flex-col gap-4 rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5 xl:flex-row xl:items-center xl:justify-between">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-brand-500">Template ${index + 1}</p>
        <p class="mt-2 text-sm leading-7 text-slate-700">${template}</p>
      </div>
      <div class="flex flex-wrap gap-3">
        <button type="button" class="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white" data-dashboard-action="use-template" data-template="${template}">Gunakan</button>
        <button type="button" class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700" data-dashboard-action="preview-template" data-template="${template}">Preview</button>
      </div>
    </div>
  `).join("");

  document.getElementById("report-stats").innerHTML = adminData.reports.map((report, index) => `
    <article class="rounded-[1.75rem] border border-white/70 bg-white/95 p-5 shadow-card">
      <div class="flex items-start justify-between gap-3">
        <div>
          <p class="text-sm font-semibold text-slate-500">${report.label}</p>
          <p class="mt-3 text-3xl font-black text-slate-900">${report.value}</p>
        </div>
        <div class="rounded-2xl bg-slate-100 p-3 text-slate-600">
          <i data-lucide="${["circle-check-big", "triangle-alert", "timer-reset", "repeat"][index]}" class="h-5 w-5"></i>
        </div>
      </div>
    </article>
  `).join("");

  document.getElementById("reports-table").innerHTML = adminData.reports.map((report) => `
    <div class="flex items-center justify-between rounded-[1.5rem] border border-slate-100 bg-slate-50 px-5 py-4">
      <span class="font-semibold text-slate-700">${report.label}</span>
      <strong class="text-slate-900">${report.value}</strong>
    </div>
  `).join("");

  document.getElementById("pricing-cards").innerHTML = adminData.pricing.map((item, index) => `
    <article class="rounded-[1.5rem] border border-white/70 bg-gradient-to-br ${index === 0 ? "from-orange-50 to-amber-50" : index === 1 ? "from-sky-50 to-cyan-50" : "from-violet-50 to-fuchsia-50"} p-5 shadow-card">
      <div class="mb-4 inline-flex rounded-2xl bg-white p-3 text-slate-700 shadow-sm"><i data-lucide="${["badge-dollar-sign", "sliders-horizontal", "receipt-text"][index]}" class="h-5 w-5"></i></div>
      <h4 class="text-xl font-black text-slate-900">${item.title}</h4>
      <p class="mt-3 text-sm leading-7 text-slate-600">${item.text}</p>
      <button type="button" class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600" data-dashboard-action="pricing-detail" data-pricing="${item.title}">Buka detail<i data-lucide="arrow-up-right" class="h-4 w-4"></i></button>
    </article>
  `).join("");

  bindPanelTabs("admin-tabs", ".admin-tab");
  bindDashboardActions();
  renderAdminCharts();
  initIcons();
}

function renderOperator() {
  const list = document.getElementById("job-list");
  if (!list) return;

  let selectedJob = operatorData.jobs[0];

  const fillDetail = (job = selectedJob) => {
    selectedJob = job;
    document.getElementById("job-detail").innerHTML = `
      <div class="grid gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">
        <div class="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50">
          <img src="${getProductImage(productCatalog.find((item) => item.name.includes(job.product.split(" ")[0])) || productCatalog[0])}" alt="${job.product}" class="h-full w-full object-cover">
        </div>
        <div class="rounded-[1.75rem] bg-slate-50 p-5">
          <div class="grid gap-4 md:grid-cols-2">
            <div class="flex items-center justify-between"><span class="text-sm text-slate-500">Invoice</span><strong>${job.id}</strong></div>
            <div class="flex items-center justify-between"><span class="text-sm text-slate-500">Customer</span><strong>${job.customer}</strong></div>
            <div class="flex items-center justify-between"><span class="text-sm text-slate-500">Produk</span><strong>${job.product}</strong></div>
            <div class="flex items-center justify-between"><span class="text-sm text-slate-500">Qty</span><strong>${job.qty}</strong></div>
            <div class="flex items-center justify-between"><span class="text-sm text-slate-500">Deadline</span><strong>${job.deadline}</strong></div>
            <div class="flex items-center justify-between"><span class="text-sm text-slate-500">Status</span><strong>${job.status}</strong></div>
          </div>
          <div class="mt-5 rounded-[1.25rem] border border-slate-200 bg-white p-4">
            <p class="text-sm leading-7 text-slate-600">Catatan produksi: logo depan kiri, warna navy, prioritas untuk event internal customer, dan menunggu approval final untuk label nama belakang.</p>
          </div>
        </div>
      </div>
    `;

    document.getElementById("job-updates").innerHTML = `
      <div class="space-y-4">
        ${operatorData.stages.map((stage, index) => `
          <div class="flex flex-col gap-4 rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p class="text-lg font-black text-slate-900">${stage}</p>
              <p class="mt-1 text-sm leading-6 text-slate-600">Update status dan unggah progress mock untuk tahap ${stage.toLowerCase()}.</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <button type="button" class="rounded-full ${index <= 2 ? "bg-emerald-500 text-white" : "bg-white text-slate-700 border border-slate-200"} px-4 py-2 text-sm font-semibold" data-stage-action="${stage}" data-stage-state="${index <= 2 ? "done" : "pending"}">${index <= 2 ? "Sudah" : "Tandai"}</button>
              <button type="button" class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700" data-operator-action="upload-progress" data-stage="${stage}">Upload progres</button>
            </div>
          </div>
        `).join("")}
        <div class="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
          <div class="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <p class="text-lg font-black text-slate-900">Catatan operator</p>
              <p class="mt-2 text-sm leading-7 text-slate-600">3 file mock progres sudah terlampir. Update terakhir menyebutkan approval final untuk label nama belakang masih ditunggu.</p>
            </div>
            <button type="button" class="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white" data-operator-action="handover-note">Update catatan</button>
          </div>
        </div>
      </div>
    `;

    initIcons();
  };

  list.innerHTML = operatorData.jobs.map((job, index) => `
    <button class="group flex w-full flex-col gap-4 rounded-[1.5rem] border ${selectedJob.id === job.id ? "border-brand-300 bg-brand-50" : "border-slate-100 bg-slate-50"} p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-card xl:flex-row xl:items-center xl:justify-between" type="button" data-job-id="${job.id}">
      <div class="flex items-center gap-4">
        <img src="${getProductImage(productCatalog[index % productCatalog.length])}" alt="${job.product}" class="h-20 w-20 rounded-2xl object-cover">
        <div>
          <p class="text-lg font-black text-slate-900">${job.product}</p>
          <p class="text-sm text-slate-500">${job.customer} • ${job.qty}</p>
          <p class="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Deadline ${job.deadline}</p>
        </div>
      </div>
      <div class="flex flex-wrap items-center gap-3">
        <span class="rounded-full bg-sky-100 px-3 py-2 text-xs font-semibold text-sky-700">${job.status}</span>
        <span class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700">Buka job <i data-lucide="arrow-right" class="h-4 w-4"></i></span>
      </div>
    </button>
  `).join("");

  list.addEventListener("click", (event) => {
    const button = event.target.closest("[data-job-id]");
    if (!button) return;
    const job = operatorData.jobs.find((item) => item.id === button.dataset.jobId);
    if (!job) return;
    fillDetail(job);
    showToast(`Job ${job.id} aktif dipilih.`);
  });

  bindPanelTabs("operator-tabs", ".operator-tab");
  bindOperatorActions();
  fillDetail(selectedJob);
  initIcons();
}

function bindPanelTabs(containerId, buttonSelector) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.addEventListener("click", (event) => {
    const button = event.target.closest("[data-tab]");
    if (!button) return;
    const tab = button.dataset.tab;
    container.querySelectorAll(buttonSelector).forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("active", isActive);
      item.classList.toggle("bg-white/10", isActive);
      item.classList.toggle("text-white", isActive);
      item.classList.toggle("text-slate-300", !isActive);
    });
    document.querySelectorAll(".dashboard-panel").forEach((panel) => {
      panel.classList.toggle("hidden", panel.dataset.panel !== tab);
      panel.classList.toggle("active", panel.dataset.panel === tab);
    });
  });
}

function showToast(message, tone = "default") {
  const stack = document.getElementById("toast-stack");
  if (!stack) return;
  const styles = {
    default: "border-slate-200 bg-white text-slate-800",
    success: "border-emerald-200 bg-emerald-50 text-emerald-900",
    warning: "border-amber-200 bg-amber-50 text-amber-900"
  };
  const toast = document.createElement("div");
  toast.className = `rounded-[1.25rem] border px-4 py-3 shadow-card ${styles[tone] || styles.default}`;
  toast.innerHTML = `<div class="flex items-start gap-3"><div class="mt-0.5 rounded-full bg-slate-900/5 p-2"><i data-lucide="bell-ring" class="h-4 w-4"></i></div><p class="text-sm leading-6">${message}</p></div>`;
  stack.appendChild(toast);
  initIcons();
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-1", "transition");
    setTimeout(() => toast.remove(), 300);
  }, 2400);
}

function openAppModal(title, bodyHtml) {
  const modal = document.getElementById("app-modal");
  const titleNode = document.getElementById("app-modal-title");
  const bodyNode = document.getElementById("app-modal-body");
  if (!modal || !titleNode || !bodyNode) return;
  titleNode.textContent = title;
  bodyNode.innerHTML = bodyHtml;
  modal.classList.remove("hidden");
  modal.classList.add("pointer-events-auto");
  initIcons();
}

function closeAppModal() {
  const modal = document.getElementById("app-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("pointer-events-auto");
}

function initIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function bindGlobalUi() {
  document.querySelectorAll("[data-close-app-modal]").forEach((button) => {
    button.addEventListener("click", closeAppModal);
  });

  document.body.addEventListener("click", (event) => {
    const toastButton = event.target.closest("[data-toast]");
    if (toastButton) showToast(toastButton.dataset.toast);

    const scrollButton = event.target.closest("[data-scroll-target]");
    if (scrollButton) {
      const target = document.getElementById(scrollButton.dataset.scrollTarget);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const modalTemplate = event.target.closest("[data-modal-template]");
    if (modalTemplate) {
      const templates = {
        playbook: ["Playbook pelanggan", "<p>Landing page ini dirancang seperti storefront: customer mencari produk, membandingkan harga, lalu lanjut ke form dan tracking invoice.</p>"],
        consultation: ["Konsultasi desain", "<p>Flow konsultasi mock: customer pilih kategori, unggah desain, admin menyesuaikan model dan pricing, lalu invoice dipakai sebagai dasar tracking.</p>"],
        dashboard: ["Preview dashboard", "<p>Dashboard admin difokuskan ke KPI, chart, aktivitas, monitoring produksi, invoice, dan template WhatsApp. Operator fokus ke daftar kerja dan tahapan produksi.</p>"],
        "order-form": ["Step form pemesanan", "<p>Urutan prototipe: data customer, produk, upload desain, estimasi kebutuhan, ringkasan, lalu admin verifikasi dan generate invoice.</p>"],
        notifications: ["Template notifikasi", "<p>Contoh notifikasi: barang selesai, sisa pembayaran, promo repeat order, dan pengingat revisi approval desain.</p>"],
        "admin-help": ["Panduan admin", "<p>Gunakan tab di sidebar untuk berpindah modul. Setiap tombol aksi di overview, orders, monitoring, invoice, dan reports akan men-trigger toast atau modal preview.</p>"],
        "operator-guide": ["Panduan operator", "<p>Pilih job aktif, buka detail pekerjaan, lalu gunakan tombol update tahapan atau upload progres untuk mengubah status mock secara visual.</p>"]
      };
      const [title, body] = templates[modalTemplate.dataset.modalTemplate] || ["Info", "<p>Konten belum disiapkan.</p>"];
      openAppModal(title, body);
    }

    const highlight = event.target.closest("[data-product-highlight]");
    if (highlight) {
      openProductModal(highlight.dataset.productHighlight);
    }
  });
}

function bindDashboardActions() {
  if (document.body.dataset.dashboardActionsBound === "yes") return;
  document.body.dataset.dashboardActionsBound = "yes";

  document.body.addEventListener("click", (event) => {
    const action = event.target.closest("[data-dashboard-action]");
    if (!action) return;
    const name = action.dataset.dashboardAction;
    if (name === "verify-order" || name === "verifikasi-batch") {
      showToast("Pesanan ditandai siap verifikasi.", "success");
    } else if (name === "generate-invoice" || name === "print-invoice") {
      openAppModal("Invoice diproses", `<p>Invoice <strong>${action.dataset.invoice || "INV-2026-0712"}</strong> sedang disiapkan untuk preview, cetak, atau kirim WhatsApp.</p>`);
    } else if (name === "send-wa-invoice" || name === "compose-broadcast") {
      showToast("Simulasi kirim WhatsApp berhasil dijalankan.", "success");
    } else if (name === "use-template" || name === "preview-template") {
      openAppModal("Template WhatsApp", `<p>${action.dataset.template}</p>`);
    } else if (name === "edit-customer" || name === "customer-history") {
      openAppModal(action.dataset.customer, "<p>Panel edit customer dan histori pesanan ditampilkan sebagai modal di prototipe ini.</p>");
    } else if (name === "open-monitor-item" || name === "open-monitoring") {
      showToast("Panel monitoring produksi difokuskan.", "warning");
    } else if (name === "export-report" || name === "export-full") {
      showToast("Export mock berhasil dibuat.", "success");
    } else if (name === "simulate-delay") {
      showToast("Satu job produksi ditandai butuh perhatian.", "warning");
    } else if (name === "pricing-detail") {
      openAppModal(action.dataset.pricing, "<p>Aturan pricing mock mencakup harga katalog, custom quote, dan invoice otomatis setelah verifikasi.</p>");
    } else {
      showToast(`Aksi "${name}" dijalankan.`);
    }
  });

  document.body.addEventListener("click", (event) => {
    const preview = event.target.closest("[data-order-preview]");
    if (preview) {
      openAppModal("Preview pesanan", `<p>Preview detail cepat untuk pesanan <strong>${preview.dataset.orderPreview}</strong> ditampilkan di modal ini.</p>`);
    }
  });

  document.getElementById("chart-range")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-range]");
    if (!button) return;
    document.querySelectorAll(".chart-range-btn").forEach((item) => {
      item.className = item === button
        ? "chart-range-btn rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
        : "chart-range-btn rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700";
    });
    renderAdminCharts(button.dataset.range);
  });
}

function bindOperatorActions() {
  if (document.body.dataset.operatorActionsBound === "yes") return;
  document.body.dataset.operatorActionsBound = "yes";

  document.body.addEventListener("click", (event) => {
    const action = event.target.closest("[data-operator-action]");
    if (!action) return;
    const name = action.dataset.operatorAction;
    if (name === "upload-progress") {
      showToast(`Upload progres untuk tahap ${action.dataset.stage} berhasil disimulasikan.`, "success");
    } else if (name === "handover-note" || name === "open-handover") {
      openAppModal("Catatan shift operator", "<p>Area ini mensimulasikan catatan antarshift, kendala produksi, dan approval yang masih menunggu tindak lanjut admin.</p>");
    } else if (name === "show-priority" || name === "filter-deadline") {
      showToast("Daftar pekerjaan difokuskan ke deadline terdekat.", "warning");
    } else {
      showToast(`Aksi operator "${name}" dijalankan.`);
    }
  });

  document.body.addEventListener("click", (event) => {
    const stageButton = event.target.closest("[data-stage-action]");
    if (!stageButton) return;
    const nextDone = stageButton.dataset.stageState !== "done";
    stageButton.dataset.stageState = nextDone ? "done" : "pending";
    stageButton.textContent = nextDone ? "Sudah" : "Tandai";
    stageButton.className = `rounded-full px-4 py-2 text-sm font-semibold ${nextDone ? "bg-emerald-500 text-white" : "border border-slate-200 bg-white text-slate-700"}`;
    showToast(`Tahap ${stageButton.dataset.stageAction} diperbarui.`, nextDone ? "success" : "default");
  });
}

function init() {
  bindModalClose();
  bindGlobalUi();
  const page = document.body.dataset.page;
  if (page === "home") renderHome();
  if (page === "catalog") renderCatalog();
  if (page === "order") renderOrderForm();
  if (page === "tracking") renderTracking();
  if (page === "login") renderLogin();
  if (page === "admin") renderAdmin();
  if (page === "operator") renderOperator();
  initIcons();
}

document.addEventListener("DOMContentLoaded", init);
