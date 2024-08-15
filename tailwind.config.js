/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        laptop: "1024px",
      },
      fontFamily: {
        abc: ["Rubik", "sans-serif"],
        cba: ["Style Script", "cursive"],
        aaa: ["DynaPuff", "system-ui"],
      },
    },
  },
  plugins: [],
};
