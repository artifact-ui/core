import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { UserIcon, SearchIcon, ChevronRightIcon } from '../../icons';
import { Flex } from '../layout/flex';

const meta: Meta<typeof Button> = {
	title: 'Artifact/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'outline', 'secondary', 'tertiary', 'ghost', 'link'],
			description: 'Visual style of the button',
		},
		color: {
			control: 'select',
			options: ['primary', 'neutral', 'info', 'success', 'danger'],
			description: 'Semantic color',
		},
		size: {
			control: 'select',
			options: ['1', '2', '3'],
			description: 'Size scale',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
		loading: {
			control: 'boolean',
			description: 'Loading state with spinner',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
	args: {
		children: 'Submit',
		variant: 'default',
		color: 'primary',
		size: '2',
	},
};

export const Outline: Story = {
	args: {
		children: 'Cancel',
		variant: 'outline',
		color: 'neutral',
		size: '2',
	},
};

export const Danger: Story = {
	args: {
		children: 'Delete',
		variant: 'default',
		color: 'danger',
		size: '2',
	},
};

export const WithIcon: Story = {
	args: {
		children: 'Search',
		variant: 'default',
		color: 'primary',
		size: '2',
		iconLeft: <SearchIcon />,
	},
};

export const Loading: Story = {
	args: {
		children: 'Processing',
		variant: 'default',
		color: 'primary',
		size: '2',
		loading: true,
	},
};

export const AllVariants: Story = {
	render: () => (
		<Flex gap="4" align="center" style={{ flexWrap: 'wrap' }}>
			<Button variant="default">Default</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="ghost">Ghost</Button>
			<Button color="danger">Delete</Button>
			<Button iconLeft={<SearchIcon />}>Search</Button>
			<Button loading>Loading</Button>
		</Flex>
	),
};
