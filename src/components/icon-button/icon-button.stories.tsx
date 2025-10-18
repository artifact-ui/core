import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './icon-button';
import { CloseIcon, SearchIcon, ChevronRightIcon, PlusIcon } from '../../icons';
import { Flex } from '../layout/flex';
import { Stack } from '../layout/stack';
import { Text } from '../text/text';

const meta: Meta<typeof IconButton> = {
	title: 'Artifact/IconButton',
	component: IconButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		icon: {
			control: false,
			description: 'Icon element to display',
			table: {
				type: { summary: 'ReactNode' },
			},
		},
		label: {
			control: false,
		},
		variant: {
			control: 'select',
			options: ['default', 'outline', 'secondary', 'tertiary', 'ghost', 'link'],
			description: 'Visual style',
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
	},
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
	args: {
		icon: <SearchIcon />,
		label: 'Search',
		variant: 'ghost',
		size: '2',
	},
};

export const AllVariants: Story = {
	render: () => (
		<Stack gap="4">
			<Flex gap="3" align="center">
				<IconButton icon={<SearchIcon />} label="Search" variant="default" />
				<IconButton icon={<SearchIcon />} label="Search" variant="outline" />
				<IconButton icon={<SearchIcon />} label="Search" variant="secondary" />
				<IconButton icon={<SearchIcon />} label="Search" variant="tertiary" />
				<IconButton icon={<SearchIcon />} label="Search" variant="ghost" />
			</Flex>
		</Stack>
	),
};

export const AllSizes: Story = {
	render: () => (
		<Flex gap="3" align="center">
			<IconButton icon={<SearchIcon />} label="Search" variant="ghost" size="1" />
			<IconButton icon={<SearchIcon />} label="Search" variant="ghost" size="2" />
			<IconButton icon={<SearchIcon />} label="Search" variant="ghost" size="3" />
		</Flex>
	),
};

export const AllColors: Story = {
	render: () => (
		<Flex gap="3" align="center">
			<IconButton icon={<PlusIcon />} label="Add" variant="default" color="primary" />
			<IconButton icon={<PlusIcon />} label="Add" variant="default" color="neutral" />
			<IconButton icon={<PlusIcon />} label="Add" variant="default" color="info" />
			<IconButton icon={<PlusIcon />} label="Add" variant="default" color="success" />
			<IconButton icon={<PlusIcon />} label="Add" variant="default" color="danger" />
		</Flex>
	),
};

export const CloseButton: Story = {
	render: () => (
		<Flex gap="3" align="center">
			<IconButton icon={<CloseIcon />} label="Close" variant="ghost" size="1" />
			<IconButton icon={<CloseIcon />} label="Close" variant="ghost" size="2" />
			<IconButton icon={<CloseIcon />} label="Close" variant="ghost" size="3" />
		</Flex>
	),
};

export const Disabled: Story = {
	args: {
		icon: <SearchIcon />,
		label: 'Search',
		variant: 'ghost',
		disabled: true,
	},
};

export const CardActions: Story = {
	render: () => (
		<div
			style={{
				width: '300px',
				padding: 'var(--space-4)',
				border: '1px solid var(--color-border-default)',
				borderRadius: 'var(--radius-default)',
			}}>
			<Flex justify="between" align="center" style={{ marginBottom: 'var(--space-3)' }}>
				<Text weight="semibold" size="4">
					Collection Details
				</Text>
				<Flex gap="1">
					<IconButton
						icon={<SearchIcon />}
						label="Search collection"
						variant="ghost"
						size="1"
					/>
					<IconButton icon={<CloseIcon />} label="Close" variant="ghost" size="1" />
				</Flex>
			</Flex>
			<Text color="secondary" size="2">
				Ancient pottery collection from 3rd century BCE Mediterranean region
			</Text>
		</div>
	),
};

export const NavigationControls: Story = {
	render: () => (
		<Flex gap="2" align="center">
			<Text color="secondary" size="2">
				Page 3 of 12
			</Text>
			<Flex gap="1">
				<IconButton
					icon={<ChevronRightIcon style={{ transform: 'rotate(180deg)' }} />}
					label="Previous page"
					variant="outline"
					size="1"
				/>
				<IconButton
					icon={<ChevronRightIcon />}
					label="Next page"
					variant="outline"
					size="1"
				/>
			</Flex>
		</Flex>
	),
};
