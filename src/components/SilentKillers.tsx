import { silentKillers } from "@/lib/content";
import { RepeatCta } from "./ui/RepeatCta";
import { CheckSquareIcon } from "./ui/Icons";

export function SilentKillers() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-heading text-2xl font-extrabold leading-tight text-white sm:text-[34px]">
          The 6 Silent Killers Keeping Your D2C Brand Under{" "}
          <span className="bg-linear-to-b from-[#FCD28B] to-brand-orange bg-clip-text text-transparent">
            ₹10 Lakhs/Month
          </span>
        </h2>
      </div>

      <div className="relative mx-auto mt-10 grid max-w-3xl gap-3 px-4">
        {silentKillers.map((text) => (
          <div
            key={text}
            className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-sm"
          >
            <CheckSquareIcon className="h-5 w-5 shrink-0 text-brand-orange" />
            <p className="font-body text-sm text-white/90 sm:text-base">
              {text}
            </p>
          </div>
        ))}
      </div>

      <div className="relative">
        <RepeatCta dark />
      </div>
    </section>
  );
}
