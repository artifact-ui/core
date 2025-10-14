import type { Meta, StoryObj } from '@storybook/react';
import * as TextField from './textfield';

const meta = {
	title: 'Artifact/TextField',
	component: TextField.Standalone,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof TextField.Standalone>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: {
		placeholder: 'Enter your text...',
		variant: 'default',
	},
};

export const Minimal: Story = {
	args: {
		placeholder: 'Minimal input',
		variant: 'minimal',
	},
};

export const Examples: Story = {
	render: () => (
		<div
			style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
			{/* Variants */}
			<TextField.Standalone placeholder="Default variant" variant="default" />
			<TextField.Standalone placeholder="Minimal variant" variant="minimal" />

			{/* States */}
			<TextField.Standalone placeholder="Error state" variant="default" error />
			<TextField.Standalone placeholder="Disabled state" variant="default" disabled />

			{/* Sizes */}
			<TextField.Standalone placeholder="Size 1 (small)" variant="default" size="1" />
			<TextField.Standalone placeholder="Size 2 (default)" variant="default" size="2" />
			<TextField.Standalone placeholder="Size 3 (large)" variant="default" size="3" />
			<TextField.Standalone placeholder="Size 4 (xl)" variant="default" size="4" />

			{/* Compact */}
			<TextField.Standalone
				placeholder="Compact default"
				variant="default"
				size="2"
				compact
			/>

			{/* Radius */}
			<TextField.Standalone placeholder="Radius 1" variant="default" radius="1" />
			<TextField.Standalone placeholder="Radius 2" variant="default" radius="2" />
			<TextField.Standalone placeholder="Radius 3" variant="default" radius="3" />
		</div>
	),
};
