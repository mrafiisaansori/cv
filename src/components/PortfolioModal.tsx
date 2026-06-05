"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Layers3, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Project } from "@/data/projects";
import { useLanguage } from "./LanguageProvider";

const fallbackProjectImage =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='780' viewBox='0 0 1200 780'%3E%3Crect width='1200' height='780' rx='46' fill='%2309142A'/%3E%3Ccircle cx='970' cy='170' r='120' fill='%232EEBFF' opacity='.22'/%3E%3Ccircle cx='220' cy='610' r='150' fill='%2335F2A1' opacity='.18'/%3E%3Crect x='120' y='130' width='960' height='520' rx='36' fill='%23ffffff' opacity='.08'/%3E%3Cpath d='M190 230h420M190 310h670M190 390h530M190 520h750' stroke='%232EEBFF' stroke-width='24' stroke-linecap='round' opacity='.72'/%3E%3C/svg%3E";

export default function PortfolioModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

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
          className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-slate-950/72 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.12 }}
          onMouseDown={onClose}
        >
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, scale: 0.985, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.99, y: 6 }}
            transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
            className="relative flex max-h-[85vh] w-full max-w-[900px] flex-col overflow-hidden rounded-3xl border border-white/12 bg-[#0a1124] text-white shadow-[0_30px_90px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/5 lg:flex-row"
          >
            <button
              type="button"
              aria-label={t.portfolio.close}
              onClick={onClose}
              className="absolute right-3 top-3 z-30 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-slate-950/75 text-slate-200 transition hover:bg-slate-800 hover:text-white"
            >
              <X size={17} />
            </button>

            <div className="relative flex shrink-0 items-center justify-center bg-gradient-to-br from-[#0b1430] to-[#070d1e] p-4 lg:w-[44%] lg:p-5">
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#060a18] shadow-inner">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={imageError ? fallbackProjectImage : project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 92vw, 400px"
                    quality={74}
                    unoptimized={imageError}
                    onError={() => setImageError(true)}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 lg:bottom-7 lg:left-7 lg:right-7">
                <span className="rounded-full border border-cyanGlow/25 bg-cyanGlow/10 px-3 py-1 text-[11px] font-bold tracking-wide text-cyan-100">
                  {project.category}
                </span>
                <span className="rounded-full border border-accentGreen/30 bg-accentGreen/15 px-3 py-1 text-[11px] font-bold tracking-wide text-emerald-100">
                  {project.role}
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 sm:p-7">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-cyanGlow">
                <Layers3 size={14} />
                {t.portfolio.overview}
              </div>
              <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-white sm:text-[1.7rem]">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300/90">{project.description}</p>

              <div className="mt-6">
                <h4 className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
                  <Sparkles size={13} className="text-accentGreen" />
                  {t.portfolio.keyFeatures}
                </h4>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 rounded-xl border border-white/[0.07] bg-white/[0.035] px-3 py-2.5 text-[13px] leading-5 text-slate-300"
                    >
                      <CheckCircle2 size={15} className="mt-0.5 flex-none text-accentGreen" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{t.portfolio.techStack}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-slate-200"
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
