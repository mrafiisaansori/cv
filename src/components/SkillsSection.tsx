"use client";

import { Braces, Database, GitBranch, Layers3, Network, UsersRound } from "lucide-react";
import { marqueeSkills, skillCategories } from "@/data/skills";
import { useLanguage } from "./LanguageProvider";
import ScrollReveal from "./ScrollReveal";

const iconMap = {
  frontend: Layers3,
  backend: Braces,
  database: Database,
  integration: Network,
  tools: GitBranch,
  soft: UsersRound
};

export default function SkillsSection() {
  const { t } = useLanguage();
  const marquee = [...marqueeSkills, ...marqueeSkills];

  return (
    <section id="skills" className="overflow-hidden px-4 py-9 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand dark:text-brandLight">
            {t.sections.skillsEyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-[2.75rem]">
            {t.sections.skillsTitle}
          </h2>
        </ScrollReveal>

        <div className="relative mt-9 max-w-full overflow-hidden py-4 [contain:paint] before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-gradient-to-r before:from-[#f4f4fb] before:to-transparent after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-[#f4f4fb] after:to-transparent dark:before:from-[#070F2B] dark:after:from-[#070F2B]">
          <div className="flex w-max animate-marquee gap-3 will-change-transform hover:[animation-play-state:paused]">
            {marquee.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="rounded-full border border-brand/15 bg-white px-4 py-2 text-sm font-semibold text-slate-700 dark:bg-white/[0.05] dark:text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];

            return (
              <ScrollReveal key={category.title} delay={index * 0.04}>
                <div className="h-full rounded-3xl border border-black/[0.06] bg-white p-6 transition-colors duration-200 hover:border-brand/30 dark:border-white/[0.08] dark:bg-white/[0.03]">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand/10 text-brand dark:bg-brand/15 dark:text-brandLight">
                      <Icon size={20} />
                    </div>
                    <span className="rounded-full bg-sky/12 px-3 py-1 text-xs font-bold text-sky-700 dark:text-sky">
                      {category.skills.length} skills
                    </span>
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">{category.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-black/[0.06] bg-black/[0.02] px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-white/[0.06] dark:bg-white/[0.04] dark:text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
