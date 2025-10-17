import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './text';
import { Stack } from '../layout/stack';
import { CheckIcon } from '../../icons';

const meta: Meta<typeof Text> = {
	title: 'Artifact/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: 'select',
			options: ['1', '2', '3', '4', '5', '6', '7', '8'],
			description: 'Font size scale',
		},
		weight: {
			control: 'select',
			options: ['normal', 'medium', 'semibold', 'bold'],
			description: 'Font weight',
		},
		color: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary', 'accent', 'info', 'danger'],
			description: 'Text color emphasis',
		},
		uppercase: {
			control: 'boolean',
			description: 'Transform to uppercase',
		},
		italic: {
			control: 'boolean',
			description: 'Italic style',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		children: 'Detailed specimen information and catalog documentation.',
		size: '3',
	},
};

export const Secondary: Story = {
	args: {
		children: 'Additional research notes and metadata.',
		size: '2',
		color: 'secondary',
	},
};

export const Label: Story = {
	args: {
		children: 'Archive Classification',
		size: '2',
		color: 'tertiary',
		uppercase: true,
	},
};

export const Accent: Story = {
	args: {
		children: 'Featured Collection',
		size: '4',
		color: 'accent',
		weight: 'medium',
	},
};

export const WithIcon: Story = {
	args: {
		children: 'Verified specimen documentation',
		size: '3',
		iconLeft: <CheckIcon />,
	},
};

export const AllVariants: Story = {
	render: () => (
		<Stack gap="4" style={{ maxWidth: '500px' }}>
			<Text size="5" weight="bold">
				Archaeological Documentation
			</Text>
			<Text>
				Comprehensive catalog of specimens from the Bronze Age period, including
				detailed provenance and conservation status.
			</Text>
			<Text size="2" color="secondary">
				Research notes compiled from excavation records and laboratory analysis.
			</Text>
			<Text size="2" color="tertiary" uppercase>
				Collection Status
			</Text>
			<Text color="accent">Featured in current exhibition</Text>
		</Stack>
	),
};
