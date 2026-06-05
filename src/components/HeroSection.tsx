"use client";

import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";
import { useLanguage } from "./LanguageProvider";
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-24 sm:pb-24 sm:pt-32 lg:pt-32">
      <div className="absolute left-1/2 top-20 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-cyanGlow/10 blur-2xl dark:bg-cyanGlow/8" />
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 lg:pt-12"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/65 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-md dark:bg-white/[0.06] dark:text-slate-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accentGreen opacity-70 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accentGreen" />
            </span>
            {t.hero.badge}
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.02] tracking-normal text-slate-950 dark:text-white sm:text-5xl lg:text-6xl xl:text-[4.55rem]">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-bold text-electric dark:text-cyanGlow sm:text-[1.7rem]">{t.hero.role}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">{t.hero.tagline}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">{t.hero.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#portfolio">
              {t.hero.viewProjects} <ArrowDown size={17} />
            </MagneticButton>
            <MagneticButton href="/Muhammad-Rafi-Isa-Ansori-CV.pdf" variant="secondary">
              {t.hero.downloadCv} <Download size={17} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              {t.hero.contactMe} <Mail size={17} />
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[440px] lg:mr-0"
        >
          <div className="absolute -inset-5 rounded-[2.75rem] bg-gradient-to-br from-cyanGlow/18 via-electric/8 to-accentGreen/10 blur-2xl" />
          <motion.div
            className="relative overflow-hidden rounded-[2.25rem] border border-slate-200/70 bg-white/80 p-3 shadow-[0_24px_90px_rgba(15,23,42,0.18)] backdrop-blur-md dark:border-white/10 dark:bg-white/[0.075] dark:shadow-[0_24px_90px_rgba(0,0,0,0.34)] sm:p-4"
            animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-slate-900">
              <Image
                src={imageError ? profile.fallbackImage : profile.image}
                alt={profile.name}
                fill
                priority
                unoptimized={imageError}
                sizes="(max-width: 768px) 86vw, 520px"
                className="object-cover object-center"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/12 bg-slate-950/60 p-4 text-white backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-semibold text-cyan-100">
                  <Sparkles size={15} className="text-accentGreen" />
                  {t.hero.cardTitle}
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-300">{t.hero.cardText}</p>
              </div>
            </div>
          </motion.div>

          <div className="relative mt-4 grid gap-3 sm:grid-cols-3 lg:-ml-10">
            {t.hero.stats.map((stat, index) => (
              <motion.div
                key={stat}
                className="rounded-2xl border border-slate-200/70 bg-white/84 p-4 text-sm font-bold leading-snug text-slate-800 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.08] dark:text-slate-100"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + index * 0.08 }}
              >
                {stat}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
