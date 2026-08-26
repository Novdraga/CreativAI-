"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  AnimatePresence,
} from "framer-motion";
import {
  Boxes,
  ArrowUpRight,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";

type Pillar = {
  letter: string;
  title: string;
  body: string;
  accentHex: string;
  weight: string;
  icon: LucideIcon;
};

const PILLARS: Pillar[] = [
  {
    letter: "P",
    title: "Production-Ready",
    body: "Does the output ship to a paying audience without human rework?",
    accentHex: "#f59e0b",
    weight: "25%",
    icon: CheckCircle2,
  },
  {
    letter: "A",
    title: "Authentic Terms",
    body: "Real pricing, real usage limits, real commercial rights — verified from the contract.",
    accentHex: "#7c3aed",
    weight: "25%",
    icon: CheckCircle2,
  },
  {
    letter: "C",
    title: "Cost-per-Video",
    body: "True dollars-per-shipped-asset, including retries, credits, and overage.",
    accentHex: "#0d9488",
    weight: "25%",
    icon: CheckCircle2,
  },
  {
    letter: "E",
    title: "Editorial Quality",
    body: "Style, fidelity, and craft judged by working creators, not bench metrics.",
    accentHex: "#c026d3",
    weight: "25%",
    icon: CheckCircle2,
  },
];

export function CreativAIMethodology() {
  return (
    <section
      id="methodology"
      className="relative py-16 sm:py-20 border-t border-black/5 dark:border-white/5"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-14 items-start">
          {/* Left intro */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-ink/70 uppercase dark:bg-white/5 dark:border-white/10 dark:text-white/70">
              <motion.span
                className="w-1.5 h-1.5 rounded-full bg-teal-500"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              Methodology
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[44px] leading-[1.05] tracking-[-0.02em] text-ink">
              The PACE
              <br />
              <span className="text-gradient-violet">Benchmark.</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/65 dark:text-white/65">
              Four pillars, equally weighted. We score every tool against each
              one — then publish the raw transcripts, prompts, and outputs so
              you can audit our work.
            </p>

            <a
              href="#methodology"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-violet-600 dark:hover:text-violet-400 transition group/link"
            >
              Read the methodology
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>

            {/* Equally weighted visual */}
            <div className="mt-8 hidden lg:flex items-center gap-1 h-2 rounded-full overflow-hidden">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.letter}
                  initial={{ width: 0 }}
                  whileInView={{ width: "25%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full"
                  style={{ background: p.accentHex }}
                />
              ))}
            </div>
            <p className="mt-2 hidden lg:block text-[11px] text-ink/50 dark:text-white/50">
              Each pillar carries 25% of the final score.
            </p>
          </motion.div>

          {/* Right: pillars grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 sm:gap-5">
            {PILLARS.map((p, i) => (
              <PillarCard key={p.letter} pillar={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================================================================== */
/* PILLAR CARD                                                            */
/* ====================================================================== */
function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const bg = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, ${pillar.accentHex}12, transparent 65%)`;
  const [hovered, setHovered] = useState(false);

  // subtle 3D tilt
  const rx = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });
  const ry = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 5);
    rx.set(-py * 4);
  };

  const onLeave = () => {
    mx.set(-9999);
    my.set(-9999);
    rx.set(0);
    ry.set(0);
    setHovered(false);
  };

  const Icon = pillar.icon;

  return (
    <motion.div
      style={{ perspective: 1000 }}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{
          rotateX: rx,
          rotateY: ry,
          transformStyle: "preserve-3d",
          background: bg,
        }}
        className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 dark:bg-white/[0.03] dark:border-white/10 hover:border-black/10 dark:hover:border-white/20 transition-colors duration-300 cursor-pointer"
      >
        {/* Glow blob */}
        <motion.div
          className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl pointer-events-none"
          style={{ background: pillar.accentHex }}
          animate={{ opacity: hovered ? 0.35 : 0.12, scale: hovered ? 1.15 : 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Top corner weight badge */}
        <motion.span
          className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-[0.1em] uppercase"
          style={{
            color: pillar.accentHex,
            background: `${pillar.accentHex}14`,
          }}
          initial={false}
          animate={{
            scale: hovered ? 1.05 : 1,
            backgroundColor: hovered ? `${pillar.accentHex}20` : `${pillar.accentHex}14`,
          }}
          transition={{ duration: 0.3 }}
        >
          {pillar.weight}
        </motion.span>

        <div className="relative flex items-start gap-4" style={{ transform: "translateZ(30px)" }}>
          {/* Letter badge — with rotating ring on hover */}
          <div className="relative shrink-0">
            <motion.span
              className="grid place-items-center w-12 h-12 rounded-2xl text-white font-display text-2xl font-bold shadow-md"
              style={{ background: pillar.accentHex }}
              animate={{
                y: hovered ? -2 : 0,
                rotate: hovered ? -6 : 0,
                scale: hovered ? 1.08 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              {pillar.letter}
            </motion.span>

            {/* Rotating dashed ring */}
            <AnimatePresence>
              {hovered && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
                  animate={{ opacity: 1, scale: 1.3, rotate: 360 }}
                  exit={{ opacity: 0, scale: 0.6 }}
                  transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl border-2 border-dashed"
                  style={{ borderColor: pillar.accentHex }}
                />
              )}
            </AnimatePresence>

            {/* Small ping */}
            <AnimatePresence>
              {hovered && (
                <motion.span
                  initial={{ scale: 1, opacity: 0.6 }}
                  animate={{ scale: 1.6, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                  className="absolute inset-0 rounded-2xl"
                  style={{ background: pillar.accentHex, opacity: 0.3 }}
                />
              )}
            </AnimatePresence>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl text-ink dark:text-white">{pillar.title}</h3>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/65 dark:text-white/65">
              {pillar.body}
            </p>

            {/* Verified line — slides in on hover */}
            <motion.div
              className="mt-3 flex items-center gap-1.5 text-[11px] font-medium"
              style={{ color: pillar.accentHex }}
              initial={false}
              animate={{
                opacity: hovered ? 1 : 0,
                y: hovered ? 0 : 6,
              }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-3.5 h-3.5" strokeWidth={2.4} />
              Independently verified
            </motion.div>
          </div>
        </div>

        {/* Animated bottom progress bar */}
        <motion.div
          className="absolute left-0 bottom-0 h-[3px]"
          style={{ background: pillar.accentHex }}
          initial={{ width: "0%" }}
          animate={{ width: hovered ? "100%" : "0%" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ====================================================================== */
/* FOOTER                                                                 */
/* ====================================================================== */
export function CreativAIFooter() {
  return (
    <footer className="relative mt-auto border-t border-black/5 dark:border-white/5 bg-paper-warm/60 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/logo-only.png"
              alt="CreativAI"
              className="w-9 h-9 object-contain shrink-0 drop-shadow-[0_2px_10px_rgba(124,58,237,0.28)] rounded-[8px]"
            />
            <div>
              <div className="flex items-baseline gap-0.5">
                <span className="font-display text-[22px] font-semibold tracking-tight text-ink">C</span>
                <span className="font-sans text-[15px] font-semibold tracking-tight text-ink/90">reativAI</span>
              </div>
              <p className="text-[12px] text-ink/55 dark:text-white/55 -mt-0.5">
                AI Decision Engine for Creators
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] font-medium text-ink/60 dark:text-white/60">
            {["Tools", "Workflows", "Compare", "Benchmarks", "Methodology"].map(
              (l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  className="hover:text-ink dark:hover:text-white transition"
                >
                  {l}
                </a>
              )
            )}
          </nav>

          <p className="text-[12px] text-ink/45 dark:text-white/45">
            © {new Date().getFullYear()} CreativAI · PACE Benchmark Standard
          </p>
        </div>
      </div>
    </footer>
  );
}
