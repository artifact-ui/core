import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Button } from './button';
import { CheckIcon, ChevronRightIcon } from '@/icons';

describe('Button', () => {
	describe('Click Handling', () => {
		it('calls onClick when clicked', async () => {
			const handleClick = vi.fn();
			const { user } = renderComponent(
				<Button onClick={handleClick}>Submit Sales Report</Button>,
			);

			await user.click(screen.getByRole('button', { name: /submit sales report/i }));

			expect(handleClick).toHaveBeenCalledTimes(1);
		});

		it('does not call onClick when disabled', async () => {
			const handleClick = vi.fn();
			const { user } = renderComponent(
				<Button onClick={handleClick} disabled>
					Submit Sales Report
				</Button>,
			);

			await user.click(screen.getByRole('button', { name: /submit sales report/i }));

			expect(handleClick).not.toHaveBeenCalled();
		});

		it('does not call onClick when loading', async () => {
			const handleClick = vi.fn();
			const { user } = renderComponent(
				<Button onClick={handleClick} loading>
					Submit Sales Report
				</Button>,
			);

			await user.click(screen.getByRole('button', { name: /submit sales report/i }));

			expect(handleClick).not.toHaveBeenCalled();
		});
	});

	describe('Keyboard Accessibility', () => {
		it('calls onClick when Enter key is pressed', async () => {
			const handleClick = vi.fn();
			const { user } = renderComponent(
				<Button onClick={handleClick}>Email Client</Button>,
			);

			const button = screen.getByRole('button', { name: /email client/i });
			button.focus();
			await user.keyboard('{Enter}');

			expect(handleClick).toHaveBeenCalledTimes(1);
		});

		it('calls onClick when Space key is pressed', async () => {
			const handleClick = vi.fn();
			const { user } = renderComponent(
				<Button onClick={handleClick}>Email Client</Button>,
			);

			const button = screen.getByRole('button', { name: /email client/i });
			button.focus();
			await user.keyboard(' ');

			expect(handleClick).toHaveBeenCalledTimes(1);
		});

		it('does not trigger onClick with Enter when disabled', async () => {
			const handleClick = vi.fn();
			const { user } = renderComponent(
				<Button onClick={handleClick} disabled>
					Email Client
				</Button>,
			);

			const button = screen.getByRole('button', { name: /email client/i });
			button.focus();
			await user.keyboard('{Enter}');

			expect(handleClick).not.toHaveBeenCalled();
		});
	});

	describe('Accessibility', () => {
		it('has accessible name from text content', () => {
			renderComponent(<Button>Update Client Info</Button>);

			const button = screen.getByRole('button');

			expect(button).toHaveAccessibleName('Update Client Info');
		});

		it('has accessible name with icons', () => {
			renderComponent(
				<Button iconLeft={<CheckIcon />} iconRight={<ChevronRightIcon />}>
					Continue to Accounting
				</Button>,
			);

			const button = screen.getByRole('button');

			expect(button).toHaveAccessibleName('Continue to Accounting');
		});

		it('has aria-disabled attribute when disabled', () => {
			renderComponent(<Button disabled>Archive Branch Files</Button>);

			const button = screen.getByRole('button', { name: /archive branch files/i });

			expect(button).toHaveAttribute('aria-disabled', 'true');
			expect(button).toBeDisabled();
		});

		it('has aria-disabled attribute when loading', () => {
			renderComponent(<Button loading>Archive Branch Files</Button>);

			const button = screen.getByRole('button', { name: /archive branch files/i });

			expect(button).toHaveAttribute('aria-disabled', 'true');
			expect(button).toBeDisabled();
		});
	});

	describe('Loading State', () => {
		it('disables button and hides content when loading', () => {
			renderComponent(<Button loading>Save Contact</Button>);

			const button = screen.getByRole('button', { name: /save contact/i });

			expect(button).toBeDisabled();
			expect(button).toHaveAttribute('aria-disabled', 'true');
		});

		it('hides icons when loading', () => {
			renderComponent(
				<Button loading iconLeft={<CheckIcon data-testid="check-icon" />}>
					Save Contact
				</Button>,
			);

			expect(screen.queryByTestId('check-icon')).not.toBeInTheDocument();
		});
	});

	describe('Icons', () => {
		it('renders left icon', () => {
			renderComponent(
				<Button iconLeft={<CheckIcon data-testid="check-icon" />}>
					Approve Expense
				</Button>,
			);

			expect(screen.getByTestId('check-icon')).toBeInTheDocument();
		});

		it('renders right icon', () => {
			renderComponent(
				<Button iconRight={<ChevronRightIcon data-testid="chevron-icon" />}>
					Next Client
				</Button>,
			);

			expect(screen.getByTestId('chevron-icon')).toBeInTheDocument();
		});

		it('renders both left and right icons', () => {
			renderComponent(
				<Button
					iconLeft={<CheckIcon data-testid="check-icon" />}
					iconRight={<ChevronRightIcon data-testid="chevron-icon" />}>
					Proceed to Checkout
				</Button>,
			);

			expect(screen.getByTestId('check-icon')).toBeInTheDocument();
			expect(screen.getByTestId('chevron-icon')).toBeInTheDocument();
		});
	});
});
