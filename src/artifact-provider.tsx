'use client';

import React, { useEffect } from 'react';

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
}

export const ArtifactProvider = ({
	children,
	theme,
	accent = 'obsidian',
	radius = 'medium',
}: ArtifactProviderProps) => {
	useEffect(() => {
		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		} else {
			document.documentElement.removeAttribute('data-theme');
		}

		document.documentElement.setAttribute('data-accent', accent);
		document.documentElement.setAttribute('data-radius', radius);
	}, [theme, accent, radius]);

	return <>{children}</>;
};
