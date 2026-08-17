import { pressLogos } from "@/lib/content";
import { Marquee } from "./ui/Marquee";

export function FeaturedOn() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <p className="text-center font-heading text-xs font-bold uppercase tracking-[0.2em] text-brand-gray">
        Featured on
      </p>
      <div className="mt-6">
        <Marquee items={pressLogos} itemClassName="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition" />
      </div>
    </section>
  );
}
