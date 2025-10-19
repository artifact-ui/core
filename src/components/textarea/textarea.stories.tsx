import type { Meta, StoryObj } from '@storybook/react';
import * as TextArea from './textarea';
import { Form } from 'radix-ui';

const meta: Meta<typeof TextArea.Input> = {
	title: 'Forms/TextArea',
	component: TextArea.Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		error: {
			control: 'boolean',
			description: 'Error state',
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
		},
		label: {
			control: 'text',
			description: 'Label text',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text',
		},
		message: {
			control: 'text',
			description: 'Helper or error message',
		},
		rows: {
			control: 'number',
			description: 'Number of visible text rows',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'description',
		placeholder: 'Enter specimen observations...',
	},
	render: (args) => (
		<Form.Root>
			<TextArea.Input {...args} />
		</Form.Root>
	),
};

export const WithLabel: Story = {
	args: {
		name: 'notes',
		label: 'Research Notes',
		placeholder: 'Document findings and analysis...',
	},
	render: (args) => (
		<Form.Root>
			<TextArea.Input {...args} />
		</Form.Root>
	),
};

export const ErrorState: Story = {
	args: {
		name: 'provenance',
		label: 'Provenance Information',
		placeholder: 'Enter artifact origin details...',
		error: true,
		message: 'Provenance information is required',
	},
	render: (args) => (
		<Form.Root>
			<TextArea.Input {...args} />
		</Form.Root>
	),
};

export const Disabled: Story = {
	args: {
		name: 'archived-notes',
		label: 'Archived Documentation',
		placeholder: 'Field is locked',
		disabled: true,
		value: 'This specimen has been archived and documentation is locked for preservation.',
	},
	render: (args) => (
		<Form.Root>
			<TextArea.Input {...args} />
		</Form.Root>
	),
};

export const Standalone: Story = {
	args: {
		placeholder: 'Enter catalog notes...',
		rows: 4,
	},
	render: (args) => <TextArea.Standalone {...args} />,
};
