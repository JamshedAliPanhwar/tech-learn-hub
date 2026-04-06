/** @type {import('tailwindcss').Config} */
export default {
  // This is the critical line for your script to work!
  darkMode: 'class', 
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Added this since your script targets a components folder
    "./App.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
