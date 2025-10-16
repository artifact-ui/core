// Convert number to CSS pixels or return string value as-is
export const toStyleUnit = (value: string | number): string => {
	return typeof value === 'number' ? `${value}px` : value;
};
