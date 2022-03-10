module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-grey": "#bdbdbd",
        "secondary-black": "#1f1c1d",
        accent: "#ff9443",
        primary: "#f2f2f2",
      },
    },
  },
  plugins: [],
};
