"use client";

import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { useLanguage } from "./LanguageProvider";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const { t, language } = useLanguage();

  const contacts = [
    { label: t.contact.email, value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { label: "LinkedIn", value: "linkedin.com/in/rafiisa", href: profile.linkedin, Icon: Linkedin },
    { label: "WhatsApp", value: t.contact.whatsapp, href: profile.whatsapp, Icon: MessageCircle }
  ];

  if (profile.github && profile.github !== "#") {
    contacts.push({ label: "GitHub", value: profile.github.replace(/^https?:\/\//, ""), href: profile.github, Icon: Github });
  }

  return (
    <section id="contact" className="px-4 py-5 sm:py-8">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="relative overflow-hidden rounded-[2rem] border border-black/[0.06] bg-gradient-to-br from-brand to-violet p-8 text-white shadow-brand sm:p-12">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-12 left-1/4 h-48 w-48 rounded-full bg-sky/25 blur-3xl" />
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/80">{t.sections.contactEyebrow}</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-[2.5rem]">
                {t.sections.contactTitle}
              </h2>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              {language === "id" ? "Kirim Email" : "Send Email"} <Mail size={16} />
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map(({ label, value, href, Icon }, index) => (
            <ScrollReveal key={label} delay={index * 0.04}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                className="group flex min-h-40 flex-col justify-between rounded-3xl border border-black/[0.06] bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-200 motion-safe:hover:-translate-y-1 hover:border-brand/30 hover:shadow-soft dark:border-white/[0.08] dark:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-violet text-white shadow-brand">
                    <Icon size={21} />
                  </span>
                  <ArrowUpRight size={18} className="text-slate-400 transition group-hover:text-brand dark:text-slate-500 dark:group-hover:text-brandLight" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{label}</p>
                  <p className="mt-1.5 break-words text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">{value}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
