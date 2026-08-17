import Image from "next/image";
import { CtaButton } from "./ui/Button";
import { Counter } from "./ui/Counter";

const badges = [
  { icon: "time_15487892.png", label: "25th & 26th August At 6 PM" },
  { icon: "language_484531.png", label: "English, Hindi" },
  { icon: "live_5012379.png", label: "Live on Zoom" },
  { icon: "duration_12607332.png", label: "Duration: 2 Days" },
] as const;

const stats = [
  { to: 1000, suffix: " cr +", label: "Value Created" },
  { to: 7400, suffix: " +", label: "Founders Empowered" },
  { to: 20, suffix: " +", label: "Years Teaching Experience" },
] as const;

export function Hero() {
  return (
    <section className="dotted-bg relative overflow-hidden bg-white pb-14 pt-6 sm:pb-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-4 text-center">
        {/* Top pill badge */}
        <div className="w-full max-w-[430px] rounded-b-[15px] bg-linear-to-b from-[#FCD28B] to-brand-orange px-4 py-2 shadow-md">
          <h2 className="font-heading text-sm font-medium capitalize text-brand-navy sm:text-lg">
            2-Day LIVE D2C Hyperscale Workshop
          </h2>
        </div>

        {/* Banner image */}
        <div className="mt-6 w-full max-w-3xl overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5">
          <Image
            src="/assets/images/Banner_-1536x864.webp"
            alt="Scale to ₹1Cr/Month in 60 Days — 2-Day LIVE D2C Hyperscale Workshop with Shripal Gandhi"
            width={1536}
            height={864}
            priority
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>

        {/* Headline */}
        <h1 className="mt-8 max-w-3xl font-heading text-[26px] font-extrabold leading-tight text-brand-navy sm:text-4xl sm:leading-[1.15]">
          Imagine Identifying Exactly What&apos;s Broken In Your D2C Business,
          And How You Can Scale{" "}
          <span className="bg-linear-to-b from-[#FCD28B] to-brand-orange-dark bg-clip-text text-transparent">
            ₹1 Crore/Month
          </span>{" "}
          Within 60 Days
        </h1>

        <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-brand-gray sm:text-base">
          Built a ₹1000 Cr brand in 5 years. Founder of Hyperscale, Swipecom,
          Gooseberry &amp; Sensing Self. Named India&apos;s Top 50 Inspiring
          Entrepreneurs by Economic Times.
        </p>

        {/* Info badges */}
        <div className="mt-8 grid w-full max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {badges.map((b) => (
            <div
              key={b.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-black/5 bg-white px-3 py-4 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.15)]"
            >
              <Image
                src={`/assets/icons/${b.icon}`}
                alt=""
                width={36}
                height={36}
                className="h-8 w-8"
              />
              <span className="font-body text-xs font-semibold text-brand-navy sm:text-sm">
                {b.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-9 flex flex-col items-center gap-3">
          <CtaButton href="#register">Show Me the 5X Growth System</CtaButton>
          <p className="font-body text-sm text-brand-gray">
            Join the 2-Day Live HyperScale Workshop For{" "}
            <span className="font-bold text-brand-navy">₹299</span>
          </p>
          <p className="font-heading text-sm font-bold text-brand-red">
            <span className="blink-dot mr-1 inline-block">●</span>
            Limited Seats. Registration Closes Soon
          </p>
        </div>

        {/* Counters */}
        <div className="mt-12 grid w-full max-w-2xl grid-cols-3 gap-4 border-t border-black/10 pt-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center">
              <span className="font-heading text-2xl font-extrabold text-brand-navy sm:text-4xl">
                <Counter to={s.to} suffix={s.suffix} />
              </span>
              <span className="mt-1 text-center font-body text-[11px] uppercase tracking-wide text-brand-gray sm:text-xs">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
