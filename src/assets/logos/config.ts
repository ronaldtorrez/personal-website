import { StringNoNSchema, StringSchema } from '@schemas/string.ts'
import { HEXADECIMAL_COLOR_REGEX } from '@utils/const.ts'
import { defineCollection, z } from 'astro:content'
import { file } from 'astro/loaders'

const Schema = z.object({
	name: StringNoNSchema,
	file: StringNoNSchema,
	colors: z.object({
		primary: z.string().regex(HEXADECIMAL_COLOR_REGEX),
		secondary: z.string().regex(HEXADECIMAL_COLOR_REGEX).optional()
	}),
	website: StringSchema.url().optional()
})

export const logoCollection = defineCollection({
	loader: file('src/assets/logos/content.json', { parser: text => JSON.parse(text).logos }),
	schema: Schema
})
