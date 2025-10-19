'use client';

import React, { useLayoutEffect } from 'react';

export type Theme = 'light' | 'dark';
export type Accent =
	| 'obsidian'
	| 'sage'
	| 'twilight'
	| 'canopy'
	| 'blush'
	| 'clay'
	| 'amber'
	| 'crimson'
	| 'patina'
	| 'meridian';
export type Radius = 'none' | 'small' | 'medium' | 'large' | 'full';

export interface ArtifactProviderProps {
	children: React.ReactNode;
	theme?: Theme;
	accent?: Accent;
	radius?: Radius;
	storageKey?: string;
}

export const ArtifactProvider = ({
	children,
	theme,
	accent = 'obsidian',
	radius = 'medium',
	storageKey = 'artifact-theme',
}: ArtifactProviderProps) => {
	useLayoutEffect(() => {
		const stored = localStorage.getItem(storageKey) as Theme | null;
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';

		const resolvedTheme = theme ?? stored ?? systemTheme;

		document.documentElement.setAttribute('data-theme', resolvedTheme);
		document.documentElement.setAttribute('data-accent', accent);
		document.documentElement.setAttribute('data-radius', radius);

		if (theme) {
			localStorage.setItem(storageKey, theme);
		}
	}, [theme, accent, radius, storageKey]);

	return <>{children}</>;
};
