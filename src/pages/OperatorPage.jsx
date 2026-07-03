import { useMemo, useState } from "react";
import { Camera, ClipboardList, GitBranchPlus, ListChecks } from "lucide-react";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { DashboardSidebar } from "../components/dashboard/DashboardSidebar";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";
import { StatCard } from "../components/ui/StatCard";
import { StatusBadge } from "../components/ui/StatusBadge";
import { useAppStore } from "../store/AppStore";
import { useToast } from "../components/providers/ToastProvider";

const tabs = [
  { id: "jobs", label: "Job Aktif", icon: ListChecks },
  { id: "detail", label: "Detail Job", icon: ClipboardList },
  { id: "update", label: "Update Tahap", icon: GitBranchPlus },
];

export function OperatorPage() {
  const { verifiedOrders, stageOptions, addProductionUpdate } = useAppStore();
  const { pushToast } = useToast();
  const [activeTab, setActiveTab] = useState("jobs");
  const [selectedJobId, setSelectedJobId] = useState(verifiedOrders[0]?.id || "");
  const [stage, setStage] = useState(stageOptions[2]);
  const [estimate, setEstimate] = useState("Estimasi update berikutnya besok");
  const [note, setNote] = useState("");
  const [photoFileName, setPhotoFileName] = useState("");

  const selectedJob = useMemo(
    () => verifiedOrders.find((job) => job.id === selectedJobId) || verifiedOrders[0],
    [verifiedOrders, selectedJobId],
  );

  function submitUpdate() {
    if (!selectedJob) return;

    addProductionUpdate(selectedJob.id, {
      stage,
      estimate,
      note: note || "Update operator tanpa catatan tambahan.",
      photo: photoFileName || selectedJob.items[0]?.image,
      date: "03 Jul 2026",
    });
    setNote("");
    setPhotoFileName("");
    pushToast(`Update ${stage} dikirim untuk ${selectedJob.invoice}.`);
  }

  return (
    <div className="grid min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.10),_transparent_22%),linear-gradient(180deg,_#f8fbff_0%,_#f8fafc_100%)] lg:grid-cols-[280px_minmax(0,1fr)]">
      <DashboardSidebar
        title="Operator produksi"
        summary={{
          eyebrow: "Tugas operator",
          title: "Lihat order yang sudah diverifikasi admin",
          description: "Operator fokus pada progres per invoice, bukti foto, dan estimasi tahap berikutnya untuk customer tracking.",
        }}
        actions={[{ label: "Kembali Login", to: "/login" }]}
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        accent="sky"
      />
      <main className="p-4 md:p-6 xl:p-8">
        <DashboardHeader
          eyebrow="Operator panel"
          title="Update proses produksi per pesanan"
          description="Hanya order yang sudah diverifikasi admin yang masuk ke panel operator. Setiap update di sini akan ikut terbaca oleh halaman tracking customer."
          actions={[
            <Button key="jobs" onClick={() => setActiveTab("jobs")}>Buka daftar job</Button>,
            <Button key="update" variant="secondary" onClick={() => setActiveTab("update")}>Buat update tahap</Button>,
          ]}
        />

        {activeTab === "jobs" ? (
          <section className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <StatCard label="Job aktif" value={String(verifiedOrders.length)} />
              <StatCard label="Perlu update" value={String(verifiedOrders.filter((item) => item.status === "Dalam Produksi").length)} />
              <StatCard label="QC / siap kirim" value={String(verifiedOrders.filter((item) => item.status === "QC" || item.status === "Siap Kirim").length)} />
            </div>
            <Card>
              <SectionHeading eyebrow="Daftar kerja" title="Pesanan yang sudah dilepas admin" />
              <div className="space-y-4">
                {verifiedOrders.map((job) => (
                  <button
                    key={job.id}
                    type="button"
                    onClick={() => {
                      setSelectedJobId(job.id);
                      setActiveTab("detail");
                    }}
                    className={`w-full rounded-[1.25rem] border p-4 text-left ${selectedJobId === job.id ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-slate-50"}`}
                  >
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                      <div>
                        <p className="font-bold">{job.invoice}</p>
                        <p className="mt-1 text-sm opacity-80">{job.customer.companyName} • {job.items[0]?.productName}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold opacity-80">{job.estimatedShipDate}</span>
                        <StatusBadge status={job.status} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </Card>
          </section>
        ) : null}

        {activeTab === "detail" && selectedJob ? (
          <Card>
            <SectionHeading eyebrow="Detail job" title={selectedJob.invoice} />
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.2rem] bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">Customer</p>
                <p className="mt-2 text-xl font-black text-slate-900">{selectedJob.customer.companyName}</p>
              </div>
              <div className="rounded-[1.2rem] bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">Produk</p>
                <p className="mt-2 text-xl font-black text-slate-900">{selectedJob.items[0]?.productName}</p>
              </div>
              <div className="rounded-[1.2rem] bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">Spesifikasi</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  {selectedJob.items[0]?.qty} pcs • {selectedJob.items[0]?.variant} • {selectedJob.items[0]?.size} • {selectedJob.items[0]?.branding}
                </p>
              </div>
              <div className="rounded-[1.2rem] bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-500">File dan catatan</p>
                <p className="mt-2 text-sm leading-7 text-slate-700">{selectedJob.items[0]?.logoFileName || "-"} • {selectedJob.items[0]?.note || "-"}</p>
              </div>
            </div>
            <div className="mt-4 rounded-[1.2rem] bg-slate-50 p-4 text-sm text-slate-700">
              <p className="font-semibold text-slate-900">Catatan admin</p>
              <p className="mt-2 leading-7">{selectedJob.adminNotes}</p>
            </div>
          </Card>
        ) : null}

        {activeTab === "update" && selectedJob ? (
          <Card className="space-y-4">
            <SectionHeading eyebrow="Update tahap" title={`Perbarui progres ${selectedJob.invoice}`} />
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Tahap produksi</span>
                <select value={stage} onChange={(event) => setStage(event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm">
                  {stageOptions.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Estimasi tahap</span>
                <input value={estimate} onChange={(event) => setEstimate(event.target.value)} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm" />
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Catatan operator</span>
              <textarea value={note} onChange={(event) => setNote(event.target.value)} rows={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm" />
            </label>
            <label className="block rounded-[1.2rem] border border-dashed border-slate-300 bg-slate-50 p-4">
              <input type="file" hidden onChange={(event) => setPhotoFileName(event.target.files?.[0]?.name || "")} />
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                <Camera className="h-4 w-4" />
                {photoFileName || "Lampirkan foto progres"}
              </span>
            </label>
            <Button onClick={submitUpdate}>Simpan update produksi</Button>
          </Card>
        ) : null}
      </main>
    </div>
  );
}
