/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #B7E0FF 0%, #FFCFB3 100%, #B03052 0%)',
        'button-gradient': 'linear-gradient(90deg, #B03052 32%, #D76C82 78%)',
      },
    },
  },
  plugins: [],
}

