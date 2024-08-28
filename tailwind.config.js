/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primry: "#2980f1",
      secondary: "#8987A1",
      white: "#FFFFFF",
      black: "#000000",
      blue: "#3FA2F6",
      yellow: "#FEA500",
      charleston: "#252432",
      back: "#A8D0FE",
    },
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to bottom, #FCEEF9, #FAFAFF)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("daisyui")],
};
