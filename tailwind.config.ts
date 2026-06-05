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
        navy: "#06142E",
        electric: "#1D9BFF",
        cyanGlow: "#2EEBFF",
        violetNight: "#211335",
        accentGreen: "#35F2A1"
      },
      fontFamily: {
        sans: ["Geist", "Inter", "Poppins", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        marquee: "marquee 34s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
