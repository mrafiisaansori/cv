"use client";

import { Braces, Database, Network, ServerCog } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import ScrollReveal from "./ScrollReveal";

const icons = [
  { label: "API", Icon: Network },
  { label: "Database", Icon: Database },
  { label: "Code", Icon: Braces },
  { label: "System", Icon: ServerCog }
];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-electric dark:text-cyanGlow">{t.about.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl">
            {t.about.title}
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <ScrollReveal className="rounded-[1.75rem] border border-slate-200/80 bg-white/72 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.10)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.06] sm:p-8">
            <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {t.about.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-4 py-2 text-sm font-semibold text-slate-800 dark:text-cyan-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slideLeft" className="grid grid-cols-2 gap-4">
            {icons.map(({ label, Icon }, index) => (
              <div
                key={label}
                className="rounded-[1.5rem] border border-slate-200/80 bg-white/65 p-5 shadow-sm backdrop-blur-sm transition duration-200 motion-safe:hover:-translate-y-1 hover:border-cyan-300/70 dark:border-white/10 dark:bg-white/[0.055]"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyanGlow dark:bg-white/10">
                  <Icon size={22} />
                </div>
                <p className="text-lg font-black text-slate-950 dark:text-white">{label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{t.about.cardText}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
