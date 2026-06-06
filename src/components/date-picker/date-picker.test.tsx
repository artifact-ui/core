import { describe, it, expect } from 'vitest';
import { useState } from 'react';
import { screen } from '@testing-library/react';
import { renderComponent } from '@/tests/test-utils';
import { DatePicker } from './date-picker';
import { type DateRange } from '../calendar/calendar';

const june2026 = new Date(2026, 5, 1);

const SingleWrapper = () => {
	const [date, setDate] = useState<Date | undefined>();
	return <DatePicker selected={date} onSelect={setDate} defaultMonth={june2026} />;
};

const RangeWrapper = () => {
	const [range, setRange] = useState<DateRange | undefined>();
	return (
		<DatePicker
			mode="range"
			selected={range}
			onSelect={setRange}
			defaultMonth={june2026}
			numberOfMonths={1}
		/>
	);
};

describe('DatePicker', () => {
	it('renders the trigger with placeholder text', () => {
		renderComponent(<DatePicker placeholder="Pick a date" />);

		expect(screen.getByRole('button', { name: /pick a date/i })).toBeInTheDocument();
	});

	it('opens the calendar when the trigger is clicked', async () => {
		const { user } = renderComponent(<DatePicker defaultMonth={june2026} />);

		expect(screen.queryByRole('grid')).not.toBeInTheDocument();

		await user.click(screen.getByRole('button', { name: /select date/i }));

		expect(screen.getByRole('grid')).toBeInTheDocument();
	});

	it('calls onSelect and updates the trigger label when a day is chosen', async () => {
		const { user } = renderComponent(<SingleWrapper />);

		await user.click(screen.getByRole('button', { name: /select date/i }));
		await user.click(screen.getByText('15'));

		expect(screen.getByRole('button', { name: /jun 15, 2026/i })).toBeInTheDocument();
	});

	it('keeps the calendar open after the first click in range mode', async () => {
		const { user } = renderComponent(<RangeWrapper />);

		await user.click(screen.getByRole('button', { name: /select date/i }));
		await user.click(screen.getByText('10'));

		expect(screen.getByRole('grid')).toBeInTheDocument();
	});

	it('does not open when disabled', () => {
		renderComponent(<DatePicker disabled defaultMonth={june2026} />);

		expect(screen.getByRole('button', { name: /select date/i })).toBeDisabled();
		expect(screen.queryByRole('grid')).not.toBeInTheDocument();
	});

	it('renders an error message', () => {
		renderComponent(<DatePicker error message="Please choose a date" />);

		expect(screen.getByText('Please choose a date')).toBeInTheDocument();
	});
});
