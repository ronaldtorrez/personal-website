import { camelToKebab } from '@utils/case.ts'
import { twMerge } from 'tailwind-merge'

export const getCssPropValue = (el: HTMLElement, property: keyof CSSStyleDeclaration): number => {
	const cssProp = camelToKebab(String(property))
	const raw = getComputedStyle(el).getPropertyValue(cssProp)
	const val = parseFloat(raw)

	return Number.isFinite(val) ? val : 0
}

export const cn = (...classes: Array<string | null | undefined>): string => {
	return twMerge(classes)
}
