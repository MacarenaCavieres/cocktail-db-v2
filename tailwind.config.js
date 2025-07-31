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
                footer: "#A68B03",
                spanFooter: "#EEEEEE",
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
            dropShadow: {
                custom: "0 0 5px rgba(245, 125, 31, 0.7)",
                "name-footer": "0 0 7px rgba(0, 191, 255, 0.7)",
            },
            animation: {
                blink: "blink 1s ease-in-out infinite",
            },
            keyframes: {
                blink: {
                    "0%, 100%": { opacity: 1, transform: "scale(1)" },
                    "50%": { opacity: 0.1, transform: "scale(1.05)" },
                },
            },
        },
    },
    plugins: [],
};
