import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { execSync } from "child_process";
import fs from "fs";

// https://astro.build/config
export default defineConfig({
  site: "https://udraznianiekanalizacji.eu/",
  build: {
    format: "file",
  },
  integrations: [
    mdx(),
    sitemap({
      changefreq: "daily",
      serialize(item) {
        try {
          const url = new URL(item.url);
          let path = url.pathname.replace(/\/$/, "");
          if (path.startsWith('/')) path = path.slice(1);

          let file = "";
          // 1. Strona główna
          if (path === "") {
            file = "src/pages/index.astro";
          } 
          // 2. Blog
          else if (path.startsWith('blog/')) {
            file = `src/content/blog/${path.replace('blog/', '')}.mdx`;
          } 
          // 3. Pozostałe podstrony
          else {
            const pathAstro = `src/pages/${path}.astro`;
            const pathIndex = `src/pages/${path}/index.astro`;
            file = fs.existsSync(pathAstro) ? pathAstro : (fs.existsSync(pathIndex) ? pathIndex : "");
          }

          if (file && fs.existsSync(file)) {
            // Pobieranie daty z historii Git
            const gitDate = execSync(`git log -1 --format=%cI -- "${file}"`).toString().trim();
            if (gitDate) {
              item.lastmod = gitDate;
              return item;
            }
          }
        } catch (e) {
          // W razie błędu przejdzie do domyślnej daty poniżej
        }
        
        // Data zapasowa (dzisiejsza, jeśli plik nie został znaleziony w Git)
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
    react(),
  ],
});
