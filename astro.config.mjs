// @ts-check
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import playformCompress from '@playform/compress'
import tailwindcss from '@tailwindcss/vite'
import astroLLMsGenerator from 'astro-llms-generate'
import { defineConfig } from 'astro/config'

const SITE_URL = import.meta.env.PROD ? 'https://ronaldtorrez.com' : 'http://localhost:4321'

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,

	vite: {
		plugins: [tailwindcss()]
	},

	integrations: [
		playformCompress(),
		astroLLMsGenerator(),
		sitemap({
			customPages: [`${SITE_URL}/llms.txt`, `${SITE_URL}/llms-small.txt`, `${SITE_URL}/llms-full.txt`]
		}),
		mdx()
	]
})
