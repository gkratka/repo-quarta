/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#013220',
          light: '#0B3D2E',
          dark: '#011a13',
          pine: '#1A4D3D',
          hunter: '#254E3E',
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