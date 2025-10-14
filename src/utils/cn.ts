// Utility function to conditionally join CSS class names
// Filters out falsy values and joins the remaining strings with spaces

// Example: cn('base-class', isActive && 'active', 'another-class')
// Returns: "base-class active another-class" (if isActive is true)

export const cn = (...classes: (string | undefined | null | false)[]): string =>
	classes.filter(Boolean).join(' ');
