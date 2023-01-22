/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "Sans-serif"],
      },
      colors: {
        "m-black": "#000000",
        "m-gray": "#6A6A6A",
        "ml-gray": "#EEEEF0",
        "m-white": "#F5F5F7",
        "m-blue": "#1D6CB6",
      },
    },
  },
  plugins: [],
};
