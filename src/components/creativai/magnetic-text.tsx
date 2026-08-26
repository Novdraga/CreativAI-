"use client";

import { useRef, useMemo, useState, useEffect, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

/* ====================================================================== */
/*  MagneticText — splits text into letters; each letter reacts to mouse  */
/*  with magnetic pull + glow + scale (per-letter)                        */
/* ====================================================================== */

type MagneticTextProps = {
  text: string;
  className?: string;
  /** pull strength toward cursor (px) */
  pull?: number;
  /** radius of influence (px) */
  radius?: number;
  /** highlight color when cursor is near */
  color?: string;
  /** extra per-letter className */
  letterClassName?: string;
  /** make letters bold/heavy when active */
  boost?: boolean;
  /** font-weight when hovered */
  hoverWeight?: number;
  /** if true, the parent has a gradient class — letters should be transparent
   *  to inherit the gradient via background-clip: text */
  gradient?: boolean;
};

type LetterInfo = {
  char: string;
  /** letter center relative to wrapper */
  cx: number;
  cy: number;
};

export function MagneticText({
  text,
  className = "",
  pull = 16,
  radius = 90,
  color = "#f59e0b",
  letterClassName = "",
  boost = true,
  hoverWeight = 800,
  gradient = false,
}: MagneticTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const [lettersInfo, setLettersInfo] = useState<LetterInfo[]>([]);
  // raw mouse position relative to wrapper
  const mouse = useRef({ x: -9999, y: -9999, active: false });
  // force re-render at 60fps while active
  const [, setTick] = useState(0);

  const letters = useMemo(() => Array.from(text), [text]);

  // Measure letter positions
  const measure = () => {
    if (!containerRef.current) return;
    const parentRect = containerRef.current.getBoundingClientRect();
    const spans = containerRef.current.querySelectorAll<HTMLElement>("[data-letter]");
    const info: LetterInfo[] = Array.from(spans).map((el) => {
      const r = el.getBoundingClientRect();
      return {
        char: el.textContent ?? "",
        cx: r.left + r.width / 2 - parentRect.left,
        cy: r.top + r.height / 2 - parentRect.top,
      };
    });
    setLettersInfo(info);
  };

  useEffect(() => {
    measure();
    const onLoad = () => measure();
    window.addEventListener("load", onLoad);
    window.addEventListener("resize", onLoad);
    const id = setTimeout(measure, 50);
    const id2 = setTimeout(measure, 400); // re-measure after fonts settle
    return () => {
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onLoad);
      clearTimeout(id);
      clearTimeout(id2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  // Animation loop — only runs when mouse is active
  useEffect(() => {
    let raf = 0;
    let lastTime = 0;
    const loop = (t: number) => {
      // throttle to ~30fps for state updates (less re-renders)
      if (t - lastTime >= 33) {
        lastTime = t;
        setTick((v) => (v + 1) % 1000000);
      }
      raf = requestAnimationFrame(loop);
    };
    if (mouse.current.active) {
      raf = requestAnimationFrame(loop);
    }
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMove = (e: React.MouseEvent<HTMLSpanElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouse.current.x = e.clientX - rect.left;
    mouse.current.y = e.clientY - rect.top;
    if (!mouse.current.active) {
      mouse.current.active = true;
      // start loop
      const tickLoop = () => {
        if (mouse.current.active) {
          setTick((v) => (v + 1) % 1000000);
          requestAnimationFrame(tickLoop);
        }
      };
      requestAnimationFrame(tickLoop);
    }
  };

  const handleLeave = () => {
    mouse.current.active = false;
    mouse.current.x = -9999;
    mouse.current.y = -9999;
    // final tick to settle back to 0
    setTimeout(() => setTick((v) => (v + 1) % 1000000), 16);
    setTimeout(() => setTick((v) => (v + 1) % 1000000), 200);
  };

  return (
    <span
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative inline-block ${className}`}
    >
      {letters.map((letter, i) => {
        const info = lettersInfo[i] ?? { char: letter, cx: 0, cy: 0 };
        const dx = mouse.current.x - info.cx;
        const dy = mouse.current.y - info.cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const inRange = mouse.current.active && dist < radius;
        const s = inRange ? 1 - dist / radius : 0;
        const isSpace = letter === " ";

        // Direction vector (normalized)
        let mvX = 0;
        let mvY = 0;
        if (inRange && dist > 0.001) {
          mvX = (dx / dist) * pull * s;
          mvY = (dy / dist) * pull * s;
        }

        const scale = 1 + s * 0.3;
        const weight = 400 + s * (hoverWeight - 400);
        const shadowOpacity = s;
        const shadowBlur = s * 28;

        return (
          <motion.span
            key={`${i}-${letter}`}
            data-letter={i}
            className={`relative inline-block ${isSpace ? "w-[0.3em]" : ""} ${letterClassName}`}
            animate={{
              x: mvX,
              y: mvY,
              scale,
              fontWeight: boost ? weight : undefined,
              textShadow:
                s > 0.05
                  ? `0 0 ${shadowBlur}px ${color}, 0 0 ${shadowBlur / 2}px ${color}AA, 0 0 4px ${color}`
                  : "none",
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 18,
              mass: 0.5,
            }}
            style={{
              display: "inline-block",
              willChange: "transform, text-shadow",
              // Only inherit gradient when parent has a gradient class
              ...(gradient
                ? {
                    background: "inherit",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }
                : {}),
            }}
          >
            {letter}
            {/* Halo glow behind the letter */}
            {!isSpace && (
              <span
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  opacity: s * 0.7,
                  mixBlendMode: "screen",
                  background: `radial-gradient(circle, ${color}88 0%, transparent 65%)`,
                  filter: "blur(8px)",
                  transform: `scale(${1 + s * 0.6})`,
                  transition: "opacity 0.15s, transform 0.15s",
                }}
              />
            )}
          </motion.span>
        );
      })}
    </span>
  );
}
