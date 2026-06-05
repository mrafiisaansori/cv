"use client";

import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { useLanguage } from "./LanguageProvider";
import ScrollReveal from "./ScrollReveal";

export default function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="rounded-[1.75rem] border border-slate-200/80 bg-white/72 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.10)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.06] sm:p-9">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-electric dark:text-cyanGlow">{t.sections.educationEyebrow}</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-5xl">{education.institution}</h2>
              <p className="mt-4 text-lg font-semibold text-slate-700 dark:text-slate-200">{education.degree}</p>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{education.period}</p>
            </div>
            <div className="grid h-28 w-28 flex-none place-items-center rounded-[1.75rem] border border-cyanGlow/20 bg-slate-950 text-cyanGlow dark:bg-white/10 sm:h-36 sm:w-36">
              <GraduationCap size={56} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
