/**
 * @license
 * Copyright (c) 2022 Jozef Steinhübl
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <https://www.gnu.org/licenses/>.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "../common/**/*.{astro,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#6A6A6A",
        "dark-50": "#606060",
        "dark-100": "#565656",
        "dark-200": "#4C4C4C",
        "dark-300": "#424242",
        "dark-400": "#383838",
        "dark-500": "#2E2E2E",
        "dark-600": "#242424",
        "dark-700": "#1A1A1A",
        "dark-800": "#131313",
        "dark-900": "#0D0D0D",

        "gray-100": "#F2F2F2",
        "gray-200": "#E6E6E6",
        "gray-300": "#CCCCCC",
        "gray-400": "#B3B3B3",
        "gray-500": "#999999",
        gray: "#808080",

        "gold-100": "#f69721",
        "gold-200": "#f7a22f",
        "gold-300": "#f8ad3e",
        "gold-400": "#f9b84c",
        "gold-500": "#fbc119",
        gold: "#f58c12",
      },
      dropShadow: {
        yellow: ["0 45px 35px rgba(250, 193, 25, 0.5)"],
        yellowalt: ["0 4px 12px rgba(250, 193, 25, 0.8)"],
      },
      typography: {
        DEFAULT: {
          css: {
            th: {
              textAlign: "left",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
