/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.32)",
          "200": "rgba(255, 255, 255, 0.16)",
          "300": "rgba(255, 255, 255, 0.72)",
          "400": "rgba(255, 255, 255, 0.24)",
          "500": "rgba(255, 255, 255, 0.08)",
        },
        gold: { "100": "#fac211", "200": "#f9c213" },
        lightseagreen: "#42bdac",
        goldenrod: "#d4a829",
      },
      fontFamily: {
        "proxima-nova": "'Proxima Nova'",
        arial: "Arial",
        poppins: "Poppins",
      },
      borderRadius: { "3xs": "10px", "81xl": "100px" },
    },
    fontSize: { base: "16px", "3xs-4": "9.4px", sm: "14px", "25xl": "44px" },
  },
  corePlugins: { preflight: false },
};
