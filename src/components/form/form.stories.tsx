import type { Meta, StoryObj } from '@storybook/react';
import { Form as RadixForm } from 'radix-ui';
import * as Form from './form';
import * as TextField from '../textfield/textfield';
import { Stack } from '../layout/stack';

const meta = {
	title: 'Forms/Form',
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					"Form primitives for building custom form layouts. Use these when composing forms with components that don't have built-in form structure (like TextField.Standalone), or when you need manual control over form field layout.",
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story:
					'Form.Field, Form.Label, and Form.Message are styled wrappers around Radix Form primitives. For convenience, TextField.Input already includes label and message handling built-in.',
			},
		},
	},
	render: () => (
		<RadixForm.Root style={{ width: '300px' }}>
			<Stack gap="4">
				<Form.Field name="artifactId">
					<Form.Label>Artifact ID</Form.Label>
					<TextField.Standalone placeholder="ART-2024-0001" />
				</Form.Field>

				<Form.Field name="catalogNumber">
					<Form.Label>Catalog Number</Form.Label>
					<TextField.Standalone placeholder="Enter catalog number" error />
					<Form.Message match="valueMissing">Catalog number is required</Form.Message>
				</Form.Field>
			</Stack>
		</RadixForm.Root>
	),
};
