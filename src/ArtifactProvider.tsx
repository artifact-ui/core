import React, { useEffect } from 'react';

export type Theme = 'light' | 'dark';
export type Accent = 'default' | 'sage';

export interface ArtifactProviderProps {
	children: React.ReactNode;
	theme?: Theme;
	accent?: Accent;
}

export const ArtifactProvider = ({
	children,
	theme = 'light',
	accent = 'default',
}: ArtifactProviderProps) => {
	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		document.documentElement.setAttribute('data-accent', accent);
	}, [theme, accent]);

	return <>{children}</>;
};
