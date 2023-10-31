/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    color: {
      primary: "rgb(var(--color-primary))",
      secondary: "rgb(var(--color-secondary))",
    },
    fontFamily: {
      sans: ["Raleway", "sans-serif"],
      serif: ["Crimson Text", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
