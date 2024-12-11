/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        circle: {
          '0%': {
            background: 'linear-gradient(to right, #D0236C, #9D1B51, #6A1237)',
            color: 'white',
            // borderTop: '4px solid transparent',
            // borderBottom: '4px solid transparent',
            // borderLeft: '4px solid transparent',
            // borderRight: '4px solid transparent',
          },
          '100%': {
            background: 'linear-gradient(black, #141414, #1b1b1b)',
            color: 'white',
            borderTop: '4px solid #FF0000',
            borderBottom: '4px solid #00D500',
            borderLeft: '4px solid #FF9933',
            borderRight: '4px solid #12C2E9',
          },
        },
      },
      maxWidth:{
        'custom': '1400px',
      },
      animation: {
        circle: 'circle 1.5s infinite', // animation duration and iteration
      },
      colors:{
        'blood':'#ff0000',
        'blood2':'#CC0000',
        'blood3':'#990000',
        'blood4':'linear-gradient(90deg, #ff0000, #CC0000, #990000)',
         'oceanBlue':'#0C92CC'
            
      },
      backgroundImage: {
        'blood-gradient': 'linear-gradient(90deg, #ff0000, #CC0000, #990000)',
      },
      
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".option-hover": {
          "& option:hover": {
            backgroundColor: "#ff0000", // Set your desired hover background color
            color: "#ffffff",          // Set your desired hover text color
          },
        },
      });
    }),
  ],
}

