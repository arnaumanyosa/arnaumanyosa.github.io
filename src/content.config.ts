import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const about = defineCollection({
  loader: glob({ pattern: 'about.md', base: './src/content' }),
  schema: z.object({
    completeName: z.string(),
    role: z.string(),
    email: z.email(),
    location: z.string(),
    heroSlogan: z.string(),
    facts: z.array(z.object({ label: z.string(), value: z.string() })),
    socialLinks: z.object({
      linkedin: z.url(),
      github: z.url(),
      dribbble: z.url(),
    }),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    thumbnail: z.string(),
    liveUrl: z.url().optional(),
    techstack: z.array(z.string()),
    period: z.object({
      start: z.string(),
      end: z.string().optional(),
    }),
    roles: z.array(z.string()),
    overview: z.string(),
    outcomes: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

export const collections = { about, projects };
