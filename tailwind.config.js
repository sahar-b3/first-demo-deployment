/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: "'Playfair Display', serif;",
        poppins: "'Poppins', sans-serif;",
      },
    },
  },
  plugins: [],
};
