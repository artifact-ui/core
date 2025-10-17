import type { Meta, StoryObj } from '@storybook/react';
import * as Tooltip from './tooltip';
import { Button } from '../button/button';

const meta = {
	title: 'Artifact/Tooltip',
	component: Tooltip.Content,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		side: {
			control: 'select',
			options: ['top', 'right', 'bottom', 'left'],
			description: 'Tooltip position relative to trigger',
		},
		align: {
			control: 'select',
			options: ['start', 'center', 'end'],
			description: 'Alignment of tooltip',
		},
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
				<Button variant="outline">View Details</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>View complete specimen catalog information</p>
			</Tooltip.Content>
		</Tooltip.Root>
	),
};

export const WithDelay: Story = {
	render: () => (
		<Tooltip.Root delayDuration={1000}>
			<Tooltip.Trigger asChild>
				<Button variant="outline">Archive Item</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>Move specimen to archived collection</p>
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
					<p>Archive A - Ceramics</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Right</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="right">
					<p>Archive B - Textiles</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Bottom</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="bottom">
					<p>Archive C - Stone Tools</p>
				</Tooltip.Content>
			</Tooltip.Root>

			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button variant="outline">Left</Button>
				</Tooltip.Trigger>
				<Tooltip.Content side="left">
					<p>Archive D - Metalwork</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</div>
	),
};

export const LongContent: Story = {
	render: () => (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<Button variant="outline">Specimen Info</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p>
					This ceramic vessel fragment from the Neolithic period was discovered in Archive
					A during the 2019 excavation. The provenance includes detailed documentation of
					its preservation status.
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
				<p>View collection documentation</p>
			</Tooltip.Content>
		</Tooltip.Root>
	),
};
