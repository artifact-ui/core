import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './alert';
import { Stack } from '../layout/stack';

const meta: Meta<typeof Alert> = {
	title: 'Feedback/Alert',
	component: Alert,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'info', 'success', 'warning', 'error'],
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
		dismissible: false,
		onDismiss: () => console.log('Alert dismissed'),
	},
};

export const AllVariants: Story = {
	render: () => (
		<Stack gap="4" style={{ width: '500px' }}>
			<Alert variant="default">System notification message.</Alert>
			<Alert variant="info">New updates available for your account.</Alert>
			<Alert variant="success">Operation completed successfully.</Alert>
			<Alert variant="warning">Your session will expire in 5 minutes.</Alert>
			<Alert variant="error">An error occurred during processing.</Alert>
		</Stack>
	),
};

export const Dismissible: Story = {
	render: () => {
		const [showDefault, setShowDefault] = React.useState(true);
		const [showSuccess, setShowSuccess] = React.useState(true);
		const [showError, setShowError] = React.useState(true);

		return (
			<Stack gap="4" style={{ width: '500px' }}>
				{showDefault && (
					<Alert variant="default" dismissible onDismiss={() => setShowDefault(false)}>
						System notification message.
					</Alert>
				)}
				{showSuccess && (
					<Alert variant="success" dismissible onDismiss={() => setShowSuccess(false)}>
						Operation completed successfully.
					</Alert>
				)}
				{showError && (
					<Alert variant="error" dismissible onDismiss={() => setShowError(false)}>
						An error occurred during processing.
					</Alert>
				)}
			</Stack>
		);
	},
};
