import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BadgeCheck, PackageSearch, ShoppingBag, Sparkles, SwatchBook, Users } from "lucide-react";
import { MainHeader } from "../components/layout/MainHeader";
import { PageShell } from "../components/layout/PageShell";
import { HeroSection } from "../components/layout/HeroSection";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { ProductGrid } from "../components/shop/ProductGrid";
import { SectionHeading } from "../components/ui/SectionHeading";
import { useAppStore } from "../store/AppStore";
import { useEffect, useState } from "react";
import { AppModal } from "../components/layout/AppModal";

export function HomePage() {
  const { brandName, featuredProducts, promoBanner, promoDismissed, dismissPromo, resetPromoDismiss } = useAppStore();
  const [activeSlide, setActiveSlide] = useState(0);

  const promoSlides = [
    {
      badge: promoBanner.badge,
      title: promoBanner.title,
      description: promoBanner.description,
      meta: promoBanner.period,
      ctaLabel: promoBanner.ctaLabel,
      ctaHref: promoBanner.ctaHref,
      accent: "from-sky-100 via-white to-slate-100",
    },
    {
      badge: "Bahan baru",
      title: "Ripstop Flex untuk workwear lapangan",
      description: "Pilihan bahan baru untuk seragam operasional yang butuh struktur rapi, ringan dipakai, dan lebih siap untuk order rutin site team.",
      meta: "Cocok untuk workshirt, vest, dan utility shirt",
      ctaLabel: "Lihat workwear",
      ctaHref: "/catalog",
      accent: "from-amber-50 via-white to-orange-50",
    },
    {
      badge: "Update katalog",
      title: "Lacoste Active untuk corporate polo",
      description: "Tambahan material polo yang terasa lebih clean untuk frontliner, event team, dan kebutuhan corporate set dengan branding bordir.",
      meta: "Masuk ke batch katalog Q3",
      ctaLabel: "Buka katalog",
      ctaHref: "/catalog",
      accent: "from-emerald-50 via-white to-cyan-50",
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % promoSlides.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [promoSlides.length]);

  const currentSlide = promoSlides[activeSlide];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.08),_transparent_24%),linear-gradient(180deg,_#f8fbff_0%,_#f8fafc_100%)]">
      <MainHeader subtitle="Ecommerce konveksi modern untuk order custom yang lebih jelas" />
      <PageShell className="space-y-8">
        <HeroSection
          eyebrow="Landing ecommerce baru"
          title={`${brandName} bantu tim Anda pesan apparel custom dengan alur mirip ecommerce modern.`}
          description="Customer mulai dari katalog dan checkout yang sederhana, lalu admin meneruskan order yang sudah rapi ke tim produksi tanpa kembali ke wizard lama."
          actions={[
            <Link key="catalog" to="/catalog">
              <Button asChild>
                <span>
                  Mulai belanja
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Button>
            </Link>,
            <Link key="tracking" to="/tracking">
              <Button asChild variant="secondary">
                <span>
                  <PackageSearch className="h-4 w-4" />
                  Cek tracking
                </span>
              </Button>
            </Link>,
          ]}
        >
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[1.35rem] border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-sky-100">Flow baru</p>
              <p className="mt-1.5 text-2xl font-black">Detail produk ke cart</p>
              <p className="mt-2 text-sm text-slate-200">Tidak lagi bergantung pada wizard lama.</p>
            </div>
            <div className="rounded-[1.35rem] border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-sky-100">Promo CMS</p>
              <p className="mt-1.5 text-2xl font-black">Popup yang bisa diubah admin</p>
              <p className="mt-2 text-sm text-slate-200">Promo awal bisa hidup atau mati tanpa mengubah layout landing.</p>
            </div>
            <div className="rounded-[1.35rem] border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-sm font-semibold text-sky-100">Operasional</p>
              <p className="mt-1.5 text-2xl font-black">Admin ke production tetap nyambung</p>
              <p className="mt-2 text-sm text-slate-200">Order masuk diverifikasi admin lalu diteruskan ke tim produksi per invoice.</p>
            </div>
          </div>
        </HeroSection>

        <section className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)]">
          <Card className={`bg-[linear-gradient(135deg,var(--tw-gradient-stops))] ${currentSlide.accent}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-sky-700">{currentSlide.badge}</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">{currentSlide.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{currentSlide.description}</p>
                <p className="mt-4 text-sm font-semibold text-slate-500">{currentSlide.meta}</p>
              </div>
              <div className="hidden rounded-[1.2rem] bg-white/80 p-3 shadow-sm md:block">
                <SwatchBook className="h-6 w-6 text-sky-700" />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link to={currentSlide.ctaHref}>
                <Button asChild>
                  <span>{currentSlide.ctaLabel}</span>
                </Button>
              </Link>
              <Button variant="secondary" onClick={resetPromoDismiss}>Tampilkan popup lagi</Button>
              <div className="ml-auto flex items-center gap-2">
                <Button variant="secondary" className="h-10 w-10 rounded-full p-0" onClick={() => setActiveSlide((current) => (current - 1 + promoSlides.length) % promoSlides.length)}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button variant="secondary" className="h-10 w-10 rounded-full p-0" onClick={() => setActiveSlide((current) => (current + 1) % promoSlides.length)}>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              {promoSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition ${index === activeSlide ? "w-10 bg-slate-900" : "w-2.5 bg-slate-300"}`}
                  aria-label={`Tampilkan slide ${index + 1}`}
                />
              ))}
            </div>
          </Card>
          <Card>
            <SectionHeading eyebrow="Kenapa ini lebih pas" title="Pattern ecommerce yang lebih familiar" />
            <div className="space-y-3 text-sm text-slate-600">
              <p>Customer bisa browsing produk tanpa langsung isi form panjang.</p>
              <p>Detail pesanan, ukuran, logo, dan varian diringkas per item di cart.</p>
              <p>Checkout fokus ke data pembeli dan alamat, lalu admin memverifikasi hasilnya.</p>
            </div>
          </Card>
        </section>

        <Card>
          <SectionHeading
            eyebrow="Produk unggulan"
            title="Katalog yang terasa seperti storefront"
            description="Customer cukup memilih card produk untuk masuk ke halaman detail dan konfigurasi penuh."
          />
          <ProductGrid products={featuredProducts} />
        </Card>

        <section className="grid gap-4 md:grid-cols-3">
          <Card>
            <Sparkles className="h-5 w-5 text-sky-700" />
            <h3 className="mt-4 text-xl font-black text-slate-900">Promo popup yang hidup</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">Promo awal bisa diaktifkan/nonaktifkan admin tanpa ubah layout landing.</p>
          </Card>
          <Card>
            <ShoppingBag className="h-5 w-5 text-sky-700" />
            <h3 className="mt-4 text-xl font-black text-slate-900">Checkout yang masuk akal</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">Keranjang tersimpan di local storage dan checkout dikirim ke admin sebagai order masuk.</p>
          </Card>
          <Card>
            <Users className="h-5 w-5 text-sky-700" />
            <h3 className="mt-4 text-xl font-black text-slate-900">Alur antar tim lebih rapi</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">Admin melihat order masuk, production fokus pada job aktif, dan customer cukup menerima status pesanan yang relevan.</p>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Card>
            <BadgeCheck className="h-5 w-5 text-sky-700" />
            <h3 className="mt-4 text-xl font-black text-slate-900">Untuk admin</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">Kelola promo popup, katalog, checkout masuk, dan release invoice ke production dari satu panel.</p>
          </Card>
          <Card>
            <SwatchBook className="h-5 w-5 text-sky-700" />
            <h3 className="mt-4 text-xl font-black text-slate-900">Untuk production</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">Tim produksi menerima brief yang sudah diverifikasi, lalu mengelola progres berdasarkan invoice aktif.</p>
          </Card>
          <Card>
            <PackageSearch className="h-5 w-5 text-sky-700" />
            <h3 className="mt-4 text-xl font-black text-slate-900">Untuk customer</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">Customer browse katalog, simpan item ke cart, checkout, lalu memantau status pesanan secara ringkas lewat invoice.</p>
          </Card>
        </section>
      </PageShell>

      {!promoDismissed && promoBanner.active ? (
        <AppModal
          open
          onClose={dismissPromo}
          title={promoBanner.title}
          body={
            <div className="space-y-5">
              <img src={promoBanner.image} alt={promoBanner.title} className="h-64 w-full rounded-[1.5rem] object-cover" />
              <div className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">{promoBanner.badge}</div>
              <p className="text-sm leading-7 text-slate-600">{promoBanner.description}</p>
              <p className="text-sm font-semibold text-slate-900">Periode promo: {promoBanner.period}</p>
              <div className="flex flex-wrap gap-3">
                <Link to={promoBanner.ctaHref}>
                  <Button asChild>
                    <span>{promoBanner.ctaLabel}</span>
                  </Button>
                </Link>
                <Button variant="secondary" onClick={dismissPromo}>Nanti saja</Button>
              </div>
            </div>
          }
        />
      ) : null}
    </div>
  );
}
