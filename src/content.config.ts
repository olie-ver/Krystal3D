import { defineCollection } from 'astro:content';
import { z } from "astro/zod";
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/markdown/projects" }),
  schema: ({ image }) => z.object({
        title: z.string(),
        status: z.string(),
        version: z.string(),
        contributors: z.array(z.string()),
        openSource: z.string(),
        license: z.string(),
        startDate: z.date(),
        lastUpdated: z.date(),
        repo: z.string(),
        img: z.object({
            src: image(),
            alt: z.string()
        }),
        tags: z.array(z.string()),
        svg: z.boolean()
    })
});

export const collections = { projects };