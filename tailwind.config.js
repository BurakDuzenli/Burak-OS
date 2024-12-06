import { url } from "inspector";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dogica: ["Dogica", "sans-serif"],
        "dogica-bold": ["Dogicabold", "sans-serif"],
        "dogica-pixel": ["Dogicapixel", "sans-serif"],
        "dogica-pixel-bold": ["Dogicapixelbold", "sans-serif"],
      },
      backgroundImage: {
        "transparent-img":
          "url('https://www.transparenttextures.com/patterns/black-mamba.png')",
      },
    },
  },
  plugins: [],
};
