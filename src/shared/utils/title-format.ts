export const titleFormat = (str: string): string => {
	if (!str) return ''

	const spacedStr = str.replace(/-/g, ' ')

	return spacedStr.charAt(0).toUpperCase() + spacedStr.slice(1)
}
