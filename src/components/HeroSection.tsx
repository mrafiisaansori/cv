"use client";

import { ArrowRight, Code2, Download, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";
import { useLanguage } from "./LanguageProvider";
import MagneticButton from "./MagneticButton";

export default function HeroSection() {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-8 pt-24 sm:pb-10 sm:pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 text-[13px] font-medium text-slate-600 dark:text-slate-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-70 motion-safe:animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {t.hero.badge}
          </div>

          <h1 className="text-[2.6rem] font-extrabold leading-[1.04] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-[4.2rem]">
            {profile.name.split(" ").slice(0, 2).join(" ")}{" "}
            <span className="text-gradient">{profile.name.split(" ").slice(2).join(" ")}</span>
          </h1>

          <p className="mt-5 text-xl font-semibold text-brand dark:text-brandLight sm:text-2xl">
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
            <MagneticButton href={profile.cvUrl} download="Muhammad-Rafi-Isa-Ansori-CV.pdf" variant="secondary">
              {t.hero.downloadCv} <Download size={16} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              {t.hero.contactMe} <Mail size={16} />
            </MagneticButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[320px] animate-fade-up [animation-delay:120ms]">
          <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition-transform duration-700 ease-out hover:scale-[1.02] dark:bg-zinc-900 dark:shadow-2xl dark:shadow-black/80">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={imageError ? profile.fallbackImage : profile.image}
                alt={profile.name}
                fill
                priority
                unoptimized={imageError}
                sizes="(max-width: 768px) 86vw, 420px"
                className="object-cover object-[50%_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                onError={() => setImageError(true)}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/50 to-transparent" />
              <span className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-brand">
                <Code2 size={19} strokeWidth={2.2} />
              </span>
              <h2 className="absolute bottom-4 left-5 text-2xl font-semibold text-white drop-shadow-lg">
                {profile.name}
              </h2>
            </div>
            <div className="flex items-center justify-between p-4">
              <div>
                <p className="text-sm font-medium text-slate-700 dark:text-zinc-200">{profile.role}</p>
                <p className="text-xs text-slate-500 dark:text-zinc-500">{profile.location}</p>
              </div>
              <a
                href="#contact"
                className="rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs font-medium text-white transition-transform duration-300 hover:scale-105 active:scale-95 dark:bg-zinc-800"
              >
                {t.hero.contactMe}
              </a>
            </div>
          </div>

          <div className="relative z-10 mt-4 grid grid-cols-2 gap-2.5">
            {t.hero.stats.map((stat) => (
              <div
                key={stat}
                className="rounded-2xl border border-black/[0.06] bg-white p-3 text-center text-[12px] font-semibold leading-snug text-slate-700 dark:border-white/[0.08] dark:bg-white/[0.06] dark:text-slate-200"
              >
                {stat}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
