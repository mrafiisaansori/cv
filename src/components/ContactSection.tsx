"use client";

import { ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { useLanguage } from "./LanguageProvider";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const { t } = useLanguage();

  const contacts = [
    { label: t.contact.email, value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { label: "LinkedIn", value: "linkedin.com/in/rafiisa", href: profile.linkedin, Icon: Linkedin },
    { label: "GitHub", value: t.contact.github, href: profile.github, Icon: Github },
    { label: "WhatsApp", value: t.contact.whatsapp, href: profile.whatsapp, Icon: MessageCircle }
  ];

  return (
    <section id="contact" className="px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-electric dark:text-cyanGlow">{t.sections.contactEyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl">
            {t.sections.contactTitle}
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map(({ label, value, href, Icon }, index) => (
            <ScrollReveal key={label} delay={index * 0.04}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                className="group flex min-h-44 flex-col justify-between rounded-[1.75rem] border border-slate-200/80 bg-white/72 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.09)] backdrop-blur-sm transition duration-200 motion-safe:hover:-translate-y-1 hover:border-cyan-300/70 dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-slate-950 text-cyanGlow dark:bg-white/10">
                    <Icon size={21} />
                  </span>
                  <ArrowUpRight size={18} className="text-slate-400 transition group-hover:text-electric dark:text-slate-500 dark:group-hover:text-cyanGlow" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">{label}</p>
                  <p className="mt-2 break-words text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">{value}</p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
