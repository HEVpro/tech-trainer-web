module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basico: "#bdbdbd",
        "basico-1": "#1f1c1d",
        "basico-2": "#ff9443",
        "basico-3": "#f2f2f2",
      },
    },
  },
  plugins: [],
};
