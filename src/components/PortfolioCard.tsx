"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { Project } from "@/data/projects";
import { useLanguage } from "./LanguageProvider";
import { cn } from "@/lib/utils";

const fallbackProjectImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='780' viewBox='0 0 1200 780'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%2309142A'/%3E%3Cstop offset='.55' stop-color='%231D9BFF'/%3E%3Cstop offset='1' stop-color='%2335F2A1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='780' rx='46' fill='url(%23g)'/%3E%3Crect x='92' y='96' width='1016' height='588' rx='36' fill='%23030712' opacity='.74'/%3E%3Cpath d='M160 188h520M160 260h760M160 332h620M160 478h880' stroke='%23ffffff' stroke-width='24' stroke-linecap='round' opacity='.72'/%3E%3Ccircle cx='966' cy='188' r='54' fill='%2335F2A1' opacity='.85'/%3E%3C/svg%3E";

export default function PortfolioCard({
  project,
  onOpen,
  featured = false
}: {
  project: Project;
  onOpen: () => void;
  featured?: boolean;
}) {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className={cn(
        "group relative h-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-colors duration-200 md:hover:border-cyan-300/70 dark:border-white/10 dark:bg-white/[0.04]"
      )}
    >
      <button type="button" onClick={onOpen} className="flex h-full w-full flex-col text-left">
        {/* Thumbnail: full screenshot visible (object-contain on dark panel) */}
        <div className={cn("relative w-full bg-[#0b1430]", featured ? "aspect-[16/9]" : "aspect-[16/10]")}>
          <Image
            src={imageError ? fallbackProjectImage : project.image}
            alt={project.title}
            fill
            sizes={
              featured
                ? "(max-width: 1280px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            }
            unoptimized={imageError}
            onError={() => setImageError(true)}
            className="object-contain"
          />
          <div className="pointer-events-none absolute left-3 right-3 top-3 flex flex-wrap gap-2">
            <span className="rounded-md bg-slate-950/70 px-2.5 py-1 text-[11px] font-bold tracking-wide text-cyan-50">
              {project.category}
            </span>
            <span className="rounded-md bg-accentGreen/20 px-2.5 py-1 text-[11px] font-bold tracking-wide text-emerald-100">
              {project.role}
            </span>
          </div>
        </div>

        {/* Body */}
        <div className={cn("flex h-full flex-col border-t border-slate-200/70 p-5 dark:border-white/10", featured && "sm:p-6")}>
          <div className="flex items-start justify-between gap-4">
            <h3
              className={cn(
                "font-bold leading-tight tracking-tight text-slate-950 dark:text-white",
                featured ? "text-xl sm:text-2xl" : "text-lg"
              )}
            >
              {project.title}
            </h3>
            <span className="grid h-9 w-9 flex-none place-items-center rounded-full border border-slate-200/80 text-electric dark:border-white/10 dark:text-cyanGlow">
              <ArrowUpRight size={17} />
            </span>
          </div>

          <p
            className={cn(
              "mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300/90",
              featured ? "line-clamp-3" : "line-clamp-2"
            )}
          >
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, featured ? 6 : 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-slate-950/[0.04] px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-white/[0.07] dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-5">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 md:group-hover:text-electric dark:text-white dark:md:group-hover:text-cyanGlow">
              {t.portfolio.viewDetail}
              <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}
