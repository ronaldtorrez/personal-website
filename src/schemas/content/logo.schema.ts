import { StringNoNSchema, StringSchema } from '@schemas/string.ts'
import { HEXADECIMAL_COLOR_REGEX } from '@utils/const.ts'
import { z } from 'astro:content'

export const LogoCollectionsSchema = z.object({
	name: StringNoNSchema,
	file: z.object({
		default: StringNoNSchema.optional(),
		dark: StringNoNSchema.optional()
	}),
	colors: z.object({
		primary: z.string().regex(HEXADECIMAL_COLOR_REGEX),
		secondary: z.string().regex(HEXADECIMAL_COLOR_REGEX).optional()
	}),
	website: StringSchema.url().optional()
})
