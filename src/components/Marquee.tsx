"use client";

import React from "react";
import { usePathname } from "next/navigation";

export function Marquee() {
  const pathname = usePathname();

  // Marquee should only be visible on the homepage (/)
  if (
    pathname !== "/" ||
    pathname.startsWith("/tools") ||
    pathname.startsWith("/compare") ||
    pathname.startsWith("/workflows") ||
    pathname.startsWith("/alternatives") ||
    pathname.startsWith("/stack") ||
    pathname.startsWith("/benchmarks") ||
    pathname.startsWith("/about")
  ) {
    return null;
  }

  const items = [
    "Real output quality",
    "Verified commercial terms",
    "True per-video costs",
    "PACE Benchmark Standard",
    "0 Sponsored Bias",
    "24 Audited Creator Tools",
    "Zero Affiliate Inflation",
  ];

  return (
    <div className="relative py-3.5 border-y border-black/5 bg-paper-warm/40 dark:bg-white/[0.02] dark:border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee gap-8">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-[12px] font-medium tracking-[0.05em] text-ink/65 dark:text-white/65"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
