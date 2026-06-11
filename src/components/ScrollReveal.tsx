"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type Animation = "fadeUp" | "slideLeft" | "slideRight" | "scaleIn";

const animationClass: Record<Animation, string> = {
  fadeUp: "reveal-fade-up",
  slideLeft: "reveal-slide-left",
  slideRight: "reveal-slide-right",
  scaleIn: "reveal-scale-in"
};

export default function ScrollReveal({
  children,
  animation = "fadeUp",
  delay = 0,
  className = ""
}: {
  children: ReactNode;
  animation?: Animation;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -60px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} reveal ${animationClass[animation]}${visible ? " is-visible" : ""}`}
      style={{ transitionDelay: visible && delay ? `${delay}s` : undefined }}
    >
      {children}
    </div>
  );
}
