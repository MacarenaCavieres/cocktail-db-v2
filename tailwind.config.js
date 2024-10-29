/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#153448",
                secondary: "#ca8787",
                tertiary: "#10375C",
                quaternary: "#f0f0f0",
            },
            fontFamily: {
                raleway: ["Raleway", "sans-serif"],
            },
        },
    },
    plugins: [],
};
