export function SectionHeading({
  title,
  subtitle,
  dark = false,
  center = true,
}: {
  title: string;
  subtitle?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={`mx-auto max-w-3xl px-4 ${center ? "text-center" : ""}`}>
      <h2
        className={`font-heading text-2xl font-extrabold leading-tight sm:text-[34px] ${
          dark ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto mt-4 max-w-2xl font-body text-sm leading-relaxed sm:text-base ${
            dark ? "text-white/70" : "text-brand-gray"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
