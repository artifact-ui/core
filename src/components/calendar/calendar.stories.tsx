import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Calendar, type DateRange } from './calendar';

const meta: Meta<typeof Calendar> = {
	title: 'Forms/Calendar',
	component: Calendar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Single: Story = {
	render: () => {
		const [selected, setSelected] = useState<Date | undefined>(new Date(2026, 5, 6));
		return <Calendar mode="single" selected={selected} onSelect={setSelected} />;
	},
};

export const Range: Story = {
	render: () => {
		const [range, setRange] = useState<DateRange | undefined>({
			from: new Date(2026, 5, 6),
			to: new Date(2026, 5, 12),
		});
		return (
			<Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} />
		);
	},
};

export const DisabledDays: Story = {
	render: () => {
		const [selected, setSelected] = useState<Date | undefined>();
		return (
			<Calendar
				mode="single"
				selected={selected}
				onSelect={setSelected}
				disabled={{ before: new Date() }}
			/>
		);
	},
};
