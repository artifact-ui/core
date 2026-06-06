import { describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { Calendar } from './calendar';

const june2026 = new Date(2026, 5, 1);

describe('Calendar', () => {
	it('renders the calendar grid and navigation', () => {
		renderComponent(<Calendar mode="single" defaultMonth={june2026} />);

		expect(screen.getByRole('grid')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /previous month/i })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /next month/i })).toBeInTheDocument();
	});

	it('calls onSelect with the chosen date', async () => {
		const onSelect = vi.fn();
		const { user } = renderComponent(
			<Calendar mode="single" defaultMonth={june2026} onSelect={onSelect} />,
		);

		await user.click(screen.getByText('15'));

		expect(onSelect).toHaveBeenCalledTimes(1);
		const [selected] = onSelect.mock.calls[0];
		expect(selected.getDate()).toBe(15);
	});

	it('navigates to the next month', async () => {
		const { user } = renderComponent(<Calendar mode="single" defaultMonth={june2026} />);

		expect(screen.getByText(/june 2026/i)).toBeInTheDocument();

		await user.click(screen.getByRole('button', { name: /next month/i }));

		expect(screen.getByText(/july 2026/i)).toBeInTheDocument();
	});
});
