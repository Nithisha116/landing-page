import Image from "next/image";
import { whoIsThisFor } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { RepeatCta } from "./ui/RepeatCta";

const icons = [
  "financial-profit.webp",
  "promotion-1.webp",
  "reusable-1.webp",
  "e-commerce.webp",
  "bad.webp",
] as const;

export function WhoIsThisFor() {
  return (
    <section className="dotted-bg bg-white py-16 sm:py-20">
      <SectionHeading
        title="Who Is This Workshop For?"
        subtitle="This Is For D2C Founders Who Know Something Is Broken and Are Finally Ready to Fix It"
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 px-4 sm:grid-cols-2 lg:grid-cols-3">
        {whoIsThisFor.map((item, i) => (
          <div
            key={item.title}
            className={`flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] ${
              i === whoIsThisFor.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <Image
              src={`/assets/images/${icons[i]}`}
              alt=""
              width={56}
              height={56}
              className="h-12 w-12"
            />
            <h3 className="mt-4 flex items-center gap-2 font-heading text-lg font-bold text-brand-navy">
              {item.title}
              <span className="text-brand-orange-dark">→</span>
            </h3>
            <p className="mt-2 font-body text-sm leading-relaxed text-brand-gray">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <RepeatCta />
    </section>
  );
}
