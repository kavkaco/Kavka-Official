// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
    schema: z.object({
        draft: z.boolean(),
        title: z.string(),
        snippet: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        publishDate: z.string().transform((str) => new Date(str)),
        author: z.string().default("Astroship"),
        category: z.string(),
        tags: z.array(z.string()),
    }),
});

const teamCollection = defineCollection({
    schema: z.object({
        name: z.string(),
        title: z.string(),
        github_username: z.string(),
        socials: z.object({
            mastodon: z.string().optional(),
            twitter: z.string().optional(),
            donate: z.string().optional(),
            telegram: z.string().optional(),
        }),
    }),
});

export const collections = {
    blog: blogCollection,
    team: teamCollection,
};
