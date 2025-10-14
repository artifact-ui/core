import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button';
import * as DropdownMenu from './dropdown-menu';
import {
	MenuIcon,
	EditPencilIcon,
	TrashIcon,
	ShareIcon,
	SettingsIcon,
	UserIcon,
	LogoutIcon,
	MoveIcon,
} from '@/components/icons';

const meta = {
	title: 'Alpine/DropdownMenu',
	component: DropdownMenu.DropdownMenu,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof DropdownMenu.DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<div className="flex flex-col gap-12 items-center">
			{/* Basic dropdown */}
			<div className="flex flex-col gap-2 items-center">
				<h3 className="text-sm font-semibold">Basic Menu</h3>
				<DropdownMenu.DropdownMenu>
					<DropdownMenu.DropdownMenuTrigger asChild>
						<Button variant="outline" size="1" iconLeft={<MenuIcon />}>
							Menu
						</Button>
					</DropdownMenu.DropdownMenuTrigger>
					<DropdownMenu.DropdownMenuContent>
						<DropdownMenu.DropdownMenuItem>
							<EditPencilIcon />
							Edit
						</DropdownMenu.DropdownMenuItem>
						<DropdownMenu.DropdownMenuItem>
							<ShareIcon />
							Share
						</DropdownMenu.DropdownMenuItem>
						<DropdownMenu.DropdownMenuSeparator />
						<DropdownMenu.DropdownMenuItem>
							<TrashIcon />
							Delete
						</DropdownMenu.DropdownMenuItem>
					</DropdownMenu.DropdownMenuContent>
				</DropdownMenu.DropdownMenu>
			</div>

			{/* With submenu */}
			<div className="flex flex-col gap-2 items-center">
				<h3 className="text-sm font-semibold">With Submenu</h3>
				<DropdownMenu.DropdownMenu>
					<DropdownMenu.DropdownMenuTrigger asChild>
						<Button variant="outline" size="1">
							Options
						</Button>
					</DropdownMenu.DropdownMenuTrigger>
					<DropdownMenu.DropdownMenuContent>
						<DropdownMenu.DropdownMenuItem>
							<EditPencilIcon />
							Edit
						</DropdownMenu.DropdownMenuItem>
						<DropdownMenu.DropdownMenuSub>
							<DropdownMenu.DropdownMenuSubTrigger>
								<MoveIcon />
								Move to...
							</DropdownMenu.DropdownMenuSubTrigger>
							<DropdownMenu.DropdownMenuSubContent>
								<DropdownMenu.DropdownMenuItem>Top</DropdownMenu.DropdownMenuItem>
								<DropdownMenu.DropdownMenuItem>Center</DropdownMenu.DropdownMenuItem>
								<DropdownMenu.DropdownMenuItem>Bottom</DropdownMenu.DropdownMenuItem>
							</DropdownMenu.DropdownMenuSubContent>
						</DropdownMenu.DropdownMenuSub>
						<DropdownMenu.DropdownMenuSeparator />
						<DropdownMenu.DropdownMenuItem>
							<TrashIcon />
							Delete
						</DropdownMenu.DropdownMenuItem>
					</DropdownMenu.DropdownMenuContent>
				</DropdownMenu.DropdownMenu>
			</div>

			{/* With labels and disabled items */}
			<div className="flex flex-col gap-2 items-center">
				<h3 className="text-sm font-semibold">With Labels & Disabled Items</h3>
				<DropdownMenu.DropdownMenu>
					<DropdownMenu.DropdownMenuTrigger asChild>
						<Button variant="outline" size="1">
							Account
						</Button>
					</DropdownMenu.DropdownMenuTrigger>
					<DropdownMenu.DropdownMenuContent>
						<DropdownMenu.DropdownMenuLabel>My Account</DropdownMenu.DropdownMenuLabel>
						<DropdownMenu.DropdownMenuSeparator />
						<DropdownMenu.DropdownMenuItem>
							<UserIcon />
							Profile
						</DropdownMenu.DropdownMenuItem>
						<DropdownMenu.DropdownMenuItem disabled>
							<SettingsIcon />
							Settings (Coming Soon)
						</DropdownMenu.DropdownMenuItem>
						<DropdownMenu.DropdownMenuSeparator />
						<DropdownMenu.DropdownMenuItem>
							<LogoutIcon />
							Logout
						</DropdownMenu.DropdownMenuItem>
					</DropdownMenu.DropdownMenuContent>
				</DropdownMenu.DropdownMenu>
			</div>

			{/* Size variations */}
			<div className="flex flex-col gap-2 items-center">
				<h3 className="text-sm font-semibold">Size Variations</h3>
				<div className="flex gap-4">
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
							<DropdownMenu.DropdownMenuItem>
								<EditPencilIcon />
								Edit Item
							</DropdownMenu.DropdownMenuItem>
							<DropdownMenu.DropdownMenuItem>
								<TrashIcon />
								Delete Item
							</DropdownMenu.DropdownMenuItem>
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
								<EditPencilIcon />
								Edit This Item
							</DropdownMenu.DropdownMenuItem>
							<DropdownMenu.DropdownMenuItem>
								<TrashIcon />
								Delete Permanently
							</DropdownMenu.DropdownMenuItem>
						</DropdownMenu.DropdownMenuContent>
					</DropdownMenu.DropdownMenu>
				</div>
			</div>
		</div>
	),
};
