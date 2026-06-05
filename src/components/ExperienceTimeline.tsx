"use client";

import { BriefcaseBusiness, CalendarDays, MapPin, Building2, ChevronRight } from "lucide-react";
import { experiences } from "@/data/experience";
import { useLanguage } from "./LanguageProvider";
import ScrollReveal from "./ScrollReveal";

export default function ExperienceTimeline() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-electric dark:text-cyanGlow">
            {t.sections.experienceEyebrow}
          </p>
          <div className="mt-3 grid gap-4 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl">
              {t.sections.experienceTitle}
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
              {t.sections.experienceSummary}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-14">
          <div className="absolute bottom-4 left-[14px] top-3 w-px bg-gradient-to-b from-cyanGlow/70 via-electric/40 to-transparent md:left-[18px]" />

          <div className="space-y-7">
            {experiences.map((experience, index) => (
              <ScrollReveal key={`${experience.role}-${experience.company}`} animation="fadeUp" delay={index * 0.06}>
                <div className="relative pl-10 md:pl-14">
                  <span className="absolute left-0 top-6 grid h-7 w-7 place-items-center rounded-full border border-cyanGlow/40 bg-[#07101F] md:left-1 md:h-9 md:w-9">
                    {index === 0 ? (
                      <span className="relative h-2.5 w-2.5 rounded-full bg-accentGreen" />
                    ) : (
                      <span className="relative h-2 w-2 rounded-full bg-cyanGlow/80" />
                    )}
                  </span>

                  <article className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-colors duration-200 md:hover:border-cyan-300/60 dark:border-white/10 dark:bg-white/[0.04]">
                    <div className="flex flex-col gap-4 border-b border-slate-200/70 p-5 dark:border-white/10 sm:flex-row sm:items-start sm:justify-between sm:p-6">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-electric/12 px-3 py-1 text-xs font-bold text-electric dark:text-cyanGlow">
                            {experience.role}
                          </span>
                          {experience.type && (
                            <span className="rounded-full bg-accentGreen/12 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-accentGreen">
                              {experience.type}
                            </span>
                          )}
                          {experience.workMode && (
                            <span className="rounded-full border border-slate-300/60 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:text-slate-300">
                              {experience.workMode}
                            </span>
                          )}
                        </div>
                        <h3 className="mt-3 flex items-center gap-2 text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                          <Building2 size={18} className="flex-none text-electric dark:text-cyanGlow" />
                          {experience.company}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-600 dark:text-slate-300">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300/60 bg-white/55 px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.04]">
                            <CalendarDays size={13} /> {experience.period}
                          </span>
                          {experience.duration && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300/60 bg-white/55 px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.04]">
                              <BriefcaseBusiness size={13} /> {experience.duration}
                            </span>
                          )}
                          {experience.location && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-300/60 bg-white/55 px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.04]">
                              <MapPin size={13} /> {experience.location[language]}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="hidden shrink-0 text-3xl font-black text-slate-200 dark:text-white/10 sm:block">
                        0{index + 1}
                      </span>
                    </div>

                    <ul className="grid gap-2.5 p-5 sm:p-6">
                      {experience.responsibilities[language].map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300"
                        >
                          <ChevronRight size={16} className="mt-0.5 flex-none text-cyanGlow" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
