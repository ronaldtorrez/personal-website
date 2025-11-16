import { StringNoNSchema } from '@schemas/string.ts'
import { reference, z } from 'astro:content'

export const WebsiteCollectionsSchema = z.object({
	title: StringNoNSchema,
	description: StringNoNSchema,
	shortDescription: StringNoNSchema.optional(),
	date: z.coerce.date(),
	videoId: StringNoNSchema,
	videoThumbnail: StringNoNSchema,
	backgroundImage: StringNoNSchema,
	url: StringNoNSchema.url().optional(),
	tags: z.array(StringNoNSchema).nonempty(),
	technologies: z.array(reference('logos')).nonempty()
})
