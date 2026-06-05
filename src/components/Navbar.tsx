"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";

const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "experience", href: "#experience" },
  { key: "skills", href: "#skills" },
  { key: "portfolio", href: "#portfolio" },
  { key: "certification", href: "#certification" },
  { key: "contact", href: "#contact" }
] as const;

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      const current = navItems
        .map((item) => ({ item, element: document.querySelector(item.href) as HTMLElement | null }))
        .filter(({ element }) => element)
        .findLast(({ element }) => element!.offsetTop - 140 <= window.scrollY);

      if (current) setActive(current.item.href);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-200",
          scrolled
            ? "border-slate-200/80 bg-white/78 shadow-[0_12px_40px_rgba(15,23,42,0.10)] backdrop-blur-md dark:border-white/10 dark:bg-[#050B18]/78"
            : "border-transparent bg-transparent"
        )}
      >
        <Link href="#home" className="flex items-center gap-3" onClick={handleNav}>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-cyanGlow via-electric to-accentGreen text-sm font-black text-slate-950 shadow-[0_8px_24px_rgba(45,156,255,0.22)]">
            RI
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white",
                active === item.href && "text-slate-950 dark:text-white"
              )}
            >
              {active === item.href && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 -z-10 rounded-full bg-electric/10 dark:bg-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {t.nav[item.key]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <LanguageToggle />
          </div>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((value) => !value)}
            className="grid h-10 w-10 place-items-center rounded-full border border-slate-400/20 bg-white/70 text-slate-800 backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-3 shadow-[0_18px_60px_rgba(15,23,42,0.14)] backdrop-blur-md lg:hidden dark:border-white/10 dark:bg-[#050B18]/92"
          >
            <div className="mb-2 sm:hidden">
              <LanguageToggle />
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNav}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-950/5 dark:text-slate-100 dark:hover:bg-white/10"
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
