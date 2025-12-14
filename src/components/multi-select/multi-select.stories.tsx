import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import * as MultiSelect from './multi-select';
import { Stack } from '../layout/stack';

const meta: Meta<typeof MultiSelect.Root> = {
	title: 'Forms/MultiSelect',
	component: MultiSelect.Root,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A multi-select dropdown that allows users to select multiple options. Built on Radix DropdownMenu with checkbox items.',
			},
		},
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultExample = () => {
	const [value, setValue] = useState<string[]>(['pottery', 'tools']);

	return (
		<MultiSelect.Root value={value} onValueChange={setValue} clearable>
			<MultiSelect.Trigger placeholder="Select categories..." />
			<MultiSelect.Content>
				<MultiSelect.Item value="pottery">Pottery</MultiSelect.Item>
				<MultiSelect.Item value="tools">Stone Tools</MultiSelect.Item>
				<MultiSelect.Item value="textiles">Textiles</MultiSelect.Item>
				<MultiSelect.Item value="jewelry">Jewelry</MultiSelect.Item>
				<MultiSelect.Item value="weapons">Weapons</MultiSelect.Item>
			</MultiSelect.Content>
		</MultiSelect.Root>
	);
};

export const Default: Story = {
	render: () => <DefaultExample />,
};

const SizesExample = () => {
	const [size1, setSize1] = useState<string[]>(['bronze']);
	const [size2, setSize2] = useState<string[]>(['bronze', 'iron']);
	const [size3, setSize3] = useState<string[]>(['bronze']);
	const [size4, setSize4] = useState<string[]>(['bronze', 'iron']);

	return (
		<Stack gap="4" style={{ width: '280px' }}>
			<MultiSelect.Root value={size1} onValueChange={setSize1} size="1">
				<MultiSelect.Trigger placeholder="Size 1..." />
				<MultiSelect.Content>
					<MultiSelect.Item value="bronze">Bronze Age</MultiSelect.Item>
					<MultiSelect.Item value="iron">Iron Age</MultiSelect.Item>
					<MultiSelect.Item value="neolithic">Neolithic</MultiSelect.Item>
				</MultiSelect.Content>
			</MultiSelect.Root>

			<MultiSelect.Root value={size2} onValueChange={setSize2} size="2">
				<MultiSelect.Trigger placeholder="Size 2 (default)..." />
				<MultiSelect.Content>
					<MultiSelect.Item value="bronze">Bronze Age</MultiSelect.Item>
					<MultiSelect.Item value="iron">Iron Age</MultiSelect.Item>
					<MultiSelect.Item value="neolithic">Neolithic</MultiSelect.Item>
				</MultiSelect.Content>
			</MultiSelect.Root>

			<MultiSelect.Root value={size3} onValueChange={setSize3} size="3">
				<MultiSelect.Trigger placeholder="Size 3..." />
				<MultiSelect.Content>
					<MultiSelect.Item value="bronze">Bronze Age</MultiSelect.Item>
					<MultiSelect.Item value="iron">Iron Age</MultiSelect.Item>
					<MultiSelect.Item value="neolithic">Neolithic</MultiSelect.Item>
				</MultiSelect.Content>
			</MultiSelect.Root>

			<MultiSelect.Root value={size4} onValueChange={setSize4} size="4">
				<MultiSelect.Trigger placeholder="Size 4..." />
				<MultiSelect.Content>
					<MultiSelect.Item value="bronze">Bronze Age</MultiSelect.Item>
					<MultiSelect.Item value="iron">Iron Age</MultiSelect.Item>
					<MultiSelect.Item value="neolithic">Neolithic</MultiSelect.Item>
				</MultiSelect.Content>
			</MultiSelect.Root>
		</Stack>
	);
};

export const Sizes: Story = {
	render: () => <SizesExample />,
};

const ErrorExample = () => {
	const [value, setValue] = useState<string[]>([]);

	return (
		<MultiSelect.Root
			value={value}
			onValueChange={setValue}
			error
			message="Please select at least one excavation site">
			<MultiSelect.Trigger placeholder="Select sites..." />
			<MultiSelect.Content>
				<MultiSelect.Item value="pompeii">Pompeii</MultiSelect.Item>
				<MultiSelect.Item value="giza">Giza</MultiSelect.Item>
				<MultiSelect.Item value="machu-picchu">Machu Picchu</MultiSelect.Item>
			</MultiSelect.Content>
		</MultiSelect.Root>
	);
};

export const Error: Story = {
	render: () => <ErrorExample />,
};

const DisabledExample = () => {
	const [value] = useState<string[]>(['archived']);

	return (
		<MultiSelect.Root value={value} disabled>
			<MultiSelect.Trigger placeholder="Disabled..." />
			<MultiSelect.Content>
				<MultiSelect.Item value="archived">Archived Collection</MultiSelect.Item>
				<MultiSelect.Item value="active">Active Research</MultiSelect.Item>
			</MultiSelect.Content>
		</MultiSelect.Root>
	);
};

export const Disabled: Story = {
	render: () => <DisabledExample />,
};
