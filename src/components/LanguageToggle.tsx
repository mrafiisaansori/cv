"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex h-10 items-center gap-1 rounded-full border border-slate-300/70 bg-white/70 p-1 text-xs font-black shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.08]">
      <span className="grid h-8 w-8 place-items-center rounded-full text-slate-500 dark:text-slate-300">
        <Languages size={15} />
      </span>
      {(["id", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLanguage(item)}
          className={cn(
            "h-8 rounded-full px-3 uppercase transition",
            language === item
              ? "bg-slate-950 text-white dark:bg-cyan-300 dark:text-slate-950"
              : "text-slate-600 hover:bg-slate-950/5 dark:text-slate-300 dark:hover:bg-white/10"
          )}
          aria-pressed={language === item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
