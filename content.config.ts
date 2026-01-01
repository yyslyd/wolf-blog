import { defineCollection, defineContentConfig } from "@nuxt/content";
import { asSeoCollection } from "@nuxtjs/seo/content";
import { asRobotsCollection } from "@nuxtjs/robots/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      ...asRobotsCollection({
        type: "page",
        source: "blogs/**/*.md",
      }),
      ...asSitemapCollection({
        type: "page",
        source: "blogs/**/*.md",
      }),
      ...asSeoCollection({
        type: "page",
        source: "blogs/**/*.md",
      }),
      schema: z.object({
        published: z.boolean(),
        title: z.string(),
        description: z.string(),
        date: z.date(),
        categories: z.array(z.string()),
        tags: z.array(z.string()),
        image: z.string(),
        alt: z.string(),
      }),
      // indexes: [{ columns: ["date"] }],
    }),
    about: defineCollection({
      type: "page",
      source: "about.md",
    }),
  },
});
