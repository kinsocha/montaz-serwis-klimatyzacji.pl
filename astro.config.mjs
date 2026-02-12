import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://montaz-serwis-klimatyzacji.pl/",
  integrations: [
    mdx(),
    react(),
  ],
});