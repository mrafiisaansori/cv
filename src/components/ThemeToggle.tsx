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
    document.documentElement.style.colorScheme = nextTheme ? "dark" : "light";
  };

  if (!mounted) {
    return <span className="h-10 w-10 rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5" />;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className="group relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-black/10 bg-white/70 text-slate-700 shadow-sm backdrop-blur-xl transition hover:border-brand/40 hover:text-brand dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:text-brandLight"
    >
      <span className="absolute inset-0 -z-10 bg-brand/0 transition group-hover:bg-brand/5" />
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
