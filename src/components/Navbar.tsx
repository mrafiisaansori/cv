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
          "mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-300",
          scrolled
            ? "border-black/[0.06] bg-white/75 shadow-soft backdrop-blur-xl dark:border-white/[0.08] dark:bg-[#0b0b16]/80"
            : "border-transparent bg-transparent"
        )}
      >
        <Link href="#home" className="flex items-center gap-2.5 pl-1" onClick={handleNav}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand via-violet to-sky text-[13px] font-black text-white shadow-brand">
            RI
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-lg px-3 py-2 text-[13px] font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white",
                active === item.href && "text-slate-900 dark:text-white"
              )}
            >
              {active === item.href && (
                <motion.span
                  layoutId="active-nav"
                  className="absolute inset-0 -z-10 rounded-lg bg-brand/10 dark:bg-brand/20"
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
            className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/70 text-slate-800 backdrop-blur-xl lg:hidden dark:border-white/10 dark:bg-white/[0.06] dark:text-white"
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
            className="mx-auto mt-3 max-w-6xl overflow-hidden rounded-3xl border border-black/[0.06] bg-white/92 p-3 shadow-soft backdrop-blur-xl lg:hidden dark:border-white/[0.08] dark:bg-[#0b0b16]/95"
          >
            <div className="mb-2 sm:hidden">
              <LanguageToggle />
            </div>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNav}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-brand/[0.06] hover:text-brand dark:text-slate-100 dark:hover:bg-white/[0.06] dark:hover:text-white"
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
