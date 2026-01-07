import { defineCollection, z } from "astro:content";

const reviews = defineCollection({
  type: "content",
  schema: z.object({
    author: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    rating: z.number().min(0).max(5),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(220),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string(),
      keywords: z.string().max(200),
      articleHeadline: z.string(),
      articleDescription: z.string(),
      hero: image(),
      heroTitle: z.string(),
      heroCaption: z.string(),
      heroLead: z.string(),
      heroAlt: z.string(),
      readingTime: z.number().min(0),
      category: z.string(),
    }),
});
const settings = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    description: z.string().max(220),
    phone: z.string().min(9).max(9),
    email: z.string().email(),
    reviewsLimit: z.number(),
    locations: z.array(z.string()),
    categories: z.array(z.string()),
  }),
});

export const collections = { blog, settings, reviews };
