/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        papyrus: ["papyrus"],
      },
      screens: {
        xxxl: "1450px",
        xxl: "1300px",
        socials: "1180px",
        xmd: "850px",
        xsm: "700px",
        bracket: "530px",
        xxsm: "450px",
      },
    },
  },
  plugins: [],
};

