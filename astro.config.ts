import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";
import robotsTxt from "astro-robots-txt";
import minify from "./astro-integrations/minify";

import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://xhyrom.dev/",
  //prepisat uwu
  integrations: [
    tailwind(),
    image(),
    sitemap(),
    compress({
      svg: false,
      html: false,
    }),
    prefetch(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
        },
      ],
      sitemap: true,
    }),
    minify(),
  ],
  vite: {
    resolve: {
      alias: {
        "~": resolve(__dirname, "./src"),
        "@docs": resolve(__dirname, "./docs"),
        "@pages": resolve(__dirname, "./src/pages"),
        "@assets": resolve(__dirname, "./src/assets"),
        "@scripts": resolve(__dirname, "./src/scripts"),
        "@layouts": resolve(__dirname, "./src/layouts"),
        "@components": resolve(__dirname, "./src/components"),
      },
    },
  },
});
