/** @type {import("prettier").Config} */
module.exports = {
  tabs: 2,
  useTabs: false,
  printWidth: 80,
  plugins: ["prettier-plugin-astro", "@ianvs/prettier-plugin-sort-imports"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  importOrder: [
    "^@layouts/(.*)$",
    "^@components/(.*)$",
    "^@assets/(.*)$",
    "",
    "^./(.*)$",
    "^../(.*)$",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
};
