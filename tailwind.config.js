/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wheel: "wheel 2s infinite",
      },
      keyframes: {
        wheel: {
          from: {
            opacity: "0",
            bottom: "10px",
          },
          to: {
            opacity: "1",
            bottom: "40px",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
