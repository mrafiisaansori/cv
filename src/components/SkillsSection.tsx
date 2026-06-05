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
    <section id="skills" className="overflow-hidden px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-electric dark:text-cyanGlow">{t.sections.skillsEyebrow}</p>
          <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-5xl">{t.sections.skillsTitle}</h2>
        </ScrollReveal>

        <div className="mt-9 max-w-full overflow-hidden border-y border-slate-200/80 py-4 [contain:paint] dark:border-white/10">
          <div className="flex w-max animate-marquee gap-3 will-change-transform hover:[animation-play-state:paused]">
            {marquee.map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="rounded-full border border-cyanGlow/20 bg-white/70 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-sm dark:bg-white/[0.07] dark:text-cyan-50"
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
              <ScrollReveal key={category.title} delay={index * 0.035} className="group">
                <div className="relative h-full overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/72 p-6 shadow-sm backdrop-blur-sm transition duration-200 motion-safe:hover:-translate-y-1 hover:border-cyan-300/70 dark:border-white/10 dark:bg-white/[0.06]">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanGlow to-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="mb-6 flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyanGlow dark:bg-white/10">
                      <Icon size={22} />
                    </div>
                    <span className="rounded-full bg-accentGreen/12 px-3 py-1 text-xs font-black text-emerald-700 dark:text-accentGreen">
                      {category.skills.length} skills
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">{category.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-slate-400/20 bg-slate-950/[0.03] px-3 py-1.5 text-xs font-semibold text-slate-700 transition group-hover:border-cyanGlow/30 dark:bg-white/5 dark:text-slate-200"
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
