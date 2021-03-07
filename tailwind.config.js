module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
  
    fontFamily: {
      display: ['Gilroy', 'Arial'],
      body: ['Graphik', 'Arial']
    },
    extend: {
      colors: {
        'primary': '#f3c614',
        'secondary': '#353535'
      },
      backgroundImage: theme => ({
        mainBanner: "url('https://images.unsplash.com/photo-1543373072-69f3d4788832?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80')"
      })
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    fontWeight: ['responsive', 'hover', 'focus', 'disabled'],
    extend: {},
  },
  plugins: [],
}
