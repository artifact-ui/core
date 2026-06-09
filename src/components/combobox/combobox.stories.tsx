import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Combobox, type ComboboxOption } from './combobox';

const collections: ComboboxOption[] = [
	{ label: 'Pottery', value: 'pottery' },
	{ label: 'Textiles', value: 'textiles' },
	{ label: 'Stone Tools', value: 'stone-tools' },
	{ label: 'Manuscripts', value: 'manuscripts' },
	{ label: 'Coins & Currency', value: 'coins' },
	{ label: 'Sculpture', value: 'sculpture' },
	{ label: 'Paintings', value: 'paintings' },
	{ label: 'Jewelry', value: 'jewelry' },
];

const meta: Meta<typeof Combobox> = {
	title: 'Forms/Combobox',
	component: Combobox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['1', '2', '3'],
			description: 'Trigger size',
		},
		placeholder: {
			control: 'text',
			description: 'Trigger text when nothing is selected',
		},
		searchPlaceholder: {
			control: 'text',
			description: 'Placeholder for the search input',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: {
		size: '2',
		placeholder: 'Select collection...',
		searchPlaceholder: 'Search collections...',
		disabled: false,
	},
	render: (args) => {
		const [value, setValue] = useState<string>();
		return (
			<Combobox
				{...args}
				options={collections}
				value={value}
				onValueChange={setValue}
				width="240px"
			/>
		);
	},
};

export const WithError: Story = {
	render: () => {
		const [value, setValue] = useState<string>();
		return (
			<Combobox
				options={collections}
				value={value}
				onValueChange={setValue}
				error
				message="Please select a collection"
				width="240px"
			/>
		);
	},
};
