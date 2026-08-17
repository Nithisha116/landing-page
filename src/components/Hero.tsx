import Image from "next/image";
import { CtaButton } from "./ui/Button";

const badges = [
  {
    icon: "time_15487892.png",
    lines: ["25th & 26th August", "At 6 PM"],
  },
  {
    icon: "language_484531.png",
    lines: ["English, Hindi"],
  },
  {
    icon: "live_5012379.png",
    lines: ["Live", "On Zoom"],
  },
  {
    icon: "duration_12607332.png",
    lines: ["Duration :", "2 Days"],
  },
] as const;

export function Hero() {
  return (
    <section className="dotted-bg relative overflow-hidden bg-white pb-14 pt-6 sm:pb-20">
      <div className="mx-auto max-w-5xl px-4">
        {/* Top pill badge */}
        <div className="mx-auto w-full max-w-107.5 rounded-b-[15px] bg-linear-to-b from-[#FCD28B] to-brand-orange px-4 py-2 text-center shadow-md">
          <h2 className="font-heading text-sm font-medium capitalize text-brand-navy sm:text-lg">
            2-Day LIVE D2C Hyperscale Workshop
          </h2>
        </div>

        {/* Headline */}
        <h1 className="mx-auto mt-8 max-w-4xl text-center font-heading text-[24px] font-extrabold leading-tight text-brand-navy sm:text-[32px] sm:leading-[1.2]">
          Imagine Identifying Exactly What&apos;s Broken In Your D2C Business,
          And{" "}
          <span className="bg-linear-to-b from-[#FCD28B] to-brand-orange-dark bg-clip-text text-transparent">
            How You Can Scale ₹1 Crore/Month Within 60 Days
          </span>
        </h1>

        {/* Two-column: banner + workshop details */}
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          {/* Left: banner card */}
          <div className="rounded-2xl border border-black/5 bg-white p-3 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] sm:p-4">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/assets/images/Banner_-1536x864.webp"
                alt="Scale to ₹1Cr/Month in 60 Days — 2-Day LIVE D2C Hyperscale Workshop with Shripal Gandhi"
                width={1536}
                height={864}
                priority
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
            <p className="mt-3 text-center font-body text-sm leading-relaxed text-brand-navy">
              Built A ₹1000 Cr Brand In 5 Years. Founder Of Hyperscale,
              Swipecom, Gooseberry &amp; Sensing Self. Named India&apos;s Top
              50 Inspiring Entrepreneurs By Economic Times.
            </p>
          </div>

          {/* Right: workshop details */}
          <div className="flex flex-col">
            <h3 className="text-center font-heading text-xl font-bold text-brand-navy lg:text-left">
              Workshop Details
            </h3>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {badges.map((b) => (
                <div
                  key={b.icon}
                  className="flex items-center gap-3 rounded-2xl border border-black/5 bg-white px-4 py-3 shadow-[0_4px_16px_-8px_rgba(0,0,0,0.15)]"
                >
                  <Image
                    src={`/assets/icons/${b.icon}`}
                    alt=""
                    width={36}
                    height={36}
                    className="h-8 w-8 shrink-0"
                  />
                  <span className="font-body text-sm font-semibold leading-tight text-brand-navy">
                    {b.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <CtaButton href="#register" className="w-full">
                Show Me the 5X Growth System
              </CtaButton>
            </div>
            <p className="mt-3 text-center font-body text-sm text-brand-gray lg:text-left">
              Join the 2-Day Live HyperScale Workshop For{" "}
              <span className="font-bold text-brand-navy">₹299</span>
            </p>
            <p className="mt-1 text-center font-body text-sm text-brand-gray lg:text-left">
              Registration Closes Soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
