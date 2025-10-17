import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './heading';
import { Stack } from '../layout/stack';
import { UserIcon } from '../../icons';

const meta: Meta<typeof Heading> = {
	title: 'Artifact/Heading',
	component: Heading,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		as: {
			control: 'select',
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
			description: 'HTML heading element',
		},
		size: {
			control: 'select',
			options: ['1', '2', '3', '4', '5', '6', '7', '8'],
			description: 'Visual size scale',
		},
		weight: {
			control: 'select',
			options: ['normal', 'medium', 'semibold', 'bold'],
			description: 'Font weight',
		},
		color: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary', 'accent', 'danger'],
			description: 'Text color emphasis',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
	args: {
		children: 'Collection Overview',
		size: '6',
	},
};

export const Large: Story = {
	args: {
		children: 'Archaeological Archives',
		size: '8',
		as: 'h1',
	},
};

export const Medium: Story = {
	args: {
		children: 'Specimen Details',
		size: '4',
		weight: 'medium',
	},
};

export const Accent: Story = {
	args: {
		children: 'Featured Collection',
		size: '5',
		color: 'accent',
	},
};

export const WithIcon: Story = {
	args: {
		children: 'Curator Profile',
		size: '5',
		iconLeft: <UserIcon />,
	},
};

export const AllVariants: Story = {
	render: () => (
		<Stack gap="4" style={{ maxWidth: '600px' }}>
			<Heading size="8">Ceramic Collection</Heading>
			<Heading size="6">Stone Tools Archive</Heading>
			<Heading size="4" weight="medium">
				Research Documentation
			</Heading>
			<Heading size="3" color="secondary">
				Catalog Metadata
			</Heading>
			<Heading size="2" color="accent">
				Featured Specimens
			</Heading>
		</Stack>
	),
};
