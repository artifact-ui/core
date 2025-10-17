import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';
import { Stack } from '../layout/stack';
import { Flex } from '../layout/flex';
import { Text } from '../text/text';

const meta: Meta<typeof Switch> = {
	title: 'Artifact/Switch',
	component: Switch,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['1', '2', '3'],
			description: 'Size scale',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
		checked: {
			control: 'boolean',
			description: 'Checked state',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
	args: {
		'aria-label': 'Toggle setting',
		size: '2',
	},
};

export const Checked: Story = {
	args: {
		'aria-label': 'Toggle setting',
		checked: true,
		size: '2',
	},
};

export const Disabled: Story = {
	args: {
		'aria-label': 'Toggle setting',
		disabled: true,
		size: '2',
	},
};

export const WithLabel: Story = {
	render: () => (
		<Flex align="center" justify="between" style={{ width: '300px' }}>
			<Stack gap="1">
				<label htmlFor="archive-switch">
					<Text size="3">Archive Mode</Text>
				</label>
				<Text size="2" color="secondary">
					Show archived specimens
				</Text>
			</Stack>
			<Switch id="archive-switch" size="3" />
		</Flex>
	),
};

export const AllVariants: Story = {
	render: () => (
		<Stack gap="4" style={{ width: '300px' }}>
			<Flex align="center" justify="between">
				<Text size="2">Small</Text>
				<Switch size="1" />
			</Flex>
			<Flex align="center" justify="between">
				<Text size="2">Medium (default)</Text>
				<Switch size="2" defaultChecked />
			</Flex>
			<Flex align="center" justify="between">
				<Text size="2">Large</Text>
				<Switch size="3" />
			</Flex>
			<Flex align="center" justify="between">
				<Text size="2" color="tertiary">
					Disabled
				</Text>
				<Switch size="2" disabled />
			</Flex>
		</Stack>
	),
};
