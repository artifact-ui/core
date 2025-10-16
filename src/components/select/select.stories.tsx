import type { Meta, StoryObj } from '@storybook/react';
import * as Select from './select';
import { Stack } from '../layout/stack';

const meta: Meta<typeof Select.Root> = {
	title: 'Artifact/Select',
	component: Select.Root,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Select.Root defaultValue="day-hike">
			<Select.Trigger placeholder="Choose a trail type..." />
			<Select.Content>
				<Select.Group>
					<Select.Label>Trail Types</Select.Label>
					<Select.Item value="day-hike">Day Hike</Select.Item>
					<Select.Item value="overnight">Overnight</Select.Item>
					<Select.Item value="thru-hike">Thru-Hike</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
	),
};

export const Minimal: Story = {
	render: () => (
		<Select.Root defaultValue="all">
			<Select.Trigger variant="minimal" placeholder="Filter..." />
			<Select.Content compact>
				<Select.Item value="all">All</Select.Item>
				<Select.Item value="active">Active</Select.Item>
				<Select.Item value="archived">Archived</Select.Item>
			</Select.Content>
		</Select.Root>
	),
};

export const Examples: Story = {
	render: () => (
		<Stack gap="4" style={{ width: '20rem' }}>
			{/* Variants */}
			<Select.Root defaultValue="default">
				<Select.Trigger variant="default" placeholder="Default variant..." />
				<Select.Content>
					<Select.Item value="default">Default</Select.Item>
					<Select.Item value="minimal">Minimal</Select.Item>
				</Select.Content>
			</Select.Root>

			<Select.Root defaultValue="minimal">
				<Select.Trigger variant="minimal" placeholder="Minimal variant..." />
				<Select.Content>
					<Select.Item value="default">Default</Select.Item>
					<Select.Item value="minimal">Minimal</Select.Item>
				</Select.Content>
			</Select.Root>

			{/* Sizes */}
			<Select.Root defaultValue="1" size="1">
				<Select.Trigger placeholder="Size 1 (small)..." />
				<Select.Content>
					<Select.Item value="1">Small</Select.Item>
					<Select.Item value="2">Medium</Select.Item>
					<Select.Item value="3">Large</Select.Item>
					<Select.Item value="4">Extra Large</Select.Item>
				</Select.Content>
			</Select.Root>

			<Select.Root defaultValue="3" size="3">
				<Select.Trigger placeholder="Size 3 (large)..." />
				<Select.Content>
					<Select.Item value="1">Small</Select.Item>
					<Select.Item value="2">Medium</Select.Item>
					<Select.Item value="3">Large</Select.Item>
					<Select.Item value="4">Extra Large</Select.Item>
				</Select.Content>
			</Select.Root>

			{/* Colors */}
			<Select.Root defaultValue="secondary" color="secondary">
				<Select.Trigger placeholder="Secondary color..." />
				<Select.Content>
					<Select.Item value="default">Default</Select.Item>
					<Select.Item value="secondary">Secondary</Select.Item>
					<Select.Item value="tertiary">Tertiary</Select.Item>
				</Select.Content>
			</Select.Root>

			{/* States */}
			<Select.Root error defaultValue="invalid">
				<Select.Trigger placeholder="Error state..." />
				<Select.Content>
					<Select.Item value="invalid">Invalid</Select.Item>
					<Select.Item value="valid">Valid</Select.Item>
				</Select.Content>
			</Select.Root>

			<Select.Root disabled defaultValue="disabled">
				<Select.Trigger placeholder="Disabled..." />
				<Select.Content>
					<Select.Item value="disabled">Disabled</Select.Item>
				</Select.Content>
			</Select.Root>

			{/* Compact */}
			<Select.Root defaultValue="oz">
				<Select.Trigger compact placeholder="Compact..." />
				<Select.Content compact>
					<Select.Item value="oz">oz</Select.Item>
					<Select.Item value="lb">lb</Select.Item>
					<Select.Item value="kg">kg</Select.Item>
				</Select.Content>
			</Select.Root>

			{/* Radius */}
			<Select.Root defaultValue="3" radius="3">
				<Select.Trigger placeholder="Radius 3 (pill)..." />
				<Select.Content>
					<Select.Item value="1">Radius 1</Select.Item>
					<Select.Item value="2">Radius 2</Select.Item>
					<Select.Item value="3">Radius 3</Select.Item>
				</Select.Content>
			</Select.Root>

			{/* Multiple Groups */}
			<Select.Root defaultValue="tent">
				<Select.Trigger placeholder="Select gear..." />
				<Select.Content>
					<Select.Group>
						<Select.Label>Shelter</Select.Label>
						<Select.Item value="tent">Tent</Select.Item>
						<Select.Item value="hammock">Hammock</Select.Item>
					</Select.Group>
					<Select.Separator />
					<Select.Group>
						<Select.Label>Sleep System</Select.Label>
						<Select.Item value="sleeping-bag">Sleeping Bag</Select.Item>
						<Select.Item value="quilt">Quilt</Select.Item>
					</Select.Group>
				</Select.Content>
			</Select.Root>
		</Stack>
	),
};
