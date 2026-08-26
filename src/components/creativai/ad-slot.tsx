"use client";

import { motion } from "framer-motion";
import { Megaphone, X } from "lucide-react";
import { useState, type ReactNode } from "react";

/* ====================================================================== */
/*  AdSlot — non-intrusive, responsive ad placeholder                       */
/*                                                                         */
/*  Principles applied:                                                     */
/*  • Standard sizes (728x90, 300x250, 320x50, 320x100, responsive fluid)  */
/*  • Responsive: collapses to mobile sizes automatically                  */
/*  • Native: matches site palette (paper/ink) — no jarring colors          */
/*  • Dismissible: user can close any ad with one click (no forced view)   */
/*  • Clearly labeled "Sponsored" — never disguised as content              */
/*  • No pop-ups / no interstitials — only inline placements                */
/* ====================================================================== */

type AdSize = "leaderboard" | "rectangle" | "mobile-banner" | "mobile-large" | "fluid" | "hero-corner";

type AdSlotProps = {
  /** Standard size — picks responsive behavior */
  size?: AdSize;
  /** Optional label / sponsor name (shown when no real ad loaded yet) */
  sponsor?: string;
  /** Where it lives — affects surrounding spacing */
  placement?: "above-fold" | "in-content" | "sidebar" | "footer" | "hero-corner";
  /** Optional children to render instead of placeholder (real ad code) */
  children?: ReactNode;
  /** Hide the "Sponsored" tag (only for true native integrations) */
  hideLabel?: boolean;
  /** Allow user to dismiss this ad */
  dismissible?: boolean;
  className?: string;
};

const SIZE_PRESETS: Record<
  AdSize,
  { label: string; desktop: string; mobile: string; minHeight: number }
> = {
  // 728x90 (desktop) → 320x50 (mobile)
  leaderboard: {
    label: "728 × 90",
    desktop: "h-[90px] max-w-[728px]",
    mobile: "h-[50px]",
    minHeight: 50,
  },
  // 300x250 (medium rectangle — works everywhere)
  rectangle: {
    label: "300 × 250",
    desktop: "h-[250px] max-w-[300px]",
    mobile: "h-[250px] max-w-[300px]",
    minHeight: 250,
  },
  // 320x50 (mobile leaderboard)
  "mobile-banner": {
    label: "320 × 50",
    desktop: "h-[50px] max-w-[320px]",
    mobile: "h-[50px] max-w-[320px]",
    minHeight: 50,
  },
  // 320x100 (large mobile banner)
  "mobile-large": {
    label: "320 × 100",
    desktop: "h-[100px] max-w-[320px]",
    mobile: "h-[100px] max-w-[320px]",
    minHeight: 100,
  },
  // Fluid — fills container width, auto height
  fluid: {
    label: "Responsive",
    desktop: "min-h-[120px]",
    mobile: "min-h-[100px]",
    minHeight: 100,
  },
  // Medium rectangle (300x250) — floats in top-right corner of hero
  // Standard AdSense size, works on both desktop and mobile
  "hero-corner": {
    label: "300 × 250",
    desktop: "h-[250px] w-[300px]",
    mobile: "h-[250px] w-[300px]",
    minHeight: 250,
  },
};

export function AdSlot({
  size = "leaderboard",
  sponsor,
  placement = "in-content",
  children,
  hideLabel = false,
  dismissible = true,
  className = "",
}: AdSlotProps) {
  const [dismissed, setDismissed] = useState(false);
  const preset = SIZE_PRESETS[size];

  if (dismissed) return null;

  return (
    <motion.aside
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      role="complementary"
      aria-label="Sponsored content"
      className={`group relative w-full ${className}`}
    >
      {/* "Sponsored" disclosure tag — required by ad standards */}
      {!hideLabel && (
        <div className="flex items-center justify-between mb-1.5 px-1">
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/35 dark:text-white/35">
            <Megaphone className="w-3 h-3" />
            Sponsored
            {sponsor && (
              <span className="text-ink/50 dark:text-white/50 normal-case tracking-normal font-medium">
                · {sponsor}
              </span>
            )}
          </span>

          {dismissible && (
            <button
              onClick={() => setDismissed(true)}
              aria-label="Dismiss ad"
              className="opacity-0 group-hover:opacity-100 transition-opacity p-0.5 rounded hover:bg-black/5 dark:hover:bg-white/10 text-ink/40 hover:text-ink/70 dark:text-white/40 dark:hover:text-white/70"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      )}

      {/* Ad container — responsive size */}
      <div
        className={`
          relative mx-auto
          ${preset.desktop}
          sm:${preset.desktop}
          ${preset.mobile}
          w-full rounded-2xl border border-dashed border-ink/15 dark:border-white/15
          bg-paper-warm/40 dark:bg-white/[0.02]
          flex items-center justify-center overflow-hidden
          transition-colors hover:border-ink/25 dark:hover:border-white/25
        `}
      >
        {/* Subtle dotted pattern to indicate "ad space" */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
            backgroundSize: "16px 16px",
            color: "currentColor",
          }}
        />

        {/* Children (real ad code) OR placeholder */}
        {children ? (
          <div className="relative z-10 w-full h-full">{children}</div>
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center gap-1 px-4 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/40 dark:text-white/40">
              Ad Space
            </span>
            <span className="font-display text-base sm:text-lg text-ink/60 dark:text-white/60 tabular-nums">
              {preset.label}
            </span>
            <span className="text-[10px] text-ink/30 dark:text-white/30 mt-0.5">
              {placement === "above-fold"
                ? "Above the fold · highest CTR"
                : placement === "sidebar"
                ? "Sticky sidebar"
                : "Inline native placement"}
            </span>
          </div>
        )}
      </div>
    </motion.aside>
  );
}

/* ============ Convenience presets ============ */

export function LeaderboardAd({ sponsor, children }: { sponsor?: string; children?: ReactNode }) {
  return (
    <AdSlot
      size="leaderboard"
      sponsor={sponsor}
      placement="above-fold"
      className="my-6"
    >
      {children}
    </AdSlot>
  );
}

export function RectangleAd({ sponsor, children }: { sponsor?: string; children?: ReactNode }) {
  return (
    <AdSlot
      size="rectangle"
      sponsor={sponsor}
      placement="in-content"
      className="my-6"
    >
      {children}
    </AdSlot>
  );
}

export function InContentAd({ sponsor, children }: { sponsor?: string; children?: ReactNode }) {
  return (
    <AdSlot
      size="fluid"
      sponsor={sponsor}
      placement="in-content"
      className="my-8"
    >
      {children}
    </AdSlot>
  );
}

/**
 * Medium rectangle ad (300×250) — placed in the top-right corner
 * of the PageHero, filling the empty space next to the title.
 * Standard AdSense size, responsive — shows on all breakpoints.
 */
export function HeroCornerAd({ sponsor, children }: { sponsor?: string; children?: ReactNode }) {
  return (
    <div className="absolute top-24 right-4 sm:right-8 z-20 hidden md:block">
      <AdSlot
        size="hero-corner"
        sponsor={sponsor}
        placement="hero-corner"
        dismissible={true}
        className="shadow-lg"
      >
        {children}
      </AdSlot>
    </div>
  );
}
