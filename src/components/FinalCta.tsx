import { RegistrationForm } from "./ui/RegistrationForm";

export function FinalCta() {
  return (
    <section
      id="register"
      className="dotted-bg bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-xl px-4 text-center">
        <p className="font-heading text-lg font-bold text-brand-navy sm:text-xl">
          👉 Don&apos;t wait because your competition won&apos;t
        </p>

        <div className="mt-4 flex items-center justify-center gap-3">
          <span className="font-heading text-4xl font-extrabold text-brand-orange-dark sm:text-5xl">
            ₹299
          </span>
          <span className="font-heading text-xl text-brand-gray line-through">
            ₹2999
          </span>
        </div>

        <p className="mt-2 font-heading text-sm font-bold uppercase tracking-wide text-brand-red">
          Enrollment Closes Today
        </p>

        <h2 className="mt-6 font-heading text-2xl font-extrabold text-brand-navy sm:text-3xl">
          Register Now!
        </h2>

        <div className="mt-8 text-left">
          <RegistrationForm />
        </div>

        <p className="mt-6 font-heading text-sm font-bold text-brand-red">
          <span className="blink-dot mr-1 inline-block">●</span>
          Seats Filling Fast! Register Now
        </p>
      </div>
    </section>
  );
}
