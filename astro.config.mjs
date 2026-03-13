import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import path from "path";

export default defineConfig({
  site: "https://montazklimatyzacjiwarszawa.pl/",
  integrations: [
    mdx(),
    react(),
  ],
  vite: {
    resolve: {
      alias: {
        "@data": path.resolve("./src/data"),
      },
    },
  },
});