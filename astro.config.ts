import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
import icon from "astro-icon";
import minify from "./astro-integrations/minify";

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: "https://xhyrom.dev/",
  integrations: [
    tailwind(),
    sitemap(),
    compress({
      SVG: false,
      HTML: false,
    }),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
        },
      ],
      sitemap: true,
    }),
    minify(),
    preact(),
    icon(),
  ],
  vite: {
    resolve: {
      alias: {
        "~": resolve(__dirname, "./src"),
        "@docs": resolve(__dirname, "./docs"),
        "@blog": resolve(__dirname, "./blog"),
        "@pages": resolve(__dirname, "./src/pages"),
        "@assets": resolve(__dirname, "./src/assets"),
        "@scripts": resolve(__dirname, "./src/scripts"),
        "@layouts": resolve(__dirname, "./src/layouts"),
        "@components": resolve(__dirname, "./src/components"),
      },
    },
  },
});
