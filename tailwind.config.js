/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#252636",
        primary: "#f6c606",
        darkblue: "#212230",
        graywhite: "#c2c3c7",
        dullwhite: "#f6f6f8",
      },
    },
  },
  plugins: [],
};
