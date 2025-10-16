import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Alert } from './alert';
import { CheckIcon, UserIcon } from '@/icons';

describe('Alert', () => {
	describe('Accessibility', () => {
		it('has role="alert" for screen readers', () => {
			renderComponent(<Alert>Policy update: New vacation approval process</Alert>);

			const alert = screen.getByRole('alert');

			expect(alert).toBeInTheDocument();
		});

		it('has aria-live="polite" for announcements', () => {
			renderComponent(<Alert>Toby from HR sent you a message</Alert>);

			const alert = screen.getByRole('alert');

			expect(alert).toHaveAttribute('aria-live', 'polite');
		});

		it('renders accessible content', () => {
			renderComponent(<Alert>Quarterly sales report submitted to corporate</Alert>);

			expect(
				screen.getByText('Quarterly sales report submitted to corporate'),
			).toBeInTheDocument();
		});
	});

	describe('Default Icons', () => {
		it('renders CheckIcon for success variant', () => {
			const { container } = renderComponent(
				<Alert variant="success">Client profile updated successfully</Alert>,
			);

			const icon = container.querySelector('svg');

			expect(icon).toBeInTheDocument();
		});

		it('renders CircleAlertIcon for error variant', () => {
			const { container } = renderComponent(
				<Alert variant="error">Failed to connect to Scranton branch database</Alert>,
			);

			const icon = container.querySelector('svg');

			expect(icon).toBeInTheDocument();
		});
	});

	describe('Custom Icons', () => {
		it('allows custom left icon to override default', () => {
			renderComponent(
				<Alert variant="success" iconLeft={<UserIcon data-testid="custom-icon" />}>
					Michael Scott assigned to your team
				</Alert>,
			);

			expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
		});

		it('renders right icon when provided', () => {
			renderComponent(
				<Alert iconRight={<CheckIcon data-testid="right-icon" />}>
					Inventory count completed
				</Alert>,
			);

			expect(screen.getByTestId('right-icon')).toBeInTheDocument();
		});

		it('renders both left and right icons', () => {
			renderComponent(
				<Alert
					iconLeft={<UserIcon data-testid="left-icon" />}
					iconRight={<CheckIcon data-testid="right-icon" />}>
					Performance review finalized
				</Alert>,
			);

			expect(screen.getByTestId('left-icon')).toBeInTheDocument();
			expect(screen.getByTestId('right-icon')).toBeInTheDocument();
		});
	});

	describe('Content Rendering', () => {
		it('renders text content', () => {
			renderComponent(<Alert>Conference call scheduled with Jan at 2pm</Alert>);

			expect(
				screen.getByText('Conference call scheduled with Jan at 2pm'),
			).toBeInTheDocument();
		});

		it('renders complex children', () => {
			renderComponent(
				<Alert>
					<strong>Important:</strong> Branch closes early Friday for inventory
				</Alert>,
			);

			expect(screen.getByText('Important:')).toBeInTheDocument();
			expect(
				screen.getByText('Branch closes early Friday for inventory'),
			).toBeInTheDocument();
		});
	});

	describe('Variants', () => {
		it('renders default variant', () => {
			renderComponent(<Alert variant="default">New memo from regional manager</Alert>);

			const alert = screen.getByRole('alert');

			expect(alert).toBeInTheDocument();
		});

		it('renders success variant', () => {
			renderComponent(<Alert variant="success">Data sync completed</Alert>);

			const alert = screen.getByRole('alert');

			expect(alert).toBeInTheDocument();
		});

		it('renders error variant', () => {
			renderComponent(<Alert variant="error">Unable to access employee records</Alert>);

			const alert = screen.getByRole('alert');

			expect(alert).toBeInTheDocument();
		});
	});
});
