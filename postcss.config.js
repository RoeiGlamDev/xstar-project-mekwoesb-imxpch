module.exports = {
  plugins: {
    tailwindcss: {
      theme: {
        extend: {
          colors: {
            pink: {
              light: '#f8d3e0',
              DEFAULT: '#ff6f91',
              dark: '#c74a6b',
            },
            white: '#ffffff',
          },
        },
      },
    },
    autoprefixer: {},
  },
}