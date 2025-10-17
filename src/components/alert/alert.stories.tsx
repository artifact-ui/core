import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './alert';
import { Stack } from '../layout/stack';

const meta: Meta<typeof Alert> = {
	title: 'Artifact/Alert',
	component: Alert,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'success', 'error'],
			description: 'Semantic variant',
		},
		size: {
			control: 'select',
			options: ['1', '2', '3'],
			description: 'Size scale',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
	args: {
		variant: 'default',
		size: '2',
		children: 'System notification message.',
	},
};

export const Success: Story = {
	args: {
		variant: 'success',
		size: '2',
		children: 'Archive successfully updated.',
	},
};

export const Error: Story = {
	args: {
		variant: 'error',
		size: '2',
		children: 'Unable to process request. Please try again.',
	},
};

export const AllVariants: Story = {
	render: () => (
		<Stack gap="4" style={{ width: '500px' }}>
			<Alert variant="default">System notification message.</Alert>
			<Alert variant="success">Operation completed successfully.</Alert>
			<Alert variant="error">An error occurred during processing.</Alert>
		</Stack>
	),
};
