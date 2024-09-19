/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
      },
      fontSize: {
        'h1': ['40px', '48px'],
        'h2': ['32px', '48px'],
        'h3': ['24px', '32px'],
        'h4': ['20px', '28px'],
        'body': ['16px', '28px'],
      },
      fontWeight: {
        'h3': '600',
        'h4': '600',
        'link': '600',
      },
      colors: {
        charcoal: '#2C2C2C',
        teal: '#0AB0BF',
        blue: '#0069CE',
        darkTeal: '#00838F',
        orange: '#FF8853',
      },
    },
  },
  plugins: [],
}
