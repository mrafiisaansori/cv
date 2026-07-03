"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/components/LanguageProvider";

const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  ssr: false,
  loading: () => <SectionLoader />
});
const ExperienceTimeline = dynamic(() => import("@/components/ExperienceTimeline"), { ssr: false });
const SkillsSection = dynamic(() => import("@/components/SkillsSection"), { ssr: false });
const PortfolioGrid = dynamic(() => import("@/components/PortfolioGrid"), { ssr: false });
const CertificationSection = dynamic(() => import("@/components/CertificationSection"), { ssr: false });
const EducationSection = dynamic(() => import("@/components/EducationSection"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

function SectionLoader() {
  return (
    <section className="px-4 py-9 sm:py-12" aria-hidden>
      <div className="mx-auto max-w-6xl">
        <div className="h-4 w-32 rounded-full bg-brand/10" />
        <div className="mt-4 h-9 max-w-xl rounded-2xl bg-black/[0.04] dark:bg-white/[0.06]" />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="h-32 rounded-3xl bg-black/[0.035] dark:bg-white/[0.04]" />
          <div className="h-32 rounded-3xl bg-black/[0.035] dark:bg-white/[0.04]" />
          <div className="h-32 rounded-3xl bg-black/[0.035] dark:bg-white/[0.04]" />
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  useEffect(() => {
    const timeouts = new Set<number>();

    const scrollToHash = (attempt = 0) => {
      const hash = window.location.hash;
      if (!hash) return;

      const id = decodeURIComponent(hash.slice(1));
      const element = document.getElementById(id);

      if (!element) {
        if (attempt < 40) {
          const timeoutId = window.setTimeout(() => scrollToHash(attempt + 1), 100);
          timeouts.add(timeoutId);
        }
        return;
      }

      const offset = id === "home" ? 0 : 96;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: Math.max(top, 0),
        behavior: attempt === 0 ? "smooth" : "auto"
      });
    };

    const handleHashChange = () => scrollToHash();

    scrollToHash();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <LanguageProvider>
      <AnimatedBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceTimeline />
        <SkillsSection />
        <PortfolioGrid />
        <CertificationSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
