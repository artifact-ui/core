export const PALETTE_NAMES = [
	'tidytrek',
	'earth-tones',
	'southwest',
	'atlas',
	'colorado',
	'arctic',
] as const;

// extracts array values into a union type: "atlas" | "earth-tones" | "tidytrek"
export type PaletteName = (typeof PALETTE_NAMES)[number];

export const DEFAULT_PALETTE: PaletteName = 'tidytrek';

export const paletteList = [
	'palette-01',
	'palette-02',
	'palette-03',
	'palette-04',
	'palette-05',
	'palette-06',
	'palette-07',
	'palette-08',
] as const;
// as const makes this "read only" and only accepts these palette string values

export type PaletteColor = (typeof paletteList)[number];
