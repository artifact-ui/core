import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Switch } from './switch';

describe('Switch', () => {
	describe('Click Handling', () => {
		it('calls onCheckedChange when clicked', async () => {
			const handleChange = vi.fn();
			const { user } = renderComponent(
				<Switch onCheckedChange={handleChange} aria-label="Enable notifications" />,
			);

			await user.click(screen.getByRole('switch'));

			expect(handleChange).toHaveBeenCalledTimes(1);
			expect(handleChange).toHaveBeenCalledWith(true);
		});

		it('does not call onCheckedChange when disabled', async () => {
			const handleChange = vi.fn();
			const { user } = renderComponent(
				<Switch onCheckedChange={handleChange} disabled aria-label="Enable dark mode" />,
			);

			await user.click(screen.getByRole('switch'));

			expect(handleChange).not.toHaveBeenCalled();
		});
	});

	describe('Keyboard Accessibility', () => {
		it('calls onCheckedChange when Space key is pressed', async () => {
			const handleChange = vi.fn();
			const { user } = renderComponent(
				<Switch onCheckedChange={handleChange} aria-label="Auto-save documents" />,
			);

			const switchElement = screen.getByRole('switch');
			switchElement.focus();
			await user.keyboard(' ');

			expect(handleChange).toHaveBeenCalledTimes(1);
			expect(handleChange).toHaveBeenCalledWith(true);
		});

		it('does not trigger onCheckedChange with Space when disabled', async () => {
			const handleChange = vi.fn();
			const { user } = renderComponent(
				<Switch
					onCheckedChange={handleChange}
					disabled
					aria-label="Email notifications"
				/>,
			);

			const switchElement = screen.getByRole('switch');
			switchElement.focus();
			await user.keyboard(' ');

			expect(handleChange).not.toHaveBeenCalled();
		});
	});

	describe('Accessibility', () => {
		it('has accessible name from aria-label', () => {
			renderComponent(<Switch aria-label="Enable marketing emails" />);

			const switchElement = screen.getByRole('switch');

			expect(switchElement).toHaveAccessibleName('Enable marketing emails');
		});
	});

	describe('Sizes', () => {
		it('renders with size 1', () => {
			renderComponent(<Switch size="1" aria-label="Small switch" />);

			expect(screen.getByRole('switch')).toBeInTheDocument();
		});

		it('renders with size 2', () => {
			renderComponent(<Switch size="2" aria-label="Medium switch" />);

			expect(screen.getByRole('switch')).toBeInTheDocument();
		});
	});
});
