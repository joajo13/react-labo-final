/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        lmain: "calc(20vw)",
      },
      height: {
        "3/4": "75vh",
        navbar: "60px",
        sidebar: "calc(100vh - 60px)",
      },
      width: {
        "3/4": "75vw",
        sidebar: "15vw",
      },
      colors: {
        reddit: "#DAE0E6",
      },
    },
  },
  plugins: [],
};
