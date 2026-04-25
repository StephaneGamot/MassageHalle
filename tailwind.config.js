/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-title)'],
        body: ['var(--font-body)'],
      },
      colors: {
        'blanc-casse': '#FAFAF7',
        beige: { DEFAULT: '#F3EDE4', dark: '#E8E0D4' },
        or: { DEFAULT: '#B8976A', light: '#D4BA91', dark: '#9A7B52' },
        'vert-sauge': '#7A9A7E',
        'vert-foret': { DEFAULT: '#1B3A2D', light: '#24503B' },
        charbon: '#2A2A2A',
        'gris-chaud': '#8A8A82',
        'gris-clair': '#C8C5BE',
      },
      spacing: {
        '18': '4.5rem',
      },
    },
  },
  plugins: [],
}
