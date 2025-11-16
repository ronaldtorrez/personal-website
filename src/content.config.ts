import { LogoCollectionsSchema } from '@schemas/content/logo.schema.ts'
import { WebsiteCollectionsSchema } from '@schemas/content/website.schema.ts'
import { file, glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

export const logoCollection = defineCollection({
	loader: file('./src/assets/logos/content.json', { parser: text => JSON.parse(text).logos }),
	schema: LogoCollectionsSchema
})

const websiteCollection = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/projects/websites' }),
	schema: WebsiteCollectionsSchema
})

export const collections = {
	websites: websiteCollection,
	logos: logoCollection
}
