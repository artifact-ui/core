import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { SearchIcon } from '../../icons';
import { Flex } from '../layout/flex';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
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
			options: ['primary', 'neutral', 'success', 'warning', 'danger'],
			description: 'Semantic color',
		},
		size: {
			control: 'select',
			options: ['1', '2', '3'],
			description: 'Size scale',
		},
		press: {
			control: 'select',
			options: ['default', 'firm', false],
			description: 'Tactile press depth (false to disable)',
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

export const Default: Story = {
	args: {
		children: 'Submit',
		variant: 'default',
		color: 'primary',
		size: '2',
		press: 'default',
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

export const AllSizes: Story = {
	render: () => (
		<Flex gap="4" align="center">
			<Button size="1">Size 1</Button>
			<Button size="2">Size 2</Button>
			<Button size="3">Size 3</Button>
		</Flex>
	),
};

export const AllVariants: Story = {
	render: () => (
		<Flex gap="4" align="center" style={{ flexWrap: 'wrap' }}>
			<Button variant="default">Default</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="ghost">Ghost</Button>
			<Button color="success">Success</Button>
			<Button color="warning">Warning</Button>
			<Button color="danger">Danger</Button>
			<Button iconLeft={<SearchIcon />}>Search</Button>
			<Button loading>Loading</Button>
		</Flex>
	),
};

export const AsLink: Story = {
	args: {
		variant: 'default',
		color: 'primary',
		size: '2',
	},
	render: (args) => (
		<Button {...args} asChild>
			<a href="https://github.com" target="_blank" rel="noreferrer">
				View on GitHub
			</a>
		</Button>
	),
};

export const AsLinkWithIcon: Story = {
	render: () => (
		<Button asChild variant="outline" iconLeft={<SearchIcon />}>
			<a href="https://github.com" target="_blank" rel="noreferrer">
				Search Docs
			</a>
		</Button>
	),
};
