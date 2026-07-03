import clsx from "clsx";

export function cn(...inputs) {
  return clsx(inputs);
}

export function statusTone(status) {
  const map = {
    "Perlu Verifikasi": "amber",
    "Menunggu Approval": "amber",
    "Menunggu Verifikasi": "amber",
    Terverifikasi: "sky",
    "Dalam Produksi": "sky",
    Bordir: "sky",
    Cutting: "amber",
    Jahit: "sky",
    QC: "emerald",
    "Menunggu Pelunasan": "amber",
    "Siap kirim": "emerald",
    "Siap Kirim": "emerald",
    "On track": "emerald",
  };

  return map[status] || "slate";
}
