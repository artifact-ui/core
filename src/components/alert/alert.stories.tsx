import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './alert';
import { Stack } from '../layout/stack';

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
		children: 'Your changes have been saved.',
	},
};

export const Examples: Story = {
	render: () => (
		<Stack gap="4" style={{ width: '500px' }}>
			<Alert variant="success" size="1">
				Changes saved successfully.
			</Alert>
			<Alert variant="error" size="2">
				Unable to complete action. Please try again.
			</Alert>
			<Alert variant="default" size="3">
				Remember to save your work before closing.
			</Alert>
		</Stack>
	),
};
