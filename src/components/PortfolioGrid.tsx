"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import PortfolioCard from "./PortfolioCard";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";

const PortfolioModal = dynamic(() => import("./PortfolioModal"), { ssr: false });

export default function PortfolioGrid() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-electric dark:text-cyanGlow">{t.sections.portfolioEyebrow}</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black text-slate-950 dark:text-white sm:text-5xl">
            {t.sections.portfolioTitle}
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              delay={index * 0.03}
              className={cn(index === 0 && "xl:col-span-2", index === 1 && "xl:row-span-1")}
            >
              <PortfolioCard project={project} featured={index === 0} onOpen={() => setSelected(project)} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <PortfolioModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
