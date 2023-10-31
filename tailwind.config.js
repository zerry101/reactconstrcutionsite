/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important:"#root",
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
  // eslint-disable-next-line no-undef
  plugins: [],
};
