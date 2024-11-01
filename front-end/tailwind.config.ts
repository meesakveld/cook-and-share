import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "border-beige",
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
        '1vw': ['clamp(0.75rem, 1vw, 1vw)', {
          lineHeight: 'clamp(0.75rem, 1vw, 1vw)',
        }],
        '2vw': ['clamp(1.5rem, 2vw, 2vw)', {
          lineHeight: 'clamp(1.5rem, 2vw, 2vw)',
        }],
        '3vw': ['clamp(2rem, 3vw, 3vw)', {
          lineHeight: 'clamp(2rem, 3vw, 3vw)',
        }],
      },
      width: {
        '3vw': 'clamp(2rem, 3vw, 3vw)',
      },
      height: {
        '3vw': 'clamp(2rem, 3vw, 3vw)',
      },
    },
    fontFamily: {
      openSansCondensed: ["'Open Sans Condensed'", "sans-serif"],
      manuka: ["Manuka", "sans-serif"],
      manukaCondensed: ["Manuka Condensed", "sans-serif"],
      manukaSlab: ["Manuka Slab", "serif"],
    },
  },
  plugins: [],
};
export default config;
