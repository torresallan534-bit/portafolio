import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D", // Negro Profundo
        graphite: "#2B2F33",   // Grafito
        smoke: "#F2F4F3",      // Gris Humo
        white: "#FFFFFF",      // Blanco Puro
        mint: {
          DEFAULT: "#3DDC97",  // Verde Menta (Acento Primario)
          hover: "#34C788",
          muted: "rgba(61, 220, 151, 0.12)",
        },
        surface: "#141618",
        "surface-elevated": "#1A1D20",
        border: "rgba(242, 244, 243, 0.08)",
        brand: {
          whatsapp: "#25D366",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["monospace"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
