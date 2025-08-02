/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                // l’HTML racine
    "./src/**/*.{js,ts,jsx,tsx}",  // tous tes fichiers React/TS
  ],
  theme: {
    extend: {},                    // tu pourras y ajouter des couleurs perso plus tard
  },
  plugins: [],
};
