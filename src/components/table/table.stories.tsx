import type { Meta, StoryObj } from '@storybook/react';
import * as Table from './table';

const meta: Meta<typeof Table.Root> = {
	title: 'Artifact/Table',
	component: Table.Root,
	parameters: {
		layout: 'padded',
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'surface', 'ghost'],
		},
		size: {
			control: 'select',
			options: ['1', '2', '3'],
		},
		compact: {
			control: 'boolean',
		},
		striped: {
			control: 'boolean',
		},
		radius: {
			control: 'select',
			options: ['none', '1', '2', '3'],
		},
		shadow: {
			control: 'select',
			options: [false, true, 'classic', 'spread', 'paper'],
		},
		highlight: {
			control: 'boolean',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Table.Root>;

export const Default: Story = {
	args: {
		variant: 'default',
		size: '2',
	},
	render: (args) => (
		<Table.Root {...args}>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Item Name</Table.HeaderCell>
					<Table.HeaderCell>Description</Table.HeaderCell>
					<Table.HeaderCell justify="center">Quantity</Table.HeaderCell>
					<Table.HeaderCell justify="center">Weight</Table.HeaderCell>
					<Table.HeaderCell justify="end">Price</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>Ultralight Tent</Table.Cell>
					<Table.Cell>3-season backpacking tent</Table.Cell>
					<Table.Cell textAlign="center">1</Table.Cell>
					<Table.Cell textAlign="center">2.1 lbs</Table.Cell>
					<Table.Cell textAlign="end">$299.99</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Sleeping Bag</Table.Cell>
					<Table.Cell>Down insulation, 20°F rating</Table.Cell>
					<Table.Cell textAlign="center">1</Table.Cell>
					<Table.Cell textAlign="center">1.8 lbs</Table.Cell>
					<Table.Cell textAlign="end">$399.99</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Water Filter</Table.Cell>
					<Table.Cell>Portable filtration system</Table.Cell>
					<Table.Cell textAlign="center">1</Table.Cell>
					<Table.Cell textAlign="center">0.4 lbs</Table.Cell>
					<Table.Cell textAlign="end">$49.99</Table.Cell>
				</Table.Row>
			</Table.Body>
			<Table.Footer>
				<Table.Row>
					<Table.Cell>Total</Table.Cell>
					<Table.Cell></Table.Cell>
					<Table.Cell textAlign="center">3</Table.Cell>
					<Table.Cell textAlign="center">4.3 lbs</Table.Cell>
					<Table.Cell textAlign="end">$749.97</Table.Cell>
				</Table.Row>
			</Table.Footer>
		</Table.Root>
	),
};

export const Surface: Story = {
	args: {
		variant: 'surface',
		size: '2',
	},
	render: (args) => (
		<Table.Root {...args}>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Item Name</Table.HeaderCell>
					<Table.HeaderCell>Description</Table.HeaderCell>
					<Table.HeaderCell justify="center">Quantity</Table.HeaderCell>
					<Table.HeaderCell justify="center">Weight</Table.HeaderCell>
					<Table.HeaderCell justify="end">Price</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>Ultralight Tent</Table.Cell>
					<Table.Cell>3-season backpacking tent</Table.Cell>
					<Table.Cell textAlign="center">1</Table.Cell>
					<Table.Cell textAlign="center">2.1 lbs</Table.Cell>
					<Table.Cell textAlign="end">$299.99</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Sleeping Bag</Table.Cell>
					<Table.Cell>Down insulation, 20°F rating</Table.Cell>
					<Table.Cell textAlign="center">1</Table.Cell>
					<Table.Cell textAlign="center">1.8 lbs</Table.Cell>
					<Table.Cell textAlign="end">$399.99</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	),
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		size: '2',
	},
	render: (args) => (
		<Table.Root {...args}>
			<Table.Header>
				<Table.Row>
					<Table.HeaderCell>Item Name</Table.HeaderCell>
					<Table.HeaderCell>Description</Table.HeaderCell>
					<Table.HeaderCell justify="center">Quantity</Table.HeaderCell>
					<Table.HeaderCell justify="center">Weight</Table.HeaderCell>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>Ultralight Tent</Table.Cell>
					<Table.Cell>3-season backpacking tent</Table.Cell>
					<Table.Cell textAlign="center">1</Table.Cell>
					<Table.Cell textAlign="center">2.1 lbs</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>Sleeping Bag</Table.Cell>
					<Table.Cell>Down insulation, 20°F rating</Table.Cell>
					<Table.Cell textAlign="center">1</Table.Cell>
					<Table.Cell textAlign="center">1.8 lbs</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	),
};
