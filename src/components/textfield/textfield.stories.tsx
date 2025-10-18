import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import * as TextField from './textfield';
import { SearchIcon } from '../../icons';

const meta = {
	title: 'Artifact/TextField',
	component: TextField.Standalone,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'minimal', 'icon'],
			description: 'Visual style variant',
		},
		size: {
			control: 'select',
			options: ['1', '2', '3', '4'],
			description: 'Size scale',
		},
		error: {
			control: 'boolean',
			description: 'Error state',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text',
		},
		compact: {
			control: 'boolean',
			description: 'Compact spacing',
		},
		radius: {
			control: 'select',
			options: ['none', '1', '2', '3', 'full'],
			description: 'Border radius',
		},
	},
} satisfies Meta<typeof TextField.Standalone>;

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: {
		placeholder: 'Search catalog...',
		variant: 'default',
	},
};

export const Minimal: Story = {
	args: {
		placeholder: 'Enter specimen ID...',
		variant: 'minimal',
	},
};

export const WithIcon: Story = {
	args: {
		placeholder: 'Search archives...',
		variant: 'icon',
		iconLeft: <SearchIcon />,
	},
};

export const Error: Story = {
	args: {
		placeholder: 'Enter catalog number...',
		variant: 'default',
		error: true,
	},
};

export const Disabled: Story = {
	args: {
		placeholder: 'Field is locked',
		variant: 'default',
		disabled: true,
		value: 'Archived collection',
	},
};

export const AllVariants: Story = {
	render: () => (
		<div
			style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
			<TextField.Standalone placeholder="Default variant" variant="default" />
			<TextField.Standalone placeholder="Minimal variant" variant="minimal" />
			<TextField.Standalone
				placeholder="Search specimens..."
				variant="icon"
				iconLeft={<SearchIcon />}
			/>
			<TextField.Standalone placeholder="Error state" variant="default" error />
			<TextField.Standalone
				placeholder="Disabled state"
				variant="default"
				disabled
				value="Locked"
			/>
		</div>
	),
};

export const WithPrefix: Story = {
	args: {
		placeholder: '0.00',
		variant: 'icon',
		prefix: <span>$</span>,
	},
};

export const WithSuffix: Story = {
	args: {
		placeholder: '0',
		variant: 'icon',
		suffix: <span>kg</span>,
	},
};

export const WithPrefixAndSuffix: Story = {
	args: {
		placeholder: '0.00',
		variant: 'icon',
		prefix: <span>$</span>,
		suffix: <span>USD</span>,
	},
};

export const Clearable: Story = {
	render: () => {
		const [value, setValue] = React.useState('Ancient pottery collection');

		return (
			<TextField.Standalone
				placeholder="Search collections..."
				variant="icon"
				iconLeft={<SearchIcon />}
				clearable
				onClear={() => setValue('')}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		);
	},
};

export const ClearableWithSuffix: Story = {
	render: () => {
		const [value, setValue] = React.useState('150');

		return (
			<TextField.Standalone
				placeholder="Enter weight..."
				variant="icon"
				suffix={<span>kg</span>}
				clearable
				onClear={() => setValue('')}
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
		);
	},
};
