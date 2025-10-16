import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuLabel,
} from './dropdown-menu';
import { Button } from '../button/button';

describe('DropdownMenu', () => {
	describe('Opening and Closing', () => {
		it('opens menu when trigger is clicked', async () => {
			const { user } = renderComponent(
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button>Account Settings</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>View Profile</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>,
			);

			await user.click(screen.getByRole('button', { name: /account settings/i }));

			expect(screen.getByRole('menuitem', { name: /view profile/i })).toBeInTheDocument();
		});

		it('closes menu when Escape key is pressed', async () => {
			const { user } = renderComponent(
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button>Actions</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem>Edit Document</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>,
			);

			await user.click(screen.getByRole('button', { name: /actions/i }));
			await user.keyboard('{Escape}');

			expect(
				screen.queryByRole('menuitem', { name: /edit document/i }),
			).not.toBeInTheDocument();
		});
	});

	describe('Menu Item Selection', () => {
		it('calls onSelect when menu item is clicked', async () => {
			const handleSelect = vi.fn();
			const { user } = renderComponent(
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button>Options</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onSelect={handleSelect}>Export to PDF</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>,
			);

			await user.click(screen.getByRole('button', { name: /options/i }));
			await user.click(screen.getByRole('menuitem', { name: /export to pdf/i }));

			expect(handleSelect).toHaveBeenCalledTimes(1);
		});

		it('calls onSelect when menu item is activated with Enter key', async () => {
			const handleSelect = vi.fn();
			const { user } = renderComponent(
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button>File Menu</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuItem onSelect={handleSelect}>Save Changes</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>,
			);

			await user.click(screen.getByRole('button', { name: /file menu/i }));
			const menuItem = screen.getByRole('menuitem', { name: /save changes/i });
			menuItem.focus();
			await user.keyboard('{Enter}');

			expect(handleSelect).toHaveBeenCalledTimes(1);
		});
	});

	describe('Compound Structure', () => {
		it('renders menu with Label, Items, and Separator', async () => {
			const { user } = renderComponent(
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button>Team Menu</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuLabel>Sales Team</DropdownMenuLabel>
						<DropdownMenuItem>Jim Halpert</DropdownMenuItem>
						<DropdownMenuItem>Dwight Schrute</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Add Member</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>,
			);

			await user.click(screen.getByRole('button', { name: /team menu/i }));

			expect(screen.getByText('Sales Team')).toBeInTheDocument();
			expect(screen.getByRole('menuitem', { name: /jim halpert/i })).toBeInTheDocument();
			expect(
				screen.getByRole('menuitem', { name: /dwight schrute/i }),
			).toBeInTheDocument();
			expect(screen.getByRole('menuitem', { name: /add member/i })).toBeInTheDocument();
		});
	});

	describe('Size Prop', () => {
		it('renders with different sizes', async () => {
			const { user } = renderComponent(
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button>Settings</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent size="1">
						<DropdownMenuItem>Preferences</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>,
			);

			await user.click(screen.getByRole('button', { name: /settings/i }));

			expect(screen.getByRole('menuitem', { name: /preferences/i })).toBeInTheDocument();
		});
	});

	describe('Compact Mode', () => {
		it('renders in compact mode', async () => {
			const { user } = renderComponent(
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button>Quick Actions</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent compact>
						<DropdownMenuItem>Print</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>,
			);

			await user.click(screen.getByRole('button', { name: /quick actions/i }));

			expect(screen.getByRole('menuitem', { name: /print/i })).toBeInTheDocument();
		});
	});
});
