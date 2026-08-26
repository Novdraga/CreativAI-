"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseRadius: number;
  hue: number;
};

type Props = {
  /** density of particles */
  density?: number;
  /** interaction radius around mouse */
  mouseRadius?: number;
  /** connect particles within this distance */
  linkDistance?: number;
  /** light mode / dark mode */
  dark?: boolean;
};

/**
 * Saffron/fplus-inspired interactive particle network.
 * - Particles drift slowly across the canvas.
 * - Lines connect nearby particles (plexus effect).
 * - Mouse acts as a soft attractor — particles within `mouseRadius` glow and shift toward it.
 */
export function InteractiveBackground({
  density = 80,
  mouseRadius = 180,
  linkDistance = 140,
  dark = false,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cvs: HTMLCanvasElement = canvas;
    const context: CanvasRenderingContext2D = ctx;

    let raf = 0;
    let particles: Particle[] = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Brand palette (cycle through these hues for variety)
    const palette = [
      "#f59e0b", // amber
      "#7c3aed", // violet
      "#0d9488", // teal
      "#c026d3", // fuchsia
      "#4f46e5", // indigo
    ];

    function resize() {
      const rect = cvs.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      cvs.width = rect.width * dpr;
      cvs.height = rect.height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    }

    function initParticles() {
      const rect = cvs.getBoundingClientRect();
      const count = Math.min(
        density,
        Math.floor((rect.width * rect.height) / 14000)
      );
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          baseRadius: Math.random() * 1.5 + 0.6,
          hue: Math.floor(Math.random() * palette.length),
        });
      }
    }

    function hexToRgba(hex: string, alpha: number) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    function step() {
      const rect = cvs.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      context.clearRect(0, 0, w, h);

      // Soft background tint (very subtle)
      // (we don't paint solid bg here — let CSS handle it)

      // Mouse coords (in CSS pixels)
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mActive = mouseRef.current.active;

      // Update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Soft attraction toward mouse when active & inside radius
        if (mActive) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const force = (1 - dist / mouseRadius) * 0.04;
            p.vx += (dx / Math.max(dist, 1)) * force;
            p.vy += (dy / Math.max(dist, 1)) * force;
          }
        }

        // Friction
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Add tiny random drift
        p.vx += (Math.random() - 0.5) * 0.005;
        p.vy += (Math.random() - 0.5) * 0.005;

        // Clamp velocity
        const maxV = 0.8;
        const sp = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (sp > maxV) {
          p.vx = (p.vx / sp) * maxV;
          p.vy = (p.vy / sp) * maxV;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }

      // Draw links between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < linkDistance) {
            const alpha = (1 - dist / linkDistance) * (dark ? 0.35 : 0.25);
            const colorA = palette[a.hue];
            // Use a blend toward colorA for the line
            context.strokeStyle = hexToRgba(colorA, alpha);
            context.lineWidth = 0.6;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const color = palette[p.hue];

        // Distance to mouse
        let glow = 1;
        if (mActive) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            glow = 1 + (1 - dist / mouseRadius) * 2.2;
          }
        }

        // Outer halo for glowing particles
        if (glow > 1.2) {
          const grad = context.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.baseRadius * 6);
          grad.addColorStop(0, hexToRgba(color, 0.45 * Math.min(1, (glow - 1) / 2)));
          grad.addColorStop(1, hexToRgba(color, 0));
          context.fillStyle = grad;
          context.beginPath();
          context.arc(p.x, p.y, p.baseRadius * 6, 0, Math.PI * 2);
          context.fill();
        }

        // Core dot
        context.fillStyle = hexToRgba(color, dark ? 0.85 : 0.7);
        context.beginPath();
        context.arc(p.x, p.y, p.baseRadius * glow, 0, Math.PI * 2);
        context.fill();
      }

      // Draw mouse "aura" — a soft ring
      if (mActive) {
        const ringGrad = context.createRadialGradient(mx, my, 0, mx, my, mouseRadius);
        const accent = palette[0];
        ringGrad.addColorStop(0, hexToRgba(accent, 0.06));
        ringGrad.addColorStop(0.6, hexToRgba(accent, 0.02));
        ringGrad.addColorStop(1, hexToRgba(accent, 0));
        context.fillStyle = ringGrad;
        context.beginPath();
        context.arc(mx, my, mouseRadius, 0, Math.PI * 2);
        context.fill();
      }

      raf = requestAnimationFrame(step);
    }

    function onMouseMove(e: MouseEvent) {
      const rect = cvs.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    }

    function onMouseLeave() {
      mouseRef.current.active = false;
    }

    function onTouchMove(e: TouchEvent) {
      const rect = cvs.getBoundingClientRect();
      const t = e.touches[0];
      if (!t) return;
      mouseRef.current.x = t.clientX - rect.left;
      mouseRef.current.y = t.clientY - rect.top;
      mouseRef.current.active = true;
    }

    function onTouchEnd() {
      mouseRef.current.active = false;
    }

    resize();
    step();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [density, mouseRadius, linkDistance, dark]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
