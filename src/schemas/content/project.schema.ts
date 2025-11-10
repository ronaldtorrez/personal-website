import { reference, z } from 'astro:content'

export const ProjectCollectionsSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date(),
	tags: z.array(z.string()),
	tech: z.array(reference('')).min(1).max(6)
})
