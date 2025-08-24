import type { AstroIntegration } from "astro";
import { readdirSync, statSync } from "fs";
import { join, extname, relative, dirname } from "path";
import { fileURLToPath } from "url";
import { createVitePlugin } from "./vite-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function getAllAstroFiles(dir: string, base = dir): string[] {
  const entries = readdirSync(dir);
  let files: string[] = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    if (statSync(fullPath).isDirectory()) {
      files = files.concat(getAllAstroFiles(fullPath, base));
    } else if (extname(fullPath) === ".astro") {
      const rel = relative(base, fullPath);
      files.push(rel);
    }
  }

  return files;
}

export interface CommonIntegrationOptions {
  branding: string;
}

export default (options: CommonIntegrationOptions): AstroIntegration => {
  return {
    name: "hyro:common",
    hooks: {
      "astro:config:setup": async ({ updateConfig, injectRoute }) => {
        const commonPagesDir = join(__dirname, "pages");

        const pages = getAllAstroFiles(commonPagesDir);

        for (const page of pages) {
          injectRoute({
            pattern: page.replace(/\.astro$/, ""),
            entrypoint: join(commonPagesDir, page),
          });
        }

        updateConfig({
          vite: {
            plugins: [createVitePlugin(options)],
          },
        });
      },
    },
  };
};
