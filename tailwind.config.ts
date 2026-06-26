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
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        "fade-up": "fade-up 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
