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
	argTypes: {
		size: {
			control: 'select',
			options: ['1', '2', '3'],
			description: 'Trigger size',
		},
		radius: {
			control: 'select',
			options: ['none', '1', '2', '3', 'full'],
			description: 'Corner radius (overrides the theme radius)',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder shown when no date is selected',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
		shadow: {
			control: 'select',
			options: ['classic', 'spread', 'paper'],
			description: 'Popover drop shadow style',
		},
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: {
		size: '2',
		placeholder: 'Select date',
		disabled: false,
		shadow: 'spread',
	},
	render: (args) => {
		const [date, setDate] = useState<Date | undefined>();
		return <DatePicker {...args} selected={date} onSelect={setDate} />;
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
