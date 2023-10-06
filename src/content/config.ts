import { z, defineCollection } from "astro:content";

const jobCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.string(),
    href: z.string().optional(),
  }),
});

const skillCollection = defineCollection({
  type: "content",
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
