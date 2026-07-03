import { Factory, LogIn, ShieldCheck } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { BrandLogo } from "../components/layout/BrandLogo";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { FormField } from "../components/forms/FormField";
import { SelectField } from "../components/forms/SelectField";
import { TextInput } from "../components/forms/TextInput";

const roleHints = {
  admin: "Admin memvalidasi brief, menerbitkan invoice, memantau produksi, dan mengelola komunikasi customer.",
  operator: "Operator fokus pada daftar job, detail spesifikasi, dan update tahapan produksi per invoice.",
};

export function LoginPage() {
  const navigate = useNavigate();
  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      email: "admin@prototype.id",
      password: "prototype123",
      role: "admin",
    },
  });

  const role = watch("role");

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_24%),linear-gradient(180deg,_#f8fbff_0%,_#f8fafc_100%)] px-4 py-8">
      <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-[min(1160px,100%)] items-center">
        <section className="grid w-full gap-6 lg:grid-cols-[minmax(0,1.1fr)_400px]">
          <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-[linear-gradient(135deg,#111827_0%,#1f2937_50%,#334155_100%)] p-7 text-white shadow-soft md:p-10">
            <BrandLogo subtitle="Akses sistem operasional konveksi" />
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-sky-100 backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Admin dan operator produksi
            </div>
            <h1 className="mt-5 text-3xl font-black leading-tight tracking-tight md:text-5xl">
              Masuk ke panel kerja yang terhubung dengan order, invoice, dan progres produksi.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
              Panel internal dibuat untuk menjaga alur antara customer, admin, dan operator tetap konsisten dari awal brief sampai barang siap kirim.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <Card className="border-white/10 bg-white/10 text-white">
                <div className="mb-3 inline-flex rounded-2xl bg-white/10 p-3 text-sky-200">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-bold">Admin</h3>
                <p className="mt-2 text-sm leading-7 text-slate-200">Verifikasi brief, approval desain, invoice, monitoring produksi, dan laporan customer.</p>
              </Card>
              <Card className="border-white/10 bg-white/10 text-white">
                <div className="mb-3 inline-flex rounded-2xl bg-white/10 p-3 text-sky-200">
                  <Factory className="h-5 w-5" />
                </div>
                <h3 className="font-bold">Operator</h3>
                <p className="mt-2 text-sm leading-7 text-slate-200">Task harian, detail job, update tahap cutting, bordir, jahit, QC, dan finishing.</p>
              </Card>
            </div>
          </div>

          <form
            onSubmit={handleSubmit((values) => navigate(values.role === "admin" ? "/admin" : "/operator"))}
            className="rounded-[1.75rem] border border-white/70 bg-white/95 p-6 shadow-soft md:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">Akses internal</p>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900">Masuk ke panel kerja</h2>
              </div>
              <div className="rounded-2xl bg-sky-100 p-3 text-sky-700">
                <LogIn className="h-6 w-6" />
              </div>
            </div>
            <div className="space-y-5">
              <FormField label="Email">
                <TextInput type="email" {...register("email")} />
              </FormField>
              <FormField label="Password">
                <TextInput type="password" {...register("password")} />
              </FormField>
              <FormField label="Role panel">
                <SelectField {...register("role")}>
                  <option value="admin">Admin</option>
                  <option value="operator">Operator Produksi</option>
                </SelectField>
              </FormField>
              <div className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-800">Ringkasan akses</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">{roleHints[role]}</p>
              </div>
              <Button className="w-full">
                <LogIn className="h-5 w-5" />
                Buka panel kerja
              </Button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
