/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bright-orange": "#e38826",
        "dark-cyan": "#006970",
        "very-dark-cyan": "	#004241",
        "transparent-white": "	#ffffff",
        "very-light-gray": "	#f2f2f2",
      },
    },
  },
  plugins: [],
};
