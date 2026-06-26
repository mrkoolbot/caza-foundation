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
        grotesk:   ["Quicksand", "sans-serif"], // TKG compat
      },
      colors: {
        // CAZA palette
        cruz:   "#6a482c",
        po:     "#a48157",
        pele:   "#c18f55",
        amor:   "#813332",
        teto:   "#7a3929",
        alma:   "#ffffff",
        barro:  "#994b36",
        liga:   "#6b6560",
        // TKG compat aliases
        obsidian:    "#1a1a1a",
        "pure-white": "#ffffff",
        "kool-red":   "#813332",
        "kool-black": "#1a1a1a",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollLine: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(200%)" },
        },
      },
      animation: {
        marquee:    "marquee 28s linear infinite",
        scrollLine: "scrollLine 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
