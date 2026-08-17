import { faqs } from "@/lib/content";
import { Accordion } from "./ui/Accordion";
import { RepeatCta } from "./ui/RepeatCta";

export function Faq() {
  return (
    <section className="FAQ relative overflow-hidden bg-brand-navy py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative">
        <h2 className="text-center font-heading text-2xl font-extrabold text-white sm:text-[34px]">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 px-4">
          <Accordion items={faqs} />
        </div>
        <RepeatCta dark />
      </div>
    </section>
  );
}
