/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/assets/BG.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
       }
    },
    
        fontFamily: {
        'body': ['Inter', 'sans-serif'],
        'heading': ["Train One", "system-ui"],
        'body-semibold': ['Inter', 'font-semibold', 'sans-serif'],
        
      },
    
  },
  plugins: [],
}

