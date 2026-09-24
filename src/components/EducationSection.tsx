"use client";

import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { useLanguage } from "./LanguageProvider";
import ScrollReveal from "./ScrollReveal";

export default function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="px-4 py-5 sm:py-7">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="rounded-[2rem] border border-black/[0.06] bg-white p-6 dark:border-white/[0.08] dark:bg-white/[0.03] sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand dark:text-brandLight">
                {t.sections.educationEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-[2.5rem]">
                {education.institution}
              </h2>
              <p className="mt-4 text-lg font-semibold text-slate-700 dark:text-slate-200">{education.degree}</p>
              <p className="mt-2 text-slate-500 dark:text-slate-400">{education.period}</p>
            </div>
            <div className="grid h-24 w-24 flex-none place-items-center rounded-2xl bg-brand/10 text-brand dark:bg-brand/15 dark:text-brandLight sm:h-28 sm:w-28">
              <GraduationCap size={44} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
