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
	argTypes: {
		numberOfMonths: {
			control: { type: 'number', min: 1, max: 3 },
			description: 'Number of months to display',
		},
		showOutsideDays: {
			control: 'boolean',
			description: 'Show days from the previous and next month',
		},
		captionLayout: {
			control: 'select',
			options: ['label', 'dropdown', 'dropdown-months', 'dropdown-years'],
			description: 'Caption and navigation style',
		},
		disableNavigation: {
			control: 'boolean',
			description: 'Disable month navigation',
		},
		shadow: {
			control: 'select',
			options: ['classic', 'spread', 'paper'],
			description: 'Drop shadow style',
		},
	},
};

export default meta;
type Story = StoryObj;

const showcaseDate = new Date(2026, 5, 15);

export const Default: Story = {
	args: {
		numberOfMonths: 1,
		showOutsideDays: true,
		captionLayout: 'label',
		disableNavigation: false,
	},
	render: (args) => {
		const [selected, setSelected] = useState<Date | undefined>(showcaseDate);
		return (
			<Calendar {...args} mode="single" selected={selected} onSelect={setSelected} />
		);
	},
};

export const Range: Story = {
	render: () => {
		const [range, setRange] = useState<DateRange | undefined>();
		return (
			<Calendar mode="range" selected={range} onSelect={setRange} numberOfMonths={2} />
		);
	},
};
