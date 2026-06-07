import type { Meta, StoryObj } from '@storybook/react';
import * as RadioGroup from './radio-group';

const meta: Meta<typeof RadioGroup.Root> = {
	title: 'Forms/RadioGroup',
	component: RadioGroup.Root,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		orientation: {
			control: 'inline-radio',
			options: ['vertical', 'horizontal'],
			description: 'Layout direction',
		},
		size: {
			control: 'inline-radio',
			options: ['1', '2'],
			description: 'Radio size',
		},
	},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
	args: {
		orientation: 'vertical',
		size: '2',
	},
	render: (args) => (
		<RadioGroup.Root defaultValue="general" {...args}>
			<RadioGroup.Item value="general">General Admission</RadioGroup.Item>
			<RadioGroup.Item value="member">Member</RadioGroup.Item>
			<RadioGroup.Item value="student">Student</RadioGroup.Item>
			<RadioGroup.Item value="senior">Senior</RadioGroup.Item>
		</RadioGroup.Root>
	),
};

export const WithDisabledOption: Story = {
	render: () => (
		<RadioGroup.Root defaultValue="pottery">
			<RadioGroup.Item value="pottery">Pottery</RadioGroup.Item>
			<RadioGroup.Item value="textiles">Textiles</RadioGroup.Item>
			<RadioGroup.Item value="manuscripts" disabled>
				Manuscripts (closed)
			</RadioGroup.Item>
		</RadioGroup.Root>
	),
};

export const WithError: Story = {
	render: () => (
		<RadioGroup.Root error message="Please choose a ticket type">
			<RadioGroup.Item value="general">General Admission</RadioGroup.Item>
			<RadioGroup.Item value="member">Member</RadioGroup.Item>
		</RadioGroup.Root>
	),
};
