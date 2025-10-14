import React from 'react';
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
			},
		},
	},
	decorators: [
		(Story, context) => {
			const theme = context.globals.theme || 'light';

			// Apply theme to body for Radix portal content
			React.useEffect(() => {
				document.body.setAttribute('data-theme', theme);
				document.body.style.backgroundColor = 'var(--color-bg-primary)';
				document.body.style.color = 'var(--color-text-primary)';
				document.body.style.margin = '0';
			}, [theme]);

			return (
				<div data-theme={theme}>
					<Story />
				</div>
			);
		},
	],
};

export default preview;
