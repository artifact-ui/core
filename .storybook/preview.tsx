import React from 'react';
import { ArtifactProvider } from '../src/ArtifactProvider';
import type { Theme, Accent } from '../src/ArtifactProvider';
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
	},
	decorators: [
		(Story, context) => {
			const theme = (context.globals.theme || 'light') as Theme;
			const accent = (context.globals.accent || 'default') as Accent;

			// Apply theme/accent to body for Radix portal content
			React.useEffect(() => {
				document.body.setAttribute('data-theme', theme);
				document.body.setAttribute('data-accent', accent);
				document.body.style.backgroundColor = 'var(--color-bg-default)';
				document.body.style.color = 'var(--color-text-default)';
				document.body.style.margin = '0';
			}, [theme, accent]);

			return (
				<ArtifactProvider theme={theme} accent={accent}>
					<Story />
				</ArtifactProvider>
			);
		},
	],
};

export default preview;
