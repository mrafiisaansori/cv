import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Navy-lavender portfolio palette
        brand: "#535C91",
        brandLight: "#9290C3",
        brandDark: "#1B1A55",
        violet: "#9290C3",
        sky: {
          DEFAULT: "#9290C3",
          700: "#535C91"
        },
        ink: "#070F2B",
        // legacy aliases -> mapped to current palette for safety
        navy: "#070F2B",
        electric: "#535C91",
        cyanGlow: "#9290C3",
        violetNight: "#1B1A55",
        accentGreen: "#9290C3"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        brand: "0 14px 40px -12px rgba(83,92,145,0.48)",
        soft: "0 18px 60px -20px rgba(7,15,43,0.26)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "aurora-shift": {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-3%,0) scale(1.08)" }
        }
      },
      animation: {
        marquee: "marquee 36s linear infinite",
        float: "float 7s ease-in-out infinite",
        aurora: "aurora-shift 18s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
