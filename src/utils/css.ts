import { camelToKebab } from "@utils/case.ts"

export const getCssPropValue = (el: HTMLElement, property: keyof CSSStyleDeclaration): number => {
	const cssProp = camelToKebab(String(property))
	const raw = getComputedStyle(el).getPropertyValue(cssProp)
	const val = parseFloat(raw)

	return Number.isFinite(val) ? val : 0
}
