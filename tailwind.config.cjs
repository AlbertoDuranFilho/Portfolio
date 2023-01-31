/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#181821',
        backgroundlight: '#D9D9D9',
        primary: '#00ADC9',
        secundary: '#212121',
        text: '#F5F5F5'
      },
      backgroundImage: {
        'montes-site': "url('./assets/montes-site.png')",
        'vlc-site': "url('./assets/vlc-site.png')",
      },
      fontFamily: {
        'russo-one': ['Russo One', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
