"use client";

import { Braces, Database, Network, ServerCog } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import ScrollReveal from "./ScrollReveal";
import Counter from "./Counter";
import { projects } from "@/data/projects";
import { skillCategories } from "@/data/skills";

const icons = [
  { label: "API", Icon: Network },
  { label: "Database", Icon: Database },
  { label: "Code", Icon: Braces },
  { label: "System", Icon: ServerCog }
];

const techCount = skillCategories.reduce((total, category) => total + category.skills.length, 0);

export default function AboutSection() {
  const { t, language } = useLanguage();

  const stats = [
    { value: 8, suffix: "+", label: language === "id" ? "Tahun Pengalaman" : "Years Experience" },
    { value: projects.length, suffix: "+", label: language === "id" ? "Project Selesai" : "Projects Delivered" },
    { value: techCount, suffix: "+", label: language === "id" ? "Teknologi Dikuasai" : "Technologies Mastered" }
  ];

  return (
    <section id="about" className="px-4 py-9 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand dark:text-brandLight">
            {t.about.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-[1.15] tracking-tight text-slate-950 dark:text-white sm:text-[2.75rem]">
            {t.about.title}
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal className="rounded-3xl border border-black/[0.06] bg-white/70 p-6 shadow-soft backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.04] sm:p-8">
            <div className="space-y-5 text-[15px] leading-8 text-slate-600 dark:text-slate-300/90">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {t.about.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand/20 bg-brand/[0.06] px-3.5 py-1.5 text-[13px] font-medium text-slate-700 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideLeft" className="grid grid-cols-2 gap-4">
            {icons.map(({ label, Icon }) => (
              <div
                key={label}
                className="group rounded-3xl border border-black/[0.06] bg-white/65 p-5 shadow-sm backdrop-blur-sm transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft dark:border-white/[0.08] dark:bg-white/[0.04]"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-violet text-white shadow-brand">
                  <Icon size={22} />
                </div>
                <p className="text-lg font-bold text-slate-950 dark:text-white">{label}</p>
                <p className="mt-2 text-[13px] leading-6 text-slate-500 dark:text-slate-400">{t.about.cardText}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>

        {/* Animated stats */}
        <ScrollReveal className="mt-6 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative overflow-hidden rounded-3xl border border-black/[0.06] bg-white/70 p-6 text-center shadow-sm backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.04]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
              <p className="text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl">
                <Counter to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-[13px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
