import React, { useEffect } from 'react';

export type Theme = 'light' | 'dark';
export type Accent = 'default' | 'sage';
export type Radius = 'none' | 'small' | 'medium' | 'large' | 'full';

export interface ArtifactProviderProps {
	children: React.ReactNode;
	theme?: Theme;
	accent?: Accent;
	radius?: Radius;
}

export const ArtifactProvider = ({
	children,
	theme = 'light',
	accent = 'default',
	radius = 'medium',
}: ArtifactProviderProps) => {
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		document.documentElement.setAttribute('data-accent', accent);
		document.documentElement.setAttribute('data-radius', radius);
	}, [theme, accent, radius]);

	return <>{children}</>;
};
