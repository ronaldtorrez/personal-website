import { StringNoNSchema } from '@schemas/string.ts'
import { reference, z } from 'astro:content'

export const ProjectCollectionsSchema = z.object({
	title: StringNoNSchema,
	description: StringNoNSchema,
	date: z.coerce.date(),
	videoId: StringNoNSchema,
	backgroundImage: StringNoNSchema,
	url: StringNoNSchema.url().optional(),
	tags: z.array(StringNoNSchema).nonempty(),
	tech: z.array(reference('logos')).nonempty()
})
