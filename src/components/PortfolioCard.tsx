"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { useLanguage } from "./LanguageProvider";

const fallbackProjectImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='780' viewBox='0 0 1200 780'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23635BFF'/%3E%3Cstop offset='.55' stop-color='%238B5CF6'/%3E%3Cstop offset='1' stop-color='%2338BDF8'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='780' rx='46' fill='url(%23g)'/%3E%3Crect x='92' y='96' width='1016' height='588' rx='36' fill='%230a0a12' opacity='.78'/%3E%3Cpath d='M160 188h520M160 260h760M160 332h620M160 478h880' stroke='%23ffffff' stroke-width='24' stroke-linecap='round' opacity='.6'/%3E%3Ccircle cx='966' cy='188' r='54' fill='%2338BDF8' opacity='.85'/%3E%3C/svg%3E";

export default function PortfolioCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { t, language } = useLanguage();
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white/80 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-brand/30 hover:shadow-soft md:hover:-translate-y-1 dark:border-white/[0.08] dark:bg-white/[0.04]">
      <button type="button" onClick={onOpen} className="flex h-full w-full flex-col text-left">
        {/* Prominent thumbnail */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0b0b16]">
          <Image
            src={imageError ? fallbackProjectImage : project.image}
            alt={project.title}
            fill
            quality={62}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            unoptimized={imageError}
            onError={() => setImageError(true)}
            className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-brand/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-brand dark:bg-brand/15 dark:text-brandLight">
              {project.category}
            </span>
            <span className="rounded-full border border-black/[0.08] px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-600 dark:border-white/[0.12] dark:text-slate-300">
              {project.role}
            </span>
          </div>

          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-bold leading-tight tracking-tight text-slate-950 dark:text-white">
              {project.title}
            </h3>
            <span className="mt-0.5 grid h-9 w-9 flex-none place-items-center rounded-full border border-black/[0.08] text-brand transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white dark:border-white/10 dark:text-brandLight">
              <ArrowUpRight size={17} />
            </span>
          </div>

          <p className="mt-2.5 line-clamp-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {project.description[language]}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-black/[0.04] px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-white/[0.06] dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-5">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 transition-colors group-hover:text-brand dark:text-white dark:group-hover:text-brandLight">
              {t.portfolio.viewDetail}
              <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}
