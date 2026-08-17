export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-brand-navy py-8">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="font-heading text-sm font-bold tracking-wide text-white">
          HYPER SCALE
        </p>
        <p className="mt-2 font-body text-xs text-white/50">
          © {new Date().getFullYear()} HyperScale. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
