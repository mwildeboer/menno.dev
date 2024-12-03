import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const jobCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/job" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    href: z.string().optional(),
  }),
});

const skillCollection = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/skill" }),
  schema: z.object({
    title: z.string(),
    image: z.string(),
    href: z.string().optional(),
  }),
});

export const collections = {
  job: jobCollection,
  skill: skillCollection,
};
