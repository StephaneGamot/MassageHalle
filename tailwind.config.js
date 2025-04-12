/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './pages/**/*.{js,jsx}', // ← si tu utilises aussi `/pages`
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['var(--font-title)'],
        body: ['var(--font-body)'],
      },
      colors: {
        olive: '#556B2F',
        creme: '#F0EDE5',
        vertclair: '#8FBC8F',
        grisfonce: '#2F4F4F',
        vertpastel: '#BFD8BD',
      },
    },
  },
  plugins: [],
}
