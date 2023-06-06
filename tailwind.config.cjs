function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#0D0D0D",
        "dark-50": "#131313",
        "dark-100": "#1A1A1A",
        "dark-200": "#242424",
        "dark-300": "#2E2E2E",
        "dark-400": "#383838",
        "dark-500": "#424242",
        "dark-600": "#4C4C4C",
        "dark-700": "#565656",
        "dark-800": "#606060",
        "dark-900": "#6A6A6A",
        gray: "#808080",
        "gray-100": "#999999",
        "gray-200": "#B3B3B3",
        "gray-300": "#CCCCCC",
        "gray-400": "#E6E6E6",
        "gray-500": "#F2F2F2",
        gold: "#fbc119",
        "gold-100": "#f9b84c",
        "gold-200": "#f8ad3e",
        "gold-300": "#f7a22f",
        "gold-400": "#f69721",
        "gold-500": "#f58c12",
      },
      dropShadow: {
        yellow: ["0 35px 35px rgba(250, 193, 25, 0.5)"],
        yellowalt: ["0 4px 12px rgba(250, 193, 25, 0.8)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
