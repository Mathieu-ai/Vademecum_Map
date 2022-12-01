/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/assets/pattern-bg.png')",
                'footer-texture': "url('/img/footer-texture.png')",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
        require("prettier-plugin-tailwindcss")
    ],
};
