<<<<<<< HEAD
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});
=======
import mdx from "@astrojs/mdx";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import keystatic from "@keystatic/astro";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://montaz-serwis-klimatyzacji.pl/",

  integrations: [
    mdx(),
    sitemap({
      lastmod: new Date(),
      changefreq: "daily",
    }),
    react(),
    keystatic(),
  ],
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
>>>>>>> 2abe60c4e209b2913fe1118f5f7e15cc8b38f3c1
