import type { Meta, StoryObj } from '@storybook/react';
import * as Tooltip from './tooltip';
import { Button } from '../button/button';

const meta = {
	title: 'Artifact/Tooltip',
	component: Tooltip.Content,
	parameters: {
		layout: 'centered',
	},
	decorators: [
		(Story) => (
			<Tooltip.Provider>
				<div style={{ padding: '100px' }}>
					<Story />
				</div>
			</Tooltip.Provider>
		),
	],
} satisfies Meta<typeof Tooltip.Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<Button variant="outline">Hover me</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>This is a tooltip with helpful information</p>
			</Tooltip.Content>
		</Tooltip.Root>
	),
};

export const WithDelay: Story = {
	render: () => (
		<Tooltip.Root delayDuration={1000}>
			<Tooltip.Trigger asChild>
				<Button variant="outline">Hover me (1s delay)</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>This tooltip appears after 1 second</p>
			</Tooltip.Content>
		</Tooltip.Root>
	),
};

export const Positioning: Story = {
	render: () => (
		<div
			style={{
				display: 'flex',
				gap: '4rem',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Top (default)</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="top">
					<p>Tooltip on top</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Right</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="right">
					<p>Tooltip on right</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Bottom</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="bottom">
					<p>Tooltip on bottom</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Left</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="left">
					<p>Tooltip on left</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</div>
	),
};

export const LongContent: Story = {
	render: () => (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<Button variant="outline">Hover for details</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>
					This is a longer tooltip with more detailed information that wraps across
					multiple lines. The max-width is set to 300px.
				</p>
			</Tooltip.Content>
		</Tooltip.Root>
	),
};

export const IconOnly: Story = {
	render: () => (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<Button variant="ghost" />
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Get more information</p>
			</Tooltip.Content>
		</Tooltip.Root>
	),
};
