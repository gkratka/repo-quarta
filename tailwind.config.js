/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d',
          light: '#2c4a7c',
          dark: '#112845',
        },
        accent: {
          DEFAULT: '#c9a227',
          light: '#e0b93e',
          dark: '#9c7d1d',
        },
        success: {
          DEFAULT: '#0f766e',
          light: '#14b8a6',
          dark: '#0d5a54',
        },
        warning: {
          DEFAULT: '#d97706',
          light: '#f59e0b',
          dark: '#b45309',
        },
        error: {
          DEFAULT: '#b91c1c',
          light: '#ef4444',
          dark: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};