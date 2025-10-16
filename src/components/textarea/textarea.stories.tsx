import type { Meta, StoryObj } from '@storybook/react';
import * as TextArea from './textarea';
import { Form } from 'radix-ui';

const meta: Meta<typeof TextArea.Input> = {
	title: 'Artifact/TextArea',
	component: TextArea.Input,
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'description',
		placeholder: 'Enter your message...',
	},
	render: (args) => (
		<Form.Root>
			<TextArea.Input {...args} />
		</Form.Root>
	),
};

export const WithLabel: Story = {
	args: {
		name: 'feedback',
		label: 'Feedback',
		placeholder: 'Please share your thoughts...',
	},
	render: (args) => (
		<Form.Root>
			<TextArea.Input {...args} />
		</Form.Root>
	),
};

export const ErrorState: Story = {
	args: {
		name: 'required-field',
		label: 'Required Field',
		placeholder: 'This field is required...',
		error: true,
		message: 'This field is required',
	},
	render: (args) => (
		<Form.Root>
			<TextArea.Input {...args} />
		</Form.Root>
	),
};

export const Disabled: Story = {
	args: {
		name: 'disabled-field',
		label: 'Disabled Field',
		placeholder: 'This field is disabled',
		disabled: true,
		value: 'This content cannot be edited',
	},
	render: (args) => (
		<Form.Root>
			<TextArea.Input {...args} />
		</Form.Root>
	),
};

export const Standalone: Story = {
	args: {
		placeholder: 'Standalone textarea...',
		rows: 4,
	},
	render: (args) => <TextArea.Standalone {...args} />,
};
