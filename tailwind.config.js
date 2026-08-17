/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F6F2EA",          // Warm Ivory (Primary light background)
          sand: "#E9E0D2",        // Soft Sand
          beige: "#D8CDBD",       // Warm Beige
          sage: "#A8B0A0",        // Muted Sage
          olive: "#4D554A",       // Deep Olive
          charcoal: "#292925",    // Warm Charcoal (Primary dark surface)
          brown: "#6E6255",       // Soft Brown
          champagne: "#B6A47C",   // Muted Champagne Accent
          glassLight: "rgba(255, 255, 255, 0.55)",
          glassBorderLight: "rgba(41, 41, 37, 0.12)",
          glassDark: "rgba(41, 41, 37, 0.65)",
          glassBorderDark: "rgba(255, 255, 255, 0.15)",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "Manrope", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
};
