/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ مهم جدًا
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
}
