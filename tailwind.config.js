/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        customWhite: "#FEFFF1",
        customBlack: "#09030D",
      },
      cursor: {
        handcursor: "url(/cursor.png) 25 25, pointer",
      },
    },
  },
  plugins: [],
};
