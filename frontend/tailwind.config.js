/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0f172a',
        'bg-secondary': '#1e293b',
        'accent-primary': '#3b82f6',
        'accent-secondary': '#8b5cf6',
      }
    },
  },
  plugins: [],
}
