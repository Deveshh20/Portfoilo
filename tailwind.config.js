/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      gradientColorStops: theme => ({
        'transparent': 'transparent',
        'primary': theme('colors.primary'),
        'secondary': theme('colors.secondary'),
      }),
      linearGradientColors: theme => ({
        'primary-gradient': [theme('colors.primary'), theme('colors.transparent')],
        'secondary-gradient': [theme('colors.secondary'), theme('colors.transparent')],
      }),
      safelist: ['animate-[fade-in_1s_ease-in-out]', 'animate-[fade-in-down_1s_ease-in-out]'],
      colors: {
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          100: "#AFB2BF",
          200: "#999DAA",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
        blue: {
          100: "#47A5C5",
        },
        pink: {
          200: "#EF476F",
        },
        yellow: {
          50: "#FFD60A",
        },
      },
    },
  },
  plugins: [],
}