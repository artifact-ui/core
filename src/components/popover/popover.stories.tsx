import type { Meta, StoryObj } from '@storybook/react';
import * as Popover from './popover';
import { Button, Text, TextField } from '@/components/alpine';
import { Stack } from '@/components/layout';
import { CloseIcon } from '@/components/icons';

const meta: Meta<typeof Popover.Root> = {
	title: 'Alpine/Popover',
	component: Popover.Root,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof Popover.Root>;

export const Default: Story = {
	render: () => (
		<Popover.Root>
			<Popover.Trigger asChild>
				<Button>Open Popover</Button>
			</Popover.Trigger>
			<Popover.Content>
				<div style={{ padding: 'var(--space-4)', width: 300 }}>
					<Text weight="medium">Popover Content</Text>
					<Text size="2" color="secondary" className="mt-2">
						This is a popover with arbitrary content. It can contain any React components.
					</Text>
				</div>
			</Popover.Content>
		</Popover.Root>
	),
};

export const WithForm: Story = {
	render: () => (
		<Popover.Root>
			<Popover.Trigger asChild>
				<Button>Edit Settings</Button>
			</Popover.Trigger>
			<Popover.Content side="bottom" align="start">
				<Stack className="gap-3 p-4" style={{ width: 320 }}>
					<div>
						<Text weight="medium" size="3">
							Settings
						</Text>
						<Text size="2" color="secondary">
							Update your preferences
						</Text>
					</div>
					<TextField.Standalone label="Username" placeholder="Enter username" />
					<TextField.Standalone label="Email" placeholder="Enter email" type="email" />
					<div className="flex gap-2 justify-end mt-2">
						<Popover.Close asChild>
							<Button variant="ghost">Cancel</Button>
						</Popover.Close>
						<Popover.Close asChild>
							<Button>Save</Button>
						</Popover.Close>
					</div>
				</Stack>
			</Popover.Content>
		</Popover.Root>
	),
};

export const WithCloseButton: Story = {
	render: () => (
		<Popover.Root>
			<Popover.Trigger asChild>
				<Button>Open with Close</Button>
			</Popover.Trigger>
			<Popover.Content side="top">
				<div style={{ padding: 'var(--space-4)', width: 280, position: 'relative' }}>
					<Popover.Close asChild>
						<Button
							variant="ghost"
							size="1"
							iconLeft={<CloseIcon />}
							style={{
								position: 'absolute',
								top: 'var(--space-2)',
								right: 'var(--space-2)',
							}}
						/>
					</Popover.Close>
					<Text weight="medium">Dismissible Popover</Text>
					<Text size="2" color="secondary" className="mt-2">
						Click the X button or click outside to close this popover.
					</Text>
				</div>
			</Popover.Content>
		</Popover.Root>
	),
};

export const Positions: Story = {
	render: () => (
		<div style={{ display: 'grid', gap: '4rem', gridTemplateColumns: 'repeat(3, 1fr)' }}>
			<Popover.Root>
				<Popover.Trigger asChild>
					<Button>Top</Button>
				</Popover.Trigger>
				<Popover.Content side="top">
					<div style={{ padding: 'var(--space-3)' }}>
						<Text>Top position</Text>
					</div>
				</Popover.Content>
			</Popover.Root>

			<Popover.Root>
				<Popover.Trigger asChild>
					<Button>Bottom</Button>
				</Popover.Trigger>
				<Popover.Content side="bottom">
					<div style={{ padding: 'var(--space-3)' }}>
						<Text>Bottom position</Text>
					</div>
				</Popover.Content>
			</Popover.Root>

			<Popover.Root>
				<Popover.Trigger asChild>
					<Button>Left</Button>
				</Popover.Trigger>
				<Popover.Content side="left">
					<div style={{ padding: 'var(--space-3)' }}>
						<Text>Left position</Text>
					</div>
				</Popover.Content>
			</Popover.Root>

			<Popover.Root>
				<Popover.Trigger asChild>
					<Button>Right</Button>
				</Popover.Trigger>
				<Popover.Content side="right">
					<div style={{ padding: 'var(--space-3)' }}>
						<Text>Right position</Text>
					</div>
				</Popover.Content>
			</Popover.Root>
		</div>
	),
};
