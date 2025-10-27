import eslintParserTypeScript from '@typescript-eslint/parser'
import eslintParserAstro from 'astro-eslint-parser'
import { includeIgnoreFile } from '@eslint/compat'
import { tailwind4 } from 'tailwind-csstree'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import { fileURLToPath } from 'node:url'
import markdown from '@eslint/markdown'
import json from '@eslint/json'
import css from '@eslint/css'
import globals from 'globals'
import js from '@eslint/js'

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url))

export default defineConfig([
	includeIgnoreFile(gitignorePath, 'Imported .gitignore patterns'),

	{
		files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
		plugins: { js },
		extends: ['js/recommended'],
		languageOptions: { globals: globals.browser }
	},

	tseslint.configs.recommended,

	{
		files: ['**/*.json'],
		plugins: { json },
		language: 'json/json',
		extends: ['json/recommended']
	},
	{
		files: ['**/*.md'],
		plugins: { markdown },
		language: 'markdown/commonmark',
		extends: ['markdown/recommended']
	},
	{
		files: ['**/*.css'],
		plugins: { css },
		language: 'css/css',
		extends: ['css/recommended'],
		languageOptions: {
			customSyntax: tailwind4
		}
	},
	{
		files: ['**/*.astro'],
		languageOptions: {
			parser: eslintParserAstro,
			parserOptions: {
				parser: eslintParserTypeScript
			}
		}
	}
])
