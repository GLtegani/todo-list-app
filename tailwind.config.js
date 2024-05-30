/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', '"sans-serif"']
      },
      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        container: "rgba(var(--container))",
        "input-container": "rgba(var(--input-container))",
        "copy-primary": "rgba(var(--copy-primary))",
        "copy-secondary": "rgba(var(--copy-secondary))",
        cta: "rgba(var(--cta))",
        "cta-active": "rgba(var(--cta-active))",
        "cta-text": "rgba(var(--cta-text))",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

