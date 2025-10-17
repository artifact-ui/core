import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button';
import { Flex } from '../layout/flex';
import * as DropdownMenu from './dropdown-menu';

const meta = {
	title: 'Artifact/DropdownMenu',
	component: DropdownMenu.DropdownMenu,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu.DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	render: () => (
		<DropdownMenu.DropdownMenu>
			<DropdownMenu.DropdownMenuTrigger asChild>
				<Button variant="outline">Actions</Button>
			</DropdownMenu.DropdownMenuTrigger>
			<DropdownMenu.DropdownMenuContent>
				<DropdownMenu.DropdownMenuItem>Edit</DropdownMenu.DropdownMenuItem>
				<DropdownMenu.DropdownMenuItem>Duplicate</DropdownMenu.DropdownMenuItem>
				<DropdownMenu.DropdownMenuSeparator />
				<DropdownMenu.DropdownMenuItem>Delete</DropdownMenu.DropdownMenuItem>
			</DropdownMenu.DropdownMenuContent>
		</DropdownMenu.DropdownMenu>
	),
};

export const WithSubmenu: Story = {
	render: () => (
		<DropdownMenu.DropdownMenu>
			<DropdownMenu.DropdownMenuTrigger asChild>
				<Button variant="outline">Options</Button>
			</DropdownMenu.DropdownMenuTrigger>
			<DropdownMenu.DropdownMenuContent>
				<DropdownMenu.DropdownMenuItem>Edit Specimen</DropdownMenu.DropdownMenuItem>
				<DropdownMenu.DropdownMenuSub>
					<DropdownMenu.DropdownMenuSubTrigger>Move to...</DropdownMenu.DropdownMenuSubTrigger>
					<DropdownMenu.DropdownMenuSubContent>
						<DropdownMenu.DropdownMenuItem>Archive A</DropdownMenu.DropdownMenuItem>
						<DropdownMenu.DropdownMenuItem>Archive B</DropdownMenu.DropdownMenuItem>
						<DropdownMenu.DropdownMenuItem>Archive C</DropdownMenu.DropdownMenuItem>
					</DropdownMenu.DropdownMenuSubContent>
				</DropdownMenu.DropdownMenuSub>
				<DropdownMenu.DropdownMenuSeparator />
				<DropdownMenu.DropdownMenuItem>Delete</DropdownMenu.DropdownMenuItem>
			</DropdownMenu.DropdownMenuContent>
		</DropdownMenu.DropdownMenu>
	),
};

export const WithLabels: Story = {
	render: () => (
		<DropdownMenu.DropdownMenu>
			<DropdownMenu.DropdownMenuTrigger asChild>
				<Button variant="outline">Collection</Button>
			</DropdownMenu.DropdownMenuTrigger>
			<DropdownMenu.DropdownMenuContent>
				<DropdownMenu.DropdownMenuLabel>Manage Collection</DropdownMenu.DropdownMenuLabel>
				<DropdownMenu.DropdownMenuSeparator />
				<DropdownMenu.DropdownMenuItem>View Details</DropdownMenu.DropdownMenuItem>
				<DropdownMenu.DropdownMenuItem>Export Data</DropdownMenu.DropdownMenuItem>
				<DropdownMenu.DropdownMenuItem disabled>
					Share (Coming Soon)
				</DropdownMenu.DropdownMenuItem>
				<DropdownMenu.DropdownMenuSeparator />
				<DropdownMenu.DropdownMenuItem>Archive</DropdownMenu.DropdownMenuItem>
			</DropdownMenu.DropdownMenuContent>
		</DropdownMenu.DropdownMenu>
	),
};

export const AllVariants: Story = {
	render: () => (
		<Flex gap="4">
			<DropdownMenu.DropdownMenu>
				<DropdownMenu.DropdownMenuTrigger asChild>
					<Button variant="outline" size="1">
						Small
					</Button>
				</DropdownMenu.DropdownMenuTrigger>
				<DropdownMenu.DropdownMenuContent size="1">
					<DropdownMenu.DropdownMenuItem>Edit</DropdownMenu.DropdownMenuItem>
					<DropdownMenu.DropdownMenuItem>Delete</DropdownMenu.DropdownMenuItem>
				</DropdownMenu.DropdownMenuContent>
			</DropdownMenu.DropdownMenu>

			<DropdownMenu.DropdownMenu>
				<DropdownMenu.DropdownMenuTrigger asChild>
					<Button variant="outline" size="2">
						Medium
					</Button>
				</DropdownMenu.DropdownMenuTrigger>
				<DropdownMenu.DropdownMenuContent>
					<DropdownMenu.DropdownMenuItem>Edit Item</DropdownMenu.DropdownMenuItem>
					<DropdownMenu.DropdownMenuItem>Delete Item</DropdownMenu.DropdownMenuItem>
				</DropdownMenu.DropdownMenuContent>
			</DropdownMenu.DropdownMenu>

			<DropdownMenu.DropdownMenu>
				<DropdownMenu.DropdownMenuTrigger asChild>
					<Button variant="outline" size="3">
						Large
					</Button>
				</DropdownMenu.DropdownMenuTrigger>
				<DropdownMenu.DropdownMenuContent size="3">
					<DropdownMenu.DropdownMenuItem>Edit Specimen</DropdownMenu.DropdownMenuItem>
					<DropdownMenu.DropdownMenuItem>Delete Specimen</DropdownMenu.DropdownMenuItem>
				</DropdownMenu.DropdownMenuContent>
			</DropdownMenu.DropdownMenu>
		</Flex>
	),
};
