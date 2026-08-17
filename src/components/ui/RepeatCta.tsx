import { CtaButton } from "./Button";

export function RepeatCta({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2 py-12">
      <CtaButton>Show Me the 5X Growth System</CtaButton>
      <p
        className={`font-body text-sm ${
          dark ? "text-white/70" : "text-brand-gray"
        }`}
      >
        Join the 2-Day Live HyperScale Workshop For{" "}
        <span className={dark ? "font-bold text-white" : "font-bold text-brand-navy"}>
          ₹299
        </span>
      </p>
    </div>
  );
}
