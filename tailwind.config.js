/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bubblegum: ['Bubblegum-Sans', 'cursive'],
        patrickHand: ['Patrick-Hand', 'sans-serif'],
        jost: ['Jost-Hand', 'sans-serif'],
      },
      backgroundImage: {
          'graph-light': "url('./images/decorations/graph-light.png')", 
          'graph-dark': "url('./images/decorations/graph-dark.png')",
          'flare-light': "url('./images/decorations/flare-strip-light.png')",
          'dots': "url('./images/decorations/dots.png')",
          'dots-dark': "url('./images/decorations/dots-dark.png')",
      },
      backgroundSize: {
          '1000px' : '1200px',
      }
    },
  },
  plugins: [],
}

