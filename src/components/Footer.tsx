"use client";

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  const socials = [
    { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
    { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
    { href: profile.whatsapp, Icon: MessageCircle, label: "WhatsApp" },
    ...(profile.github && profile.github !== "#" ? [{ href: profile.github, Icon: Github, label: "GitHub" }] : [])
  ];

  return (
    <footer className="border-t border-black/[0.06] px-4 py-10 dark:border-white/[0.08]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand via-violet to-sky text-[13px] font-black text-white shadow-brand">
            RI
          </span>
          <div className="text-sm">
            <p className="font-semibold text-slate-900 dark:text-white">{profile.name}</p>
            <p className="text-slate-500 dark:text-slate-400">
              {profile.role} {t.footer.copyright}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-black/[0.08] bg-white/70 text-slate-600 transition hover:border-brand/40 hover:text-brand dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-300 dark:hover:text-brandLight"
            >
              <Icon size={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
