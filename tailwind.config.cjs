/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#32d355",

          secondary: "#ba4a09",

          accent: "#456fc1",

          neutral: "#131720",

          "base-100": "#F2F2F8",

          info: "#6EC3DD",

          success: "#35D497",

          warning: "#E9BC25",

          error: "#FA0A42",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
