/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#0284c7",
        dark: "#0f172a",
        light: "#f8fafc",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
} 