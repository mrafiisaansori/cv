"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = stored ? stored === "dark" : prefersDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    setMounted(true);
  }, []);

  const toggle = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
    document.documentElement.classList.toggle("dark", nextTheme);
  };

  if (!mounted) {
    return <span className="h-10 w-10 rounded-full border border-white/10 bg-white/5" />;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="grid h-10 w-10 place-items-center rounded-full border border-slate-400/20 bg-white/70 text-slate-800 shadow-sm backdrop-blur-xl transition hover:border-cyanGlow/50 hover:text-electric dark:border-white/10 dark:bg-white/10 dark:text-white"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
