"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Check, MessageSquareText, ArrowUpRight } from "lucide-react";

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(Math.round(latest).toString());
      },
    });
    return () => controls.stop();
  }, [inView, value, count]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  sub: string;
  accent: string;
  ring: string;
};

const STATS: Stat[] = [
  {
    value: 15,
    label: "Vetted Tools",
    sub: "Independently benchmarked",
    accent: "text-amber-600",
    ring: "from-amber-400 to-orange-500",
  },
  {
    value: 100,
    suffix: "%",
    label: "PACE Benchmark Standard",
    sub: "Every tool measured on PACE",
    accent: "text-violet-600",
    ring: "from-violet-500 to-fuchsia-500",
  },
  {
    value: 0,
    label: "Sponsored Bias",
    sub: "Truly neutral — no paid placements",
    accent: "text-emerald-600",
    ring: "from-emerald-400 to-teal-500",
  },
];

export function CreativAIStats() {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* Big ink panel */}
        <div className="relative overflow-hidden rounded-[28px] bg-ink text-paper p-8 sm:p-10 lg:p-12">
          {/* Aurora inside dark panel */}
          <div className="absolute inset-0 aurora-bg-dark opacity-90 pointer-events-none" aria-hidden />
          <div className="absolute inset-0 bg-grain opacity-[0.12] pointer-events-none" aria-hidden />

          {/* Top header */}
          <div className="relative flex flex-wrap items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-paper/80 uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Transparency Report
              </span>
              <h3 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.02em]">
                Numbers you can{" "}
                <span className="text-gradient-amber">trust.</span>
              </h3>
              <p className="mt-3 max-w-md text-[14px] text-paper/65 leading-relaxed">
                Every claim we publish is reproducible. Here&apos;s the running tally —
                updated each time we add or retire a tool.
              </p>
            </div>

            <a
              href="#feedback"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-5 py-3 text-sm font-semibold text-paper hover:bg-white/10 transition"
            >
              <MessageSquareText className="w-4 h-4" />
              Feedback
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Stats grid */}
          <div className="relative grid sm:grid-cols-3 gap-6 lg:gap-10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-1 grid place-items-center w-7 h-7 rounded-full bg-gradient-to-br ${stat.ring} text-white shadow-lg shrink-0`}
                  >
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </span>
                  <div>
                    <div className="font-display text-5xl sm:text-6xl lg:text-[72px] leading-none tracking-[-0.03em]">
                      <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="mt-2 text-base sm:text-lg font-semibold text-paper">
                      {stat.label}
                    </div>
                    <div className="text-[13px] text-paper/55 mt-0.5">{stat.sub}</div>
                  </div>
                </div>

                {/* Vertical divider on desktop */}
                {i < STATS.length - 1 && (
                  <div className="hidden sm:block absolute top-1 -right-5 lg:-right-5 h-20 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" aria-hidden />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
