import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      colors: {
        cruz: "#6a482c",
        po: "#a48157",
        pele: "#c18f55",
        amor: "#813332",
        teto: "#7a3929",
        alma: "#f8f0de",
        barro: "#994b36",
        liga: "#74685a",
      },
    },
  },
  plugins: [],
};

export default config;
