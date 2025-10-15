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
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Button',
	},
};

export const Examples: Story = {
	render: () => (
		<Flex gap="4" align="center" style={{ flexWrap: 'wrap' }}>
			<Button>Primary</Button>
			<Button variant="outline">Outline</Button>
			<Button color="danger">Delete</Button>
			<Button color="info">Info</Button>
			<Button iconLeft={<UserIcon />}>Account</Button>
			<Button iconLeft={<SearchIcon />} />
			<Button iconRight={<ChevronRightIcon />}>Next</Button>
			<Button loading>Loading</Button>
			<Button size="1">Small</Button>
		</Flex>
	),
};
