"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-[#f7fbff] dark:bg-[#040814]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(45,156,255,0.18),transparent_30%),radial-gradient(circle_at_82%_14%,rgba(47,226,196,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.94),rgba(238,246,255,0.96))] dark:bg-[radial-gradient(circle_at_12%_8%,rgba(45,156,255,0.24),transparent_30%),radial-gradient(circle_at_82%_14%,rgba(47,226,196,0.12),transparent_26%),linear-gradient(180deg,#040814,#08111f_58%,#050914)]" />
      <div className="absolute inset-0 opacity-[0.34] dark:opacity-[0.22] bg-[linear-gradient(rgba(29,155,255,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(29,155,255,0.13)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyanGlow/50 to-transparent" />
      {!reduceMotion && (
        <motion.div
          className="absolute left-[12%] top-[20%] h-56 w-56 rounded-full bg-cyanGlow/10 blur-2xl dark:bg-cyanGlow/8"
          animate={{ y: [0, 18, 0], scale: [1, 1.03, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}
