import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  target?: string;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  type = "button",
  target
}: MagneticButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanGlow/70 motion-safe:hover:-translate-y-0.5";
  const styles = {
    primary: "bg-cyan-300 text-slate-950 shadow-[0_12px_34px_rgba(45,156,255,0.24)] hover:bg-accentGreen",
    secondary:
      "border border-slate-300/70 bg-white/70 text-slate-900 backdrop-blur-sm hover:border-cyan-300 hover:bg-white dark:border-white/12 dark:bg-white/[0.07] dark:text-white dark:hover:bg-white/[0.11]",
    ghost:
      "border border-transparent bg-transparent text-slate-700 hover:border-slate-300/70 hover:bg-white/60 dark:text-slate-200 dark:hover:border-white/12 dark:hover:bg-white/[0.07]"
  };

  if (href) {
    return (
      <Link href={href} target={target} onClick={onClick} className={cn(base, styles[variant], className)}>
        <span className="flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(base, styles[variant], className)}>
      <span className="flex items-center gap-2">{children}</span>
    </button>
  );
}
