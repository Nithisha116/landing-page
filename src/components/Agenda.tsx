import { agendaDay1, agendaDay2 } from "@/lib/content";
import { AngleDoubleRightIcon } from "./ui/Icons";
import { SectionHeading } from "./ui/SectionHeading";
import { RepeatCta } from "./ui/RepeatCta";

function AgendaCard({
  day,
  subtitle,
  items,
}: {
  day: string;
  subtitle: string;
  items: readonly { title: string; body: string }[];
}) {
  return (
    <div className="flex-1 rounded-3xl border border-black/5 bg-white p-6 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.3)] sm:p-8">
      <span className="inline-block rounded-full bg-brand-orange/15 px-4 py-1 font-heading text-xs font-bold uppercase tracking-wide text-brand-orange-dark">
        {day}
      </span>
      <h3 className="mt-3 font-heading text-lg font-bold text-brand-navy sm:text-xl">
        {subtitle}
      </h3>
      <div className="mt-5 flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.title} className="flex gap-3">
            <AngleDoubleRightIcon className="mt-1 h-4 w-4 shrink-0 text-brand-orange-dark" />
            <div>
              <p className="font-heading text-sm font-bold text-brand-navy sm:text-base">
                {item.title}
              </p>
              <p className="mt-1 font-body text-sm leading-relaxed text-brand-gray">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Agenda() {
  return (
    <section className="bg-[#F7F8FA] py-16 sm:py-20">
      <SectionHeading title="Workshop Agenda" />

      <div className="mx-auto mt-10 flex max-w-5xl flex-col gap-6 px-4 lg:flex-row">
        <AgendaCard
          day="Day 1"
          subtitle="Foundation (Setting Up the Right Growth Base)"
          items={agendaDay1}
        />
        <AgendaCard
          day="Day 2"
          subtitle="Expansion (Building Scalable, Independent Growth)"
          items={agendaDay2}
        />
      </div>

      <p className="mx-auto mt-8 max-w-2xl px-4 text-center font-body text-sm font-semibold text-brand-navy sm:text-base">
        Plus live brand strategy session with expert mentors to solve your
        biggest growth roadblocks
      </p>

      <RepeatCta />
    </section>
  );
}
