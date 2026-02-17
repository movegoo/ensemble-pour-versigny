import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2d7a3a",
        "primary-light": "#4caf50",
        "off-white": "#f8f9fa",
        dark: "#1a1a2e",
      },
    },
  },
  plugins: [],
};
export default config;
