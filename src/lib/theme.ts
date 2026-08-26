"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useCallback } from "react";

export const STORAGE_KEY = "creativai-theme";

/**
 * Global theme manager backed by next-themes React Context.
 * Persists theme choice in localStorage across all page navigations and reloads.
 */
export function useThemeState() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted
    ? (resolvedTheme || theme) === "dark"
    : typeof document !== "undefined"
    ? document.documentElement.classList.contains("dark")
    : false;

  const currentTheme: "dark" | "light" = isDark ? "dark" : "light";

  const toggle = useCallback(() => {
    const active = resolvedTheme || theme;
    const next = active === "dark" ? "light" : "dark";
    setTheme(next);
  }, [theme, resolvedTheme, setTheme]);

  return {
    theme: currentTheme,
    toggle,
    isDark,
    mounted,
  };
}

/**
 * Inline script to inject into <head> — prevents FOUC by setting the theme
 * class BEFORE React hydrates.
 */
export function themeNoFlashScript() {
  return `(function(){try{var t=localStorage.getItem('creativai-theme')||localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}else if(t==='light'){document.documentElement.classList.remove('dark');}}catch(e){}})();`;
}

