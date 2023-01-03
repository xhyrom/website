/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                dark: "#0D0D0D",
                gray: "#131313",
            },
            dropShadow: {
                yellow: ["0 35px 35px rgba(250, 193, 25, 0.5)"],
                yellowalt: ["0 4px 12px rgba(250, 193, 25, 0.8)"],
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography")
    ],
};
