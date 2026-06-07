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
        // Stripe-inspired indigo system
        brand: "#635BFF",
        brandLight: "#8E88FF",
        brandDark: "#4B45D6",
        violet: "#8B5CF6",
        sky: "#38BDF8",
        ink: "#0A0A12",
        // legacy aliases -> mapped to new palette for safety
        navy: "#0A0A12",
        electric: "#635BFF",
        cyanGlow: "#8B5CF6",
        violetNight: "#1A1530",
        accentGreen: "#38BDF8"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        brand: "0 14px 40px -12px rgba(99,91,255,0.45)",
        soft: "0 18px 60px -20px rgba(15,15,40,0.25)"
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
