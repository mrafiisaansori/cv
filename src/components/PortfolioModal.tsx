"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ExternalLink, Github, Layers3, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";
import { useLanguage } from "./LanguageProvider";

const fallbackProjectImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='780' viewBox='0 0 1200 780'%3E%3Crect width='1200' height='780' rx='46' fill='%23635BFF'/%3E%3Ccircle cx='970' cy='170' r='120' fill='%2338BDF8' opacity='.5'/%3E%3Ccircle cx='220' cy='610' r='150' fill='%238B5CF6' opacity='.5'/%3E%3Crect x='120' y='130' width='960' height='520' rx='36' fill='%23ffffff' opacity='.1'/%3E%3Cpath d='M190 230h420M190 310h670M190 390h530M190 520h750' stroke='%23ffffff' stroke-width='24' stroke-linecap='round' opacity='.6'/%3E%3C/svg%3E";

export default function PortfolioModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { t, language } = useLanguage();
  const [imageError, setImageError] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  useEffect(() => setImageError(false), [project?.slug]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[70] flex justify-end bg-slate-950/55 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onMouseDown={onClose}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 36 }}
            onMouseDown={(event) => event.stopPropagation()}
            className="relative flex h-full w-full max-w-[460px] flex-col overflow-y-auto border-l border-white/10 bg-white text-slate-900 shadow-[-30px_0_90px_-20px_rgba(0,0,0,0.5)] dark:bg-[#0c0c16] dark:text-white"
          >
            <button
              type="button"
              aria-label={t.portfolio.close}
              onClick={onClose}
              className="absolute right-4 top-4 z-30 grid h-9 w-9 place-items-center rounded-full border border-black/10 bg-white/80 text-slate-600 backdrop-blur-sm transition hover:bg-slate-100 hover:text-slate-900 dark:border-white/15 dark:bg-white/[0.06] dark:text-slate-200 dark:hover:bg-white/10"
            >
              <X size={17} />
            </button>

            {/* Image header */}
            <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-[#0b0b16]">
              <Image
                src={imageError ? fallbackProjectImage : project.image}
                alt={project.title}
                fill
                sizes="460px"
                quality={72}
                unoptimized={imageError}
                onError={() => setImageError(true)}
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-[#0c0c16]" />
            </div>

            <div className="flex-1 p-6 sm:p-7">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-brand px-3 py-1 text-[11px] font-semibold tracking-wide text-white shadow-brand">
                  {project.category}
                </span>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-[11px] font-semibold tracking-wide text-white dark:bg-white/[0.12]">
                  {project.role}
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand dark:text-brandLight">
                <Layers3 size={14} />
                {t.portfolio.overview}
              </div>
              <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{project.description[language]}</p>

              {(project.demo || project.repo) && (
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-brand transition hover:bg-brandDark"
                    >
                      {t.portfolio.liveDemo} <ExternalLink size={15} />
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand/40 dark:border-white/12 dark:bg-white/[0.06] dark:text-white"
                    >
                      {t.portfolio.sourceCode} <Github size={15} />
                    </a>
                  )}
                </div>
              )}

              <div className="mt-7">
                <h4 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  <Sparkles size={13} className="text-sky" />
                  {t.portfolio.keyFeatures}
                </h4>
                <ul className="mt-3 grid gap-2">
                  {project.features[language].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 rounded-xl border border-black/[0.05] bg-black/[0.02] px-3 py-2.5 text-[13px] leading-5 text-slate-600 dark:border-white/[0.06] dark:bg-white/[0.03] dark:text-slate-300"
                    >
                      <CheckCircle2 size={15} className="mt-0.5 flex-none text-brand dark:text-brandLight" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">{t.portfolio.techStack}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-black/[0.06] bg-black/[0.02] px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
