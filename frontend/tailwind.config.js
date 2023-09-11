/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 0px 10px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        lactic: '#f5b157',
        blackk: '#24262b',
        whity: 'rgba(255,255,255,0.2)',
        cute: '#858481',
        yallow: '#ffff3a'
      },
    },
  },
  plugins: [],
}