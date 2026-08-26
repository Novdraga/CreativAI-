"use client";

import { useRef, useState, useMemo } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";
import {
  BarChart3,
  PieChart,
  Database,
  LineChart,
  FolderKanban,
  Layers,
  Table2,
  Scissors,
  AlignLeft,
  Wand2,
  Sliders,
  TrendingUp,
  Users,
  Search,
  FileText,
  Image as ImageIcon,
  Music,
  Code2,
  ArrowUpRight,
  Plus,
  Check,
  type LucideIcon,
} from "lucide-react";

type Category = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  tools: number;
  accentHex: string;
  metrics?: { value: string; label: string; sub?: string }[];
  icons: LucideIcon[];
  featured?: boolean;
};

const CATEGORIES: Category[] = [
  {
    id: "analytics",
    number: "01",
    title: "Analytics & Insights",
    tagline: "Measure what ships",
    description:
      "Track output quality, distribution lift, and creator velocity in one unbiased dashboard. Every metric tied back to a real shipped asset — not vanity dashboards.",
    tools: 4,
    accentHex: "#f59e0b",
    metrics: [
      { value: "98%", label: "Output accuracy" },
      { value: "4.8/5", label: "Creator rating" },
    ],
    icons: [BarChart3, PieChart, LineChart, Database],
    featured: true,
  },
  {
    id: "content-mgmt",
    number: "02",
    title: "Content Management",
    tagline: "Centralize the stack",
    description: "Folders, versions, and approval flows built for AI-assisted productions.",
    tools: 3,
    accentHex: "#7c3aed",
    icons: [FolderKanban, Layers, Table2, Database],
  },
  {
    id: "editing",
    number: "03",
    title: "Editing & Enhancement",
    tagline: "Refine with craft",
    description: "Crop, align, and apply magic-wand fixes without leaving the stack.",
    tools: 4,
    accentHex: "#0d9488",
    icons: [Scissors, AlignLeft, Wand2, Sliders],
  },
  {
    id: "seo",
    number: "04",
    title: "SEO Optimization",
    tagline: "Discover & rank",
    description: "Surface opportunities, audit metadata, and forecast reach gains.",
    tools: 4,
    accentHex: "#c026d3",
    icons: [Search, TrendingUp, Users, PieChart],
  },
  {
    id: "generation",
    number: "05",
    title: "Content Generation",
    tagline: "Draft, design, ship",
    description: "Generate text, images, audio, and code from a single creator-first prompt surface.",
    tools: 4,
    accentHex: "#4f46e5",
    icons: [FileText, ImageIcon, Music, Code2],
  },
];

