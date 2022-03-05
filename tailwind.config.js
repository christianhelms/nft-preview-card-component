module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': '#0d1a2d', //main background
      'darkish-blue': '#15273f', //card background
      'dark-gray':'#8299ba', // body text
      'mint-blue':'#41e5ed', //price
      'very-dark-gray':'#293b53', //line
      'white':'#FFFFFF'
    },
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
