/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-black': '#1a1a1a',
      },
    },
    screens: {
      xs: '550px',    // 👈 Now correctly placed inside theme
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}
