 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./index.html", "./src/**/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        "netral": "#F8FAF9",
        "primary": "#2F6A62",
        "gray": "#EAECEE",
        "black-font": "#0A0723",
      }
    },
    fontFamily: {
      "sans": ["Poppins", "sans-serif"],
    }
  },
  plugins: [],
}