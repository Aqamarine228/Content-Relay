/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        mist: '#f4efe8',
        sun: '#ffb347',
        coral: '#ff6b57',
        ocean: '#0d5c63'
      },
      boxShadow: {
        card: '0 24px 80px rgba(15, 23, 42, 0.12)'
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Avenir Next', 'Segoe UI', 'sans-serif']
      }
    }
  },
  plugins: []
};
