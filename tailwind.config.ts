import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1B5E20",
          light: "#388E3C",
          50: "#E8F5E9",
          100: "#C8E6C9",
        },
        rose: {
          DEFAULT: "#C2185B",
          light: "#E91E63",
          50: "#FCE4EC",
          100: "#F8BBD0",
        },
        accent: "#66BB6A",
        "off-white": "#F5F5F5",
        dark: "#0D0D0D",
      },
    },
  },
  plugins: [],
};
export default config;
