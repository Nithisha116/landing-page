import Image from "next/image";
import { CheckSquareIcon } from "./ui/Icons";

const promises = [
  "Refund your entire Workshop fee",
  "Work with you until you make profit",
] as const;

export function Guarantee() {
  return (
    <section className="bg-[#F7F8FA] py-16 sm:py-20">
      <div className="mx-auto grid max-w-4xl items-center gap-8 px-4 sm:grid-cols-[220px_1fr]">
        <div className="mx-auto w-full max-w-[220px]">
          <Image
            src="/assets/images/360_F_52353227_QN4uFwGBnLfLtZzAxacByJujbzneuGMB-removebg-preview.png"
            alt="100% Money Back Guarantee"
            width={480}
            height={360}
            className="h-auto w-full object-contain"
          />
        </div>

        <div className="text-center sm:text-left">
          <h2 className="font-heading text-2xl font-extrabold leading-tight text-brand-navy sm:text-[32px]">
            Your Success Is 100% Guaranteed
          </h2>
          <p className="mt-4 font-body text-sm leading-relaxed text-brand-gray sm:text-base">
            Attend the full workshop, implement just ONE strategy, and if you
            don&apos;t make at least ₹3,000 in additional profit within 30
            days, we&apos;ll:
          </p>

          <div className="mt-6 rounded-2xl border border-brand-orange/30 bg-white p-6 shadow-sm">
            <p className="font-heading text-base font-bold text-brand-orange-dark">
              The &ldquo;10X ROI Promise&rdquo;
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {promises.map((p) => (
                <div key={p} className="flex items-center justify-center gap-3 sm:justify-start">
                  <CheckSquareIcon className="h-5 w-5 shrink-0 text-brand-green" />
                  <span className="font-body text-sm font-medium text-brand-navy sm:text-base">
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 font-heading text-sm font-bold text-brand-navy sm:text-base">
            That&apos;s how confident we are. You literally cannot lose.
          </p>
        </div>
      </div>
    </section>
  );
}
