import { type ReactNode } from "react";

export function CtaButton({
  children,
  href = "#register",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`shine-btn inline-flex items-center justify-center gap-2 rounded-[20px] bg-linear-to-b from-[#FCD28B] to-brand-orange px-8 py-4 text-center font-heading text-base font-bold text-brand-navy shadow-[0_10px_25px_-8px_rgba(255,180,51,0.7)] transition-transform hover:scale-[1.02] active:scale-[0.99] sm:text-lg ${className}`}
    >
      {children}
    </a>
  );
}
