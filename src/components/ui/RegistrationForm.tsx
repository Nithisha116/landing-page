"use client";

import { useState, type FormEvent } from "react";

export function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brand-orange/40 bg-white p-8 text-center shadow-xl">
        <p className="font-heading text-xl font-bold text-brand-navy">
          You&apos;re registered! 🎉
        </p>
        <p className="mt-2 font-body text-brand-gray">
          Check your email/WhatsApp for the Zoom link and workshop details.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white p-6 shadow-xl sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Name"
          className="w-full rounded-xl border border-black/15 px-4 py-3 font-body text-brand-navy outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email"
          className="w-full rounded-xl border border-black/15 px-4 py-3 font-body text-brand-navy outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
        />
        <input
          required
          name="city"
          placeholder="City"
          className="w-full rounded-xl border border-black/15 px-4 py-3 font-body text-brand-navy outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
        />
        <input
          required
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full rounded-xl border border-black/15 px-4 py-3 font-body text-brand-navy outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/30"
        />
      </div>
      <button
        type="submit"
        className="shine-btn mt-2 w-full rounded-[20px] bg-linear-to-b from-[#FCD28B] to-brand-orange px-8 py-4 text-center font-heading text-lg font-bold text-brand-navy shadow-[0_10px_25px_-8px_rgba(255,180,51,0.7)] transition-transform hover:scale-[1.01] active:scale-[0.99]"
      >
        Register Now At ₹299
      </button>
    </form>
  );
}
