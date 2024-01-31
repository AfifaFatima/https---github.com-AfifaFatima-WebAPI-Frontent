/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,ts}", // add this line
  "./node_modules/flowbite/**/*.js" // add this line
],
  theme: {
    extend: {
      // width: {
      //   '128': '32rem',
      // }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('flowbite')
  ],
}

