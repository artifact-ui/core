import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './progress';
import { Button } from '../button/button';

const meta: Meta<typeof Progress> = {
	title: 'Feedback/Progress',
	component: Progress,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		value: {
			control: { type: 'range', min: 0, max: 100, step: 5 },
			description: 'Progress value (0-100). Omit for indeterminate spinner.',
		},
		size: {
			control: 'select',
			options: ['1', '2', '3'],
			description: 'Size variant',
		},
		color: {
			control: 'select',
			options: ['primary', 'neutral', 'success'],
			description: 'Color variant',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
	args: {
		value: 60,
		size: '2',
		color: 'primary',
	},
};

export const ProgressBar: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
			<div>
				<p style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-2)' }}>
					25% Complete
				</p>
				<Progress value={25} />
			</div>
			<div>
				<p style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-2)' }}>
					50% Complete
				</p>
				<Progress value={50} />
			</div>
			<div>
				<p style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-2)' }}>
					75% Complete
				</p>
				<Progress value={75} />
			</div>
			<div>
				<p style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-2)' }}>
					100% Complete
				</p>
				<Progress value={100} />
			</div>
		</div>
	),
};

export const AllColors: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
			<div>
				<p style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-2)' }}>
					Primary
				</p>
				<Progress value={60} color="primary" />
			</div>
			<div>
				<p style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-2)' }}>
					Neutral
				</p>
				<Progress value={60} color="neutral" />
			</div>
			<div>
				<p style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-2)' }}>
					Success
				</p>
				<Progress value={60} color="success" />
			</div>
		</div>
	),
};

export const AllSizes: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
			<div>
				<p style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-2)' }}>
					Size 1 (Small)
				</p>
				<Progress value={60} size="1" />
			</div>
			<div>
				<p style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-2)' }}>
					Size 2 (Default)
				</p>
				<Progress value={60} size="2" />
			</div>
			<div>
				<p style={{ marginBottom: 'var(--space-2)', fontSize: 'var(--font-size-2)' }}>
					Size 3 (Large)
				</p>
				<Progress value={60} size="3" />
			</div>
		</div>
	),
};

export const Spinner: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
			<Progress color="primary" />
			<Progress color="neutral" />
			<Progress color="success" />
		</div>
	),
};

export const SpinnerSizes: Story = {
	render: () => (
		<div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
			<div style={{ textAlign: 'center' }}>
				<Progress size="1" />
				<p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-1)' }}>
					Size 1
				</p>
			</div>
			<div style={{ textAlign: 'center' }}>
				<Progress size="2" />
				<p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-1)' }}>
					Size 2
				</p>
			</div>
			<div style={{ textAlign: 'center' }}>
				<Progress size="3" />
				<p style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-1)' }}>
					Size 3
				</p>
			</div>
		</div>
	),
};

export const LoadingButton: Story = {
	render: () => {
		const [loading, setLoading] = React.useState(false);

		const handleClick = () => {
			setLoading(true);
			setTimeout(() => setLoading(false), 2000);
		};

		return (
			<Button onClick={handleClick} disabled={loading}>
				{loading ? (
					<>
						<Progress size="1" />
						<span style={{ marginLeft: 'var(--space-2)' }}>Processing...</span>
					</>
				) : (
					'Submit'
				)}
			</Button>
		);
	},
};
