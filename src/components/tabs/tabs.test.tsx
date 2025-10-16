import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Root as Tabs, List, Trigger, Content } from './tabs';

describe('Tabs', () => {
	describe('Rendering', () => {
		it('renders tabs with compound structure', () => {
			renderComponent(
				<Tabs defaultValue="sales">
					<List>
						<Trigger value="sales">Sales Report</Trigger>
						<Trigger value="hr">HR Documents</Trigger>
						<Trigger value="finance">Finance Summary</Trigger>
					</List>
					<Content value="sales">Q4 Sales Performance</Content>
					<Content value="hr">Employee Handbook</Content>
					<Content value="finance">Budget Overview</Content>
				</Tabs>,
			);

			expect(screen.getByRole('tab', { name: /sales report/i })).toBeInTheDocument();
			expect(screen.getByRole('tab', { name: /hr documents/i })).toBeInTheDocument();
			expect(screen.getByRole('tab', { name: /finance summary/i })).toBeInTheDocument();
		});
	});

	describe('Tab Switching', () => {
		it('displays correct content when tab is clicked', async () => {
			const { user } = renderComponent(
				<Tabs defaultValue="overview">
					<List>
						<Trigger value="overview">Overview</Trigger>
						<Trigger value="details">Details</Trigger>
					</List>
					<Content value="overview">Department Overview</Content>
					<Content value="details">Department Details</Content>
				</Tabs>,
			);

			expect(screen.getByText('Department Overview')).toBeInTheDocument();
			expect(screen.queryByText('Department Details')).not.toBeInTheDocument();

			await user.click(screen.getByRole('tab', { name: /details/i }));

			expect(screen.getByText('Department Details')).toBeInTheDocument();
			expect(screen.queryByText('Department Overview')).not.toBeInTheDocument();
		});
	});

	describe('Keyboard Navigation', () => {
		it('navigates tabs with arrow keys', async () => {
			const { user } = renderComponent(
				<Tabs defaultValue="tab1">
					<List>
						<Trigger value="tab1">Scranton Branch</Trigger>
						<Trigger value="tab2">Stamford Branch</Trigger>
					</List>
					<Content value="tab1">Scranton Office</Content>
					<Content value="tab2">Stamford Office</Content>
				</Tabs>,
			);

			const firstTab = screen.getByRole('tab', { name: /scranton branch/i });
			const secondTab = screen.getByRole('tab', { name: /stamford branch/i });

			firstTab.focus();

			await user.keyboard('{ArrowRight}');

			expect(secondTab).toHaveFocus();
		});
	});

	describe('Accessibility', () => {
		it('has accessible name from aria-label', () => {
			renderComponent(
				<Tabs defaultValue="settings">
					<List aria-label="Account navigation">
						<Trigger value="settings">Settings</Trigger>
					</List>
					<Content value="settings">Settings Panel</Content>
				</Tabs>,
			);

			expect(screen.getByRole('tablist')).toHaveAccessibleName('Account navigation');
		});
	});

	describe('Sizes', () => {
		it('renders with size 1', () => {
			renderComponent(
				<Tabs defaultValue="accounting">
					<List size="1">
						<Trigger value="accounting">Accounting</Trigger>
					</List>
					<Content value="accounting">Quarterly Reports</Content>
				</Tabs>,
			);

			expect(screen.getByRole('tab', { name: /accounting/i })).toBeInTheDocument();
		});

		it('renders with size 3', () => {
			renderComponent(
				<Tabs defaultValue="executive">
					<List size="3">
						<Trigger value="executive">Executive Team</Trigger>
					</List>
					<Content value="executive">Leadership Directory</Content>
				</Tabs>,
			);

			expect(screen.getByRole('tab', { name: /executive team/i })).toBeInTheDocument();
		});
	});

	describe('Colors', () => {
		it('renders with different colors', () => {
			renderComponent(
				<Tabs defaultValue="performance">
					<List>
						<Trigger value="performance" color="success">
							Performance Review
						</Trigger>
						<Trigger value="warnings" color="danger">
							HR Warnings
						</Trigger>
					</List>
					<Content value="performance">Exceeds Expectations</Content>
					<Content value="warnings">Disciplinary Actions</Content>
				</Tabs>,
			);

			expect(
				screen.getByRole('tab', { name: /performance review/i }),
			).toBeInTheDocument();
			expect(screen.getByRole('tab', { name: /hr warnings/i })).toBeInTheDocument();
		});
	});
});
