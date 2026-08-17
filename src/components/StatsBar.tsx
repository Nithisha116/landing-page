import { Counter } from "./ui/Counter";
import { CtaButton } from "./ui/Button";

const stats = [
  { to: 1000, suffix: " cr +", label: "Value Created" },
  { to: 7400, suffix: " +", label: "Founders Empowered" },
  { to: 20, suffix: " +", label: "Years Teaching Experience" },
] as const;

export function StatsBar() {
  return (
    <section className="bg-brand-navy py-6 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <div className="flex items-baseline justify-center gap-2 sm:justify-start">
            <span className="font-heading text-2xl font-extrabold text-brand-orange sm:text-3xl">
              ₹299
            </span>
            <span className="font-heading text-base text-white/50 line-through">
              ₹2999
            </span>
          </div>
          <p className="font-heading text-xs font-bold uppercase tracking-wide text-white/70">
            Enrollment Closes Today
          </p>
        </div>

        <div className="flex flex-1 flex-wrap justify-center gap-x-10 gap-y-4 sm:justify-evenly">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="font-heading text-xl font-extrabold text-white sm:text-2xl">
                <Counter to={s.to} suffix={s.suffix} />
              </span>
              <span className="mt-1 text-center font-body text-[11px] uppercase tracking-wide text-white/60 sm:text-xs">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <CtaButton href="#register" className="w-full shrink-0 sm:w-auto">
          Register Now!
        </CtaButton>
      </div>
    </section>
  );
}
