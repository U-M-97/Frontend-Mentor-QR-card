/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      desktop: "1440px"
    },

    extend: {
      colors: {
        background: "hsl(212, 45%, 89%)",
        cardbg : "hsl(0, 0%, 100%)",
        qrbg : "Dark blue: hsl(218, 44%, 22%)",
        p : "hsl(212, 45%, 89%)",
        l : "black"
      },
    },
  
  },
  plugins: [],
}
