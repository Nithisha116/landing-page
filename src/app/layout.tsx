import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2-Day LIVE D2C Hyperscale Workshop",
  description:
    "Identify exactly what's broken in your D2C business, and how you can scale to ₹1 Crore/Month within 60 days.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-full flex flex-col antialiased bg-white text-brand-navy">
        {children}
      </body>
    </html>
  );
}
