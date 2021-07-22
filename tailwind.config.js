module.exports = {
   mode: "jit",
   purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
   darkMode: false, // or 'media' or 'class'
   theme: {
      extend: {
         colors: {
            amazon_blue: {
               light: "#232F3E",
               lighter: "#334152",
               hover: "#3e4b5c",
               DEFAULT: "#131921",
            },
         },
      },
   },
   variants: {
      extend: {},
   },
   plugins: [require("@tailwindcss/line-clamp")],
};
