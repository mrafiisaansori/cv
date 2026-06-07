"use client";

import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
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
    <section id="home" className="relative overflow-hidden px-4 pb-8 pt-24 sm:pb-10 sm:pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/[0.06] px-3.5 py-1.5 text-[13px] font-medium text-slate-700 backdrop-blur-sm dark:bg-brand/[0.1] dark:text-slate-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t.hero.badge}
          </div>

          <h1 className="text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-[4.2rem]">
            {profile.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-gradient">{profile.name.split(" ").slice(2).join(" ")}</span>
          </h1>

          <p className="mt-5 flex items-center gap-2 text-xl font-semibold text-brand dark:text-brandLight sm:text-2xl">
            {t.hero.role}
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-300/90 sm:text-[1.05rem]">
            {t.hero.tagline}
          </p>
          <p className="mt-3 max-w-xl text-[15px] leading-7 text-slate-500 dark:text-slate-400">
            {t.hero.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <MagneticButton href="#portfolio">
              {t.hero.viewProjects}
              <ArrowRight size={17} className="transition-transform group-hover/btn:translate-x-0.5" />
            </MagneticButton>
            <MagneticButton href={profile.linkedin} target="_blank" variant="secondary">
              {t.hero.downloadCv} <Download size={16} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              {t.hero.contactMe} <Mail size={16} />
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[420px]"
        >
          <div className="absolute -inset-6 rounded-[2.75rem] bg-gradient-to-br from-brand/25 via-violet/15 to-sky/15 blur-3xl" />
          <motion.div
            className="relative overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white/70 p-2.5 shadow-soft backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.05]"
            animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-slate-900">
              <Image
                src={imageError ? profile.fallbackImage : profile.image}
                alt={profile.name}
                fill
                priority
                unoptimized={imageError}
                sizes="(max-width: 768px) 86vw, 420px"
                className="object-cover object-center"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
              <div className="absolute bottom-3.5 left-3.5 right-3.5 rounded-2xl border border-white/12 bg-slate-950/55 p-3.5 text-white backdrop-blur-md">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Sparkles size={15} className="text-sky" />
                  {t.hero.cardTitle}
                </div>
                <p className="mt-1 text-xs leading-5 text-slate-300">{t.hero.cardText}</p>
              </div>
            </div>
          </motion.div>

          <div className="relative z-10 mt-4 grid grid-cols-3 gap-2.5">
            {t.hero.stats.map((stat, index) => (
              <motion.div
                key={stat}
                className="rounded-2xl border border-black/[0.06] bg-white/85 p-3 text-center text-[12px] font-semibold leading-snug text-slate-700 shadow-sm backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.06] dark:text-slate-200"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 + index * 0.08 }}
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
