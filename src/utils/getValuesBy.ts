export const getValuesBy = <T extends Record<string, unknown>, K extends keyof T>(
	items: readonly T[],
	keys: K | readonly K[]
): T[K][] => {
	const result = new Set<T[K]>()

	const keyArray: readonly K[] = Array.isArray(keys) ? keys : [keys]

	for (const item of items) {
		for (const key of keyArray) {
			if (key in item) {
				result.add(item[key])
			}
		}
	}

	return Array.from(result)
}
