import { cn } from "../../lib/utils";
import { StepBadge } from "./StepBadge";

export function Stepper({ steps, currentStep, onChange }) {
  return (
    <div className="mt-6 flex gap-2.5 overflow-x-auto pb-2">
      {steps.map((step, index) => (
        <button
          key={step}
          className={cn(
            "inline-flex items-center gap-3 rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap",
            currentStep === index
              ? "bg-slate-900 text-white"
              : "border border-slate-200 bg-white text-slate-700",
          )}
          onClick={() => onChange(index)}
          type="button"
        >
          <StepBadge step={index + 1} active={currentStep === index} />
          {step}
        </button>
      ))}
    </div>
  );
}
