"use client";

import { BriefcaseBusiness, CalendarDays, MapPin, Building2, ChevronRight } from "lucide-react";
import { experiences } from "@/data/experience";
import { useLanguage } from "./LanguageProvider";
import ScrollReveal from "./ScrollReveal";

export default function ExperienceTimeline() {
  const { language, t } = useLanguage();

  return (
    <section id="experience" className="px-4 py-9 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand dark:text-brandLight">
            {t.sections.experienceEyebrow}
          </p>
          <div className="mt-3 grid gap-4 lg:grid-cols-[0.85fr_1fr] lg:items-end">
            <h2 className="text-3xl font-bold leading-[1.15] tracking-tight text-slate-950 dark:text-white sm:text-[2.5rem]">
              {t.sections.experienceTitle}
            </h2>
            <p className="max-w-2xl text-[15px] leading-7 text-slate-500 dark:text-slate-400">
              {t.sections.experienceSummary}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-14">
          <div className="absolute bottom-4 left-[15px] top-3 w-px bg-gradient-to-b from-brand via-violet/50 to-transparent md:left-[19px]" />

          <div className="space-y-6">
            {experiences.map((experience, index) => (
              <ScrollReveal key={`${experience.role}-${experience.company}`} animation="fadeUp" delay={index * 0.06}>
                <div className="relative pl-10 md:pl-14">
                  <span className="absolute left-0 top-6 grid h-8 w-8 place-items-center rounded-full border border-brand/30 bg-white shadow-sm dark:bg-[#0d0d18] md:left-1 md:h-9 md:w-9">
                    {index === 0 ? (
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                        <span className="relative h-2.5 w-2.5 rounded-full bg-brand" />
                      </span>
                    ) : (
                      <span className="h-2 w-2 rounded-full bg-violet/70" />
                    )}
                  </span>

                  <article className="group overflow-hidden rounded-3xl border border-black/[0.06] bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-brand/30 hover:shadow-soft dark:border-white/[0.08] dark:bg-white/[0.04]">
                    <div className="flex flex-col gap-4 border-b border-black/[0.05] p-5 dark:border-white/[0.06] sm:flex-row sm:items-start sm:justify-between sm:p-6">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-brand/12 px-3 py-1 text-xs font-semibold text-brand dark:text-brandLight">
                            {experience.role}
                          </span>
                          {experience.type && (
                            <span className="rounded-full bg-sky/15 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky">
                              {experience.type}
                            </span>
                          )}
                          {experience.workMode && (
                            <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-medium text-slate-500 dark:border-white/10 dark:text-slate-300">
                              {experience.workMode}
                            </span>
                          )}
                        </div>
                        <h3 className="mt-3 flex items-center gap-2 text-xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
                          <Building2 size={18} className="flex-none text-brand dark:text-brandLight" />
                          {experience.company}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-500 dark:text-slate-300">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.07] bg-black/[0.02] px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.04]">
                            <CalendarDays size={13} /> {experience.period}
                          </span>
                          {experience.duration && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.07] bg-black/[0.02] px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.04]">
                              <BriefcaseBusiness size={13} /> {experience.duration}
                            </span>
                          )}
                          {experience.location && (
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-black/[0.07] bg-black/[0.02] px-3 py-1.5 dark:border-white/10 dark:bg-white/[0.04]">
                              <MapPin size={13} /> {experience.location[language]}
                            </span>
                          )}
                        </div>
                      </div>
                      <span className="hidden shrink-0 bg-gradient-to-br from-brand/30 to-violet/20 bg-clip-text text-3xl font-extrabold text-transparent sm:block">
                        0{index + 1}
                      </span>
                    </div>

                    <ul className="grid gap-2.5 p-5 sm:p-6">
                      {experience.responsibilities[language].map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                          <ChevronRight size={16} className="mt-0.5 flex-none text-brand dark:text-brandLight" />
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
