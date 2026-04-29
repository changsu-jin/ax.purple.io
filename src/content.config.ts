import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['기획 중', '진행 중', '운영 중']),
    category: z.enum(['internal', 'opensource', 'external']).default('internal'),
    tags: z.array(z.string()),
    approach: z.string().optional(),
    repo: z.string().optional(),
    owner: z.object({
      name: z.string(),
      avatar: z.string().optional(),
      blog: z.string().optional(),
    }).optional(),
    contributors: z.array(z.object({
      name: z.string(),
      avatar: z.string().optional(),
    })).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { projects, blog };
