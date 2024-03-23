import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        surface: "#0F1722",
        surfaceMuted: "#202C3E",
        onSurface: "#B2BDCC",
        onSurfaceMuted: "#2F3B4C",
      },
    },
  },
  plugins: [],
};
export default config;
