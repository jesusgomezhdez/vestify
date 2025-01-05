/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        'primary': '#3D3BF3',
      },
      fontFamily: {
        'outfit-black': ['Outfit-Black', 'sans-serif'],
        'outfit-bold': ['Outfit-Bold', 'sans-serif'],
        'outfit-light': ['Outfit-Light', 'sans-serif'],
        'outfit-medium': ['Outfit-Medium', 'sans-serif']
      }
    },
  },
  plugins: [],
}