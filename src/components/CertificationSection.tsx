"use client";

import { Award, ExternalLink, BadgeCheck } from "lucide-react";
import { profile } from "@/data/profile";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "./LanguageProvider";
import ScrollReveal from "./ScrollReveal";

export default function CertificationSection() {
  const { t } = useLanguage();

  return (
    <section id="certification" className="px-4 py-5 sm:py-7">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="relative overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white/70 p-6 shadow-soft backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.04] sm:p-10">
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/15 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="relative mx-auto">
              <div className="grid h-44 w-44 place-items-center rounded-[2rem] bg-gradient-to-br from-brand via-violet to-sky text-white shadow-brand">
                <Award size={76} />
              </div>
              <span className="absolute -bottom-3 -right-3 grid h-12 w-12 place-items-center rounded-2xl border border-black/[0.06] bg-white text-brand shadow-soft dark:border-white/10 dark:bg-[#12121f] dark:text-brandLight">
                <BadgeCheck size={24} />
              </span>
            </div>
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand dark:text-brandLight">
                {t.sections.certificationEyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-[2.5rem]">
                {t.sections.certificationTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-slate-600 dark:text-slate-400">
                {t.sections.certificationText}
              </p>
              <div className="mt-7 divide-y divide-black/[0.06] overflow-hidden rounded-2xl border border-black/[0.06] bg-white/45 dark:divide-white/[0.08] dark:border-white/[0.08] dark:bg-white/[0.03]">
                {profile.certifications.map((certification) => (
                  <a
                    key={`${certification.issuer}-${certification.title}`}
                    href={certification.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex flex-col gap-3 px-4 py-4 transition hover:bg-brand/[0.06] dark:hover:bg-white/[0.05] sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span>
                      <span className="block text-sm font-bold leading-6 text-slate-950 dark:text-white">
                        {certification.title}
                      </span>
                      <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                        {certification.issuer} - {certification.year}
                      </span>
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand transition group-hover:text-brandDark dark:text-brandLight dark:group-hover:text-white">
                      {t.sections.certificateButton} <ExternalLink size={15} />
                    </span>
                  </a>
                ))}
              </div>
              <div className="mt-7">
                <MagneticButton href={profile.certificationUrl} target="_blank">
                  {t.sections.certificationButton} <ExternalLink size={16} />
                </MagneticButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
