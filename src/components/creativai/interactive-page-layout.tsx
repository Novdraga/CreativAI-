"use client";

import { type ReactNode } from "react";
import { InteractiveBackground } from "./interactive-background";
import { useThemeState } from "@/lib/theme";

/**
 * Wraps a page body with the same interactive particle background
 * used on the home page hero. Renders children on top, z-indexed.
 */
export function InteractivePageLayout({
  children,
  density = 70,
  className = "",
}: {
  children: ReactNode;
  density?: number;
  className?: string;
}) {
  const { theme } = useThemeState();
  const dark = theme === "dark";

  return (
    <div className={`relative ${className}`}>
      {/* Layer 1: interactive particle canvas */}
      <div className="absolute inset-0 pointer-events-none">
        <InteractiveBackground
          dark={dark}
          density={density}
          mouseRadius={200}
          linkDistance={140}
        />
      </div>

      {/* Layer 2: subtle radial tint to match hero */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: dark
            ? "radial-gradient(ellipse 60% 60% at 50% 30%, rgba(124,58,237,0.10) 0%, transparent 60%)"
            : "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(245,158,11,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
