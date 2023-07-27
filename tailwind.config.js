/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: {
      "white-gradient": "linear-gradient(180deg, #FFF 0%, #F0F1FF 100%)",
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
    fontSize: {
      "b-sm": [
        "1rem",
        {
          fontWeight: 500,
          lineHeight: "1.75rem",
        },
      ],
      "b-md": [
        "1.125rem",
        {
          fontWeight: 500,
          lineHeight: "1.75rem",
        },
      ],
      "h-sm": [
        "1.5rem",
        {
          fontWeight: 800,
          lineHeight: "1.75rem",
        },
      ],
      "h-md": [
        "2rem",
        {
          fontWeight: 800,
          lineHeight: "2.5rem",
        },
      ],
      "h-lg": [
        "2.5rem",
        {
          fontWeight: 800,
          lineHeight: "3.1875rem",
        },
      ],
      "h-xl": [
        "3.5rem",
        {
          fontWeight: 800,
          lineHeight: "4.375rem",
        },
      ],
    },
  },
  plugins: [],
};
