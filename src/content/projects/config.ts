import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const Schema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date(),
	tags: z.array(z.string())
})

export const projectCollection = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
	schema: Schema
})
