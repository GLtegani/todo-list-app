/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', '"sans-serif"']
      },
      colors: {
        primary: {
          light: '', // cor primária para light mode
          dark: '#f9fafb',  // cor primária para dark mode
        },
        background: {
          light: '#ffffff', // cor de fundo para light mode
          dark: '#1a202c',  // cor de fundo para dark mode
        },
        text: {
          light: '#000000', // cor do texto para light mode
          dark: '#f9fafb',  // cor do texto para dark mode
        },
      },
    },
  },
  plugins: [],
}

