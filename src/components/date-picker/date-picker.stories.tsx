import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DatePicker } from './date-picker';
import { type DateRange } from '../calendar/calendar';

const meta: Meta<typeof DatePicker> = {
	title: 'Forms/DatePicker',
	component: DatePicker,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const Single: Story = {
	render: () => {
		const [date, setDate] = useState<Date | undefined>();
		return <DatePicker selected={date} onSelect={setDate} />;
	},
};

export const Range: Story = {
	render: () => {
		const [range, setRange] = useState<DateRange | undefined>();
		return (
			<DatePicker
				mode="range"
				selected={range}
				onSelect={setRange}
				placeholder="Select date range"
			/>
		);
	},
};

export const Sizes: Story = {
	render: () => {
		const [date, setDate] = useState<Date | undefined>();
		return (
			<div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
				{(['1', '2', '3'] as const).map((size) => (
					<DatePicker key={size} size={size} selected={date} onSelect={setDate} />
				))}
			</div>
		);
	},
};

export const Disabled: Story = {
	render: () => <DatePicker disabled placeholder="Unavailable" />,
};

export const WithError: Story = {
	render: () => {
		const [date, setDate] = useState<Date | undefined>();
		return (
			<DatePicker
				selected={date}
				onSelect={setDate}
				error
				message="Please choose a date"
			/>
		);
	},
};
