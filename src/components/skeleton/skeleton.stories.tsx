import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, SkeletonText } from './skeleton';

const meta = {
	title: 'Data Display/Skeleton',
	component: Skeleton,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rectangle: Story = {
	args: {
		width: '200px',
		height: '100px',
		variant: 'rectangle',
	},
};

export const Circle: Story = {
	args: {
		width: '80px',
		height: '80px',
		variant: 'circle',
	},
};

export const Text: Story = {
	args: {
		width: '300px',
		variant: 'text',
	},
};

export const NoAnimation: Story = {
	args: {
		width: '200px',
		height: '100px',
		animate: false,
	},
};

export const ProfileCard: Story = {
	render: () => (
		<div
			style={{
				width: '300px',
				padding: '1rem',
				border: '1px solid var(--color-border-default)',
				borderRadius: 'var(--radius-2)',
			}}>
			<div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
				<Skeleton variant="circle" width="60px" height="60px" />
				<div style={{ flex: 1 }}>
					<Skeleton variant="text" width="120px" style={{ marginBottom: '0.5rem' }} />
					<Skeleton variant="text" width="80px" />
				</div>
			</div>
			<SkeletonText lines={3} />
		</div>
	),
};

export const TextBlock: Story = {
	render: () => <SkeletonText lines={5} />,
};

export const CardGrid: Story = {
	render: () => (
		<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
			{[1, 2, 3].map((i) => (
				<div
					key={i}
					style={{
						border: '1px solid var(--color-border-default)',
						borderRadius: 'var(--radius-2)',
						overflow: 'hidden',
					}}>
					<Skeleton height="150px" style={{ borderRadius: 0 }} />
					<div style={{ padding: '1rem' }}>
						<Skeleton variant="text" height="1.5em" style={{ marginBottom: '0.5rem' }} />
						<SkeletonText lines={2} />
					</div>
				</div>
			))}
		</div>
	),
};
