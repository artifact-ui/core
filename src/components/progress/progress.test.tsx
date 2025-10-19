import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Progress } from './progress';

describe('Progress', () => {
	it('renders progress bar with value', () => {
		renderComponent(<Progress value={60} />);
		const progressBar = screen.getByRole('progressbar');
		expect(progressBar).toBeInTheDocument();
		expect(progressBar).toHaveAttribute('aria-valuenow', '60');
	});

	it('renders spinner when no value provided', () => {
		renderComponent(<Progress />);
		const spinner = screen.getByRole('progressbar', { name: /loading/i });
		expect(spinner).toBeInTheDocument();
	});

	it('calculates percentage correctly', () => {
		renderComponent(<Progress value={50} max={100} />);
		const progressBar = screen.getByRole('progressbar');
		expect(progressBar).toHaveAttribute('aria-valuenow', '50');
	});

	it('handles custom max value', () => {
		renderComponent(<Progress value={25} max={50} />);
		const progressBar = screen.getByRole('progressbar');
		expect(progressBar).toHaveAttribute('aria-valuenow', '50');
	});

	it('clamps value to 0-100%', () => {
		const { rerender } = renderComponent(<Progress value={150} max={100} />);
		let progressBar = screen.getByRole('progressbar');
		expect(progressBar).toHaveAttribute('aria-valuenow', '100');

		rerender(<Progress value={-10} max={100} />);
		progressBar = screen.getByRole('progressbar');
		expect(progressBar).toHaveAttribute('aria-valuenow', '0');
	});

	it('renders with size variant', () => {
		renderComponent(<Progress value={50} size="3" />);
		const progressBar = screen.getByRole('progressbar');
		expect(progressBar).toBeInTheDocument();
	});

	it('renders spinner with different sizes', () => {
		renderComponent(<Progress size="1" />);
		const spinner = screen.getByRole('progressbar', { name: /loading/i });
		expect(spinner).toBeInTheDocument();
	});
});
