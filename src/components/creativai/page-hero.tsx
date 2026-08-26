"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Wrench,
  Workflow,
  GitCompare,
  RefreshCw,
  Terminal,
  Sliders,
  Award,
  Scale,
  type LucideIcon,
} from "lucide-react";
import { HeroCornerAd } from "./ad-slot";

const ICON_MAP: Record<string, LucideIcon> = {
  wrench: Wrench,
  workflow: Workflow,
  compare: GitCompare,
  alternatives: RefreshCw,
  terminal: Terminal,
  sliders: Sliders,
  award: Award,
  scale: Scale,
};

type PageHeroProps = {
  eyebrow: string;
  eyebrowColor?: string;
  title: string;
  highlight?: string;
  highlightClass?: string;
  description: string;
  iconName?: string;
  stats?: { value: string; label: string; color?: string }[];
  cta?: { label: string; href: string; primary?: boolean };
  showCornerAd?: boolean;
  sponsor?: string;
};

export function PageHero({
  eyebrow,
  eyebrowColor = "bg-violet-500",
  title,
  highlight,
  highlightClass = "text-gradient-aurora",
  description,
  iconName,
  stats,
  cta,
  showCornerAd = false,
  sponsor,
}: PageHeroProps) {
  const Icon = iconName ? ICON_MAP[iconName] : undefined;

  return (
    <section className="relative pt-28 pb-8 sm:pt-32 sm:pb-10">
      {showCornerAd && <HeroCornerAd sponsor={sponsor} />}

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink/50 hover:text-ink dark:text-white/50 dark:hover:text-white transition mb-5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex items-center gap-2 mb-3"
          >
            <span className={`w-1.5 h-1.5 rounded-full ${eyebrowColor}`} />
            <span className="text-[11px] font-semibold tracking-[0.18em] text-ink/50 uppercase dark:text-white/50">
              {eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.025em] text-ink dark:text-white"
          >
            {Icon && (
              <span className="inline-grid place-items-center align-middle w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 text-white mr-2 sm:mr-3 -ml-1 shadow-md">
                <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" strokeWidth={2} />
              </span>
            )}
            {title}{" "}
            {highlight && <span className={highlightClass}>{highlight}</span>}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-ink/70 dark:text-white/70 max-w-xl"
          >
            {description}
          </motion.p>

          {(stats || cta) && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 flex flex-wrap items-center gap-6"
            >
              {cta && (
                <Link
                  href={cta.href}
                  className="btn-shine inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-2.5 text-[13.5px] font-semibold text-paper hover:bg-ink-soft transition shadow-md shadow-black/10 dark:bg-paper dark:text-ink"
                >
                  {cta.label}
                  <span className="text-[11px] opacity-60">→</span>
                </Link>
              )}

              {stats && stats.length > 0 && (
                <div className="flex items-center gap-5 sm:gap-6 border-l border-black/10 dark:border-white/10 pl-5 sm:pl-6">
                  {stats.map((s) => (
                    <div key={s.label}>
                      <div
                        className="font-display text-xl sm:text-2xl font-bold leading-none tracking-tight"
                        style={{ color: s.color || "#14121a" }}
                      >
                        {s.value}
                      </div>
                      <div className="text-[11px] text-ink/50 dark:text-white/50 mt-1">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
