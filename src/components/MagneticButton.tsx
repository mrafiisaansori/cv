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
  download?: boolean | string;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  type = "button",
  target,
  download
}: MagneticButtonProps) {
  const base =
    "group/btn inline-flex min-h-11 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold tracking-tight transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent motion-safe:hover:-translate-y-0.5 active:translate-y-0";
  const styles = {
    primary:
      "bg-brand text-white shadow-brand hover:bg-brandDark",
    secondary:
      "border border-black/10 bg-white/80 text-slate-900 backdrop-blur-sm hover:border-brand/40 hover:bg-white dark:border-white/12 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.1]",
    ghost:
      "border border-black/10 bg-transparent text-slate-700 hover:border-brand/30 hover:bg-brand/[0.04] hover:text-brand dark:border-white/12 dark:text-slate-200 dark:hover:bg-white/[0.06] dark:hover:text-white"
  };

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        download={download}
        onClick={onClick}
        className={cn(base, styles[variant], className)}
      >
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
