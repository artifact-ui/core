import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
	title: 'Artifact/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Button',
	},
};

export const Examples: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
			<Button>Primary</Button>
			<Button variant="outline">Outline</Button>
			<Button color="danger">Delete</Button>
			<Button color="info">Info</Button>
			<Button iconLeft="📁">With Icon</Button>
			<Button loading>Loading</Button>
			<Button size="1">Small</Button>
		</div>
	),
};
