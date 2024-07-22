import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'tall': {
          'raw': `only screen and (max-height: 960px) and (max-width: 480px)`
        },
        'wide': {
          'raw': `only screen and (max-height: 480px) and (max-width: 960px)`
        },
        'portrait': {
          'raw': '(orientation: portrait)'
        },
        'landscape': {
          'raw': '(orientation: landscape)'
        },
        'tallOrWideAndPortrait': {
          'raw': `only screen and ((max-height: 960px) and (max-width: 480px) or (max-height: 480px) and (max-width: 960px)) and (orientation: portrait)`
        },
        'tallOrWideAndLandscape': {
          'raw': `only screen and ((max-height: 960px) and (max-width: 480px) or (max-height: 480px) and (max-width: 960px)) and (orientation: landscape)`
        },
}}
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      }
      addUtilities(newUtilities);
    },
  ],
}
export default config;
