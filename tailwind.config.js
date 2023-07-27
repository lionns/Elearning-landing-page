/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      "pink-gradient": "linear-gradient(180deg, #FF6F48 0.04%, #F02AA6 100%)",
      "purple-gradient": "linear-gradient(180deg, #4851FF 0%, #F02AA6 99.92%)",
    },
    colors: {
      purple: "#666CA3",
      "dark-purple": "#13183F",
      gray: "#83869A",
      "pink-red": "#F74780",
      pink: "#FFA7C3",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: "Plus Jakarta Sans",
    },
  },
  plugins: [],
};
