import { brandLogos } from "@/lib/content";
import { Marquee } from "./ui/Marquee";

export function Brands() {
  return (
    <section className="bg-[#F7F8FA] py-14 sm:py-16">
      <h2 className="text-center font-heading text-2xl font-extrabold text-brand-navy sm:text-[32px]">
        Some of the Brands I&apos;ve Worked With
      </h2>
      <div className="mt-8">
        <Marquee
          items={brandLogos}
          speed="slow"
          itemClassName="rounded-xl bg-white p-3 shadow-sm"
        />
      </div>
    </section>
  );
}
