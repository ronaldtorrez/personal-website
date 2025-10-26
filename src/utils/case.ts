export const camelToKebab = (text: string): string => text.replace(/[A-Z]/g, (value) => `-${value.toLowerCase()}`)
