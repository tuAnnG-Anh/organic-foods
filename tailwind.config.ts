import type { Config } from "tailwindcss"

export function generateSpacing(max: number, step: number): Record<number, string> {
  const spacing: Record<number, string> = {}
  for (let i = 0; i <= max / step; i++) {
    spacing[i * step] = `${(i * step) / 4}rem`
  }
  return spacing
}

export default {
  important: true,
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Inter, system-ui, sans-serif"],
      openSans: ["Open Sans, system-ui, sans-serif"],
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

        black: {
          900: "#000000",
          800: "#111111",
          700: "#131313",
          600: "#201F1F",
          550: "#222222",
          500: "#333333",
          450: "#555555",
          400: "#777777",
          350: "#747474",
          325: "#787878",
          315: "#828282",
          300: "#A5A5A5",
          250: "#C2C2C2",
          200: "#E2E2E2",
          100: "#F1F1F1",
        },

        white: "#FFFFFF",

        CabbagePont: {
          900: "#364127",
        },

        red: {
          500: "#F95F09",
        },

        green: {
          600: "#6BB252",
          200: "#DDF6D5",
        },
      },
      spacing: generateSpacing(100, 0.5),
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
        "2xl": ["32px", "38.73px"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
} satisfies Config
