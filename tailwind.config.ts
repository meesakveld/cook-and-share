import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: `rgb(var(--color-red))`,
        beige: `rgb(var(--color-beige))`,
        black: `rgb(var(--color-black))`,
        gray: `rgb(var(--color-gray))`,
      },
      fontSize: {
        '3vw': ['clamp(2rem, 3vw, 3vw)', {
          lineHeight: 'clamp(2rem, 3vw, 3vw)',
        }],
      },
    },
    fontFamily: {
      openSansCondensed: ["'Open Sans Condensed'", "sans-serif"],
      manuka: ["Manuka", "sans-serif"],
      manumaCondensed: ["Manuka Condensed", "sans-serif"],
      manukaSlab: ["Manuka Slab", "serif"],
    },
  },
  plugins: [],
};
export default config;
