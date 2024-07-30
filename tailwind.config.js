/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2845e9",
        white: "#ffff",
        verylightblue: "#eceff6",
        pastelshadeblue: "#e2e6ff",
        periwinkle: "#D4DBF5",
        grey: "#e6eefe",
        darkblue: "#09152f",
        darkblue2: "#0a152b",
      },
    },
  },
  plugins: [],
};
