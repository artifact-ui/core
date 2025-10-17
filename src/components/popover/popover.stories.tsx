import type { Meta, StoryObj } from '@storybook/react';
import * as Popover from './popover';
import { Button } from '../button/button';
import { Text } from '../text/text';
import { Flex } from '../layout/flex';

const meta: Meta<typeof Popover.Root> = {
	title: 'Artifact/Popover',
	component: Popover.Root,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Popover.Root>;

export const Default: Story = {
	render: () => (
		<Popover.Root>
			<Popover.Trigger asChild>
				<Button>Specimen Info</Button>
			</Popover.Trigger>
			<Popover.Content>
				<div style={{ padding: 'var(--space-4)', width: 280 }}>
					<Text weight="medium">Catalog Entry</Text>
					<Text size="2" color="secondary" style={{ marginTop: '0.5rem' }}>
						Detailed specimen information and metadata for research documentation.
					</Text>
				</div>
			</Popover.Content>
		</Popover.Root>
	),
};

export const WithActions: Story = {
	render: () => (
		<Popover.Root>
			<Popover.Trigger asChild>
				<Button>Collection Actions</Button>
			</Popover.Trigger>
			<Popover.Content side="bottom">
				<div style={{ padding: 'var(--space-4)', width: 260 }}>
					<Text weight="medium" size="3">
						Manage Collection
					</Text>
					<Text size="2" color="secondary" style={{ marginTop: '0.25rem' }}>
						Choose an action to perform
					</Text>
					<Flex gap="2" style={{ marginTop: '1rem' }}>
						<Popover.Close asChild>
							<Button variant="ghost" size="2">
								Cancel
							</Button>
						</Popover.Close>
						<Popover.Close asChild>
							<Button size="2">Export</Button>
						</Popover.Close>
					</Flex>
				</div>
			</Popover.Content>
		</Popover.Root>
	),
};

export const AllPositions: Story = {
	render: () => (
		<div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(2, 1fr)' }}>
			<Popover.Root>
				<Popover.Trigger asChild>
					<Button size="2">Top</Button>
				</Popover.Trigger>
				<Popover.Content side="top">
					<div style={{ padding: 'var(--space-3)' }}>
						<Text size="2">Top position</Text>
					</div>
				</Popover.Content>
			</Popover.Root>

			<Popover.Root>
				<Popover.Trigger asChild>
					<Button size="2">Bottom</Button>
				</Popover.Trigger>
				<Popover.Content side="bottom">
					<div style={{ padding: 'var(--space-3)' }}>
						<Text size="2">Bottom position</Text>
					</div>
				</Popover.Content>
			</Popover.Root>

			<Popover.Root>
				<Popover.Trigger asChild>
					<Button size="2">Left</Button>
				</Popover.Trigger>
				<Popover.Content side="left">
					<div style={{ padding: 'var(--space-3)' }}>
						<Text size="2">Left position</Text>
					</div>
				</Popover.Content>
			</Popover.Root>

			<Popover.Root>
				<Popover.Trigger asChild>
					<Button size="2">Right</Button>
				</Popover.Trigger>
				<Popover.Content side="right">
					<div style={{ padding: 'var(--space-3)' }}>
						<Text size="2">Right position</Text>
					</div>
				</Popover.Content>
			</Popover.Root>
		</div>
	),
};
