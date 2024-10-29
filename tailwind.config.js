/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#0A0A0D",
                secondary: "#4F5902",
                tertiary: "#A0A603",
                quaternary: "#ECECEC",
                modal: "#36BA98",
            },
            fontFamily: {
                raleway: ["Raleway", "sans-serif"],
            },
            backgroundImage: {
                header: "url('/bg-header.jpg')",
            },
            backgroundPosition: {
                "position-header": "30% 70%",
            },
            spacing: {
                100: "30rem",
            },
        },
    },
    plugins: [],
};
