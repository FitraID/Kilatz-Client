export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        montserratBold: ["Montserrat-bold", "sans-serif"],
      },
      colors: {
        f5: "#F5F5F5",
        secondary: {
          50: "#F4EDE6",
          100: "#E8DCCB",
          200: "#D1BA96",
          300: "#BA975C",
          400: "#9D793E",
          500: "#815F29", // Original color
          600: "#6B4C20",
          700: "#533B18",
          800: "#3C2A10",
          900: "#261A09",
        },
        primary: {
          50: "#FFF8E0",
          100: "#FFEEB3",
          200: "#FFE180",
          300: "#FFD34D",
          400: "#FFC81A",
          500: "#FEB400", // Original color
          600: "#DA9700",
          700: "#B37A00",
          800: "#8C5E00",
          900: "#664400",
        },
        third: {
          50: "#FEFAF2",
          100: "#FCF4E0",
          200: "#FAE9C0",
          300: "#F7DEA0",
          400: "#F5D480",
          500: "#FCEDC7", // Original color
          600: "#DFC2A0",
          700: "#B39B80",
          800: "#806F60",
          900: "#544A40",
        },
        fourth: {
          50: "#F7F7F7",
          100: "#EDEDED",
          200: "#D6D6D6",
          300: "#C0C0C0",
          400: "#AAAAAA",
          500: "#ADADAD", // Original color
          600: "#8E8E8E",
          700: "#707070",
          800: "#525252",
          900: "#363636",
        },
        fifth: {
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#FFFFFF", // Original color
          600: "#F2F2F2",
          700: "#E6E6E6",
          800: "#D9D9D9",
          900: "#CCCCCC",
        },
      },
    },
  },
  plugins: [],
};
