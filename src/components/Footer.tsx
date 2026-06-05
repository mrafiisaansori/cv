"use client";

import { profile } from "@/data/profile";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-200/80 px-4 py-10 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-bold text-slate-950 dark:text-white">
          {profile.name} {t.footer.copyright}
        </p>
        <p>{profile.role}</p>
      </div>
    </footer>
  );
}
