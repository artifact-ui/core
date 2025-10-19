import React from 'react';
import { ArtifactProvider } from '../src/artifact-provider';
import type { Theme, Accent, Radius } from '../src/artifact-provider';
import '../src/styles.css';
import './code-theme.css';

const preview = {
	parameters: {
		layout: 'centered',
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: [
					'Getting Started',
					'Foundations',
					'Components',
					'Forms',
					'Data Display',
					'Feedback',
					'Overlay',
					'Navigation',
				],
			},
		},
	},
	initialRoute: '/docs/getting-started--docs',
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
			defaultValue: 'obsidian',
			toolbar: {
				title: 'Accent',
				items: [
					'obsidian',
					'sage',
					'twilight',
					'canopy',
					'blush',
					'clay',
					'amber',
					'crimson',
					'patina',
					'meridian',
				],
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
			const accent = (context.globals.accent || 'obsidian') as Accent;
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
