/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "991px",
      // => @media (min-width: 991px) { ... }

      lg: "1281px",
      // => @media (min-width: 1281px) { ... }

      xl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        lightblack: "rgba(34, 34, 34, 0.9)",
        drakblue: "#174ee2",
        bgblack: "#444444",
        bglight: "#f8f7f6",
        progressbar: "#e9ecef",
        blk: "rgb(15, 19, 31, 0.77);",
      },
      fontFamily: {
        primary: "'Poppins', sans-serif",
        secondary: "'Playfair Display', serif",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
