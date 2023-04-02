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
});
