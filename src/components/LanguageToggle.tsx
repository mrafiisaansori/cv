"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex h-10 items-center gap-1 rounded-full border border-black/10 bg-white/70 p-1 text-xs font-bold shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.06]">
      <span className="grid h-8 w-8 place-items-center rounded-full text-slate-400 dark:text-slate-300">
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
              ? "bg-brand text-white shadow-brand"
              : "text-slate-500 hover:bg-black/[0.04] dark:text-slate-300 dark:hover:bg-white/10"
          )}
          aria-pressed={language === item}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
