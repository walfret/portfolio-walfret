/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        "theme-light": "#f5f5f7",
        "theme-dark": "#1a202c",

        //Light Theme Colors
        colorTextPrimary: "#1d1d1f",
        colorTextSecondary: "#6e6e73",
        colorTitles: "#718096",

        //Dark ThemeColors
        colorTextPrimaryDark: "#ffffff",
        "colorTextSecondary-dark": "#6e6e73",
        "colorTitles-dark": "#718096",
      },
    },
  },
  plugins: [],
};
