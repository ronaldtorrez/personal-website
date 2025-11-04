// @ts-check
import sitemap from '@astrojs/sitemap'

import playformCompress from '@playform/compress'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()]
	},

	integrations: [sitemap(), playformCompress()],

	site: 'https://ronaldtorrez.com'
})
