/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}',
    './node_modules/vue-window/dist/**/*.{vue,js,ts}', // 这一行
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
