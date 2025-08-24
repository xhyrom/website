import type { Plugin } from "vite";
import type { CommonIntegrationOptions } from "common";

export function createVitePlugin(options: CommonIntegrationOptions): Plugin {
  const virtualModuleId = "virtual:cfg";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "hyro",
    resolveId: (id) => {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load: (id) => {
      if (id !== resolvedVirtualModuleId) return;

      return `export const branding = ${JSON.stringify(options.branding)};`;
    },
  };
}
