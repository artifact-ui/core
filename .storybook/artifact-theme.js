import { create } from 'storybook/theming/create';

export default create({
	base: 'dark',

	fontBase:
		'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
	fontCode: 'ui-monospace, "SF Mono", "Cascadia Code", "Courier New", monospace',

	brandTitle: 'Artifact UI',
	brandUrl: 'https://artifact-ui.com',
	brandImage: '/artifact-ui-logo.svg',
	brandTarget: '_self',

	colorPrimary: '#9ca3af', // gray-400
	colorSecondary: '#6b7280', // gray-500
});
