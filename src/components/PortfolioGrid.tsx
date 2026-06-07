"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import PortfolioCard from "./PortfolioCard";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "./LanguageProvider";

const PortfolioModal = dynamic(() => import("./PortfolioModal"), { ssr: false });

export default function PortfolioGrid() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="px-4 py-9 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand dark:text-brandLight">
            {t.sections.portfolioEyebrow}
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-[2.75rem]">
            {t.sections.portfolioTitle}
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal key={project.slug} delay={index * 0.03} className="h-full">
              <PortfolioCard project={project} onOpen={() => setSelected(project)} />
            </ScrollReveal>
          ))}
        </div>
      </div>

      <PortfolioModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
