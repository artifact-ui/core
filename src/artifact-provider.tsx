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
	accent,
	radius,
	storageKey = 'artifact-theme',
}: ArtifactProviderProps) => {
	useLayoutEffect(() => {
		const stored = localStorage.getItem(storageKey) as Theme | null;
		const storedAccent = localStorage.getItem(`${storageKey}-accent`) as Accent | null;
		const storedRadius = localStorage.getItem(`${storageKey}-radius`) as Radius | null;
		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light';

		const resolvedTheme = theme ?? stored ?? systemTheme;
		const resolvedAccent = storedAccent ?? accent ?? 'obsidian';
		const resolvedRadius = storedRadius ?? radius ?? 'medium';

		document.documentElement.setAttribute('data-theme', resolvedTheme);
		document.documentElement.setAttribute('data-accent', resolvedAccent);
		document.documentElement.setAttribute('data-radius', resolvedRadius);

		if (theme) {
			localStorage.setItem(storageKey, theme);
		}
	}, [theme, accent, radius, storageKey]);

	return <>{children}</>;
};
