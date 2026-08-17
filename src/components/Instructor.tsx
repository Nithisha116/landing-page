import Image from "next/image";
import { instructorStats } from "@/lib/content";
import { ShareIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";
import { CtaButton } from "./ui/Button";
import { RepeatCta } from "./ui/RepeatCta";

export function Instructor() {
  return (
    <section className="dotted-bg bg-white py-16 sm:py-20">
      <SectionHeading
        title="Meet the Man Behind the HyperScale System"
        subtitle="The Founder Who Cracked the D2C Growth Code and Taught Others to Do The Same."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-10 px-4 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
        <div className="mx-auto w-full max-w-[320px] overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/assets/images/image-750-e1773482629166.webp"
            alt="Shripal Gandhi — Business Coach and Serial Entrepreneur"
            width={589}
            height={750}
            className="h-auto w-full object-cover"
            sizes="(max-width: 1024px) 90vw, 320px"
          />
        </div>

        <div>
          <h3 className="font-heading text-2xl font-extrabold text-brand-navy">
            Shripal Gandhi
          </h3>

          <ul className="mt-5 flex flex-col gap-3">
            {instructorStats.map((stat) => (
              <li key={stat} className="flex items-start gap-3">
                <ShareIcon className="mt-1 h-4 w-4 shrink-0 text-brand-orange-dark" />
                <span className="font-body text-sm leading-relaxed text-brand-gray sm:text-base">
                  {stat}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 font-body text-sm italic leading-relaxed text-brand-gray sm:text-base">
            &ldquo;Shripal didn&apos;t figure this out from a whiteboard. He
            lost money on the wrong ads, handed control to marketplaces, and
            watched agencies burn his budget with nothing to show. He learned
            what separates a ₹50 lakh brand from a ₹100 crore brand the hard
            way.&rdquo;
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-brand-gray sm:text-base">
            <span className="font-bold text-brand-navy">His edge:</span> He&apos;s
            already walked the exact road you&apos;re on. From stuck founder
            to ₹1000 Cr founder, and now he teaches the exact
            retention-first, margin-focused systems that get D2C founders out
            of survival mode and into scale.
          </p>

          <div className="mt-8">
            <CtaButton>&ldquo;I am ready to hyperscale my D2C brand&rdquo;</CtaButton>
          </div>
        </div>
      </div>

      <RepeatCta />
    </section>
  );
}
