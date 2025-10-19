import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './separator';
import { Stack } from '../layout/stack';
import { Flex } from '../layout/flex';
import { Text } from '../text/text';

const meta: Meta<typeof Separator> = {
	title: 'Data Display/Separator',
	component: Separator,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		orientation: {
			control: 'select',
			options: ['horizontal', 'vertical'],
			description: 'Direction of the separator',
		},
		size: {
			control: 'select',
			options: ['1', '2', '3', '4'],
			description: 'Thickness scale',
		},
		color: {
			control: 'select',
			options: ['default', 'accent'],
			description: 'Color variant',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
	args: {
		orientation: 'horizontal',
		size: '1',
	},
	render: (args) => (
		<div style={{ width: '300px' }}>
			<Separator {...args} />
		</div>
	),
};

export const Vertical: Story = {
	args: {
		orientation: 'vertical',
		size: '1',
	},
	render: (args) => (
		<Flex align="center" gap="4" style={{ height: '80px' }}>
			<Text>Archive A</Text>
			<Separator {...args} />
			<Text>Archive B</Text>
		</Flex>
	),
};

export const Thick: Story = {
	args: {
		orientation: 'horizontal',
		size: '4',
	},
	render: (args) => (
		<div style={{ width: '300px' }}>
			<Separator {...args} />
		</div>
	),
};

export const AllVariants: Story = {
	render: () => (
		<Stack gap="6" style={{ width: '300px' }}>
			<Stack gap="3">
				<Text size="2" color="secondary">
					Size 1 (default)
				</Text>
				<Separator size="1" />
			</Stack>
			<Stack gap="3">
				<Text size="2" color="secondary">
					Size 2
				</Text>
				<Separator size="2" />
			</Stack>
			<Stack gap="3">
				<Text size="2" color="secondary">
					Size 4 (thick)
				</Text>
				<Separator size="4" />
			</Stack>
			<Stack gap="3">
				<Text size="2" color="secondary">
					Accent color
				</Text>
				<Separator size="2" color="accent" />
			</Stack>
		</Stack>
	),
};
