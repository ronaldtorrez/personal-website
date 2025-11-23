import { StringNoNSchema } from '@schemas/string.ts'
import { reference, z } from 'astro:content'

const ImagePath = '/projects/websites/'

export const WebsiteCollectionsSchema = z.object({
	name: StringNoNSchema,
	shortDescription: StringNoNSchema.optional(),
	date: z.coerce.date(),
	videoId: StringNoNSchema,
	videoThumbnail: StringNoNSchema.transform(val => ImagePath + val),
	backgroundImage: StringNoNSchema.transform(val => ImagePath + val),
	url: StringNoNSchema.url().optional(),
	technologies: z.array(reference('logos')).nonempty()
})
