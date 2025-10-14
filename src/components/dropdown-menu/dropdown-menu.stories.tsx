import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button';
import { Stack } from '../layout/stack';
import { Flex } from '../layout/flex';
import * as DropdownMenu from './dropdown-menu';

const meta = {
	title: 'Artifact/DropdownMenu',
	component: DropdownMenu.DropdownMenu,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof DropdownMenu.DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Stack gap="8" align="center">
			{/* Basic dropdown */}
			<Stack gap="2" align="center">
				<h3 style={{ fontSize: '0.875rem', fontWeight: 600 }}>Basic Menu</h3>
				<DropdownMenu.DropdownMenu>
					<DropdownMenu.DropdownMenuTrigger asChild>
						<Button variant="outline" size="1">
							Menu
						</Button>
					</DropdownMenu.DropdownMenuTrigger>
					<DropdownMenu.DropdownMenuContent>
						<DropdownMenu.DropdownMenuItem>Edit</DropdownMenu.DropdownMenuItem>
						<DropdownMenu.DropdownMenuItem>Share</DropdownMenu.DropdownMenuItem>
						<DropdownMenu.DropdownMenuSeparator />
						<DropdownMenu.DropdownMenuItem>Delete</DropdownMenu.DropdownMenuItem>
					</DropdownMenu.DropdownMenuContent>
				</DropdownMenu.DropdownMenu>
			</Stack>

			{/* With submenu */}
			<Stack gap="2" align="center">
				<h3 style={{ fontSize: '0.875rem', fontWeight: 600 }}>With Submenu</h3>
				<DropdownMenu.DropdownMenu>
					<DropdownMenu.DropdownMenuTrigger asChild>
						<Button variant="outline" size="1">
							Options
						</Button>
					</DropdownMenu.DropdownMenuTrigger>
					<DropdownMenu.DropdownMenuContent>
						<DropdownMenu.DropdownMenuItem>Edit</DropdownMenu.DropdownMenuItem>
						<DropdownMenu.DropdownMenuSub>
							<DropdownMenu.DropdownMenuSubTrigger>
								Move to...
							</DropdownMenu.DropdownMenuSubTrigger>
							<DropdownMenu.DropdownMenuSubContent>
								<DropdownMenu.DropdownMenuItem>Top</DropdownMenu.DropdownMenuItem>
								<DropdownMenu.DropdownMenuItem>Center</DropdownMenu.DropdownMenuItem>
								<DropdownMenu.DropdownMenuItem>Bottom</DropdownMenu.DropdownMenuItem>
							</DropdownMenu.DropdownMenuSubContent>
						</DropdownMenu.DropdownMenuSub>
						<DropdownMenu.DropdownMenuSeparator />
						<DropdownMenu.DropdownMenuItem>Delete</DropdownMenu.DropdownMenuItem>
					</DropdownMenu.DropdownMenuContent>
				</DropdownMenu.DropdownMenu>
			</Stack>

			{/* With labels and disabled items */}
			<Stack gap="2" align="center">
				<h3 style={{ fontSize: '0.875rem', fontWeight: 600 }}>
					With Labels & Disabled Items
				</h3>
				<DropdownMenu.DropdownMenu>
					<DropdownMenu.DropdownMenuTrigger asChild>
						<Button variant="outline" size="1">
							Account
						</Button>
					</DropdownMenu.DropdownMenuTrigger>
					<DropdownMenu.DropdownMenuContent>
						<DropdownMenu.DropdownMenuLabel>My Account</DropdownMenu.DropdownMenuLabel>
						<DropdownMenu.DropdownMenuSeparator />
						<DropdownMenu.DropdownMenuItem>Profile</DropdownMenu.DropdownMenuItem>
						<DropdownMenu.DropdownMenuItem disabled>
							Settings (Coming Soon)
						</DropdownMenu.DropdownMenuItem>
						<DropdownMenu.DropdownMenuSeparator />
						<DropdownMenu.DropdownMenuItem>Logout</DropdownMenu.DropdownMenuItem>
					</DropdownMenu.DropdownMenuContent>
				</DropdownMenu.DropdownMenu>
			</Stack>

			{/* Size variations */}
			<Stack gap="2" align="center">
				<h3 style={{ fontSize: '0.875rem', fontWeight: 600 }}>Size Variations</h3>
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
							<Button variant="outline" size="1">
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
							<Button variant="outline" size="1">
								Large
							</Button>
						</DropdownMenu.DropdownMenuTrigger>
						<DropdownMenu.DropdownMenuContent size="3">
							<DropdownMenu.DropdownMenuItem>
								Edit This Item
							</DropdownMenu.DropdownMenuItem>
							<DropdownMenu.DropdownMenuItem>
								Delete Permanently
							</DropdownMenu.DropdownMenuItem>
						</DropdownMenu.DropdownMenuContent>
					</DropdownMenu.DropdownMenu>
				</Flex>
			</Stack>
		</Stack>
	),
};
