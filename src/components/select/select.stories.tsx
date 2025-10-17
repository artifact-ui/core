import type { Meta, StoryObj } from '@storybook/react';
import * as Select from './select';
import { Stack } from '../layout/stack';

const meta: Meta<typeof Select.Root> = {
	title: 'Artifact/Select',
	component: Select.Root,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'minimal'],
			description: 'Visual style of the select',
		},
		size: {
			control: 'select',
			options: ['1', '2', '3', '4'],
			description: 'Size scale',
		},
		color: {
			control: 'select',
			options: ['default', 'secondary', 'tertiary'],
			description: 'Color emphasis',
		},
		error: {
			control: 'boolean',
			description: 'Error state',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
		compact: {
			control: 'boolean',
			description: 'Compact spacing',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Select.Root defaultValue="pottery">
			<Select.Trigger placeholder="Select collection..." />
			<Select.Content>
				<Select.Group>
					<Select.Label>Collections</Select.Label>
					<Select.Item value="pottery">Pottery</Select.Item>
					<Select.Item value="textiles">Textiles</Select.Item>
					<Select.Item value="tools">Stone Tools</Select.Item>
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
				<Select.Item value="archived">Archived</Select.Item>
				<Select.Item value="active">Active</Select.Item>
			</Select.Content>
		</Select.Root>
	),
};

export const Error: Story = {
	render: () => (
		<Select.Root error defaultValue="invalid">
			<Select.Trigger placeholder="Select status..." />
			<Select.Content>
				<Select.Item value="invalid">Invalid Entry</Select.Item>
				<Select.Item value="valid">Valid Entry</Select.Item>
			</Select.Content>
		</Select.Root>
	),
};

export const WithGroups: Story = {
	render: () => (
		<Select.Root defaultValue="neolithic">
			<Select.Trigger placeholder="Select period..." />
			<Select.Content>
				<Select.Group>
					<Select.Label>Ancient Periods</Select.Label>
					<Select.Item value="neolithic">Neolithic Era</Select.Item>
					<Select.Item value="bronze">Bronze Age</Select.Item>
					<Select.Item value="iron">Iron Age</Select.Item>
				</Select.Group>
				<Select.Separator />
				<Select.Group>
					<Select.Label>Classical Periods</Select.Label>
					<Select.Item value="greek">Greek Classical</Select.Item>
					<Select.Item value="roman">Roman Empire</Select.Item>
				</Select.Group>
			</Select.Content>
		</Select.Root>
	),
};

export const AllVariants: Story = {
	render: () => (
		<Stack gap="4" style={{ width: '20rem' }}>
			<Select.Root defaultValue="archive-a">
				<Select.Trigger variant="default" placeholder="Default variant..." />
				<Select.Content>
					<Select.Item value="archive-a">Archive A</Select.Item>
					<Select.Item value="archive-b">Archive B</Select.Item>
					<Select.Item value="archive-c">Archive C</Select.Item>
				</Select.Content>
			</Select.Root>

			<Select.Root defaultValue="catalog-1">
				<Select.Trigger variant="minimal" placeholder="Minimal variant..." />
				<Select.Content>
					<Select.Item value="catalog-1">Catalog 1</Select.Item>
					<Select.Item value="catalog-2">Catalog 2</Select.Item>
				</Select.Content>
			</Select.Root>

			<Select.Root error defaultValue="error">
				<Select.Trigger placeholder="Error state..." />
				<Select.Content>
					<Select.Item value="error">Error</Select.Item>
					<Select.Item value="success">Success</Select.Item>
				</Select.Content>
			</Select.Root>

			<Select.Root disabled defaultValue="disabled">
				<Select.Trigger placeholder="Disabled state..." />
				<Select.Content>
					<Select.Item value="disabled">Disabled</Select.Item>
				</Select.Content>
			</Select.Root>
		</Stack>
	),
};
