import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';

const meta: Meta<typeof Slider> = {
	title: 'Components/Slider',
	component: Slider,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof Slider>;

const DefaultTemplate = () => {
	const [value, setValue] = useState([50]);
	return (
		<div style={{ width: '300px' }}>
			<Slider value={value} onValueChange={setValue} min={0} max={100} />
		</div>
	);
};

export const Default: Story = {
	render: () => <DefaultTemplate />,
};

const SizesTemplate = () => {
	const [value1, setValue1] = useState([30]);
	const [value2, setValue2] = useState([50]);
	const [value3, setValue3] = useState([70]);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '24px',
				width: '300px',
			}}>
			<Slider size="1" value={value1} onValueChange={setValue1} min={0} max={100} />
			<Slider size="2" value={value2} onValueChange={setValue2} min={0} max={100} />
			<Slider size="3" value={value3} onValueChange={setValue3} min={0} max={100} />
		</div>
	);
};

export const Sizes: Story = {
	render: () => <SizesTemplate />,
};

const DisabledTemplate = () => {
	return (
		<div style={{ width: '300px' }}>
			<Slider disabled value={[50]} min={0} max={100} />
		</div>
	);
};

export const Disabled: Story = {
	render: () => <DisabledTemplate />,
};
