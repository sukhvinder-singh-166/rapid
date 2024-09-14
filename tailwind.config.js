/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
        },
      },
      colors: {
        skin: "#b36b64",
        blue: "#231e39",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        soehne: ["soehne", "sans-serif"],
      },
      fontSize: {
        xxs: "12px",
        xm: "13px",
        xs: "15px",
        "2xs": "24px",
        "custom-3xl": "30px",
        "custom-4xl": "40px",
        "custom-8xl": "80px",
        "custom-12xl": "120px",
      },
    },
  },
  plugins: [],
};
