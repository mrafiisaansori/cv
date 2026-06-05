"use client";

import { Award, ExternalLink } from "lucide-react";
import { profile } from "@/data/profile";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "./LanguageProvider";
import ScrollReveal from "./ScrollReveal";

export default function CertificationSection() {
  const { t } = useLanguage();

  return (
    <section id="certification" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white/72 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.10)] backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.06] sm:p-9">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyanGlow/10 blur-2xl" />
              <div className="relative mx-auto grid h-44 w-44 place-items-center rounded-[1.75rem] border border-cyanGlow/20 bg-slate-950 text-cyanGlow dark:bg-white/10">
                <Award size={76} />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-electric dark:text-cyanGlow">{t.sections.certificationEyebrow}</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-5xl">{t.sections.certificationTitle}</h2>
              <p className="mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
                {t.sections.certificationText}
              </p>
              <div className="mt-7">
                <MagneticButton href={profile.certificationUrl} target="_blank">
                  {t.sections.certificationButton} <ExternalLink size={17} />
                </MagneticButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
