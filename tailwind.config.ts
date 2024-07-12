import type { Config } from "tailwindcss"

export default {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Inter, system-ui, sans-serif"],
    },
    container: {
      center: true,
      padding: "0",
    },
    extend: {
      colors: {
        primary: "rgb(var(--primary), <alpha-value>)",
        primary_hover: "rgb(var(--primary-hover), <alpha-value>)",
        primary_active: "rgb(var(--primary-active), <alpha-value>)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
} satisfies Config
