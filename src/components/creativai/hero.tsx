"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { InteractiveBackground } from "./interactive-background";
import { MagneticText } from "./magnetic-text";
import { useThemeState } from "@/lib/theme";

export function CreativAIHero() {
  const { theme } = useThemeState();
  const dark = theme === "dark";

  return (
    <section className="relative min-h-[92vh] flex flex-col overflow-hidden">
      {/* ============ Layer 1: Interactive particle canvas ============ */}
      <div className="absolute inset-0 pointer-events-none">
        <InteractiveBackground dark={dark} density={90} mouseRadius={220} linkDistance={150} />
      </div>

      {/* ============ Layer 2: Subtle radial tint ============ */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: dark
            ? "radial-gradient(ellipse 60% 60% at 50% 40%, rgba(124,58,237,0.12) 0%, transparent 60%)"
            : "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(245,158,11,0.08) 0%, transparent 60%)",
        }}
      />

      {/* ============ Content ============ */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="mx-auto max-w-[1320px] w-full px-5 sm:px-8 pt-32 sm:pt-36 pb-12 flex-1 flex flex-col items-center text-center">
          {/* Headline — centered, magnetic letters */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[44px] sm:text-[64px] lg:text-[80px] xl:text-[88px] leading-[1.02] tracking-[-0.035em] text-ink cursor-default"
          >
            {/* "Build the right" — magnetic, default ink color, glows amber on hover */}
            <MagneticText
              text="Build the right"
              pull={14}
              radius={80}
              color="#f59e0b"
              boost={true}
              hoverWeight={700}
              gradient={false}
              className="text-ink dark:text-white"
            />{" "}
            {/* "AI Stack" — magnetic with aurora gradient tint on hover */}
            <span className="relative inline-block">
              <MagneticText
                text="AI Stack"
                pull={16}
                radius={90}
                color="#7c3aed"
                boost={true}
                hoverWeight={800}
                gradient={true}
                className="text-gradient-aurora"
              />
            </span>{" "}
            {/* "with" — italic soft accent */}
            <MagneticText
              text="with"
              pull={10}
              radius={70}
              color="#0d9488"
              boost={false}
              gradient={false}
              className="italic font-light text-ink/40 dark:text-white/40"
            />{" "}
            {/* "CreativAI" — magnetic, gold glow on hover */}
            <span className="relative inline-block">
              <MagneticText
                text="CreativAI"
                pull={18}
                radius={95}
                color="#f59e0b"
                boost={true}
                hoverWeight={800}
                gradient={true}
                className="text-gradient-amber"
              />
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.9 }}
                className="absolute -bottom-1 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-amber-500 via-fuchsia-500 to-violet-600 rounded-full pointer-events-none"
                aria-hidden
              />
            </span>
            <span className="text-ink/30 dark:text-white/30">.</span>
          </motion.h1>

          {/* CTAs — centered, larger, more prominent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            {/* Primary CTA — gradient + glow */}
            <Link
              href="/find-my-stack"
              className="btn-shine group relative inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-400 px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-fuchsia-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40 hover:-translate-y-0.5 transition-all"
            >
              <Sparkles className="w-4 h-4" strokeWidth={2.4} />
              Find My Stack
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            {/* Secondary CTA — solid dark for contrast */}
            <Link
              href="/tools"
              className="group inline-flex items-center gap-2 rounded-2xl bg-ink px-8 py-4 text-[15px] font-semibold text-paper shadow-lg shadow-ink/20 hover:shadow-xl hover:shadow-ink/30 hover:-translate-y-0.5 transition-all dark:bg-paper dark:text-ink dark:shadow-paper/20"
            >
              Browse Verified Tools
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* ============ Bottom: fplus-style numbered nav strip ============ */}
        <NumberedNavStrip />
      </div>
    </section>
  );
}

/* ============ fplus.ai-inspired numbered strip ============ */
const STACK_NAV = [
  { num: "01", label: "Analytics & Insights", href: "/tools", color: "#f59e0b" },
  { num: "02", label: "Content Management", href: "/tools", color: "#7c3aed" },
  { num: "03", label: "Editing & Enhancement", href: "/tools", color: "#0d9488" },
  { num: "04", label: "SEO Optimization", href: "/tools", color: "#c026d3" },
  { num: "05", label: "Content Generation", href: "/tools", color: "#4f46e5" },
];

function NumberedNavStrip() {
  return (
    <div className="relative border-t border-black/5 dark:border-white/5 bg-paper/40 dark:bg-black/20 backdrop-blur-sm">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-black/5 dark:divide-white/5">
          {STACK_NAV.map((item, i) => (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.08 }}
            >
              <Link
                href={item.href}
                className="group relative flex items-center gap-3 px-4 py-5 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors"
              >
                {/* Number with hover color animation */}
                <span
                  className="font-display text-2xl font-bold tabular-nums transition-colors"
                  style={{ color: item.color }}
                >
                  {item.num}
                </span>

                <div className="flex-1 min-w-0">
                  <p className="text-[12.5px] sm:text-[13px] font-semibold text-ink dark:text-white leading-tight">
                    {item.label}
                  </p>
                  <p className="hidden sm:block text-[10px] uppercase tracking-[0.15em] text-ink/40 dark:text-white/40 mt-0.5">
                    Explore module
                  </p>
                </div>

                <ArrowUpRight className="w-3.5 h-3.5 text-ink/30 dark:text-white/30 transition-all duration-300 group-hover:text-ink dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

                {/* Bottom hover line */}
                <span
                  aria-hidden
                  className="absolute left-0 right-0 bottom-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: item.color }}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
