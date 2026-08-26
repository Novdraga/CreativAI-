"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Sparkles, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeState } from "@/lib/theme";

const NAV_LINKS = [
  { label: "Tools", href: "/tools" },
  { label: "Workflows", href: "/workflows" },
  { label: "Compare", href: "/compare" },
  { label: "Alternatives", href: "/alternatives" },
  { label: "Stack Builder", href: "/stack" },
  { label: "Benchmarks", href: "/benchmarks" },
  { label: "Methodology", href: "/about" },
];

export function CreativAINavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggle } = useThemeState();
  const dark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 px-3 sm:px-5 pt-3"
    >
      <nav
        className={cn(
          "mx-auto max-w-[1320px] flex items-center gap-3 sm:gap-5 rounded-2xl px-3 sm:px-5 transition-all duration-500",
          "h-14 sm:h-16 border",
          scrolled
            ? "glass-card border-black/5"
            : "bg-transparent border-transparent"
        )}
      >
        {/* Logo - transparent professional - ثابت احترافي بدون حركة */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <img
            src="/logo-only.png"
            alt="CreativAI Logo"
            className="w-12 h-12 object-contain shrink-0 drop-shadow-[0_4px_12px_rgba(124,58,237,0.25)] group-hover:drop-shadow-[0_6px_16px_rgba(124,58,237,0.35)] transition-all duration-300"
          />
          <img
            src="/name-only.png"
            alt="CreativAI"
            className="h-5 w-auto object-contain drop-shadow-sm translate-y-[3px]"
          />
        </Link>

        {/* Badge */}
        <span className="hidden lg:inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 px-3 py-1 text-[11px] font-medium text-violet-700 dark:text-violet-300">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse-glow" />
          AI Decision Engine for Creators
        </span>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-1 mx-auto">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative px-3 py-2 text-[13.5px] font-medium transition-colors rounded-lg hover:bg-black/5 dark:hover:bg-white/5",
                    isActive
                      ? "text-ink dark:text-white"
                      : "text-ink/70 dark:text-white/70 hover:text-ink dark:hover:text-white"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-2 ml-auto md:ml-0">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid place-items-center w-9 h-9 rounded-xl border border-black/10 bg-white/60 hover:bg-white text-ink/70 hover:text-ink transition dark:bg-white/5 dark:border-white/10 dark:text-white/70 dark:hover:text-white"
          >
            <AnimatePresence mode="wait" initial={false}>
              {dark ? (
                <motion.span
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Moon className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <Sun className="w-4 h-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <Link
            href="/stack"
            className="btn-shine hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-ink px-4 py-2 text-[13.5px] font-semibold text-paper hover:bg-ink-soft transition shadow-md shadow-black/10"
          >
            <Sparkles className="w-3.5 h-3.5" strokeWidth={2.4} />
            Find My Stack
          </Link>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
            className="md:hidden grid place-items-center w-9 h-9 rounded-xl border border-black/10 bg-white/60 text-ink/80"
          >
            {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mx-auto max-w-[1320px] mt-2 glass-card rounded-2xl p-3 overflow-hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block px-3 py-2.5 rounded-lg text-sm font-medium transition",
                      pathname === link.href
                        ? "bg-black/5 dark:bg-white/5 text-ink dark:text-white"
                        : "text-ink/80 hover:bg-black/5 dark:hover:bg-white/5 dark:text-white/80"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/stack"
              onClick={() => setMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-paper"
            >
              <Sparkles className="w-4 h-4" />
              Find My Stack
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
