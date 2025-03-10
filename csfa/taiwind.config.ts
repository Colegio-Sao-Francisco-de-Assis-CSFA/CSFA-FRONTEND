import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        csfaBlue: "#486EDB",
        csfaDarkBlue: "#2C3C94",
        csfaNavy: "#121B3D",
        csfaCyan: "#08B0D1",
        csfaPink: "#F6337F",
        csfaLightPink: "#E87EA1",
        csfaYellow: "#FFC826",
        csfaGray: "#E0E0E0",
        csfaWhite: "#FFFFFF",
        csfaBlack: "#000000",
      },
      fontFamily: {
        sans: ["Open Sans"],
      },
    },
  },
  plugins: [],
};

export default config;