export function CreativAICategories() {
  const featured = CATEGORIES.find((c) => c.featured)!;
  const rest = CATEGORIES.filter((c) => !c.featured);

  return (
    <section id="tools" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-ink/70 uppercase dark:bg-white/5 dark:border-white/10 dark:text-white/70"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              The Stack Atlas
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 font-display text-4xl sm:text-5xl lg:text-[56px] leading-[1.02] tracking-[-0.02em] text-ink"
            >
              Five capabilities.
              <br />
              <span className="text-gradient-aurora">One verified stack.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="max-w-md text-[15px] leading-relaxed text-ink/65 dark:text-white/65"
          >
            Every layer of your AI workflow, audited against real output — not
            marketing claims. Hover any module to explore the vetted tools inside.
          </motion.p>
        </div>

        {/* Featured + 4 grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          <div className="lg:col-span-5 lg:row-span-2">
            <FeaturedCard category={featured} />
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5 sm:gap-6">
            {rest.map((cat, idx) => (
              <SmallCard key={cat.id} category={cat} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================================================================== */
/* SHARED HOOK — pointer-tracking radial glow inside any card              */
/* ====================================================================== */
function useSpotlight<T extends HTMLElement>(accentHex: string) {
  const ref = useRef<T>(null);
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);

  const handleMove = (e: React.MouseEvent<T>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  };

  const handleLeave = () => {
    mx.set(-9999);
    my.set(-9999);
  };

  // radial gradient string with motion values
  const bg = useMotionTemplate`radial-gradient(380px circle at ${mx}px ${my}px, ${accentHex}14, transparent 70%)`;

  return { ref, bg, handleMove, handleLeave };
}

/* ====================================================================== */
/* SHARED — animated check bar that fills on hover                        */
/* ====================================================================== */
function HoverProgressBar({ accentHex }: { accentHex: string }) {
  return (
    <div className="relative h-[3px] w-full bg-black/5 dark:bg-white/10 overflow-hidden rounded-full mt-3">
      <motion.div
        className="absolute inset-y-0 left-0 rounded-full"
        style={{ background: accentHex }}
        initial={{ width: "8%" }}
        whileHover={{ width: "100%" }}
        // animate when parent group hovered
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

/* ====================================================================== */
/* FEATURED CARD                                                          */
/* ====================================================================== */
function FeaturedCard({ category }: { category: Category }) {
  const { ref, bg, handleMove, handleLeave } = useSpotlight<HTMLDivElement>(
    category.accentHex
  );

  // 3D tilt — subtle
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handleMove(e);
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 6);
    rx.set(-py * 4);
  };

  const onLeave = () => {
    handleLeave();
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          rotateX: rx,
          rotateY: ry,
          transformStyle: "preserve-3d",
          background: bg,
        }}
        className="group relative h-full min-h-[480px] sm:min-h-[540px] flex flex-col overflow-hidden rounded-[28px] bg-white border border-black/5 shadow-[0_2px_0_rgba(0,0,0,0.02),0_24px_60px_-24px_rgba(20,18,26,0.18)] hover:shadow-[0_2px_0_rgba(0,0,0,0.02),0_40px_90px_-30px_rgba(20,18,26,0.28)] transition-shadow duration-500 dark:bg-white/[0.03] dark:border-white/10"
      >
        {/* Animated mesh glow that follows the cursor (additional layer) */}
        <CursorGlow color={category.accentHex} />

        {/* Top — image-like header */}
        <div
          className="relative px-7 pt-7 pb-5 overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${category.accentHex}14 0%, transparent 70%)`,
          }}
        >
          {/* Mega number — outline style (with subtle parallax on hover) */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute -top-6 right-4 font-display font-bold leading-none select-none"
            style={{
              fontSize: "clamp(180px, 22vw, 260px)",
              color: "transparent",
              WebkitTextStroke: `2px ${category.accentHex}30`,
            }}
            initial={{ opacity: 0.4, scale: 1 }}
            whileHover={{ opacity: 0.7, scale: 1.04, x: -6 }}
            transition={{ duration: 0.5 }}
          >
            {category.number}
          </motion.span>

          {/* Top row */}
          <div className="relative flex items-center justify-between">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-[0.15em] uppercase"
              style={{
                color: category.accentHex,
                background: `${category.accentHex}14`,
              }}
            >
              <motion.span
                className="w-1 h-1 rounded-full"
                style={{ background: category.accentHex }}
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              {category.number} — Featured
            </span>
            <span className="text-[11px] font-medium text-ink/40 dark:text-white/40 inline-flex items-center gap-1">
              <span className="hidden sm:inline-flex items-center gap-1">
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: category.accentHex }}
                />
                Live
              </span>
              <span className="mx-1 text-ink/20">·</span>
              {category.tools} vetted tools
            </span>
          </div>

          {/* Tagline */}
          <motion.p
            className="relative mt-6 font-display italic text-[15px] font-medium"
            style={{ color: category.accentHex }}
            initial={false}
          >
            {category.tagline}
          </motion.p>

          {/* Title */}
          <h3 className="relative mt-2 font-display text-[34px] sm:text-[40px] leading-[1.05] tracking-[-0.02em] text-ink dark:text-white">
            {category.title}
          </h3>
        </div>

        {/* Middle */}
        <div className="px-7 py-5 flex-1 relative" style={{ transform: "translateZ(40px)" }}>
          <div className="relative">
            <span
              className="absolute -left-7 top-1 bottom-1 w-[3px] rounded-full"
              style={{ background: category.accentHex }}
              aria-hidden
            />
            <p className="text-[15px] leading-[1.65] text-ink/70 dark:text-white/70">
              {category.description}
            </p>
          </div>

          {/* Inline metric strip */}
          {category.metrics && (
            <div className="mt-6 flex items-center gap-5 text-[12px]">
              {category.metrics.map((m, i) => (
                <div key={m.label} className="relative">
                  <motion.div
                    className="font-display text-2xl font-semibold text-ink dark:text-white"
                    whileHover={{ scale: 1.08, color: category.accentHex }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {m.value}
                  </motion.div>
                  <div className="text-ink/50 dark:text-white/50 mt-0.5">{m.label}</div>
                  {i < category.metrics!.length - 1 && (
                    <div className="hidden sm:block absolute top-1 -right-5 h-9 w-px bg-black/10 dark:bg-white/10" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom — icons row + CTA */}
        <div className="px-7 pb-7 relative" style={{ transform: "translateZ(30px)" }}>
          <div className="flex items-center justify-between gap-4 pt-5 border-t border-black/5 dark:border-white/10">
            <div className="flex items-center gap-2">
              {category.icons.map((Icon, i) => (
                <FeaturedIcon key={i} Icon={Icon} accentHex={category.accentHex} index={i} />
              ))}
            </div>
            <button
              className="group/btn inline-flex items-center gap-1 text-[13px] font-semibold hover:gap-2 transition-all"
              style={{ color: category.accentHex }}
            >
              Explore
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

/* Featured icon — with rotating ring + spring bounce */
function FeaturedIcon({
  Icon,
  accentHex,
  index,
}: {
  Icon: LucideIcon;
  accentHex: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.button
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative grid place-items-center w-9 h-9 rounded-xl border transition-colors"
      style={{
        borderColor: `${accentHex}30`,
        background: `${accentHex}08`,
        color: accentHex,
      }}
      whileHover={{ scale: 1.12, y: -2 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {/* rotating ring on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            animate={{ opacity: 1, scale: 1.4, rotate: 360 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
            className="absolute inset-0 rounded-xl border"
            style={{ borderColor: accentHex, borderStyle: "dashed" }}
          />
        )}
      </AnimatePresence>
      <Icon className="w-4 h-4" strokeWidth={1.75} />
    </motion.button>
  );
}

/* ====================================================================== */
/* SMALL CARD                                                             */
/* ====================================================================== */
function SmallCard({ category, index }: { category: Category; index: number }) {
  const { ref, bg, handleMove, handleLeave } = useSpotlight<HTMLDivElement>(
    category.accentHex
  );
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      style={{ background: bg }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-black/5 shadow-[0_2px_0_rgba(0,0,0,0.02),0_18px_40px_-20px_rgba(20,18,26,0.15)] hover:shadow-[0_2px_0_rgba(0,0,0,0.02),0_28px_60px_-24px_rgba(20,18,26,0.25)] transition-shadow duration-500 dark:bg-white/[0.03] dark:border-white/10"
    >
      {/* Cursor-following glow */}
      <CursorGlow color={category.accentHex} />

      {/* Top color band — animated fill on hover */}
      <div className="relative h-1.5 overflow-hidden" aria-hidden>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(90deg, ${category.accentHex} 0%, ${category.accentHex}60 100%)`,
          }}
        />
        <motion.div
          className="absolute inset-y-0 left-0"
          style={{ background: category.accentHex }}
          initial={{ width: "0%" }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        {/* Top row — number + tools count */}
        <div className="flex items-baseline justify-between gap-3">
          <span
            className="font-display text-[13px] font-bold tracking-[0.15em]"
            style={{ color: category.accentHex }}
          >
            {category.number}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-ink/40 dark:text-white/40 inline-flex items-center gap-1.5">
            <Check
              className="w-3 h-3"
              style={{ color: category.accentHex }}
              strokeWidth={3}
            />
            {category.tools} tools
          </span>
        </div>

        {/* Tagline */}
        <p
          className="mt-4 font-display italic text-[14px] font-medium"
          style={{ color: category.accentHex }}
        >
          {category.tagline}
        </p>

        {/* Title */}
        <h3 className="mt-1 font-display text-[22px] leading-[1.1] tracking-[-0.015em] text-ink dark:text-white">
          {category.title}
        </h3>

        {/* Description — fades slightly + accent bar appears on hover */}
        <div className="relative mt-2.5 flex-1">
          <motion.span
            className="absolute -left-3 top-0 bottom-0 w-[2px] rounded-full origin-top"
            style={{ background: category.accentHex }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: hovered ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
          <p className="text-[13.5px] leading-[1.55] text-ink/65 dark:text-white/65 pl-0">
            {category.description}
          </p>
        </div>

        {/* Animated progress bar */}
        <HoverProgressBar accentHex={category.accentHex} />

        {/* Bottom — icons + arrow */}
        <div className="mt-4 flex items-center justify-between gap-3 pt-4 border-t border-black/5 dark:border-white/10">
          <div className="flex items-center gap-1.5">
            {category.icons.slice(0, 4).map((Icon, i) => (
              <SmallIcon key={i} Icon={Icon} accentHex={category.accentHex} index={i} />
            ))}
            <motion.span
              className="grid place-items-center w-7 h-7 rounded-lg border"
              style={{
                borderColor: `${category.accentHex}25`,
                background: `${category.accentHex}06`,
                color: category.accentHex,
              }}
              initial={{ opacity: 0, x: -4 }}
              animate={{
                opacity: hovered ? 1 : 0,
                x: hovered ? 0 : -4,
              }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              <Plus className="w-3 h-3" strokeWidth={2} />
            </motion.span>
          </div>
          <ArrowUpRight
            className="w-4 h-4 text-ink/40 dark:text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            style={{ color: undefined }}
          />
        </div>
      </div>
    </motion.article>
  );
}

/* Small icon — staggered bounce + fill on hover */
function SmallIcon({
  Icon,
  accentHex,
  index,
}: {
  Icon: LucideIcon;
  accentHex: string;
  index: number;
}) {
  return (
    <motion.span
      className="grid place-items-center w-7 h-7 rounded-lg border cursor-pointer"
      style={{
        borderColor: `${accentHex}25`,
        background: `${accentHex}06`,
        color: accentHex,
      }}
      whileHover={{
        scale: 1.18,
        y: -2,
        backgroundColor: accentHex,
        color: "#ffffff",
        borderColor: accentHex,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 14 }}
    >
      <Icon className="w-3.5 h-3.5" strokeWidth={1.75} />
    </motion.span>
  );
}

/* ====================================================================== */
/* SHARED — cursor-following radial glow                                 */
/* ====================================================================== */
function CursorGlow({ color }: { color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const bg = useMotionTemplate`radial-gradient(220px circle at ${mx}px ${my}px, ${color}18, transparent 65%)`;

  return (
    <motion.div
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: bg }}
      onMouseMove={(e) => {
        const rect = ref.current?.parentElement?.getBoundingClientRect();
        if (!rect) return;
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
    />
  );
}
