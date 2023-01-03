import type { AstroIntegration } from "astro";
import { minify } from "html-minifier";
import { writeFile, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

export default (): AstroIntegration => {
    return {
        name: "hyro-minify",
        hooks: {
            "astro:build:done": async (opts) => {
                for (const route of opts.routes) {
                    const content = await readFile(fileURLToPath(route.distURL!), "utf-8");
                    const minified = await minify(content, {
                        removeAttributeQuotes: true,
                        collapseWhitespace: true,
                        minifyCSS: true,
                        html5: true,
                        removeComments: true,
                        minifyJS: true,
                        minifyURLs: true,
                    });

                    await writeFile(fileURLToPath(route.distURL!), minified, "utf-8");
                    console.log(`Minified ${route.distURL!.pathname}`)
                }
            }
        }
    }
}