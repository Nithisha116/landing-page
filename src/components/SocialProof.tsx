import Image from "next/image";
import {
  afterWorkshop,
  beforeWorkshop,
  caseStudies,
  testimonialVideos,
} from "@/lib/content";
import { CheckSquareIcon, PlayIcon, TimesCircleIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";
import { RepeatCta } from "./ui/RepeatCta";

export function SocialProof() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <SectionHeading title="400+ D2C Brands Have Already 5X’ed Using This System" />

      {/* Case study gallery */}
      <div className="mx-auto mt-10 grid max-w-6xl gap-5 px-4 sm:grid-cols-2">
        {caseStudies.map((cs) => (
          <div
            key={cs.file}
            className="overflow-hidden rounded-2xl border border-black/5 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.35)]"
          >
            <Image
              src={`/assets/images/${cs.file}`}
              alt={cs.name}
              width={750}
              height={422}
              className="h-auto w-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {/* Video testimonials */}
      <div className="mx-auto mt-14 max-w-5xl px-4">
        <h3 className="text-center font-heading text-xl font-bold text-brand-navy sm:text-2xl">
          Hear It Straight From D2C Founders
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {testimonialVideos.map((v) => (
            <div
              key={v.poster}
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl shadow-[0_15px_40px_-15px_rgba(0,0,0,0.4)]"
            >
              <Image
                src={`/assets/images/${v.poster}`}
                alt={`${v.name} — ${v.role}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/25">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-lg">
                  <PlayIcon className="h-6 w-6" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Before / after */}
      <div className="mx-auto mt-16 max-w-4xl px-4 text-center">
        <h3 className="font-heading text-xl font-extrabold leading-snug text-brand-navy sm:text-2xl">
          Here&apos;s Why Most D2C Brands Stay Stuck at ₹2-3 Lakhs/Month
        </h3>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 px-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-brand-red/20 bg-red-50/50 p-6 sm:p-8">
          <h4 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-red">
            Before Workshop
          </h4>
          <div className="mt-5 flex flex-col gap-4">
            {beforeWorkshop.map((item) => (
              <div key={item.title} className="flex gap-3">
                <TimesCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <div>
                  <p className="font-heading text-sm font-bold text-brand-navy">
                    {item.title}:
                  </p>
                  <p className="font-body text-sm text-brand-gray">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-brand-green/20 bg-green-50/50 p-6 sm:p-8">
          <h4 className="font-heading text-lg font-bold uppercase tracking-wide text-brand-green">
            After Workshop
          </h4>
          <div className="mt-5 flex flex-col gap-4">
            {afterWorkshop.map((item) => (
              <div key={item.title} className="flex gap-3">
                <CheckSquareIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                <div>
                  <p className="font-heading text-sm font-bold text-brand-navy">
                    {item.title}:
                  </p>
                  <p className="font-body text-sm text-brand-gray">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RepeatCta />
      <p className="text-center font-heading text-sm font-bold text-brand-red">
        <span className="blink-dot mr-1 inline-block">●</span>
        Limited Seats. Registration Closes Soon
      </p>
    </section>
  );
}
