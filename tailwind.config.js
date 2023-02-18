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
        "ml2-gray": "#99999D",
        "ml3-gray": "#6E6E73",
        "m-white": "#F5F5F7",
        "m-blue": "#1D6CB6",
      },
      backgroundImage: {
        macmini3: "url('../assets/macmini3.jpg')",
        homepod3: "url('../assets/homepodr.jpg')",
        watch3: "url('../assets/watch.jpg')",
        clock3: "url('../assets/clock.jpg')",
        iphone14: "url('../assets/iphone14.jpg')",
        ip: "url('../assets/ip.jpg')",
        promo: "url('../assets/promo.jpg')",
        card: "url('../assets/card.jpg')",
        applecard: "url('../assets/applecard.jpg')",
        pro: "url('../assets/mbpr.jpg')",
      },
      width: {
        "d-width3": "3008px",
        "d-width2": "1068px",
        "d-width": "1068px",
      },
      height: {
        "d-height3": "736px",
      },
    },
  },
  plugins: [],
};
