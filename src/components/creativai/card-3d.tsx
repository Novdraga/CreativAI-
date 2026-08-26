"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

/* ====================================================================== */
/*  Card3D — interactive card with:                                         */
/*  - 3D tilt that follows the cursor (resets on leave via spring)        */
/*  - radial spotlight that tracks the cursor (hidden off-screen on leave) */
/*  - CSS group-hover for glow blob + top band (no JS state = no stuck)   */
/*                                                                        */
/*  All hover effects use either CSS :hover or motion values that         */
/*  automatically reset — no React state, no stuck states.                */
/* ====================================================================== */

type Card3DProps = {
  children: ReactNode;
  className?: string;
  /** accent color (hex) — drives spotlight, glow, ring */
  accentHex?: string;
  /** initial animation delay (for staggered grids) */
  delay?: number;
  /** disable hover lift (defaults to true) */
  lift?: boolean;
  /** inline style overrides */
  style?: React.CSSProperties;
};

export function Card3D({
  children,
  className = "",
  accentHex = "#7c3aed",
  delay = 0,
  lift = true,
  style,
}: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  // spotlight position (motion values — no React state)
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, ${accentHex}1f, transparent 65%)`;

  // 3D tilt (springs — animate back to 0 on leave)
  const rx = useSpring(0, { stiffness: 150, damping: 18 });
  const ry = useSpring(0, { stiffness: 150, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    ry.set(px * 6);
    rx.set(-py * 5);
  };

  const onLeave = () => {
    // Move spotlight off-screen + reset tilt to 0
    mx.set(-9999);
    my.set(-9999);
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 1200 }}
      className={className}
    >
      <motion.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          rotateX: rx,
          rotateY: ry,
          transformStyle: "preserve-3d",
          background: spotlight,
          ...style,
        }}
        className={`group relative overflow-hidden rounded-3xl bg-white border border-black/5 shadow-[0_18px_40px_-20px_rgba(20,18,26,0.15)] transition-[box-shadow,transform] duration-500 hover:shadow-[0_28px_60px_-24px_rgba(20,18,26,0.25)] dark:bg-white/[0.03] dark:border-white/10 ${lift ? "hover:-translate-y-1" : ""}`}
      >
        {/* corner glow blob — CSS group-hover (no JS state) */}
        <div
          aria-hidden
          className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-15 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
          style={{ background: accentHex }}
        />

        {/* top color band — CSS scaleX on group-hover (no JS state) */}
        <div className="relative h-1 overflow-hidden" aria-hidden>
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: `linear-gradient(90deg, ${accentHex} 0%, ${accentHex}60 100%)`,
            }}
          />
          <div
            className="absolute inset-y-0 left-0 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
            style={{ background: accentHex, width: "100%" }}
          />
        </div>

        {/* content (preserves 3D depth) */}
        <div style={{ transform: "translateZ(30px)", position: "relative" }}>
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
}
