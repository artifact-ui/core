import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { Flex } from '../layout/flex';
import { CheckIcon } from '../../icons';

const meta: Meta<typeof Badge> = {
	title: 'Data Display/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['solid', 'soft', 'outline'],
			description: 'Visual style',
		},
		color: {
			control: 'select',
			options: ['primary', 'neutral', 'info', 'success', 'danger'],
			description: 'Semantic color',
		},
		size: {
			control: 'select',
			options: ['1', '2', '3', '4'],
			description: 'Size scale',
		},
		radius: {
			control: 'select',
			options: ['1', '2', 'full'],
			description: 'Border radius',
		},
		highContrast: {
			control: 'boolean',
			description: 'High contrast mode',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
	args: {
		variant: 'solid',
		color: 'primary',
		size: '3',
		children: 'Archived',
	},
};

export const Soft: Story = {
	args: {
		variant: 'soft',
		color: 'info',
		size: '3',
		children: 'Cataloged',
	},
};

export const Outline: Story = {
	args: {
		variant: 'outline',
		color: 'neutral',
		size: '3',
		children: 'Pending',
	},
};

export const WithIcon: Story = {
	args: {
		variant: 'soft',
		color: 'success',
		size: '3',
		iconLeft: <CheckIcon />,
		children: 'Verified',
	},
};

export const AllVariants: Story = {
	render: () => (
		<Flex gap="3" align="center" style={{ flexWrap: 'wrap' }}>
			<Badge variant="solid" color="primary">
				Solid
			</Badge>
			<Badge variant="soft" color="info">
				Soft
			</Badge>
			<Badge variant="outline" color="neutral">
				Outline
			</Badge>
			<Badge variant="soft" color="success" iconLeft={<CheckIcon />}>
				Verified
			</Badge>
			<Badge variant="solid" color="neutral" radius="full">
				24
			</Badge>
		</Flex>
	),
};
