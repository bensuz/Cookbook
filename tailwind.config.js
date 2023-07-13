/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "bg-cards": "url('./assets/img/bg.jpg')",
            },
        },
    },
    plugins: [],
};
