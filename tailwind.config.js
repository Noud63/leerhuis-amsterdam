/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        papyrus: ["papyrus"],
        gtwalsheim: ["gtwalsheim"],
        MPLUSRounded1c: ["M PLUS Rounded 1c"],
        nunito: ["nunito"],
      },
      screens: {
        maxxl: "1600px",
        xxxl: "1500px",
        clamp: "1400px",
        title: "1350px",
        xxl: "1300px",
        footer: "1150px",
        socials: "1050px",
        menu: "950px",
        xmd: "850px",
        xsm: "700px",
        xxmd: "640px",
        xxsm: "530px",
        xxxsm: "450px",
        mini: "400px",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 1)",
        lg: "2px 2px 4px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-textshadow"),
  ],
};

