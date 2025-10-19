import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { Text } from '../text/text';
import { Stack } from '../layout/stack';

const meta = {
	title: 'Forms/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['1', '2'],
			description: 'Size scale',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
		defaultChecked: {
			control: 'boolean',
			description: 'Initially checked',
		},
	},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		'aria-label': 'Accept terms',
		size: '1',
	},
};

export const Checked: Story = {
	args: {
		'aria-label': 'Agree to policy',
		defaultChecked: true,
		size: '1',
	},
};

export const Disabled: Story = {
	args: {
		'aria-label': 'Disabled checkbox',
		disabled: true,
		size: '1',
	},
};

export const WithLabel: Story = {
	render: () => (
		<label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
			<Checkbox id="archive" defaultChecked />
			<Text as="span" size="3">
				Include archived specimens
			</Text>
		</label>
	),
};

export const AllVariants: Story = {
	render: () => (
		<Stack gap="4" style={{ maxWidth: '400px' }}>
			<label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
				<Checkbox id="unchecked" />
				<Text as="span" size="3">
					Unchecked
				</Text>
			</label>
			<label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
				<Checkbox id="checked" defaultChecked />
				<Text as="span" size="3">
					Checked
				</Text>
			</label>
			<label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
				<Checkbox id="disabled" disabled />
				<Text as="span" size="3" color="tertiary">
					Disabled
				</Text>
			</label>
			<label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
				<Checkbox id="large" size="2" defaultChecked />
				<Text as="span" size="4">
					Larger size
				</Text>
			</label>
		</Stack>
	),
};
