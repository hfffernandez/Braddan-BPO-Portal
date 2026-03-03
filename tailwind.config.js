/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D414E',
        secondary: '#8B7E5B',
        dark: '#1D1D1D',
        light: '#FFFFFF',
        success: '#27AD60',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
      }
    },
  },
  plugins: [],
}
