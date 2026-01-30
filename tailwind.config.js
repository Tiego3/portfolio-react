/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Calm indigo/violet accent (avoid loud neon)
        accent: {
          DEFAULT: "#7C7CF8", // primary accent
          50: "#F4F4FF",
          100: "#E8E8FF",
          200: "#CFCFFF",
          300: "#B3B3FF",
          400: "#7C7CF8",
          500: "#6363E9",
          600: "#4F4FCC",
          700: "#3E3EA8",
          800: "#2F2F82",
          900: "#23235F",
        },
      },
      borderRadius: {
        xl: "14px",
        "2xl": "18px",
      },
      boxShadow: {
        // tasteful shadows
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)",
        lift: "0 18px 45px rgba(2, 6, 23, 0.14)",
      },
    },
  },
  plugins: [],
};
