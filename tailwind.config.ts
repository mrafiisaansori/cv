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
        // Blue portfolio palette
        brand: "#2196F3",
        brandLight: "#90CAF9",
        brandDark: "#0D47A1",
        brandTint: "#E3F2FD",
        violet: "#90CAF9",
        sky: {
          DEFAULT: "#90CAF9",
          700: "#2196F3"
        },
        ink: "#0B1220",
        // legacy aliases -> mapped to current palette for safety
        navy: "#0B1220",
        electric: "#2196F3",
        cyanGlow: "#90CAF9",
        violetNight: "#0D47A1",
        accentGreen: "#90CAF9"
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        brand: "0 14px 40px -12px rgba(33,150,243,0.48)",
        soft: "0 18px 60px -20px rgba(11,18,32,0.26)"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 36s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
