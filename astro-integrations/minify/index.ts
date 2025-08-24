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
          if (!route.distURL) continue;

          const content = await readFile(fileURLToPath(route.distURL), "utf-8");
          const minified = minify(content, {
            removeAttributeQuotes: true,
            collapseWhitespace: true,
            minifyCSS: true,
            html5: true,
            removeComments: true,
            minifyJS: true,
            minifyURLs: true,
          });

          await writeFile(fileURLToPath(route.distURL!), minified, "utf-8");
          console.log(`Minified ${route.distURL!.pathname}`);
        }
      },
    },
  };
};
