// @ts-check
import sitemap from '@astrojs/sitemap'
import playformCompress from '@playform/compress'
import tailwindcss from '@tailwindcss/vite'
import astroLLMsGenerator from 'astro-llms-generate'
import { defineConfig } from 'astro/config'

const SITE_URL = import.meta.env.DEV ? 'http://localhost:4321' : 'https://ronaldtorrez.com'

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
		})
	]
})
