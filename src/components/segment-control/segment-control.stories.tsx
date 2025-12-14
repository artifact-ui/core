import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SegmentControl } from './segment-control';

const meta: Meta<typeof SegmentControl> = {
	title: 'Components/SegmentControl',
	component: SegmentControl,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof SegmentControl>;

const DefaultTemplate = () => {
	const [value, setValue] = useState('week');

	return (
		<SegmentControl
			options={[
				{ value: 'day', label: 'Day' },
				{ value: 'week', label: 'Week' },
				{ value: 'month', label: 'Month' },
			]}
			value={value}
			onChange={setValue}
		/>
	);
};

export const Default: Story = {
	render: () => <DefaultTemplate />,
};

const RaisedTemplate = () => {
	const [value, setValue] = useState('week');

	return (
		<SegmentControl
			variant="raised"
			options={[
				{ value: 'day', label: 'Day' },
				{ value: 'week', label: 'Week' },
				{ value: 'month', label: 'Month' },
			]}
			value={value}
			onChange={setValue}
		/>
	);
};

export const Raised: Story = {
	render: () => <RaisedTemplate />,
};

const SizesTemplate = () => {
	const [value1, setValue1] = useState('week');
	const [value2, setValue2] = useState('week');
	const [value3, setValue3] = useState('week');

	const options = [
		{ value: 'day', label: 'Day' },
		{ value: 'week', label: 'Week' },
		{ value: 'month', label: 'Month' },
	];

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '16px',
				alignItems: 'flex-start',
			}}>
			<SegmentControl size="1" options={options} value={value1} onChange={setValue1} />
			<SegmentControl size="2" options={options} value={value2} onChange={setValue2} />
			<SegmentControl size="3" options={options} value={value3} onChange={setValue3} />
		</div>
	);
};

export const Sizes: Story = {
	render: () => <SizesTemplate />,
};
