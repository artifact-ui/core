import React from 'react';
import { ArtifactProvider } from '../src/artifact-provider';
import type { Theme, Accent, Radius } from '../src/artifact-provider';
import '../src/index';

const preview = {
	parameters: {
		layout: 'centered',
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	globalTypes: {
		theme: {
			defaultValue: 'light',
			toolbar: {
				title: 'Theme',
				items: ['light', 'dark'],
				dynamicTitle: true,
			},
		},
		accent: {
			defaultValue: 'default',
			toolbar: {
				title: 'Accent',
				items: ['default', 'sage'],
				dynamicTitle: true,
			},
		},
		radius: {
			defaultValue: 'medium',
			toolbar: {
				title: 'Radius',
				items: ['none', 'small', 'medium', 'large', 'full'],
				dynamicTitle: true,
			},
		},
	},
	decorators: [
		(Story, context) => {
			const theme = (context.globals.theme || 'light') as Theme;
			const accent = (context.globals.accent || 'default') as Accent;
			const radius = (context.globals.radius || 'medium') as Radius;

			// Apply theme/accent/radius to body for Radix portal content
			React.useEffect(() => {
				document.body.setAttribute('data-theme', theme);
				document.body.setAttribute('data-accent', accent);
				document.body.setAttribute('data-radius', radius);
				document.body.style.backgroundColor = 'var(--color-bg-default)';
				document.body.style.color = 'var(--color-text-default)';
				document.body.style.margin = '0';
			}, [theme, accent, radius]);

			return (
				<ArtifactProvider theme={theme} accent={accent} radius={radius}>
					<Story />
				</ArtifactProvider>
			);
		},
	],
};

export default preview;
