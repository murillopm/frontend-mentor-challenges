module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx"
  ],
  theme: {
    screens: {
      sm: '375px',
    },
    extend: {
      colors: {
        brand: {
          softRed: 'hsl(10, 79%, 65%)',
          softOrange: 'hsl(10, 79%, 77%)',
          cyan: 'hsl(186, 34%, 50%)',
          softCyan: 'hsl(186, 34%, 70%)',
          darkBrown: 'hsl(25, 47%, 15%)',
          mediumBrown: 'hsl(28, 10%, 53%)',
          cream: 'hsl(27, 66%, 92%)',
          veryPaleOrange: 'hsl(33, 100%, 98%)',
        }
      },
      fontFamily: {
        'body': ['"DM Sans"']
      }
    },
  },
  plugins: [],
}