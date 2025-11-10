import { LogoCollectionsSchema } from '@schemas/content/logo.schema.ts'
import { ProjectCollectionsSchema } from '@schemas/content/project.schema.ts'
import { file, glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'

export const logoCollection = defineCollection({
	loader: file('./src/assets/logos/content.json', { parser: text => JSON.parse(text).logos }),
	schema: LogoCollectionsSchema
})

const projectCollection = defineCollection({
	loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
	schema: ProjectCollectionsSchema
})

export const collections = {
	projects: projectCollection,
	logos: logoCollection
}
