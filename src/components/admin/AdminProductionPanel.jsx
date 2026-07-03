import { PackageSearch } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { SectionHeading } from "../ui/SectionHeading";
import { StatusBadge } from "../ui/StatusBadge";

export function AdminProductionPanel({ verifiedOrders }) {
  return (
    <Card>
      <SectionHeading eyebrow="Monitoring produksi" title="Order yang sudah tampil di operator" />
      <div className="mt-5 space-y-4">
        {verifiedOrders.map((order) => (
          <div key={order.id} className="rounded-[1.2rem] border border-slate-200 bg-slate-50 p-4">
            <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(260px,0.6fr)] xl:items-center">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-bold text-slate-900">{order.invoice} • {order.customer.companyName}</p>
                  <StatusBadge status={order.status} />
                </div>
                <p className="mt-2 text-sm text-slate-500">{order.items[0]?.productName} • {order.currentStage} • {order.estimatedShipDate}</p>
                <p className="mt-3 rounded-[1rem] bg-white p-4 text-sm leading-7 text-slate-600">Catatan admin: {order.adminNotes}</p>
              </div>
              <div className="space-y-3">
                {order.productionUpdates.slice(0, 2).map((update) => (
                  <div key={update.id} className="rounded-[1rem] bg-white p-4 text-sm text-slate-600">
                    <p className="font-semibold text-slate-900">{update.stage}</p>
                    <p className="mt-1">{update.date} • {update.estimate}</p>
                  </div>
                ))}
                <Button type="button" variant="secondary" className="w-full">
                  <PackageSearch className="h-4 w-4" />
                  Pantau job
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
