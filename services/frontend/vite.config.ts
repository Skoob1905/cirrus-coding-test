import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// @ts-ignore
const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Add an alias for the "components" directory
      components: resolve(root, "components"),
      hooks: resolve(root, "hooks"),
      utils: resolve(root, "utils"),
      views: resolve(root, "views"),
      types: resolve(root, "types"),
    },
  },
});
