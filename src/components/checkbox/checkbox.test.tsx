import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
	describe('Click Handling', () => {
		it('calls onCheckedChange when clicked', async () => {
			const handleChange = vi.fn();
			const { user } = renderComponent(
				<Checkbox
					onCheckedChange={handleChange}
					aria-label="Accept terms and conditions"
				/>,
			);

			await user.click(screen.getByRole('checkbox'));

			expect(handleChange).toHaveBeenCalledTimes(1);
			expect(handleChange).toHaveBeenCalledWith(true);
		});

		it('does not call onCheckedChange when disabled', async () => {
			const handleChange = vi.fn();
			const { user } = renderComponent(
				<Checkbox
					onCheckedChange={handleChange}
					disabled
					aria-label="Confirm expense approval"
				/>,
			);

			await user.click(screen.getByRole('checkbox'));

			expect(handleChange).not.toHaveBeenCalled();
		});
	});

	describe('Keyboard Accessibility', () => {
		it('calls onCheckedChange when Space key is pressed', async () => {
			const handleChange = vi.fn();
			const { user } = renderComponent(
				<Checkbox onCheckedChange={handleChange} aria-label="Subscribe to newsletter" />,
			);

			const checkbox = screen.getByRole('checkbox');
			checkbox.focus();
			await user.keyboard(' ');

			expect(handleChange).toHaveBeenCalledTimes(1);
			expect(handleChange).toHaveBeenCalledWith(true);
		});

		it('does not trigger onCheckedChange with Space when disabled', async () => {
			const handleChange = vi.fn();
			const { user } = renderComponent(
				<Checkbox
					onCheckedChange={handleChange}
					disabled
					aria-label="Enable notifications"
				/>,
			);

			const checkbox = screen.getByRole('checkbox');
			checkbox.focus();
			await user.keyboard(' ');

			expect(handleChange).not.toHaveBeenCalled();
		});
	});

	describe('Accessibility', () => {
		it('has accessible name from aria-label', () => {
			renderComponent(<Checkbox aria-label="Agree to privacy policy" />);

			const checkbox = screen.getByRole('checkbox');

			expect(checkbox).toHaveAccessibleName('Agree to privacy policy');
		});
	});

	describe('Sizes', () => {
		it('renders with size 1', () => {
			renderComponent(<Checkbox size="1" aria-label="Small checkbox" />);

			expect(screen.getByRole('checkbox')).toBeInTheDocument();
		});

		it('renders with size 2', () => {
			renderComponent(<Checkbox size="2" aria-label="Large checkbox" />);

			expect(screen.getByRole('checkbox')).toBeInTheDocument();
		});
	});
});
