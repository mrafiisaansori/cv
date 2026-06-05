"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Animation = "fadeUp" | "slideLeft" | "slideRight" | "scaleIn";

const variants = {
  fadeUp: { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } },
  slideLeft: { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } },
  slideRight: { hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } },
  scaleIn: { hidden: { opacity: 0, y: 16, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1 } }
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
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants[animation]}
      transition={{ duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
