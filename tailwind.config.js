/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}", "./index.html"],
  theme: {
    extend: {
      screens: {
        sm: { max: "580px" },
        md: { max: "780px" },
        lg: { max: "1024px" },
        xl: { max: "1280px" },
        "2xl": { min: "1536px" },
      },
      colors: {
        primary: "#0f172a",
      },
    },
  },
  plugins: [],
};
