import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Root as Popover, Trigger, Content } from './popover';
import { Button } from '../button/button';

describe('Popover', () => {
	describe('Opening and Closing', () => {
		it('displays popover when trigger is clicked', async () => {
			const { user } = renderComponent(
				<Popover>
					<Trigger asChild>
						<Button>Employee Info</Button>
					</Trigger>
					<Content>
						<div>Jim Halpert - Sales Representative</div>
					</Content>
				</Popover>,
			);

			await user.click(screen.getByRole('button', { name: /employee info/i }));

			expect(screen.getByText('Jim Halpert - Sales Representative')).toBeInTheDocument();
		});

		it('closes popover when Escape key is pressed', async () => {
			const { user } = renderComponent(
				<Popover>
					<Trigger asChild>
						<Button>View Details</Button>
					</Trigger>
					<Content>
						<div>Client information details</div>
					</Content>
				</Popover>,
			);

			await user.click(screen.getByRole('button', { name: /view details/i }));
			await user.keyboard('{Escape}');

			expect(screen.queryByText('Client information details')).not.toBeInTheDocument();
		});

		it('closes popover when clicking outside', async () => {
			const { user } = renderComponent(
				<div>
					<Popover>
						<Trigger asChild>
							<Button>Quick Actions</Button>
						</Trigger>
						<Content>
							<div>Available actions</div>
						</Content>
					</Popover>
					<div>Outside content</div>
				</div>,
			);

			await user.click(screen.getByRole('button', { name: /quick actions/i }));
			expect(screen.getByText('Available actions')).toBeInTheDocument();

			await user.click(screen.getByText('Outside content'));

			expect(screen.queryByText('Available actions')).not.toBeInTheDocument();
		});
	});

	describe('Content Rendering', () => {
		it('renders complex content', async () => {
			const { user } = renderComponent(
				<Popover>
					<Trigger asChild>
						<Button>Team Info</Button>
					</Trigger>
					<Content>
						<div>
							<h3>Sales Team</h3>
							<p>Scranton Branch</p>
						</div>
					</Content>
				</Popover>,
			);

			await user.click(screen.getByRole('button', { name: /team info/i }));

			expect(screen.getByText('Sales Team')).toBeInTheDocument();
			expect(screen.getByText('Scranton Branch')).toBeInTheDocument();
		});
	});

	describe('Radius Prop', () => {
		it('renders with different radius', async () => {
			const { user } = renderComponent(
				<Popover>
					<Trigger asChild>
						<Button>Options</Button>
					</Trigger>
					<Content radius="none">
						<div>Configuration settings</div>
					</Content>
				</Popover>,
			);

			await user.click(screen.getByRole('button', { name: /options/i }));

			expect(screen.getByText('Configuration settings')).toBeInTheDocument();
		});
	});
});
