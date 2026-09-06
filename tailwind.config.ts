import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#071522",
        ocean: "#0C3550",
        abyss: "#03070B",
        gold: {
          DEFAULT: "#D7A83E",
          light: "#F4D77A",
        },
        red: {
          seal: "#8F1D2C",
          dark: "#42121B",
        },
        paper: "#D8C39A",
        parchment: "#F2E9D0",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        garamond: ["var(--font-garamond)", "EB Garamond", "serif"],
        ui: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
