/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0b1220',
          800: '#111a2e',
          700: '#1a2640',
          600: '#22304d'
        },
        mist: {
          100: '#f5f7fb',
          200: '#eef2f8'
        },
        ocean: {
          400: '#4f7cff',
          500: '#3566ff',
          600: '#1f4fe0'
        }
      },
      boxShadow: {
        soft: '0 12px 28px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
};
