module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-red": "#920808",
        "secondary-redd": "#FF0000",
        accent: "#ff9443",
        primary: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
