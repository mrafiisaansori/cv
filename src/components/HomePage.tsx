"use client";

import AboutSection from "@/components/AboutSection";
import AnimatedBackground from "@/components/AnimatedBackground";
import CertificationSection from "@/components/CertificationSection";
import ContactSection from "@/components/ContactSection";
import EducationSection from "@/components/EducationSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PortfolioGrid from "@/components/PortfolioGrid";
import SkillsSection from "@/components/SkillsSection";
import { LanguageProvider } from "@/components/LanguageProvider";

export default function HomePage() {
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
