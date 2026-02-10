import { collection, config, fields, singleton } from "@keystatic/core";
import { getEntry } from "astro:content";

const settings = await getEntry("settings", "settings");

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    blog: collection({
      label: "Blog",
      slugField: "title",
      columns: ["title", "pubDate", "updatedDate"],
      path: "src/content/blog/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: { isRequired: true },
          },
          validation: { isRequired: true },
        }),
        category: fields.select({
          label: "Kategoria",
          defaultValue: settings.data.categories[0],
          options: settings.data.categories.map((category) => ({
            value: category,
            label: category,
          })),
        }),
        author: fields.select({
          label: "Autor",
          defaultValue: "Udrażnianie kanalizacji Warszawa",
          options: [
            {
              label: "Udrażnianie kanalizacji Warszawa",
              value: "Udrażnianie kanalizacji Warszawa",
            },
          ],
        }),
        description: fields.text({
          label: "Description",
          validation: { length: { max: 220 }, isRequired: true },
        }),
        keywords: fields.text({
          label: "Keywords",
          validation: { length: { max: 200 }, isRequired: true },
        }),
        articleHeadline: fields.text({ label: "Article Headline" }),
        articleDescription: fields.text({ label: "Article Description" }),
        readingTime: fields.number({
          label: "Reading Time",
          defaultValue: 0,
          step: 1,
        }),
        hero: fields.image({
          label: "Hero image",
          directory: "src/assets/images/blog",

          // Use the @assets path alias
          publicPath: "@assets/images/blog/",
          options: {},
          validation: { isRequired: true },
        }),
        heroTitle: fields.text({
          label: "Hero title",
        }),
        heroLead: fields.text({
          label: "Hero lead",
        }),
        heroAlt: fields.text({
          label: "Hero image alt",
        }),
        heroCaption: fields.text({
          label: "Hero caption",
        }),
        pubDate: fields.datetime({
          label: "Data publikacji",
          validation: {
            isRequired: true,
          },
        }),
        updatedDate: fields.datetime({
          label: "Data aktualizacji",
        }),
        content: fields.mdx({
          label: "Content",
          options: {
            image: {
              directory: "src/assets/images/blog",

              // Use the @assets path alias
              publicPath: "@assets/images/blog/",
            },
          },
        }),
      },
    }),
    reviews: collection({
      label: "Opinie",
      slugField: "author",
      columns: ["location", "rating", "date"],
      path: "src/content/reviews/*",
      format: { contentField: "content" },
      schema: {
        author: fields.slug({
          name: {
            label: "Autor",
            description: "Klient wystawiający opinie",
          },
          slug: {
            label: "slug",
          },
        }),
        rating: fields.number({
          label: "Ocena",
          description: "W zakresie 0 - 5",
          defaultValue: 5,
          step: 0.5,
          validation: {
            max: 5,
            min: 0,
          },
        }),
        date: fields.datetime({
          label: "Data publikacji",
          validation: {
            isRequired: true,
          },
        }),
        location: fields.select({
          label: "Lokalizacja",
          description: "Lokalizacja klienta",
          defaultValue: settings.data.locations[0],
          options: settings.data.locations.map((location) => ({
            value: location,
            label: location,
          })),
        }),
        content: fields.mdx({
          label: "Content",
          description: "Treść opinii klienta",
        }),
      },
    }),
  },

  singletons: {
    settings: singleton({
      label: "Settings",
      path: "src/content/settings/settings",
      schema: {
        title: fields.text({
          label: "Site Title",
          validation: {
            isRequired: true,
          },
        }),
        description: fields.text({
          label: "Site Description",
          validation: { length: { max: 200 }, isRequired: true },
        }),
        phone: fields.text({
          label: "Numer telefonu",
          validation: {
            length: 9,
          },
        }),
        email: fields.text({
          label: "Site Email",
        }),
        reviewsLimit: fields.number({
          label: "Liczba opini",
          description:
            "Decyduje o tym ile opinii naraz powinno być wyświetlonych",
        }),
        locations: fields.array(fields.text({ label: "Lokalizacje" }), {
          label: "Lokacja",
          itemLabel: (props) => props.value,
        }),
        categories: fields.array(fields.text({ label: "Kategorie" }), {
          label: "Kategorie",
          itemLabel: (props) => props.value,
        }),
      },
    }),
  },
});
