/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E1E",
        secondary: "#111111",
        bgColor: "#EAF4F2",
        hardBgColor: "#D7EFEF",
        graycustom: "#7F7F7F",
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
};