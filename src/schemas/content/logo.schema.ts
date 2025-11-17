import { StringNoNSchema, StringSchema } from '@schemas/string.ts'
import { HEXADECIMAL_COLOR_REGEX } from '@utils/const.ts'
import { z } from 'astro:content'

const LogoPath = 'src/assets/logos/'

export const LogoCollectionsSchema = z.object({
	name: StringNoNSchema,
	files: z.object({
		default: StringNoNSchema.transform(val => LogoPath + val).optional(),
		dark: StringNoNSchema.transform(val => LogoPath + val).optional()
	}),
	colors: z.object({
		primary: z.string().regex(HEXADECIMAL_COLOR_REGEX),
		secondary: z.string().regex(HEXADECIMAL_COLOR_REGEX).optional()
	}),
	website: StringSchema.url().optional()
})
