import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './alert';

const meta: Meta<typeof Alert> = {
	title: 'Artifact/Alert',
	component: Alert,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
	args: {
		children: 'Your pack has been updated.',
	},
};

export const Examples: Story = {
	render: () => (
		<div
			style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '500px' }}>
			<Alert variant="success">Pack saved successfully. Total weight: 12.5 lbs.</Alert>
			<Alert variant="error">Unable to add item. Weight exceeds pack limit.</Alert>
			<Alert variant="default">Remember to test your gear before hitting the trail.</Alert>
			<Alert variant="error" size="1">
				Item not found.
			</Alert>
		</div>
	),
};
