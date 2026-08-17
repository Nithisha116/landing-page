import Image from "next/image";
import { type ReactNode } from "react";

export function Marquee({
  items,
  speed = "normal",
  itemClassName = "",
  renderItem,
}: {
  items: readonly { file: string; name: string }[];
  speed?: "normal" | "slow";
  itemClassName?: string;
  renderItem?: (item: { file: string; name: string }) => ReactNode;
}) {
  const doubled = [...items, ...items];
  const animClass = speed === "slow" ? "animate-marquee-slow" : "animate-marquee";

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-28" />
      <div className={`flex w-max items-center gap-10 ${animClass}`}>
        {doubled.map((item, i) =>
          renderItem ? (
            <div key={`${item.file}-${i}`}>{renderItem(item)}</div>
          ) : (
            <div
              key={`${item.file}-${i}`}
              className={`flex h-16 w-32 shrink-0 items-center justify-center sm:h-20 sm:w-40 ${itemClassName}`}
            >
              <Image
                src={`/assets/images/${item.file}`}
                alt={item.name}
                width={160}
                height={80}
                className="max-h-full w-auto max-w-full object-contain"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}
