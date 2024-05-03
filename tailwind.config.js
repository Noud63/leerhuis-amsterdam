/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        papyrus: ["papyrus"],
        gtwalsheim: ["gtwalsheim"],
      },
      screens: {
        maxxl:"1600px",
        xxxl: "1500px",
        xxl: "1300px",
        footer:"1150px",
        socials: "1050px",
        menu: "950px",
        xmd: "850px",
        xsm: "700px",
        xxsm: "530px",
        xxxsm: "450px",
        mini: "400px"
      },
    },
  },
  plugins: [],
};

